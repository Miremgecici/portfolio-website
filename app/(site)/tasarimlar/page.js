import Link from 'next/link';
import { sql } from '@/lib/db';
import TasarimKart from '@/components/TasarimKart';

// Panelden eklenen kayıt, sayfa yenilenince hemen görünsün diye önbelleğe alınmaz.
export const dynamic = 'force-dynamic';
export const metadata = { title: 'Tasarım Çalışmalarım' };

export default async function Tasarimlar({ searchParams }) {
  const { tur } = await searchParams;
  const turId = /^\d+$/.test(tur || '') ? Number(tur) : null;

  let oneCikanlar = [];
  let turler = [];
  let tasarimlar = [];
  let hata = false;

  try {
    // "Öne çıkanlar" — Görev 3.2 sorgusu: en yeni 3 tasarım
    // (sitede yalnızca yayında ve müşteri izni olanlar gösterilir)
    oneCikanlar = await sql`
      SELECT d.id, d.baslik, d.gorsel_url, d.musteri, d.tarih, d.sure_saat, t.ad AS tur
      FROM tasarimlar d
      LEFT JOIN tasarim_turleri t ON t.id = d.kategori_id
      WHERE d.yayinda = true AND d.musteri_izni = true
      ORDER BY d.tarih DESC NULLS LAST
      LIMIT 3`;

    // Filtre düğmeleri: her tür ve o türdeki görünür tasarım sayısı (LEFT JOIN + GROUP BY + COUNT)
    turler = await sql`
      SELECT t.id, t.ad, COUNT(d.id)::int AS sayi
      FROM tasarim_turleri t
      LEFT JOIN tasarimlar d
        ON d.kategori_id = t.id AND d.yayinda = true AND d.musteri_izni = true
      GROUP BY t.id, t.ad
      ORDER BY t.ad`;

    // Bütün görünür tasarımlar. turId boşsa filtre uygulanmaz.
    tasarimlar = await sql`
      SELECT d.id, d.baslik, d.gorsel_url, d.musteri, d.tarih, d.sure_saat, t.ad AS tur
      FROM tasarimlar d
      LEFT JOIN tasarim_turleri t ON t.id = d.kategori_id
      WHERE d.yayinda = true AND d.musteri_izni = true
        AND (${turId}::int IS NULL OR d.kategori_id = ${turId}::int)
      ORDER BY d.tarih DESC NULLS LAST, d.id DESC`;
  } catch (e) {
    console.error('Tasarımlar okunamadı:', e.message);
    hata = true;
  }

  const toplam = turler.reduce((a, t) => a + t.sayi, 0);

  return (
    <>
      <header className="sayfa-baslik">
        <div className="kod-satiri">&gt; SELECT * FROM tasarimlar WHERE yayinda AND musteri_izni;</div>
        <h1>Tasarım Çalışmalarım</h1>
        <p>
          Afiş, sunum, dashboard ve arayüz tasarımlarımdan bir seçki. Bir kurum ya da müşteri için yaptığım işler
          yalnızca yayımlama izni olduğunda burada yer alır.
        </p>
      </header>

      {hata && <div className="uyari hata">Tasarımlar şu an yüklenemedi, lütfen biraz sonra tekrar deneyin.</div>}

      {oneCikanlar.length > 0 && (
        <section className="bolum">
          <div className="bolum-baslik">
            <h2>Öne çıkanlar</h2>
            <span className="not">en yeni 3 çalışma</span>
          </div>
          <div className="tasarim-izgara">
            {oneCikanlar.map((t) => <TasarimKart key={t.id} t={t} />)}
          </div>
        </section>
      )}

      <section className="bolum">
        <div className="bolum-baslik">
          <h2>Tüm çalışmalar</h2>
        </div>
        <div className="filtre" aria-label="Türe göre filtrele">
          <Link href="/tasarimlar" scroll={false} className={turId === null ? 'aktif' : ''}>Tümü ({toplam})</Link>
          {turler.filter((t) => t.sayi > 0).map((t) => (
            <Link
              key={t.id}
              href={`/tasarimlar?tur=${t.id}`}
              scroll={false}
              className={turId === t.id ? 'aktif' : ''}
            >
              {t.ad} ({t.sayi})
            </Link>
          ))}
        </div>
        {tasarimlar.length ? (
          <div className="tasarim-izgara">
            {tasarimlar.map((t) => <TasarimKart key={t.id} t={t} />)}
          </div>
        ) : (
          !hata && <div className="cam-kart bos">Bu kategoride gösterilecek tasarım yok.</div>
        )}
      </section>
    </>
  );
}
