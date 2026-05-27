import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import InteractiveFeaturesSection from "@/components/InteractiveFeaturesSection";
import StatsSection from "@/components/StatsSection";
import PricingSection from "@/components/PricingSection";
import AddonsSection from "@/components/AddonsSection";
import ImplementationSection from "@/components/ImplementationSection";
import PerformanceAdsSection from "@/components/PerformanceAdsSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import ProcessSection from "@/components/ProcessSection";
import DemoSection from "@/components/DemoSection";
import FaqSection from "@/components/FaqSection";
import ContentPackSection from "@/components/ContentPackSection";
import WebCreationSection from "@/components/WebCreationSection";
import IntegrationsSection from "@/components/IntegrationsSection";
import LiveAgentSection from "@/components/LiveAgentSection";
import LiveDemoSection from "@/components/LiveDemoSection";
import Footer from "@/components/Footer";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4";

const FADE = 0.5;

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let raf = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      const d = video.duration;
      const t = video.currentTime;
      if (Number.isFinite(d) && d > 0) {
        let opacity = 1;
        if (t < FADE) opacity = Math.max(0, t / FADE);
        else if (t > d - FADE) opacity = Math.max(0, (d - t) / FADE);
        video.style.opacity = String(opacity);
      }
      raf = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        if (cancelled) return;
        try {
          video.currentTime = 0;
          void video.play();
        } catch {
          /* noop */
        }
      }, 100);
    };

    video.style.opacity = "0";
    video.addEventListener("ended", handleEnded);
    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
    raf = requestAnimationFrame(tick);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div className="relative bg-background">
      <div className="relative min-h-screen overflow-hidden">
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        muted
        playsInline
        autoPlay
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0 }}
      />

      <section className="relative z-10 min-h-screen flex flex-col overflow-visible">
        <Navbar />

        <div className="flex-1 flex items-center justify-center relative overflow-visible">
          <div
            aria-hidden
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-950 opacity-90"
            style={{
              width: 984,
              height: 527,
              filter: "blur(82px)",
            }}
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-foreground/90 backdrop-blur-sm mb-7">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
              </span>
              +350 negocios en LATAM y EEUU
            </div>

            <h1
              className="font-display font-normal"
              style={{
                fontSize: "clamp(34px, 5vw, 72px)",
                lineHeight: 1.08,
                letterSpacing: "-0.022em",
              }}
            >
              <span className="text-foreground">El problema no es </span>
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(to left, #6366f1, #a855f7, #fcd34d)",
                }}
              >
                generar leads.
              </span>
              <br />
              <span className="text-foreground">Es no poder atenderlos.</span>
            </h1>

            <p
              className="text-hero-sub text-base md:text-lg leading-7 md:leading-8 max-w-xl opacity-80"
              style={{ marginTop: 22 }}
            >
              Agentes de IA que contestan, filtran y venden en WhatsApp,
              Instagram y Facebook — junto a tu equipo, sin descansos.
            </p>

            <a
              href="#demo"
              className="group relative inline-flex items-center justify-center rounded-full liquid-glass text-foreground text-base font-medium overflow-hidden transition-all duration-500 ease-out hover:shadow-[0_14px_50px_-12px_rgba(255,255,255,0.45)]"
              style={{
                paddingLeft: 29,
                paddingRight: 29,
                paddingTop: 18,
                paddingBottom: 18,
                marginTop: 25,
              }}
            >
              <span
                aria-hidden
                className="absolute inset-0 rounded-full bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-left"
              />
              <span className="relative z-10 transition-colors duration-500 ease-out group-hover:text-background">
                Agendar Demo
              </span>
            </a>
          </div>
        </div>

      </section>
      </div>

      <LiveDemoSection />
      <LiveAgentSection />
      <FeaturesSection />
      <InteractiveFeaturesSection />
      <StatsSection />
      <PricingSection />
      <AddonsSection />
      <ImplementationSection />
      <IntegrationsSection />
      <PerformanceAdsSection />
      <ContentPackSection />
      <WebCreationSection />
      <CaseStudiesSection />
      <GoogleReviewsSection />
      <ProcessSection />
      <DemoSection />
      <FaqSection />
      <Footer />
    </div>
  );
}
