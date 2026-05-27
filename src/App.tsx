import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Partners from "./pages/Partners";
import Nosotros from "./pages/Nosotros";
import PerformAds from "./pages/PerformAds";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";

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
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/perform-ads" element={<PerformAds />} />
        <Route path="/desarrollo-web" element={<DesarrolloWeb />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route path="/privacidad" element={<Privacidad />} />
      </Routes>
    </BrowserRouter>
  );
}
