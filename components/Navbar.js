'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Ikon from './Ikon';

const SEKMELER = [
  { href: '/', ad: 'Hakkımda' },
  { href: '/egitim', ad: 'Eğitim & Kurslar' },
  { href: '/projeler', ad: 'Projeler' },
  { href: '/tasarimlar', ad: 'Tasarımlar' },
  { href: '/iletisim', ad: 'İletişim', cta: true },
];

export default function Navbar({ ad }) {
  const yol = usePathname();
  return (
    <nav className="menu" aria-label="Ana menü">
      <Link href="/" className="marka">
        <span className="marka-ikon"><Ikon ad="grafik" renk="#ffffff" boyut={18} kalinlik={2.2} /></span>
        {ad}
      </Link>
      <div className="menu-linkler">
        {SEKMELER.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className={`menu-link ${s.cta ? 'cta' : ''} ${yol === s.href ? 'aktif' : ''}`}
            aria-current={yol === s.href ? 'page' : undefined}
          >
            {s.ad}
          </Link>
        ))}
      </div>
    </nav>
  );
}
