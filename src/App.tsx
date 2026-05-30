import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { MotionConfig, AnimatePresence, motion } from "motion/react";
import Index from "./pages/Index"; // eager — es la home (LCP)
import MetaPixel from "./components/MetaPixel";
import WhatsAppFloat from "./components/WhatsAppFloat";

/* Code-splitting: cada ruta secundaria se descarga solo al visitarla.
   Reduce el bundle inicial (~824KB) a lo justo para la home. */
const Partners = lazy(() => import("./pages/Partners"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Contenido = lazy(() => import("./pages/Contenido"));
const Careers = lazy(() => import("./pages/Careers"));
const CareersRole = lazy(() => import("./pages/CareersRole"));
const Gracias = lazy(() => import("./pages/Gracias"));
const Descargar = lazy(() => import("./pages/Descargar"));
const PerformAds = lazy(() => import("./pages/PerformAds"));
const DesarrolloWeb = lazy(() => import("./pages/DesarrolloWeb"));
const Terminos = lazy(() => import("./pages/Terminos"));
const Privacidad = lazy(() => import("./pages/Privacidad"));
const Suscripcion = lazy(() => import("./pages/Suscripcion"));
const PerformanceAdsCheckout = lazy(
  () => import("./pages/PerformanceAdsCheckout")
);
const WebPlanCheckout = lazy(() => import("./pages/WebPlanCheckout"));
const ImplementationCheckout = lazy(
  () => import("./pages/ImplementationCheckout")
);

/* Fallback mínimo mientras carga el chunk de la ruta — fondo del brand
   para que no haya flash blanco. */
function RouteFallback() {
  return <div className="min-h-screen bg-background" />;
}

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

/* Page transitions — crossfade entre rutas con AnimatePresence.
   IMPORTANTE: solo opacity (sin transform/translate) para no crear un
   containing block que rompería los modales position:fixed (CalendarModal,
   ReelModal, etc.) dentro de las páginas. */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.26, ease: "easeOut" }}
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location}>
            <Route path="/" element={<Index />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/heat-life" element={<Contenido />} />
            {/* Alias legacy: /contenido sigue funcionando */}
            <Route path="/contenido" element={<Contenido />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/:slug" element={<CareersRole />} />
            <Route path="/gracias" element={<Gracias />} />
            <Route path="/descargar" element={<Descargar />} />
            <Route path="/perform-ads" element={<PerformAds />} />
            <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="/terminos" element={<Terminos />} />
            <Route path="/privacidad" element={<Privacidad />} />
            <Route path="/suscripcion/:plan" element={<Suscripcion />} />
            <Route path="/heat-ia-pro-14dias" element={<Suscripcion />} />
            <Route
              path="/contratar/performance-ads"
              element={<PerformanceAdsCheckout />}
            />
            <Route path="/contratar/web/:slug" element={<WebPlanCheckout />} />
            <Route
              path="/contratar/implementacion/:slug"
              element={<ImplementationCheckout />}
            />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    // reducedMotion="user" → respeta prefers-reduced-motion en TODOS los
    // componentes de motion (halos, shimmer, entradas) automáticamente.
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollManager />
        <MetaPixel />
        <AnimatedRoutes />
        <WhatsAppFloat />
      </BrowserRouter>
    </MotionConfig>
  );
}
