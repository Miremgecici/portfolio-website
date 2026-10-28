-- =====================================================================
-- BVA 2205 · 2516016027 · Müesser İrem Geçici
-- sorgular.sql — Neon SQL Editor'de çalıştırılan bütün SQL komutları
-- (çalıştırılma sırasıyla)
-- =====================================================================


-- Görev 1 — Ortak tablolar
CREATE TABLE yoneticiler (
  id         SERIAL PRIMARY KEY,
  eposta     TEXT UNIQUE NOT NULL,
  sifre_hash TEXT NOT NULL,
  olusturma  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE oturumlar (
  token       TEXT PRIMARY KEY,
  yonetici_id INT NOT NULL REFERENCES yoneticiler(id) ON DELETE CASCADE,
  bitis       TIMESTAMPTZ NOT NULL
);

CREATE TABLE iletisim_mesajlari (
  id              SERIAL PRIMARY KEY,
  ad_soyad        TEXT NOT NULL,
  eposta          TEXT NOT NULL,
  mesaj           TEXT NOT NULL,
  kvkk_onay       BOOLEAN NOT NULL DEFAULT false,
  okundu          BOOLEAN NOT NULL DEFAULT false,
  gonderim_zamani TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Görev 1 — Yönetici hesabı
-- Şifre özeti terminalde üretildi:
--   node -e "console.log(require('bcryptjs').hashSync('ŞİFRE', 12))"
-- (Gerçek özet güvenlik nedeniyle bu dosyaya yazılmadı.)
INSERT INTO yoneticiler (eposta, sifre_hash)
VALUES ('iremgecici2@gmail.com', '$2b$12$...');


-- Görev 2 — Tasarım Çalışmalarım tabloları
CREATE TABLE tasarim_turleri (
  id SERIAL PRIMARY KEY,
  ad TEXT NOT NULL UNIQUE
);

CREATE TABLE tasarimlar (
  id           SERIAL PRIMARY KEY,
  baslik       TEXT NOT NULL,
  gorsel_url   TEXT,
  musteri      TEXT,
  tarih        DATE,
  sure_saat    INT,
  musteri_izni BOOLEAN DEFAULT false,
  kategori_id  INT REFERENCES tasarim_turleri(id) ON DELETE SET NULL,
  yayinda      BOOLEAN NOT NULL DEFAULT true,
  olusturma    TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Görev 2 — Veriler
INSERT INTO tasarim_turleri (ad) VALUES
  ('Afiş'),
  ('Sunum'),
  ('Dashboard'),
  ('Arayüz'),
  ('Sosyal Medya'),
  ('Logo');

INSERT INTO tasarimlar (baslik, gorsel_url, musteri, tarih, sure_saat, musteri_izni, kategori_id)
VALUES ('Taslak: kulüp tanıtım broşürü', NULL, 'MCBÜ Veri Bilimi Kulübü', NULL, NULL, NULL, NULL);

INSERT INTO tasarimlar (baslik, gorsel_url, musteri, tarih, sure_saat, musteri_izni, kategori_id) VALUES
  ('Dijital Bağımlılık kampanya posteri', '/tasarimlar/01.svg', 'MCBÜ Sosyal Sorumluluk Projesi', '2026-04-15', 12, true, 1),
  ('Dijital Bağımlılık proje sunumu', '/tasarimlar/02.svg', 'MCBÜ Sosyal Sorumluluk Projesi', '2026-04-22', 9, true, 2),
  ('Öğrenci rotaları maliyet analizi BI dashboard', '/tasarimlar/03.svg', NULL, '2026-06-05', 26, true, 3),
  ('2516016027 – Portfolyo sitesi arayüz tasarımı', '/tasarimlar/04.svg', NULL, '2026-10-20', 20, true, 4),
  ('E-ticaret müşteri segmentleri dashboard taslağı', '/tasarimlar/05.svg', NULL, '2026-09-18', 14, true, 3),
  ('Veri Bilimi Kulübü tanışma etkinliği afişi', '/tasarimlar/06.svg', 'MCBÜ Veri Bilimi Kulübü', '2025-11-03', 4, true, 1),
  ('Kafe kampanyası Instagram gönderi seti', '/tasarimlar/07.svg', 'Yerel bir kafe', '2026-02-14', 7, false, 5),
  ('Finansal trend tahmin paneli arayüzü', '/tasarimlar/08.svg', NULL, '2026-10-02', NULL, true, 4),
  ('Excel pivot raporu kapak ve grafik şablonu', '/tasarimlar/09.svg', 'Staj başvuru dosyası', '2025-12-10', 3, false, 2),
  ('Python eğitimi ders notu kapakları', '/tasarimlar/10.svg', NULL, '2026-01-20', 5, true, 5);


-- Görev 3.1
SELECT id, baslik, musteri, sure_saat
FROM tasarimlar
WHERE musteri_izni = true AND sure_saat > 10
ORDER BY sure_saat DESC;

-- Görev 3.2
SELECT id, baslik, tarih
FROM tasarimlar
ORDER BY tarih DESC NULLS LAST
LIMIT 3;

-- Görev 3.3
SELECT COALESCE(musteri, '(Kişisel çalışma)') AS musteri,
       SUM(sure_saat) AS toplam_saat,
       COUNT(*) AS tasarim_sayisi
FROM tasarimlar
GROUP BY musteri
ORDER BY toplam_saat DESC NULLS LAST;

-- Görev 3.4
SELECT t.ad AS tur, COUNT(d.id) AS tasarim_sayisi
FROM tasarim_turleri t
LEFT JOIN tasarimlar d ON d.kategori_id = t.id
GROUP BY t.id, t.ad
ORDER BY tasarim_sayisi DESC, t.ad;

-- Görev 3.5
SELECT *
FROM tasarimlar
WHERE baslik ILIKE '%2516016027%';

-- Görev 3.6 (önce kontrol)
SELECT id, baslik, musteri_izni, yayinda FROM tasarimlar
WHERE musteri_izni IS NOT TRUE;

-- Görev 3.6
UPDATE tasarimlar
SET yayinda = false
WHERE musteri_izni IS NOT TRUE;

-- Görev 3.7 (önce kontrol)
SELECT id, baslik, gorsel_url FROM tasarimlar
WHERE gorsel_url IS NULL OR gorsel_url = '';

-- Görev 3.7
DELETE FROM tasarimlar
WHERE gorsel_url IS NULL OR gorsel_url = '';


-- Görev 6 — oturumlar tablosuna sütun ekleme
ALTER TABLE oturumlar
  ADD COLUMN son_aktivite TIMESTAMPTZ NOT NULL DEFAULT now(),
  ADD COLUMN cihaz TEXT;

-- Görev 6 — süresi dolmuş tüm oturumları silen sorgu
DELETE FROM oturumlar
WHERE bitis <= now()
   OR son_aktivite <= now() - interval '30 minutes';


-- Görev 7 — üçüncü taraf varlıklar
CREATE TABLE ucuncu_taraf_varliklar (
  id           SERIAL PRIMARY KEY,
  ad           TEXT NOT NULL,
  tur          TEXT NOT NULL,
  kaynak_url   TEXT,
  lisans       TEXT NOT NULL,
  atif_gerekli BOOLEAN NOT NULL DEFAULT false
);

INSERT INTO ucuncu_taraf_varliklar (ad, tur, kaynak_url, lisans, atif_gerekli) VALUES
  ('Next.js', 'Çerçeve', 'https://github.com/vercel/next.js', 'MIT', false),
  ('React', 'Kütüphane', 'https://github.com/facebook/react', 'MIT', false),
  ('@neondatabase/serverless', 'Kütüphane', 'https://github.com/neondatabase/serverless', 'MIT', false),
  ('bcryptjs', 'Kütüphane', 'https://github.com/dcodeIO/bcrypt.js', 'BSD-3-Clause', false),
  ('Plus Jakarta Sans', 'Font', 'https://fonts.google.com/specimen/Plus+Jakarta+Sans', 'OFL-1.1', false),
  ('JetBrains Mono', 'Font', 'https://fonts.google.com/specimen/JetBrains+Mono', 'OFL-1.1', false),
  ('Arka plan görseli (light_beams_bg.jpg)', 'Görsel', 'https://www.freepik.com', 'Freepik Ücretsiz Lisans', true),
  ('Tasarım çalışması görselleri', 'Görsel', NULL, 'Tüm hakları saklıdır (kendi eserim)', false);

-- Görev 7 — lisans türüne göre sayım
SELECT lisans, COUNT(*) AS varlik_sayisi
FROM ucuncu_taraf_varliklar
GROUP BY lisans
ORDER BY varlik_sayisi DESC, lisans;
