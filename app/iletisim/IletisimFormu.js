'use client';

import { useState } from 'react';

// Şimdilik mesajlar eski sitedeki gibi FormSubmit servisiyle e-postana gönderiliyor.
// (Ödevde bu form veritabanına kaydedecek şekilde değiştirilecek.)
export default function IletisimFormu({ eposta }) {
  const [durum, setDurum] = useState(null); // null | 'gonderiliyor' | 'basari' | 'hata'
  const [hatalar, setHatalar] = useState([]);

  function kontrolEt(veri) {
    const h = [];
    if ((veri.get('name') || '').trim().length < 2) h.push('Ad soyad en az 2 karakter olmalı.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((veri.get('email') || '').trim())) h.push('Geçerli bir e-posta adresi girin.');
    if ((veri.get('message') || '').trim().length < 10) h.push('Mesaj en az 10 karakter olmalı.');
    return h;
  }

  async function gonder(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const veri = new FormData(form);
    const h = kontrolEt(veri);
    setHatalar(h);
    if (h.length) return;

    setDurum('gonderiliyor');
    try {
      const yanit = await fetch(`https://formsubmit.co/ajax/${eposta}`, {
        method: 'POST',
        body: veri,
        headers: { Accept: 'application/json' },
      });
      const sonuc = await yanit.json();
      if (sonuc.success === true || sonuc.success === 'true') {
        setDurum('basari');
        form.reset();
      } else {
        setDurum('hata');
      }
    } catch {
      setDurum('hata');
    }
  }

  function epostaUygulamasi() {
    const f = document.getElementById('iletisim-formu');
    const veri = new FormData(f);
    const konu = veri.get('_subject') || 'Portfolyo İletişim Mesajı';
    const govde = `Gönderen: ${veri.get('name') || ''}\nE-posta: ${veri.get('email') || ''}\n\n${veri.get('message') || ''}`;
    window.location.href = `mailto:${eposta}?subject=${encodeURIComponent(konu)}&body=${encodeURIComponent(govde)}`;
  }

  if (durum === 'basari') {
    return (
      <div className="uyari basari" role="status">
        Teşekkürler! Mesajın bana ulaştı, en kısa sürede {eposta} adresimden dönüş yapacağım.
      </div>
    );
  }

  return (
    <form id="iletisim-formu" className="form" onSubmit={gonder} noValidate>
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />

      {hatalar.length > 0 && (
        <div className="uyari hata" role="alert">
          {hatalar.map((h) => <div key={h}>{h}</div>)}
        </div>
      )}
      {durum === 'hata' && (
        <div className="uyari bilgi" role="alert">
          Mesaj şu an gönderilemedi. &quot;E-posta uygulamasıyla aç&quot; düğmesini deneyebilir ya da doğrudan {eposta} adresine yazabilirsin.
        </div>
      )}

      <div className="form-satir">
        <div className="alan">
          <label htmlFor="ad">Adınız &amp; Soyadınız *</label>
          <input id="ad" name="name" type="text" placeholder="Örn: Ahmet Yılmaz" required maxLength={100} autoComplete="name" />
        </div>
        <div className="alan">
          <label htmlFor="eposta">E-posta adresiniz *</label>
          <input id="eposta" name="email" type="email" placeholder="adiniz@example.com" required maxLength={254} autoComplete="email" />
        </div>
      </div>
      <div className="alan">
        <label htmlFor="konu">Konu</label>
        <input id="konu" name="_subject" type="text" placeholder="Örn: Proje teklifi / Veri analizi iş birliği" maxLength={150} />
      </div>
      <div className="alan">
        <label htmlFor="mesaj">Mesajınız *</label>
        <textarea id="mesaj" name="message" placeholder="İletmek istediğiniz notu veya detayları buraya yazın..." required maxLength={2000} />
      </div>

      <div className="form-dugmeler">
        <button type="submit" className="dugme" disabled={durum === 'gonderiliyor'}>
          {durum === 'gonderiliyor' ? 'Gönderiliyor…' : 'Mesajı gönder'}
        </button>
        <button type="button" className="dugme ikincil" onClick={epostaUygulamasi}>
          E-posta uygulamasıyla aç
        </button>
      </div>
    </form>
  );
}
