import { tarihYaz } from '@/lib/format';

// Tek bir tasarım kartı. Veri, tasarimlar + tasarim_turleri JOIN sorgusundan gelir.
export default function TasarimKart({ t }) {
  return (
    <article className="cam-kart tasarim">
      <div className="tasarim-gorsel">
        {t.gorsel_url ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={t.gorsel_url} alt={t.baslik} loading="lazy" />
        ) : null}
      </div>
      <div className="tasarim-govde">
        <div className="proje-ust">
          <span className="kategori">{t.tur ?? 'Tasarım'}</span>
          {t.sure_saat != null && <span className="etiket">{t.sure_saat} saat</span>}
        </div>
        <h3>{t.baslik}</h3>
        <div className="tasarim-bilgi">
          {t.musteri && <span>{t.musteri}</span>}
          {t.tarih && <span>{tarihYaz(t.tarih)}</span>}
        </div>
      </div>
    </article>
  );
}
