import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { fbqTrack } from "@/lib/fbpixel";

/* ────────────────────────────────────────────────────────────── */
/* MetaPixel — RouteTracker para SPA                              */
/*                                                                */
/* index.html dispara el PageView inicial al cargar el sitio.    */
/* Este componente dispara un PageView adicional en cada          */
/* cambio de ruta de React Router (porque las navegaciones SPA   */
/* no recargan la página y el pixel base no las detecta).        */
/* ────────────────────────────────────────────────────────────── */

export default function MetaPixel() {
  const location = useLocation();
  // Saltamos el primer render porque index.html ya disparó PageView
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fbqTrack("PageView");
  }, [location.pathname]);

  return null;
}
