import { neon } from '@neondatabase/serverless';

// Veritabanı bağlantısı. Adres .env.local dosyasındaki (Vercel'de: Environment
// Variables) DATABASE_URL değişkeninden okunur; şifre koda hiç yazılmaz.
//
// Yönergedeki hâli:   export const sql = neon(process.env.DATABASE_URL);
// Buradaki tek fark: bağlantıyı dosya yüklenirken değil, İLK SORGUDA kuruyoruz.
// Böylece DATABASE_URL henüz eklenmemişken site derlenirken çökmez.
let baglanti;

export function sql(...args) {
  if (!baglanti) baglanti = neon(process.env.DATABASE_URL);
  return baglanti(...args);
}

// KULLANIM — değişkenler HER ZAMAN ${...} içinde verilir:
//   const kayitlar = await sql`SELECT * FROM tasarimlar WHERE id = ${id}`;
// Kütüphane bunları parametre olarak gönderir ve SQL injection'ı engeller.
// Metni + ile birleştirip SQL oluşturmak YASAK.
