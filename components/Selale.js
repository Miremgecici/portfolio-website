'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Eski sitedeki "şelale" giriş animasyonu: sayfa açılınca kartlar sırayla
// yukarıdan akarak gelir. JavaScript çalışmazsa içerik zaten görünür kalır.
const SECICILER = [
  '.hero', '.ozet', '.sayfa-baslik', '.bolum-baslik', '.yetenek', '.deneyim',
  '.egitim-kart', '.kurs', '.filtre', '.proje', '.iletisim-kart', '.form-kart',
].join(', ');

export default function Selale() {
  const yol = usePathname();
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    document.querySelectorAll('.icerik').forEach((kap) => {
      kap.querySelectorAll(SECICILER).forEach((el, i) => {
        el.classList.remove('waterfall-cascade-item');
        void el.offsetWidth;
        el.style.animationDelay = `${(0.04 + i * 0.06).toFixed(3)}s`;
        el.classList.add('waterfall-cascade-item');
      });
    });
  }, [yol]);
  return null;
}
