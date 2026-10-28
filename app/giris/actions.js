'use server';

import crypto from 'node:crypto';
import bcrypt from 'bcryptjs';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { sql } from '@/lib/db';
import { OTURUM_CEREZI, cerezAyarlari } from '@/lib/auth';

const HATA = 'E-posta veya şifre hatalı';

export async function girisYap(_onceki, formData) {
  const eposta = String(formData.get('eposta') ?? '').trim().toLowerCase();
  const sifre = String(formData.get('sifre') ?? '');

  // Boş / aşırı uzun girişleri veritabanına hiç sormadan reddet.
  if (!eposta || !sifre || eposta.length > 254 || sifre.length > 200) {
    return { hata: HATA };
  }

  const rows = await sql`SELECT id, sifre_hash FROM yoneticiler WHERE eposta = ${eposta}`;
  const yonetici = rows[0];

  // Kullanıcı yoksa da aynı mesaj: saldırgan hangi e-postanın kayıtlı olduğunu öğrenemez.
  const dogru = yonetici ? await bcrypt.compare(sifre, yonetici.sifre_hash) : false;
  if (!dogru) return { hata: HATA };

  // Tahmin edilemez, 64 karakterlik rastgele oturum anahtarı
  const token = crypto.randomBytes(32).toString('hex');
  const cihaz = ((await headers()).get('user-agent') || 'bilinmiyor').slice(0, 400);

  await sql`
    INSERT INTO oturumlar (token, yonetici_id, bitis, son_aktivite, cihaz)
    VALUES (${token}, ${yonetici.id}, now() + interval '2 hours', now(), ${cihaz})`;

  (await cookies()).set(OTURUM_CEREZI, token, cerezAyarlari());
  redirect('/admin');
}
