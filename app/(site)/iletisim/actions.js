'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';

const EPOSTA_DESENI = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// İletişim formu. Tarayıcıdaki "required/maxLength" kontrolleri atlanabilir,
// bu yüzden TÜM kontroller burada, sunucu tarafında tekrar yapılır.
export async function mesajGonder(_onceki, formData) {
  const ad_soyad = String(formData.get('ad_soyad') ?? '').trim();
  const eposta = String(formData.get('eposta') ?? '').trim();
  const konu = String(formData.get('konu') ?? '').trim();
  const metin = String(formData.get('mesaj') ?? '').trim();
  const kvkk_onay = formData.get('kvkk_onay') === 'on';
  const tuzak = String(formData.get('web_sitesi') ?? ''); // bot tuzağı (gizli alan)

  const degerler = { ad_soyad, eposta, konu, mesaj: metin };
  const hatalar = {};

  if (ad_soyad.length < 2) hatalar.ad_soyad = 'Ad soyad en az 2 karakter olmalı.';
  else if (ad_soyad.length > 100) hatalar.ad_soyad = 'Ad soyad en fazla 100 karakter olabilir.';

  if (!eposta) hatalar.eposta = 'E-posta boş bırakılamaz.';
  else if (eposta.length > 254 || !EPOSTA_DESENI.test(eposta)) hatalar.eposta = 'Geçerli bir e-posta adresi girin.';

  if (konu.length > 150) hatalar.konu = 'Konu en fazla 150 karakter olabilir.';

  if (metin.length < 10) hatalar.mesaj = 'Mesaj en az 10 karakter olmalı.';
  else if (metin.length > 2000) hatalar.mesaj = 'Mesaj en fazla 2000 karakter olabilir.';

  if (!kvkk_onay) hatalar.kvkk_onay = 'Devam etmek için aydınlatma metnini onaylamalısınız.';

  if (Object.keys(hatalar).length) return { ok: false, hatalar, degerler };

  // Bot gizli alanı doldurduysa kaydetmeden "başarılı" görünüyoruz.
  if (tuzak) return { ok: true };

  // Tabloda ayrı "konu" sütunu yok; konu yazıldıysa mesajın başına eklenir.
  const mesaj = konu ? `Konu: ${konu}\n\n${metin}` : metin;

  try {
    await sql`
      INSERT INTO iletisim_mesajlari (ad_soyad, eposta, mesaj, kvkk_onay)
      VALUES (${ad_soyad}, ${eposta}, ${mesaj}, ${kvkk_onay})`;
  } catch (e) {
    console.error('Mesaj kaydedilemedi:', e.message);
    return { ok: false, genelHata: 'Mesaj şu an gönderilemedi, lütfen biraz sonra tekrar deneyin.', degerler };
  }

  revalidatePath('/admin');
  revalidatePath('/admin/mesajlar');
  return { ok: true };
}
