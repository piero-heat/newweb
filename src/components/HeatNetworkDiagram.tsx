import { useEffect, useRef, useState } from "react";

type Platform = {
  n: string;
  vb: string;
  svg: string;
  c?: string;
};

const PLATFORMS: Platform[] = [
  {
    n: "WhatsApp",
    vb: "0 0 256 258",
    svg: `<defs><linearGradient id="hcwa1" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#1faf38"/><stop offset="100%" stop-color="#60d669"/></linearGradient><linearGradient id="hcwa2" x1="50%" x2="50%" y1="100%" y2="0%"><stop offset="0%" stop-color="#f9f9f9"/><stop offset="100%" stop-color="#fff"/></linearGradient></defs><path fill="url(#hcwa1)" d="M5.463 127.456c-.006 21.677 5.658 42.843 16.428 61.499L4.433 252.697l65.232-17.104a123 123 0 0 0 58.8 14.97h.054c67.815 0 123.018-55.183 123.047-123.01c.013-32.867-12.775-63.773-36.009-87.025c-23.23-23.25-54.125-36.061-87.043-36.076c-67.823 0-123.022 55.18-123.05 123.004"/><path fill="url(#hcwa2)" d="M1.07 127.416c-.007 22.457 5.86 44.38 17.014 63.704L0 257.147l67.571-17.717c18.618 10.151 39.58 15.503 60.91 15.511h.055c70.248 0 127.434-57.168 127.464-127.423c.012-34.048-13.236-66.065-37.3-90.15C194.633 13.286 162.633.014 128.536 0C58.276 0 1.099 57.16 1.071 127.416m40.24 60.376l-2.523-4.005c-10.606-16.864-16.204-36.352-16.196-56.363C22.614 69.029 70.138 21.52 128.576 21.52c28.3.012 54.896 11.044 74.9 31.06c20.003 20.018 31.01 46.628 31.003 74.93c-.026 58.395-47.551 105.91-105.943 105.91h-.042c-19.013-.01-37.66-5.116-53.922-14.765l-3.87-2.295l-40.098 10.513z"/><path fill="#fff" d="M96.678 74.148c-2.386-5.303-4.897-5.41-7.166-5.503c-1.858-.08-3.982-.074-6.104-.074c-2.124 0-5.575.799-8.492 3.984c-2.92 3.188-11.148 10.892-11.148 26.561s11.413 30.813 13.004 32.94c1.593 2.123 22.033 35.307 54.405 48.073c26.904 10.609 32.379 8.499 38.218 7.967c5.84-.53 18.844-7.702 21.497-15.139c2.655-7.436 2.655-13.81 1.859-15.142c-.796-1.327-2.92-2.124-6.105-3.716s-18.844-9.298-21.763-10.361c-2.92-1.062-5.043-1.592-7.167 1.597c-2.124 3.184-8.223 10.356-10.082 12.48c-1.857 2.129-3.716 2.394-6.9.801c-3.187-1.598-13.444-4.957-25.613-15.806c-9.468-8.442-15.86-18.867-17.718-22.056c-1.858-3.184-.199-4.91 1.398-6.497c1.431-1.427 3.186-3.719 4.78-5.578c1.588-1.86 2.118-3.187 3.18-5.311c1.063-2.126.531-3.986-.264-5.579c-.798-1.593-6.987-17.343-9.819-23.64"/>`,
  },
  {
    n: "Facebook",
    vb: "0 0 256 256",
    svg: `<path fill="#1877f2" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/>`,
  },
  {
    n: "TikTok",
    vb: "0 0 256 290",
    svg: `<path fill="#ff004f" d="M189.72 104.421c18.678 13.345 41.56 21.197 66.273 21.197v-47.53a67 67 0 0 1-13.918-1.456v37.413c-24.711 0-47.59-7.851-66.272-21.195v96.996c0 48.523-39.356 87.855-87.9 87.855c-18.113 0-34.949-5.473-48.934-14.86c15.962 16.313 38.222 26.432 62.848 26.432c48.548 0 87.905-39.332 87.905-87.857v-96.995zm17.17-47.952c-9.546-10.423-15.814-23.893-17.17-38.785v-6.113h-13.189c3.32 18.927 14.644 35.097 30.358 44.898M69.673 225.607a40 40 0 0 1-8.203-24.33c0-22.192 18.001-40.186 40.21-40.186a40.3 40.3 0 0 1 12.197 1.883v-48.593c-4.61-.631-9.262-.9-13.912-.801v37.822a40.3 40.3 0 0 0-12.203-1.882c-22.208 0-40.208 17.992-40.208 40.187c0 15.694 8.997 29.281 22.119 35.9"/><path d="M175.803 92.849c18.683 13.344 41.56 21.195 66.272 21.195V76.631c-13.794-2.937-26.005-10.141-35.186-20.162c-15.715-9.802-27.038-25.972-30.358-44.898h-34.643v189.843c-.079 22.132-18.049 40.052-40.21 40.052c-13.058 0-24.66-6.221-32.007-15.86c-13.12-6.618-22.118-20.206-22.118-35.898c0-22.193 18-40.187 40.208-40.187c4.255 0 8.356.662 12.203 1.882v-37.822c-47.692.985-86.047 39.933-86.047 87.834c0 23.912 9.551 45.589 25.053 61.428c13.985 9.385 30.82 14.86 48.934 14.86c48.545 0 87.9-39.335 87.9-87.857z"/><path fill="#00f2ea" d="M242.075 76.63V66.516a66.3 66.3 0 0 1-35.186-10.047a66.47 66.47 0 0 0 35.186 20.163M176.53 11.57a68 68 0 0 1-.728-5.457V0h-47.834v189.845c-.076 22.13-18.046 40.05-40.208 40.05a40.06 40.06 0 0 1-18.09-4.287c7.347 9.637 18.949 15.857 32.007 15.857c22.16 0 40.132-17.918 40.21-40.05V11.571zM99.966 113.58v-10.769a89 89 0 0 0-12.061-.818C39.355 101.993 0 141.327 0 189.845c0 30.419 15.467 57.227 38.971 72.996c-15.502-15.838-25.053-37.516-25.053-61.427c0-47.9 38.354-86.848 86.048-87.833"/>`,
  },
  {
    n: "Gmail",
    vb: "0 0 256 193",
    svg: `<path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z"/><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z"/><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z"/><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z"/><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z"/>`,
  },
  {
    n: "Google",
    vb: "0 0 256 262",
    svg: `<path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"/><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"/><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"/><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"/>`,
  },
  {
    n: "Notion",
    vb: "0 0 256 268",
    svg: `<path fill="#fff" d="M16.092 11.538L164.09.608c18.179-1.56 22.85-.508 34.28 7.801l47.243 33.282C253.406 47.414 256 48.975 256 55.207v182.527c0 11.439-4.155 18.205-18.696 19.24L65.44 267.378c-10.913.517-16.11-1.043-21.825-8.327L8.826 213.814C2.586 205.487 0 199.254 0 191.97V29.726c0-9.352 4.155-17.153 16.092-18.188"/><path d="M164.09.608L16.092 11.538C4.155 12.573 0 20.374 0 29.726v162.245c0 7.284 2.585 13.516 8.826 21.843l34.789 45.237c5.715 7.284 10.912 8.844 21.825 8.327l171.864-10.404c14.532-1.035 18.696-7.801 18.696-19.24V55.207c0-5.911-2.336-7.614-9.21-12.66l-1.185-.856L198.37 8.409C186.94.1 182.27-.952 164.09.608M69.327 52.22c-14.033.945-17.216 1.159-25.186-5.323L23.876 30.778c-2.06-2.086-1.026-4.69 4.163-5.207l142.274-10.395c11.947-1.043 18.17 3.12 22.842 6.758l24.401 17.68c1.043.525 3.638 3.637.517 3.637L71.146 52.095zm-16.36 183.954V81.222c0-6.767 2.077-9.887 8.3-10.413L230.02 60.93c5.724-.517 8.31 3.12 8.31 9.879v153.917c0 6.767-1.044 12.49-10.387 13.008l-161.487 9.361c-9.343.517-13.489-2.594-13.489-10.921M212.377 89.53c1.034 4.681 0 9.362-4.681 9.897l-7.783 1.542v114.404c-6.758 3.637-12.981 5.715-18.18 5.715c-8.308 0-10.386-2.604-16.609-10.396l-50.898-80.079v77.476l16.1 3.646s0 9.362-12.989 9.362l-35.814 2.077c-1.043-2.086 0-7.284 3.63-8.318l9.351-2.595V109.823l-12.98-1.052c-1.043-5.733 3.111-9.896 8.826-11.965l38.426-2.585l52.958 81.113v-71.76l-13.498-1.552c-1.043-5.733 3.111-9.896 8.3-10.404z"/>`,
  },
  {
    n: "Shopify",
    vb: "0 0 256 292",
    svg: `<path fill="#95bf46" d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357a19614 19614 0 0 0-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805c-.19.056-3.388 1.043-8.678 2.68c-5.18-14.906-14.322-28.604-30.405-28.604c-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635c-14.558 4.511-24.9 7.718-26.221 8.133c-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042l89.77-19.42S223.973 58.8 223.775 57.34M156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023c0-9.264-1.286-16.723-3.349-22.636c8.287 1.04 13.806 10.469 17.358 21.32m-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238c0 .572-.005 1.095-.01 1.624c-9.117 2.824-19.024 5.89-28.953 8.966c5.575-21.516 16.025-31.908 25.161-35.828m-11.131-10.537c1.617 0 3.246.549 4.805 1.622c-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828"/><path fill="#5e8e3e" d="M221.237 54.983a19614 19614 0 0 0-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233l89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357"/><path fill="#fff" d="m135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693c0 15.038 39.2 20.8 39.2 56.024c0 27.713-17.577 45.558-41.277 45.558c-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232c0-19.616-32.16-20.491-32.16-52.724c0-27.129 19.472-53.382 58.778-53.382c15.145 0 22.627 4.338 22.627 4.338"/>`,
  },
  {
    n: "MercadoLibre",
    vb: "0 0 48 48",
    c: "#FFE600",
    svg: `<ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="19.5" ry="12.978"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.704 15.53a20.8 20.8 0 0 0 6.386 1.866a23 23 0 0 0 4.546-.773"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.882 15.614a8.6 8.6 0 0 1-5.165 1.485c-3.335 0-6.225-2.199-9.215-2.199c-2.668 0-7.189 4.373-7.189 5.164s1.31 1.26 2.372.74c.621-.303 3.31-2.914 5.484-2.914s9.219 7.136 9.857 7.806c.989 1.038-.926 3.274-2.149 2.05s-3.41-3.162-3.41-3.162"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.4 22.683a24 24 0 0 0-8.547 2.692m-2.273 2.081c.989 1.037-.926 3.273-2.149 2.05s-2.581-2.513-2.581-2.513"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.135 29.215c.988 1.037-.927 3.273-2.15 2.05s-2.025-1.962-2.025-1.962"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.202 31.316a2.31 2.31 0 0 0 3.648-.186"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.202 31.316c.53-.697.49-3.182-2.244-2.688c.642-1.219.066-3.146-2.388-2.01a1.69 1.69 0 0 0-3.146-.658a1.455 1.455 0 0 0-2.8-.28c-.544 1.104.296 3.096 2.092 1.976c-.182 1.944.84 2.537 2.684 1.78c.099 1.91 1.367 1.745 2.273 1.3a1.938 1.938 0 0 0 3.529.58"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.67 22.279a18.3 18.3 0 0 1 9.064 3.214"/>`,
  },
  {
    n: "Apple",
    vb: "0 0 24 24",
    svg: `<path fill="#ffffff" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47c-1.34.03-1.77-.79-3.29-.79c-1.53 0-2 .77-3.27.82c-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51c1.28-.02 2.5.87 3.29.87c.78 0 2.26-1.07 3.81-.91c.65.03 2.47.26 3.64 1.98c-.09.06-2.17 1.28-2.15 3.81c.03 3.02 2.65 4.03 2.68 4.04c-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5c.13 1.17-.34 2.35-1.04 3.19c-.69.85-1.83 1.51-2.95 1.42c-.15-1.15.41-2.35 1.05-3.11"/>`,
  },
  {
    n: "Outlook",
    vb: "0 0 32 32",
    svg: `<path fill="#0072c6" d="M19.484 7.937v5.477l1.916 1.205a.5.5 0 0 0 .21 0l8.238-5.554a1.174 1.174 0 0 0-.959-1.128Z"/><path fill="#0072c6" d="m19.484 15.457l1.747 1.2a.52.52 0 0 0 .543 0c-.3.181 8.073-5.378 8.073-5.378v10.066a1.408 1.408 0 0 1-1.49 1.555h-8.874zm-9.044-2.525a1.61 1.61 0 0 0-1.42.838a4.13 4.13 0 0 0-.526 2.218A4.05 4.05 0 0 0 9.02 18.2a1.6 1.6 0 0 0 2.771.022a4 4 0 0 0 .515-2.2a4.37 4.37 0 0 0-.5-2.281a1.54 1.54 0 0 0-1.366-.809"/><path fill="#0072c6" d="M2.153 5.155v21.427L18.453 30V2Zm10.908 14.336a3.23 3.23 0 0 1-2.7 1.361a3.19 3.19 0 0 1-2.64-1.318A5.46 5.46 0 0 1 6.706 16.1a5.87 5.87 0 0 1 1.036-3.616a3.27 3.27 0 0 1 2.744-1.384a3.12 3.12 0 0 1 2.61 1.321a5.64 5.64 0 0 1 1 3.484a5.76 5.76 0 0 1-1.035 3.586"/>`,
  },
  {
    n: "Heat Ads",
    vb: "0 0 24 24",
    c: "#8B5CF6",
    svg: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M11 6a13 13 0 0 0 8.4-2.8A1 1 0 0 1 21 4v12a1 1 0 0 1-1.6.8A13 13 0 0 0 11 14H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"/><path d="M6 14a12 12 0 0 0 2.4 7.2a2 2 0 0 0 3.2-2.4A8 8 0 0 1 10 14M8 6v8"/></g>`,
  },
  {
    n: "Heat Content",
    vb: "0 0 24 24",
    c: "#5BA9FF",
    svg: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"/></g>`,
  },
  {
    n: "Heat CRM",
    vb: "0 0 24 24",
    c: "#7C3AED",
    svg: `<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></g>`,
  },
];

