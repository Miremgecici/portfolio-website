# Müesser İrem Geçici · Portfolyo

Next.js (App Router) ile yapılmış kişisel portfolyo sitesi. Eski sitenin (`miremgecici/portfolio-website`)
mor veri ağı kimliği ve tüm içeriği korunarak yenilendi.

## Çalıştırma

```
npm install
npm run dev
```

Tarayıcıda http://localhost:3000 adresini açın.

## Sayfalar

| Adres | Dosya | İçerik |
| --- | --- | --- |
| `/` | `app/page.js` | Hakkımda: tanıtım, fotoğraf, özet, yetenekler, deneyimler |
| `/egitim` | `app/egitim/page.js` | Üniversite, diller, kurslar |
| `/projeler` | `app/projeler/` | Projeler ve durum filtresi |
| `/iletisim` | `app/iletisim/` | E-posta, LinkedIn, GitHub ve mesaj formu |

## İçeriği değiştirme

Bütün yazılar **`content/cv.js`** dosyasında. Sayfaların kodunu açmadan yeni proje, kurs, yetenek ya da
deneyim ekleyebilirsiniz.

- **Profil fotoğrafı:** resmi `public/assets/` klasörüne koyun, `cv.js` içinde `profilFoto: '/assets/foto.jpg'` yazın.
- **Renkler:** `app/globals.css` dosyasının en üstündeki `:root` bölümünde.
- **Arka plan animasyonu:** `components/Arkaplan.js`.
- **İletişim formu:** şimdilik FormSubmit ile e-postaya gönderiyor. İlk mesajda FormSubmit,
  iremgecici2@gmail.com adresine bir aktivasyon e-postası yollar; bir kez onaylamanız gerekir.

## Eski siteden farklar

- Ziyaretçilerin de gördüğü "Düzenleme modu" kaldırıldı (değişiklikler yalnızca o tarayıcıya kaydediliyordu).
- Emoji yerine çizgi ikonlar, yüzen menü, Hakkımda sayfasında özet şeridi.
- Adresler: `index.html` → `/`, `education.html` → `/egitim`, `projects.html` → `/projeler`, `contact.html` → `/iletisim`.
