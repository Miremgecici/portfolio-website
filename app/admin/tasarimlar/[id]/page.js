import Link from 'next/link';
import { notFound } from 'next/navigation';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';
import TasarimFormu from '../TasarimFormu';
import { tasarimGuncelle } from '../actions';

export const dynamic = 'force-dynamic';

export default async function TasarimDuzenle({ params, searchParams }) {
  await requireAdmin();
  const { id } = await params;
  const { hata } = await searchParams;
  if (!/^\d+$/.test(id)) notFound();

  const [rows, turler] = await Promise.all([
    sql`
      SELECT id, baslik, gorsel_url, musteri, sure_saat, musteri_izni, kategori_id, yayinda,
             to_char(tarih, 'YYYY-MM-DD') AS tarih_str
      FROM tasarimlar WHERE id = ${Number(id)}`,
    sql`SELECT id, ad FROM tasarim_turleri ORDER BY ad`,
  ]);
  const t = rows[0];
  if (!t) notFound();

  return (
    <div className="stack" style={{ maxWidth: 720 }}>
      <div>
        <Link href="/admin/tasarimlar" className="small">← Tasarımlara dön</Link>
        <h1 style={{ marginTop: 12 }}>Tasarımı düzenle</h1>
      </div>
      {hata && <div className="alert error" role="alert">{hata}</div>}
      <section className="panel">
        <TasarimFormu action={tasarimGuncelle} turler={turler} t={t} dugme="Değişiklikleri kaydet" />
      </section>
    </div>
  );
}
