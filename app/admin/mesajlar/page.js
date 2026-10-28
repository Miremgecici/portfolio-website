import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';
import { zamanYaz } from '@/lib/format';
import OnayliDugme from '@/components/OnayliDugme';
import { okunduDegistir, mesajSil } from './actions';

export const dynamic = 'force-dynamic';

export default async function AdminMesajlar() {
  await requireAdmin();

  // Yeniden eskiye
  const mesajlar = await sql`
    SELECT id, ad_soyad, eposta, mesaj, kvkk_onay, okundu, gonderim_zamani
    FROM iletisim_mesajlari
    ORDER BY gonderim_zamani DESC`;

  const okunmamis = mesajlar.filter((m) => !m.okundu).length;

  return (
    <div className="stack">
      <div>
        <span className="eyebrow">İletişim formu</span>
        <h1>Mesajlar</h1>
        <p className="muted">{mesajlar.length} mesaj · {okunmamis} okunmamış</p>
      </div>

      {mesajlar.length === 0 && <p className="empty">Henüz mesaj yok.</p>}

      {mesajlar.map((m) => (
        <article key={m.id} className={`msg ${m.okundu ? '' : 'unread'}`}>
          <header>
            <div>
              <strong>{m.ad_soyad}</strong>{' '}
              <a href={`mailto:${m.eposta}`} className="small muted">{m.eposta}</a>
            </div>
            <div className="row-actions">
              {!m.okundu && <span className="tag">Yeni</span>}
              {m.kvkk_onay ? <span className="tag sage">KVKK onaylı</span> : <span className="tag danger">KVKK onayı yok</span>}
              <span className="small muted">{zamanYaz(m.gonderim_zamani)}</span>
            </div>
          </header>
          <p>{m.mesaj}</p>
          <div className="row-actions" style={{ display: 'flex', gap: 8 }}>
            <form action={okunduDegistir}>
              <input type="hidden" name="id" value={m.id} />
              <button type="submit" className="btn ghost sm">
                {m.okundu ? 'Okunmadı yap' : 'Okundu işaretle'}
              </button>
            </form>
            <form action={mesajSil}>
              <input type="hidden" name="id" value={m.id} />
              <OnayliDugme mesaj="Bu mesaj kalıcı olarak silinsin mi?">Sil</OnayliDugme>
            </form>
          </div>
        </article>
      ))}
    </div>
  );
}