const CSS = `
#heat-circuit{position:relative;width:100%;max-width:760px;height:520px;margin:0 auto;border-radius:24px;overflow:hidden;background:radial-gradient(120% 120% at 50% 0%,rgba(37,99,235,.12),transparent 60%),#0B0F1C;border:1px solid rgba(91,169,255,.18);box-shadow:0 34px 90px -34px rgba(37,99,235,.5),inset 0 1px 0 rgba(255,255,255,.05);font-family:'Plus Jakarta Sans',system-ui,-apple-system,sans-serif}
#heat-circuit .hc-svg{position:absolute;inset:0;width:100%;height:100%}
#heat-circuit .hc-trace{fill:none;stroke:rgba(91,169,255,.14);stroke-width:1.4;transition:stroke .3s,stroke-width .3s,filter .3s}
#heat-circuit .hc-trace.lit{stroke:#8B5CF6;stroke-width:2.2;filter:drop-shadow(0 0 5px rgba(139,92,246,.85))}
#heat-circuit .hc-pulse{fill:none;stroke:#8B5CF6;stroke-width:2.6;stroke-linecap:round;filter:drop-shadow(0 0 7px #8B5CF6);stroke-dasharray:26 4000;stroke-dashoffset:4000}
#heat-circuit .hc-node{position:absolute;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;gap:5px}
#heat-circuit .hc-chip{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;background:rgba(14,19,32,.92);border:1px solid rgba(91,169,255,.16);box-shadow:0 6px 16px rgba(0,0,0,.4);transition:border-color .35s,box-shadow .35s,transform .35s}
#heat-circuit .hc-chip svg{width:27px;height:27px;display:block}
#heat-circuit .hc-label{font-size:9.5px;color:#7E8AA0;font-weight:600;white-space:nowrap;transition:color .35s}
#heat-circuit .hc-node.lit .hc-chip{border-color:#8B5CF6;box-shadow:0 0 0 1px #8B5CF6,0 0 22px rgba(139,92,246,.55),0 0 44px rgba(91,169,255,.3);transform:scale(1.08)}
#heat-circuit .hc-node.lit .hc-label{color:#F1F5FB}
#heat-circuit .hc-hub{position:absolute;transform:translate(-50%,-50%);width:92px;height:92px;border-radius:22px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#2563EB 0%,#5BA9FF 50%,#7C3AED 100%);box-shadow:0 0 50px rgba(37,99,235,.5),0 0 80px rgba(124,58,237,.32);font-weight:800;font-size:23px;color:#fff;letter-spacing:-1px;animation:hcHub 3s ease-in-out infinite}
@keyframes hcHub{0%,100%{box-shadow:0 0 50px rgba(37,99,235,.45),0 0 80px rgba(124,58,237,.28)}50%{box-shadow:0 0 78px rgba(37,99,235,.65),0 0 112px rgba(124,58,237,.48)}}
@media (max-width:640px){#heat-circuit{height:420px}#heat-circuit .hc-chip{width:44px;height:44px}#heat-circuit .hc-chip svg{width:23px;height:23px}#heat-circuit .hc-hub{width:78px;height:78px;font-size:20px}}
`;

