import { useEffect, useState } from "react";
import {
  SiWhatsapp,
  SiFacebook,
  SiInstagram,
  SiTiktok,
  SiGmail,
  SiGoogle,
  SiNotion,
  SiShopify,
  SiMercadopago,
  SiApple,
} from "@icons-pack/react-simple-icons";
import { Users, Megaphone } from "lucide-react";
import type { ComponentType } from "react";
import logo from "@/assets/logo.png";

type IconProps = {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
};

type App = {
  id: string;
  name: string;
  Icon: ComponentType<IconProps>;
  color?: string;
  isHeat?: boolean;
};

const APPS: App[] = [
  { id: "wa", name: "WhatsApp", Icon: SiWhatsapp, color: "#25D366" },
  { id: "crm", name: "Heat CRM", Icon: Users, isHeat: true },
  { id: "fb", name: "Facebook", Icon: SiFacebook, color: "#1877F2" },
  { id: "tt", name: "TikTok", Icon: SiTiktok, color: "#FF0050" },
  { id: "gmail", name: "Gmail", Icon: SiGmail, color: "#EA4335" },
  { id: "google", name: "Google", Icon: SiGoogle, color: "#4285F4" },
  { id: "notion", name: "Notion", Icon: SiNotion, color: "#FFFFFF" },
  { id: "shop", name: "Shopify", Icon: SiShopify, color: "#7AB55C" },
  { id: "mp", name: "Mercado Pago", Icon: SiMercadopago, color: "#00AAFF" },
  { id: "apple", name: "Apple", Icon: SiApple, color: "#FFFFFF" },
  { id: "ads", name: "Heat Ads", Icon: Megaphone, isHeat: true },
  { id: "ig", name: "Instagram", Icon: SiInstagram, color: "#E4405F" },
];

const SIZE = 460;
const RADIUS = 175;
const CENTER = SIZE / 2;

function appPos(index: number) {
  const angle = (index / APPS.length) * Math.PI * 2 - Math.PI / 2;
  return {
    x: CENTER + Math.cos(angle) * RADIUS,
    y: CENTER + Math.sin(angle) * RADIUS,
  };
}

export default function HeatNetworkDiagram() {
  const [litIds, setLitIds] = useState<Set<string>>(
    () => new Set([APPS[0].id, APPS[4].id, APPS[8].id]),
  );

  useEffect(() => {
    let cursor = 0;
    const t = setInterval(() => {
      cursor = (cursor + 1) % APPS.length;
      setLitIds(
        new Set([
          APPS[cursor].id,
          APPS[(cursor + 4) % APPS.length].id,
          APPS[(cursor + 8) % APPS.length].id,
        ]),
      );
    }, 1500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative mx-auto w-full" style={{ maxWidth: SIZE }}>
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(99,102,241,0.35), transparent 70%)",
          filter: "blur(45px)",
        }}
      />

      <div
        className="relative mx-auto"
        style={{ width: SIZE, height: SIZE, maxWidth: "100%" }}
      >
        <div
          aria-hidden
          className="absolute inset-6 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.02] to-transparent"
        />

        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox={`0 0 ${SIZE} ${SIZE}`}
        >
          <defs>
            <linearGradient id="litLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          {APPS.map((app, i) => {
            const pos = appPos(i);
            const isLit = litIds.has(app.id);
            return (
              <line
                key={app.id}
                x1={CENTER}
                y1={CENTER}
                x2={pos.x}
                y2={pos.y}
                stroke={isLit ? "url(#litLine)" : "rgba(255,255,255,0.05)"}
                strokeWidth={isLit ? 1.5 : 1}
                style={{
                  transition: "all 0.7s ease-out",
                }}
              />
            );
          })}
        </svg>

        <div
          className="absolute z-20 rounded-3xl flex items-center justify-center"
          style={{
            top: CENTER - 50,
            left: CENTER - 50,
            width: 100,
            height: 100,
            background:
              "linear-gradient(135deg, #3b82f6 0%, #6366f1 50%, #a855f7 100%)",
            boxShadow:
              "0 0 60px -10px rgba(168,85,247,0.7), inset 0 1px 0 rgba(255,255,255,0.2)",
          }}
        >
          <img
            src={logo}
            alt="HEAT"
            className="h-7"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </div>

        {APPS.map((app, i) => {
          const pos = appPos(i);
          const isLit = litIds.has(app.id);
          return (
            <div
              key={app.id}
              className="absolute z-10 flex flex-col items-center"
              style={{
                top: pos.y,
                left: pos.x,
                transform: `translate(-50%, -50%) translateY(${isLit ? -3 : 0}px)`,
                transition: "transform 0.7s ease-out",
              }}
            >
              <div
                className="relative w-11 h-11 rounded-xl border flex items-center justify-center"
                style={{
                  background: app.isHeat
                    ? "linear-gradient(135deg, rgba(168,85,247,0.35), rgba(99,102,241,0.35))"
                    : "rgba(255,255,255,0.04)",
                  borderColor: isLit
                    ? app.isHeat
                      ? "rgba(168,85,247,0.55)"
                      : "rgba(255,255,255,0.25)"
                    : "rgba(255,255,255,0.08)",
                  boxShadow: isLit
                    ? `0 0 28px -4px ${app.color || "#a855f7"}80, inset 0 1px 0 rgba(255,255,255,0.18)`
                    : "inset 0 1px 0 rgba(255,255,255,0.05)",
                  color: app.isHeat
                    ? isLit
                      ? "#E0AEFF"
                      : "rgba(224,174,255,0.55)"
                    : isLit && app.color
                      ? app.color
                      : "rgba(255,255,255,0.3)",
                  transition: "all 0.7s ease-out",
                  backdropFilter: "blur(8px)",
                }}
              >
                <app.Icon size={20} color="currentColor" />
              </div>
              <span
                className="mt-1.5 text-[10px] font-medium tracking-wide whitespace-nowrap text-center"
                style={{
                  color: isLit ? "#F4F2EE" : "rgba(255,255,255,0.4)",
                  transition: "color 0.7s ease-out",
                }}
              >
                {app.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
