# Ders notu — hangi dosya ne yapıyor?

Derste "şunu açıkla" dendiğinde bakman gereken dosyalar ve kısa cevaplar.

## 1. Veritabanı bağlantısı — `lib/db.js`

- Neon'a `DATABASE_URL` ile bağlanır. Adres kodda yazmaz; Vercel'de "Environment Variables"ta,
  bilgisayarda `.env.local`'da durur. `.gitignore` sayesinde GitHub'a gitmez.
- Sorgular hep şöyle yazılır: ``sql`SELECT * FROM tasarimlar WHERE id = ${id}` ``
  `${...}` içindeki değer **parametre** olarak ayrı gönderilir; SQL metnine yapıştırılmaz.
  Bu yüzden biri forma `' OR 1=1 --` yazsa bile bu bir **metin** olarak aranır, komut olarak çalışmaz.
  → **SQL injection koruması.**

## 2. Giriş ve oturum — `app/giris/actions.js`, `lib/auth.js`

**Giriş (`girisYap`):**
1. E-postaya göre `yoneticiler` tablosundan `sifre_hash` okunur.
2. `bcrypt.compare(yazilanSifre, sifre_hash)` → şifre doğru mu? (Şifrenin kendisi hiçbir yerde tutulmaz.)
3. Yanlışsa — kullanıcı olsun olmasın — tek mesaj: **"E-posta veya şifre hatalı"**.
   (Saldırgan hangi e-postanın kayıtlı olduğunu öğrenemez.)
4. Doğruysa `crypto.randomBytes(32).toString('hex')` ile tahmin edilemez bir **token** üretilir,
   `oturumlar` tablosuna 2 saat geçerli olacak şekilde, tarayıcı bilgisiyle (`cihaz`) kaydedilir.
5. Token **httpOnly** bir çereze yazılır.

**Her panel sayfasında (`requireAdmin` → `getAdmin`):**
- Çerezdeki token `oturumlar` tablosunda aranır. Geçerli sayılması için:
  `bitis > now()` (2 saat dolmamış) **VE** `son_aktivite > now() - interval '30 minutes'` (30 dk boşta kalınmamış).
- Geçerliyse `son_aktivite` şimdiki zamana güncellenir; değilse `/giris`'e yönlendirilir.
- Panelin **her Server Action'ı** (ekle, sil, güncelle…) da ilk satırda `requireAdmin()` çağırır.

**Çıkış (`app/admin/actions.js`):** oturum satırı `DELETE` ile silinir, çerez temizlenir.

**Çerez ayarları (raporda soruluyor):**
| Ayar | Ne yapar | Hangi saldırıya karşı |
| --- | --- | --- |
| `httpOnly` | JavaScript çerezi okuyamaz (`document.cookie`) | **XSS** ile token çalınması |
| `secure` | Çerez yalnızca HTTPS ile gönderilir | Ağ dinleme / **ortadaki adam** |
| `sameSite: 'lax'` | Başka sitelerden gelen isteklerde çerez gönderilmez | **CSRF** |

## 3. Görev 6 — `app/admin/oturumlar/`

- Açık oturumları listeler: cihaz (user-agent) ve son aktivite.
- "Diğer tüm oturumları kapat":
  `DELETE FROM oturumlar WHERE yonetici_id = ${id} AND token <> ${benimToken}`
  → kendi oturumun hariç hepsini siler. Öbür tarayıcı bir sonraki tıklamada `/giris`'e düşer.
- "Süresi dolmuşları temizle": `sorgular.sql`'deki Görev 6 DELETE sorgusu.

## 4. Panel — `app/admin/tasarimlar/actions.js`, `app/admin/mesajlar/actions.js`

| İşlem | SQL |
| --- | --- |
| Liste (kategori adıyla) | `SELECT … FROM tasarimlar d LEFT JOIN tasarim_turleri t ON t.id = d.kategori_id` |
| Ekle | `INSERT INTO tasarimlar (...) VALUES (${...})` |
| Düzenle | `UPDATE tasarimlar SET … WHERE id = ${id}` |
| Sil | `DELETE FROM tasarimlar WHERE id = ${id}` |
| Yayında / değil | `UPDATE tasarimlar SET yayinda = NOT yayinda WHERE id = ${id}` |
| Mesaj okundu | `UPDATE iletisim_mesajlari SET okundu = NOT okundu WHERE id = ${id}` |
| Ana sayfa sayıları | `SELECT COUNT(*) … WHERE okundu = false` ve `SELECT COUNT(*) FROM tasarimlar` |

Formdaki her alan **sunucuda** da kontrol edilir (boş başlık, çok uzun metin, geçersiz tarih…).
Tarayıcıdaki kontroller atlanabileceği için tek başına yeterli değildir.

## 5. Sitede gösterim — `app/(site)/tasarimlar/page.js`

- Yalnızca `yayinda = true AND musteri_izni = true` olanlar gösterilir.
- **Öne çıkanlar** = Görev 3.2 sorgusu (`ORDER BY tarih DESC NULLS LAST LIMIT 3`).
- `export const dynamic = 'force-dynamic'` → sayfa önbelleğe alınmaz; panelden eklenen kayıt
  yenileyince hemen görünür. Panel işlemlerinden sonra ayrıca `revalidatePath(...)` çağrılır.

## 6. İletişim formu — `app/(site)/iletisim/actions.js`

- Ad soyad (2–100), e-posta (geçerli biçim), mesaj (10–2000 karakter) ve **KVKK onayı** sunucuda kontrol edilir.
- Geçerliyse `INSERT INTO iletisim_mesajlari (ad_soyad, eposta, mesaj, kvkk_onay) …`
- Sayfada KVKK aydınlatma metni var (veri sorumlusu, amaç, saklama süresi, haklar).

## 7. Görev 7 — `app/(site)/lisanslar/page.js`

- `ucuncu_taraf_varliklar` tablosunu listeler ve `GROUP BY lisans` ile sayar.
- Arka plan görseli Freepik'ten; ücretsiz lisans **atıf** istediği için sitenin alt bilgisinde
  "Arka plan görseli: Freepik" yazıyor.

## Klasör yapısı (kısaca)

```
app/(site)/   → ziyaretçi sayfaları (menü + arka plan ortak: (site)/layout.js)
app/giris/    → giriş sayfası
app/admin/    → yönetim paneli (layout.js her sayfada requireAdmin çağırır)
lib/          → db.js (bağlantı), auth.js (oturum), format.js (tarih yazımı)
content/cv.js → Hakkımda / eğitim / projeler yazıları
sql/          → sorgular.sql
```
