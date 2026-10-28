// Tarih ve metin yardımcıları (Türkiye saatine göre)

export function tarihYaz(deger) {
  if (!deger) return '—';
  const d = deger instanceof Date ? deger : new Date(deger);
  if (Number.isNaN(d.getTime())) return '—';
  return d.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Istanbul' });
}

export function zamanYaz(deger) {
  if (!deger) return '—';
  const d = deger instanceof Date ? deger : new Date(deger);
  return d.toLocaleString('tr-TR', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'Europe/Istanbul' });
}

// "Mozilla/5.0 (Windows NT 10.0; ...) Chrome/130..." → "Chrome · Windows"
export function cihazOzeti(ua) {
  if (!ua) return 'Bilinmeyen cihaz';
  const tarayici =
    /Edg\//.test(ua) ? 'Edge' :
    /OPR\//.test(ua) ? 'Opera' :
    /Firefox\//.test(ua) ? 'Firefox' :
    /Chrome\//.test(ua) ? 'Chrome' :
    /Safari\//.test(ua) ? 'Safari' : 'Tarayıcı';
  const sistem =
    /Windows/.test(ua) ? 'Windows' :
    /Android/.test(ua) ? 'Android' :
    /iPhone|iPad/.test(ua) ? 'iOS' :
    /Mac OS X/.test(ua) ? 'macOS' :
    /Linux/.test(ua) ? 'Linux' : 'Bilinmeyen sistem';
  return `${tarayici} · ${sistem}`;
}
