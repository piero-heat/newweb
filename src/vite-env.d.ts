/// <reference types="vite/client" />

declare module "*.svg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.jpeg" {
  const src: string;
  export default src;
}

declare module "*.webp" {
  const src: string;
  export default src;
}

// Stripe Buy Button — web component cargado vía script en index.html.
// Lo registramos como custom element para que TSX lo acepte sin errores.
declare namespace JSX {
  interface IntrinsicElements {
    "stripe-buy-button": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        "buy-button-id"?: string;
        "publishable-key"?: string;
      },
      HTMLElement
    >;
  }
}
