import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';

// Fontlar Google Fonts'tan (SIL Open Font License 1.1) — bkz. /lisanslar
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});
const jetbrains = JetBrains_Mono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: { default: 'Müesser İrem Geçici | Hakkımda', template: 'Müesser İrem Geçici | %s' },
  description:
    'Müesser İrem Geçici - Büyük Veri Analistliği öğrencisi kişisel web sitesi. Biyografi, yetenekler, deneyimler, projeler ve tasarım çalışmaları.',
};

// Bütün sayfaların ortak iskeleti. Sitenin menüsü ve alt bilgisi app/(site)/layout.js'te,
// yönetim panelininki app/admin/layout.js'te.
export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
