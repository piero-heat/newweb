/* ────────────────────────────────────────────────────────────── */
/* Confetti — explosión de cotillón self-contained (sin deps).     */
/* Crea un canvas full-screen temporal, dispara partículas con     */
/* gravedad + rotación, y se auto-limpia al terminar.              */
/*                                                                  */
/* @example fireConfetti();           // burst central             */
/* @example fireConfetti({ bursts: 3 }); // 3 ráfagas escalonadas  */
/* ────────────────────────────────────────────────────────────── */

type ConfettiOptions = {
  /** Número de ráfagas escalonadas. Default 3 */
  bursts?: number;
  /** Partículas por ráfaga. Default 80 */
  particlesPerBurst?: number;
  /** Colores de las partículas (brand HEAT por defecto) */
  colors?: string[];
};

const DEFAULT_COLORS = [
  "#7DD3FC", // cyan
  "#A855F7", // purple
  "#F0ABFC", // pink
  "#FCD34D", // amber
  "#34D399", // emerald
  "#FB7185", // rose
];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vr: number;
  opacity: number;
  shape: "rect" | "circle";
};

export function fireConfetti(options: ConfettiOptions = {}): void {
  if (typeof window === "undefined") return;
  // Respeta usuarios con reduce-motion
  if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

  const {
    bursts = 3,
    particlesPerBurst = 80,
    colors = DEFAULT_COLORS,
  } = options;

  const canvas = document.createElement("canvas");
  canvas.style.cssText =
    "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:9999;";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    canvas.remove();
    return;
  }

  const dpr = window.devicePixelRatio || 1;
  function resize() {
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx!.scale(dpr, dpr);
  }
  resize();

  const W = window.innerWidth;
  const H = window.innerHeight;
  const particles: Particle[] = [];

  function spawnBurst(originX: number, originY: number) {
    for (let i = 0; i < particlesPerBurst; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 9;
      particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4, // sesgo hacia arriba al inicio
        size: 5 + Math.random() * 7,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.4,
        opacity: 1,
        shape: Math.random() > 0.5 ? "rect" : "circle",
      });
    }
  }

  // Ráfagas escalonadas desde puntos distintos (centro + laterales)
  const origins: Array<[number, number]> = [
    [W * 0.5, H * 0.38],
    [W * 0.25, H * 0.42],
    [W * 0.75, H * 0.42],
    [W * 0.5, H * 0.3],
  ];
  let burstsFired = 0;
  function fireNext() {
    if (burstsFired >= bursts) return;
    const origin = origins[burstsFired % origins.length];
    spawnBurst(origin[0], origin[1]);
    burstsFired++;
    if (burstsFired < bursts) {
      setTimeout(fireNext, 220);
    }
  }
  fireNext();

  const GRAVITY = 0.22;
  const DRAG = 0.992;
  let frame = 0;
  let raf = 0;

  function tick() {
    frame++;
    ctx!.clearRect(0, 0, W, H);

    for (const p of particles) {
      p.vx *= DRAG;
      p.vy = p.vy * DRAG + GRAVITY;
      p.x += p.vx;
      p.y += p.vy;
      p.rotation += p.vr;
      // Fade out después de ~90 frames
      if (frame > 60) p.opacity -= 0.012;

      if (p.opacity <= 0) continue;

      ctx!.save();
      ctx!.globalAlpha = Math.max(0, p.opacity);
      ctx!.translate(p.x, p.y);
      ctx!.rotate(p.rotation);
      ctx!.fillStyle = p.color;
      if (p.shape === "rect") {
        ctx!.fillRect(-p.size / 2, -p.size / 3, p.size, p.size / 1.6);
      } else {
        ctx!.beginPath();
        ctx!.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.restore();
    }

    // Continuar mientras haya partículas visibles o ráfagas pendientes
    const alive = particles.some((p) => p.opacity > 0 && p.y < H + 40);
    if (alive || burstsFired < bursts) {
      raf = requestAnimationFrame(tick);
    } else {
      cancelAnimationFrame(raf);
      canvas.remove();
    }
  }
  raf = requestAnimationFrame(tick);

  // Safety cleanup — máximo 6 segundos
  setTimeout(() => {
    cancelAnimationFrame(raf);
    if (canvas.parentNode) canvas.remove();
  }, 6000);
}
