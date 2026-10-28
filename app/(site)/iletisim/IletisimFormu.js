'use client';

import { useActionState } from 'react';
import { mesajGonder } from './actions';

// İletişim formu. Gönderilen mesaj sunucuda kontrol edilip iletisim_mesajlari tablosuna kaydedilir.
export default function IletisimFormu({ eposta }) {
  const [durum, gonder, bekliyor] = useActionState(mesajGonder, null);

  if (durum?.ok) {
    return (
      <div className="uyari basari" role="status">
        Teşekkürler! Mesajın bana ulaştı, en kısa sürede {eposta} adresimden dönüş yapacağım.
      </div>
    );
  }

  const h = durum?.hatalar ?? {};
  const d = durum?.degerler ?? {};

  return (
    <form action={gonder} className="form" noValidate>
      {durum?.genelHata && <div className="uyari hata" role="alert">{durum.genelHata}</div>}

      <div className="form-satir">
        <div className="alan">
          <label htmlFor="ad_soyad">Adınız &amp; Soyadınız *</label>
          <input id="ad_soyad" name="ad_soyad" type="text" placeholder="Örn: Ahmet Yılmaz" required maxLength={100} defaultValue={d.ad_soyad} autoComplete="name" />
          {h.ad_soyad && <span className="alan-hata">{h.ad_soyad}</span>}
        </div>
        <div className="alan">
          <label htmlFor="eposta">E-posta adresiniz *</label>
          <input id="eposta" name="eposta" type="email" placeholder="adiniz@example.com" required maxLength={254} defaultValue={d.eposta} autoComplete="email" />
          {h.eposta && <span className="alan-hata">{h.eposta}</span>}
        </div>
      </div>

      <div className="alan">
        <label htmlFor="konu">Konu</label>
        <input id="konu" name="konu" type="text" placeholder="Örn: Proje teklifi / Veri analizi iş birliği" maxLength={150} defaultValue={d.konu} />
        {h.konu && <span className="alan-hata">{h.konu}</span>}
      </div>

      <div className="alan">
        <label htmlFor="mesaj">Mesajınız *</label>
        <textarea id="mesaj" name="mesaj" placeholder="İletmek istediğiniz notu veya detayları buraya yazın..." required minLength={10} maxLength={2000} defaultValue={d.mesaj} />
        {h.mesaj && <span className="alan-hata">{h.mesaj}</span>}
      </div>

      {/* Botlar için tuzak alan — gerçek ziyaretçiler görmez */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="web_sitesi">Web siteniz</label>
        <input id="web_sitesi" name="web_sitesi" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="onay">
        <input type="checkbox" name="kvkk_onay" required />
        <span>
          Aşağıdaki <a href="#aydinlatma">KVKK aydınlatma metnini</a> okudum; adımın, e-posta adresimin ve mesajımın
          yalnızca bu mesaja yanıt verilmesi amacıyla işlenmesini kabul ediyorum. *
        </span>
      </label>
      {h.kvkk_onay && <span className="alan-hata">{h.kvkk_onay}</span>}

      <div className="form-dugmeler">
        <button type="submit" className="dugme" disabled={bekliyor}>
          {bekliyor ? 'Gönderiliyor…' : 'Mesajı gönder'}
        </button>
      </div>
    </form>
  );
}
