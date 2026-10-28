import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';
import { zamanYaz, cihazOzeti } from '@/lib/format';
import OnayliDugme from '@/components/OnayliDugme';
import { digerOturumlariKapat, suresiDolanlariTemizle } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminOturumlar() {
  const admin = await requireAdmin();

  // Bu yöneticinin AÇIK (süresi dolmamış) oturumları.
  // Token'ı sayfaya yazdırmıyoruz; yalnızca "bu oturum mu?" bilgisini hesaplıyoruz.
  const oturumlar = await sql`
    SELECT cihaz, son_aktivite, bitis, (token = ${admin.token}) AS bu_oturum
    FROM oturumlar
    WHERE yonetici_id = ${admin.id}
      AND bitis > now()
      AND son_aktivite > now() - interval '30 minutes'
    ORDER BY bu_oturum DESC, son_aktivite DESC`;

  const [{ sayi: dolmus }] = await sql`
    SELECT COUNT(*)::int AS sayi FROM oturumlar
    WHERE bitis <= now() OR son_aktivite <= now() - interval '30 minutes'`;

  const digerSayisi = oturumlar.filter((o) => !o.bu_oturum).length;

  return (
    <div className="stack">
      <div>
        <span className="eyebrow">Güvenlik</span>
        <h1>Açık oturumlar</h1>
        <p className="muted" style={{ maxWidth: '64ch' }}>
          30 dakika işlem yapılmayan oturum kendiliğinden kapanır. Ortak bir bilgisayarda oturum açık
          kaldıysa buradan kapatabilirsiniz.
        </p>
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Cihaz</th><th>Son aktivite</th><th>Kesin bitiş</th><th></th></tr>
          </thead>
          <tbody>
            {oturumlar.map((o, i) => (
              <tr key={i}>
                <td>
                  <strong>{cihazOzeti(o.cihaz)}</strong>
                  <div className="small muted" style={{ maxWidth: 420, overflowWrap: 'anywhere' }}>{o.cihaz}</div>
                </td>
                <td style={{ whiteSpace: 'nowrap' }}>{zamanYaz(o.son_aktivite)}</td>
                <td style={{ whiteSpace: 'nowrap' }}>{zamanYaz(o.bitis)}</td>
                <td>{o.bu_oturum && <span className="tag sage">Bu cihaz</span>}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <form action={digerOturumlariKapat}>
          <OnayliDugme className="btn accent" mesaj="Bu cihaz dışındaki tüm oturumlar kapatılsın mı?">
            Diğer tüm oturumları kapat ({digerSayisi})
          </OnayliDugme>
        </form>
        <form action={suresiDolanlariTemizle}>
          <button type="submit" className="btn ghost">Süresi dolmuş oturumları temizle ({dolmus})</button>
        </form>
      </div>
    </div>
  );
}
