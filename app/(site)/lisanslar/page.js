import { sql } from '@/lib/db';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Lisanslar & Atıflar' };

export default async function Lisanslar() {
  let varliklar = [];
  let ozet = [];
  try {
    varliklar = await sql`
      SELECT id, ad, tur, kaynak_url, lisans, atif_gerekli
      FROM ucuncu_taraf_varliklar
      ORDER BY tur, ad`;
    // Görev 7: lisans türüne göre sayım (GROUP BY)
    ozet = await sql`
      SELECT lisans, COUNT(*)::int AS sayi
      FROM ucuncu_taraf_varliklar
      GROUP BY lisans
      ORDER BY sayi DESC, lisans`;
  } catch (e) {
    console.error('Lisanslar okunamadı:', e.message);
  }

  return (
    <>
      <header className="sayfa-baslik">
        <div className="kod-satiri">&gt; SELECT * FROM ucuncu_taraf_varliklar;</div>
        <h1>Lisanslar &amp; Atıflar</h1>
        <p>
          5846 sayılı Fikir ve Sanat Eserleri Kanunu bilgisayar programlarını da eser olarak korur. Bu sitede
          kullandığım, başkalarına ait yazılımları, fontları ve görselleri ve hangi lisansla kullandığımı burada
          listeliyorum.
        </p>
      </header>

      <section className="bolum">
        {ozet.length > 0 && (
          <div className="etiketler">
            {ozet.map((o) => <span key={o.lisans} className="etiket">{o.lisans} · {o.sayi}</span>)}
          </div>
        )}

        {varliklar.length ? (
          <div className="tablo-kutu">
            <table>
              <thead>
                <tr><th>Varlık</th><th>Tür</th><th>Lisans</th><th>Atıf gerekli mi?</th><th>Kaynak</th></tr>
              </thead>
              <tbody>
                {varliklar.map((v) => (
                  <tr key={v.id}>
                    <td><strong>{v.ad}</strong></td>
                    <td>{v.tur}</td>
                    <td><span className="etiket">{v.lisans}</span></td>
                    <td>
                      {v.atif_gerekli
                        ? <span className="durum devam">Evet</span>
                        : <span className="durum tamam">Hayır</span>}
                    </td>
                    <td>
                      {v.kaynak_url
                        ? <a href={v.kaynak_url} target="_blank" rel="noopener noreferrer">Kaynak ↗</a>
                        : <span className="soluk">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="cam-kart bos">Lisans bilgisi şu an yüklenemedi.</div>
        )}
      </section>
    </>
  );
}
