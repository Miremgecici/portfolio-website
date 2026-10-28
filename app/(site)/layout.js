import Link from 'next/link';
import { cv } from '@/content/cv';
import Arkaplan from '@/components/Arkaplan';
import Navbar from '@/components/Navbar';
import Selale from '@/components/Selale';

// Ziyaretçilerin gördüğü sayfaların ortak iskeleti: arka plan, menü, alt bilgi.
export default function SiteLayout({ children }) {
  return (
    <>
      <Arkaplan />
      <div className="sayfa">
        <Navbar ad={cv.adSoyad} />
        <main className="icerik">{children}</main>
        <footer className="altbilgi">
          <span>© {new Date().getFullYear()} {cv.footer}</span>
          <span className="altbilgi-linkler">
            <a href={cv.iletisim.linkedinUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={cv.iletisim.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
            <Link href="/lisanslar">Lisanslar &amp; Atıflar</Link>
          </span>
          <span className="atif">
            Arka plan görseli: <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer">Freepik</a>
          </span>
        </footer>
      </div>
      <Selale />
    </>
  );
}