export default function HeatNetworkDiagram() {
  const hostRef = useRef<HTMLDivElement>(null);
  const pulseRefs = useRef<(SVGPathElement | null)[]>([]);
  const [dims, setDims] = useState({ w: 760, h: 520 });
  const [litIndex, setLitIndex] = useState<number | null>(null);

  // measure container
  useEffect(() => {
    if (!hostRef.current) return;
    const measure = () => {
      const el = hostRef.current;
      if (!el) return;
      setDims({ w: el.clientWidth || 480, h: el.clientHeight || 520 });
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(hostRef.current);
    return () => ro.disconnect();
  }, []);

  // animation cycle — sequential, 430ms between, lit for 1400ms
  useEffect(() => {
    let i = 0;
    let stopped = false;
    let nextT: ReturnType<typeof setTimeout> | null = null;
    let clearLitT: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (stopped) return;
      const idx = i;
      setLitIndex(idx);

      // trigger pulse
      const pulse = pulseRefs.current[idx];
      if (pulse) {
        const len = pulse.getTotalLength();
        pulse.style.transition = "none";
        pulse.style.strokeDashoffset = String(len);
        // force reflow
        void pulse.getBoundingClientRect();
        pulse.style.transition = "stroke-dashoffset .7s ease";
        pulse.style.strokeDashoffset = String(len - 26);
      }

      clearLitT = setTimeout(() => {
        setLitIndex((cur) => (cur === idx ? null : cur));
      }, 1400);

      i = (i + 1) % PLATFORMS.length;
      nextT = setTimeout(tick, 430);
    };
    tick();
    return () => {
      stopped = true;
      if (nextT) clearTimeout(nextT);
      if (clearLitT) clearTimeout(clearLitT);
    };
  }, []);

  const { w, h } = dims;
  const cx = w * 0.5;
  const cy = h * 0.5;
  const rx = Math.min(w * 0.38, 230);
  const ry = Math.min(h * 0.37, 195);

  const items = PLATFORMS.map((p, i) => {
    const ang = ((-90 + i * (360 / PLATFORMS.length)) * Math.PI) / 180;
    const x = cx + Math.cos(ang) * rx;
    const y = cy + Math.sin(ang) * ry;
    const midx = cx + Math.cos(ang) * rx * 0.55;
    const d = `M ${cx} ${cy} L ${midx} ${cy} L ${midx} ${y} L ${x} ${y}`;
    return { ...p, x, y, d, index: i };
  });

  return (
    <>
      <style>{CSS}</style>
      <div ref={hostRef} id="heat-circuit" aria-hidden="true">
        <svg
          className="hc-svg"
          viewBox={`0 0 ${w} ${h}`}
          preserveAspectRatio="none"
        >
          {items.map((it) => (
            <path
              key={`trace-${it.index}`}
              d={it.d}
              className={`hc-trace ${litIndex === it.index ? "lit" : ""}`}
            />
          ))}
          {items.map((it) => (
            <path
              key={`pulse-${it.index}`}
              ref={(el) => {
                pulseRefs.current[it.index] = el;
              }}
              d={it.d}
              className="hc-pulse"
            />
          ))}
        </svg>

        <div
          className="hc-hub"
          style={{ left: cx + "px", top: cy + "px" }}
        >
          heat
        </div>

        {items.map((it) => (
          <div
            key={`node-${it.index}`}
            className={`hc-node ${litIndex === it.index ? "lit" : ""}`}
            style={{ left: it.x + "px", top: it.y + "px" }}
          >
            <div className="hc-chip">
              <svg
                viewBox={it.vb}
                width="27"
                height="27"
                style={it.c ? { color: it.c } : undefined}
                dangerouslySetInnerHTML={{ __html: it.svg }}
              />
            </div>
            <div className="hc-label">{it.n}</div>
          </div>
        ))}
      </div>
    </>
  );
}
