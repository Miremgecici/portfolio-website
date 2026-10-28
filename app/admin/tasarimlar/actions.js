'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

// Sitede değişikliğin hemen görünmesi için ilgili sayfaların önbelleğini temizle.
function yenile() {
  revalidatePath('/');
  revalidatePath('/tasarimlar');
  revalidatePath('/admin');
  revalidatePath('/admin/tasarimlar');
}

function hataylaDon(mesaj, yol = '/admin/tasarimlar') {
  redirect(`${yol}?hata=${encodeURIComponent(mesaj)}`);
}

function sayiVeyaNull(deger) {
  const s = String(deger ?? '').trim();
  return /^\d+$/.test(s) ? Number(s) : null;
}

// Formdan gelen alanları sunucu tarafında doğrular ve temizler.
function formuOku(formData) {
  const baslik = String(formData.get('baslik') ?? '').trim();
  const gorsel_url = String(formData.get('gorsel_url') ?? '').trim() || null;
  const musteri = String(formData.get('musteri') ?? '').trim() || null;
  const tarihHam = String(formData.get('tarih') ?? '').trim();
  const sureHam = String(formData.get('sure_saat') ?? '').trim();

  if (!baslik) return { hata: 'Başlık boş bırakılamaz.' };
  if (baslik.length > 200) return { hata: 'Başlık en fazla 200 karakter olabilir.' };
  if (musteri && musteri.length > 120) return { hata: 'Müşteri adı en fazla 120 karakter olabilir.' };
  if (gorsel_url && (gorsel_url.length > 500 || !/^(https:\/\/|\/)[^\s"'<>]*$/.test(gorsel_url))) {
    return { hata: 'Görsel adresi https:// ile ya da / ile başlamalı (ör. /tasarimlar/logo.png).' };
  }
  if (tarihHam && !/^\d{4}-\d{2}-\d{2}$/.test(tarihHam)) return { hata: 'Tarih geçersiz.' };
  if (sureHam && (!/^\d+$/.test(sureHam) || Number(sureHam) > 10000)) {
    return { hata: 'Süre 0 ile 10000 arasında tam sayı olmalı.' };
  }

  return {
    veri: {
      baslik,
      gorsel_url,
      musteri,
      tarih: tarihHam || null,
      sure_saat: sureHam ? Number(sureHam) : null,
      musteri_izni: formData.get('musteri_izni') === 'on',
      yayinda: formData.get('yayinda') === 'on',
      kategori_id: sayiVeyaNull(formData.get('kategori_id')),
    },
  };
}

// INSERT
export async function tasarimEkle(formData) {
  await requireAdmin();
  const { hata, veri } = formuOku(formData);
  if (hata) hataylaDon(hata);

  await sql`
    INSERT INTO tasarimlar (baslik, gorsel_url, musteri, tarih, sure_saat, musteri_izni, kategori_id, yayinda)
    VALUES (${veri.baslik}, ${veri.gorsel_url}, ${veri.musteri}, ${veri.tarih}, ${veri.sure_saat},
            ${veri.musteri_izni}, ${veri.kategori_id}, ${veri.yayinda})`;

  yenile();
  redirect('/admin/tasarimlar?ok=eklendi');
}

// UPDATE
export async function tasarimGuncelle(formData) {
  await requireAdmin();
  const id = sayiVeyaNull(formData.get('id'));
  if (!id) hataylaDon('Geçersiz kayıt.');
  const { hata, veri } = formuOku(formData);
  if (hata) hataylaDon(hata, `/admin/tasarimlar/${id}`);

  await sql`
    UPDATE tasarimlar SET
      baslik = ${veri.baslik},
      gorsel_url = ${veri.gorsel_url},
      musteri = ${veri.musteri},
      tarih = ${veri.tarih},
      sure_saat = ${veri.sure_saat},
      musteri_izni = ${veri.musteri_izni},
      kategori_id = ${veri.kategori_id},
      yayinda = ${veri.yayinda}
    WHERE id = ${id}`;

  yenile();
  redirect('/admin/tasarimlar?ok=guncellendi');
}

// DELETE
export async function tasarimSil(formData) {
  await requireAdmin();
  const id = sayiVeyaNull(formData.get('id'));
  if (id) await sql`DELETE FROM tasarimlar WHERE id = ${id}`;
  yenile();
  redirect('/admin/tasarimlar?ok=silindi');
}

// "Yayında / yayında değil" düğmesi: değeri tersine çevirir.
export async function yayinDegistir(formData) {
  await requireAdmin();
  const id = sayiVeyaNull(formData.get('id'));
  if (id) await sql`UPDATE tasarimlar SET yayinda = NOT yayinda WHERE id = ${id}`;
  yenile();
}

// Yeni tasarım türü ekleme (tasarim_turleri)
export async function turEkle(formData) {
  await requireAdmin();
  const ad = String(formData.get('ad') ?? '').trim();
  if (!ad || ad.length > 60) hataylaDon('Tür adı 1-60 karakter olmalı.');

  // ON CONFLICT: aynı ad zaten varsa (UNIQUE) hata vermeden geç.
  await sql`INSERT INTO tasarim_turleri (ad) VALUES (${ad}) ON CONFLICT (ad) DO NOTHING`;
  yenile();
  redirect('/admin/tasarimlar?ok=tur');
}

// Tür silme: bağlı tasarımların kategori_id'si ON DELETE SET NULL ile boşalır.
export async function turSil(formData) {
  await requireAdmin();
  const id = sayiVeyaNull(formData.get('id'));
  if (id) await sql`DELETE FROM tasarim_turleri WHERE id = ${id}`;
  yenile();
  redirect('/admin/tasarimlar?ok=tursilindi');
}
