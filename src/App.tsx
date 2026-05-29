import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Partners from "./pages/Partners";
import Nosotros from "./pages/Nosotros";
import Contenido from "./pages/Contenido";
import Careers from "./pages/Careers";
import CareersRole from "./pages/CareersRole";
import PerformAds from "./pages/PerformAds";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import Suscripcion from "./pages/Suscripcion";
import PerformanceAdsCheckout from "./pages/PerformanceAdsCheckout";
import WebPlanCheckout from "./pages/WebPlanCheckout";
import ImplementationCheckout from "./pages/ImplementationCheckout";
import MetaPixel from "./components/MetaPixel";
import WhatsAppFloat from "./components/WhatsAppFloat";

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

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <MetaPixel />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/heat-life" element={<Contenido />} />
        {/* Alias legacy: /contenido sigue funcionando si alguien guardó el link */}
        <Route path="/contenido" element={<Contenido />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/careers/:slug" element={<CareersRole />} />
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
        <Route
          path="/contratar/web/:slug"
          element={<WebPlanCheckout />}
        />
        <Route
          path="/contratar/implementacion/:slug"
          element={<ImplementationCheckout />}
        />
      </Routes>
      <WhatsAppFloat />
    </BrowserRouter>
  );
}
