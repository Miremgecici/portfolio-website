import Link from 'next/link';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export default async function AdminAnaSayfa() {
  await requireAdmin();

  const [[mesaj], [tasarim]] = await Promise.all([
    sql`SELECT COUNT(*)::int AS sayi FROM iletisim_mesajlari WHERE okundu = false`,
    sql`SELECT COUNT(*)::int AS sayi,
               COUNT(*) FILTER (WHERE yayinda = true AND musteri_izni = true)::int AS gorunen
        FROM tasarimlar`,
  ]);

  return (
    <div className="stack">
      <div>
        <span className="eyebrow">Genel bakış</span>
        <h1>Hoş geldin İrem</h1>
      </div>
      <div className="stats">
        <Link href="/admin/mesajlar" className="stat">
          <div className="num">{mesaj.sayi}</div>
          <div className="lbl">Okunmamış mesaj</div>
        </Link>
        <Link href="/admin/tasarimlar" className="stat">
          <div className="num">{tasarim.sayi}</div>
          <div className="lbl">Toplam tasarım kaydı</div>
        </Link>
        <Link href="/tasarimlar" target="_blank" className="stat">
          <div className="num">{tasarim.gorunen}</div>
          <div className="lbl">Sitede görünen tasarım</div>
        </Link>
      </div>
      <p className="muted small">
        Oturumunuz 30 dakika işlem yapılmazsa veya girişten 2 saat sonra kendiliğinden kapanır.
      </p>
    </div>
  );
}
