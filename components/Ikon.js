// Sitede kullanılan çizgi ikonlar (emoji yerine). Hepsi 24x24, renk "renk" ile verilir.
const YOLLAR = {
  ml: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
    </>
  ),
  veri: <path d="M4 20h16M7 16V10M12 16V5M17 16v-4" />,
  kod: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14" />,
  tasarim: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 14l5-4 4 3 3-2 6 4" />
    </>
  ),
  ofis: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  okul: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v6" />
    </>
  ),
  dil: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
    </>
  ),
  kurs: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 21a2 2 0 0 1 2-2h13v2H6" />
    </>
  ),
  eposta: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
  github: (
    <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  ),
  ok: <path d="M5 12h14M13 6l6 6-6 6" />,
  kisi: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
    </>
  ),
  grafik: <path d="M5 20V12M12 20V5M19 20v-9" />,
};

export default function Ikon({ ad, renk = 'currentColor', boyut = 24, kalinlik = 1.8 }) {
  return (
    <svg
      aria-hidden="true"
      width={boyut}
      height={boyut}
      viewBox="0 0 24 24"
      fill="none"
      stroke={renk}
      strokeWidth={kalinlik}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {YOLLAR[ad] ?? YOLLAR.veri}
    </svg>
  );
}
