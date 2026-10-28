# Müesser İrem Geçici · Portfolyo + Yönetim Paneli

BVA 2205 Siber Güvenlik ve Bilişim Hukuku — Bireysel ödev · 2516016027
Next.js (App Router) · PostgreSQL (Neon) · SQL

Canlı site: https://portfolyo-muesser-irem-gecici.vercel.app

## Sayfalar

| Adres | İçerik |
| --- | --- |
| `/` | Hakkımda, yetenekler, deneyimler |
| `/egitim` | Üniversite, diller, kurslar |
| `/projeler` | Projeler ve durum filtresi |
| `/tasarimlar` | **Tasarım Çalışmalarım** (veritabanından) + "Öne çıkanlar" |
| `/iletisim` | İletişim kanalları + KVKK onaylı mesaj formu (veritabanına kaydeder) |
| `/lisanslar` | Üçüncü taraf varlıklar ve lisansları (veritabanından) |
| `/giris` | Yönetici girişi |
| `/admin` | Panel: okunmamış mesaj ve tasarım sayıları |
| `/admin/tasarimlar` | Tasarım ekle / düzenle / sil / yayına al-kaldır, tür ekle-sil |
| `/admin/mesajlar` | İletişim mesajları, okundu işaretleme, silme |
| `/admin/oturumlar` | Açık oturumlar, "Diğer tüm oturumları kapat" |

## Kurulum

1. Neon'da tabloları oluşturun: `sql/sorgular.sql` (yönetici şifre özetini kendiniz üretin).
2. Vercel → Settings → Environment Variables → `DATABASE_URL` = Neon bağlantı adresi.
3. Bilgisayarda çalıştırmak için: `.env.example` dosyasını `.env.local` olarak kopyalayıp adresi yazın,
   sonra `npm install` ve `npm run dev`.

`.env.local` GitHub'a **gönderilmez** (`.gitignore` içinde `.env*`).

## İçeriği değiştirme

- Hakkımda / eğitim / projeler / iletişim yazıları: `content/cv.js`
- Tasarım çalışmaları: yönetim panelinden (`/giris`)
- Tasarım görselleri: `public/tasarimlar/` klasörüne koyup panelde `/tasarimlar/dosya.png` yazın

Kodun ayrıntılı açıklaması: **`ODEV_NOTLARI.md`**
