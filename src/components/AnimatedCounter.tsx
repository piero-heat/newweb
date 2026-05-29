import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/* ────────────────────────────────────────────────────────────── */
/* AnimatedCounter — anima un número desde "from" hasta "to"      */
/* cuando entra en viewport. Easing suave (out cubic).            */
/*                                                                  */
/* @example                                                         */
/*   <AnimatedCounter to={350} duration={1.6} prefix="+" />        */
/*   <AnimatedCounter to={4} suffix="M" prefix="$" duration={2} />*/
/* ────────────────────────────────────────────────────────────── */

type AnimatedCounterProps = {
  /** Valor final del contador */
  to: number;
  /** Valor inicial. Default 0 */
  from?: number;
  /** Duración en segundos. Default 1.6 */
  duration?: number;
  /** Texto antes del número (ej. "+", "$") */
  prefix?: string;
  /** Texto después del número (ej. "M", "K", "%") */
  suffix?: string;
  /** Decimales a mostrar. Default 0 */
  decimals?: number;
  /** Separador de miles (default "," — usa "." para formato chileno) */
  thousandsSep?: string;
  /** Solo animar la primera vez. Default true */
  once?: boolean;
  /** Margen para trigger del IntersectionObserver. Default "-40px" */
  margin?: string;
  /** className opcional para el span */
  className?: string;
  /** style inline opcional para el span */
  style?: React.CSSProperties;
};

/** Easing cubic-out — empieza rápido, termina suave */
function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function formatNumber(
  value: number,
  decimals: number,
  thousandsSep: string
): string {
  const fixed = value.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
  return decPart ? `${withSep}.${decPart}` : withSep;
}

export default function AnimatedCounter({
  to,
  from = 0,
  duration = 1.6,
  prefix = "",
  suffix = "",
  decimals = 0,
  thousandsSep = ",",
  once = true,
  margin = "-40px",
  className,
  style,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once, margin: margin as any });
  const [value, setValue] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView) return;
    if (once && startedRef.current) return;
    startedRef.current = true;

    const startTs = performance.now();
    const totalMs = duration * 1000;
    let raf = 0;

    function tick(now: number) {
      const elapsed = now - startTs;
      const progress = Math.min(elapsed / totalMs, 1);
      const eased = easeOutCubic(progress);
      const current = from + (to - from) * eased;
      setValue(current);
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setValue(to);
      }
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to, duration, once]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {formatNumber(value, decimals, thousandsSep)}
      {suffix}
    </span>
  );
}
