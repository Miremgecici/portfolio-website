import Link from 'next/link';
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import { cv } from '@/content/cv';
import Arkaplan from '@/components/Arkaplan';
import Navbar from '@/components/Navbar';
import Selale from '@/components/Selale';
import './globals.css';

// Eski sitedeki fontlar (Google Fonts, SIL Open Font License 1.1)
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
    'Müesser İrem Geçici - Büyük Veri Analistliği öğrencisi kişisel web sitesi. Biyografi, yetenekler, deneyimler ve akademik çalışmalar.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${jakarta.variable} ${jetbrains.variable}`}>
      <body>
        <Arkaplan />
        <div className="sayfa">
          <Navbar ad={cv.adSoyad} />
          <main className="icerik">{children}</main>
          <footer className="altbilgi">
            <span>© {new Date().getFullYear()} {cv.footer}</span>
            <span className="altbilgi-linkler">
              <a href={cv.iletisim.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href={cv.iletisim.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
              <Link href="/iletisim">İletişim</Link>
            </span>
          </footer>
        </div>
        <Selale />
      </body>
    </html>
  );
}
