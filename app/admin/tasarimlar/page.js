import Link from 'next/link';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';
import { tarihYaz } from '@/lib/format';
import OnayliDugme from '@/components/OnayliDugme';
import TasarimFormu from './TasarimFormu';
import { tasarimEkle, tasarimSil, yayinDegistir, turEkle, turSil } from './actions';

export const dynamic = 'force-dynamic';

const BILDIRIM = {
  eklendi: 'Tasarım eklendi.',
  guncellendi: 'Tasarım güncellendi.',
  silindi: 'Tasarım silindi.',
  tur: 'Tür eklendi.',
  tursilindi: 'Tür silindi.',
};

export default async function AdminTasarimlar({ searchParams }) {
  await requireAdmin();
  const { ok, hata } = await searchParams;

  // Kayıtları kategori adıyla birlikte listele (JOIN)
  const [tasarimlar, turler] = await Promise.all([
    sql`
      SELECT d.id, d.baslik, d.gorsel_url, d.musteri, d.tarih, d.sure_saat,
             d.musteri_izni, d.yayinda, t.ad AS tur
      FROM tasarimlar d
      LEFT JOIN tasarim_turleri t ON t.id = d.kategori_id
      ORDER BY d.tarih DESC NULLS LAST, d.id DESC`,
    sql`
      SELECT t.id, t.ad, COUNT(d.id)::int AS sayi
      FROM tasarim_turleri t
      LEFT JOIN tasarimlar d ON d.kategori_id = t.id
      GROUP BY t.id, t.ad
      ORDER BY t.ad`,
  ]);

  return (
    <div className="stack">
      <div>
        <span className="eyebrow">Tasarım Çalışmalarım</span>
        <h1>Tasarımlar</h1>
      </div>

      {ok && BILDIRIM[ok] && <div className="alert success" role="status">{BILDIRIM[ok]}</div>}
      {hata && <div className="alert error" role="alert">{hata}</div>}

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th><th>Başlık</th><th>Tür</th><th>Müşteri</th><th>Tarih</th><th>Saat</th><th>Durum</th><th>İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {tasarimlar.length === 0 && (
              <tr><td colSpan={8} className="muted">Henüz kayıt yok.</td></tr>
            )}
            {tasarimlar.map((t) => (
              <tr key={t.id}>
                <td>
                  {t.gorsel_url
                    // eslint-disable-next-line @next/next/no-img-element
                    ? <img src={t.gorsel_url} alt="" className="thumb" />
                    : <div className="thumb" />}
                </td>
                <td><strong>{t.baslik}</strong></td>
                <td>{t.tur ?? <span className="muted">—</span>}</td>
                <td>{t.musteri ?? <span className="muted">—</span>}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{tarihYaz(t.tarih)}</td>
                <td>{t.sure_saat ?? '—'}</td>
                <td>
                  <div className="row-actions">
                    {t.yayinda ? <span className="tag sage">Yayında</span> : <span className="tag gray">Yayında değil</span>}
                    {!t.musteri_izni && <span className="tag danger">İzin yok</span>}
                  </div>
                </td>
                <td>
                  <div className="row-actions">
                    <form action={yayinDegistir}>
                      <input type="hidden" name="id" value={t.id} />
                      <button type="submit" className="btn ghost sm">
                        {t.yayinda ? 'Yayından kaldır' : 'Yayına al'}
                      </button>
                    </form>
                    <Link href={`/admin/tasarimlar/${t.id}`} className="btn ghost sm">Düzenle</Link>
                    <form action={tasarimSil}>
                      <input type="hidden" name="id" value={t.id} />
                      <OnayliDugme>Sil</OnayliDugme>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="two-col" style={{ alignItems: 'start' }}>
        <section className="panel">
          <h2 style={{ fontSize: '1.4rem' }}>Yeni tasarım ekle</h2>
          <TasarimFormu action={tasarimEkle} turler={turler} dugme="Kaydet" />
        </section>

        <section className="panel">
          <h2 style={{ fontSize: '1.4rem' }}>Tasarım türleri</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'grid', gap: 8 }}>
            {turler.map((k) => (
              <li key={k.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                <span>{k.ad} <span className="muted small">· {k.sayi} kayıt</span></span>
                <form action={turSil}>
                  <input type="hidden" name="id" value={k.id} />
                  <OnayliDugme mesaj={`"${k.ad}" türü silinsin mi? Bu türdeki tasarımlar silinmez, türleri boşalır.`}>Sil</OnayliDugme>
                </form>
              </li>
            ))}
          </ul>
          <form action={turEkle} className="form" style={{ gridTemplateColumns: '1fr auto', alignItems: 'end' }}>
            <div className="field">
              <label htmlFor="tur_ad">Yeni tür</label>
              <input id="tur_ad" name="ad" type="text" required maxLength={60} placeholder="ör. Kitap kapağı" />
            </div>
            <button type="submit" className="btn">Ekle</button>
          </form>
        </section>
      </div>
    </div>
  );
}
