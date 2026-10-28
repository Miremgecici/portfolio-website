import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sql } from './db';

export const OTURUM_CEREZI = 'oturum';
export const OTURUM_SURESI_SN = 60 * 60 * 2; // 2 saat

// Oturum çerezinin güvenlik ayarları:
//  httpOnly  → JavaScript (document.cookie) çereze erişemez: XSS ile token çalınmasını zorlaştırır.
//  secure    → çerez yalnızca HTTPS üzerinden gönderilir: ağ dinlemeye karşı.
//  sameSite  → başka sitelerden gelen isteklerde çerez gönderilmez: CSRF'e karşı.
export function cerezAyarlari() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: OTURUM_SURESI_SN,
  };
}

// Çerezdeki token'ı oturumlar tablosunda arar.
// Oturum geçerliyse yöneticiyi döndürür ve son_aktivite'yi günceller.
// 2 saatlik bitiş geçmişse VEYA 30 dakikadır işlem yoksa null döner.
export async function getAdmin() {
  const token = (await cookies()).get(OTURUM_CEREZI)?.value;
  if (!token) return null;

  const rows = await sql`
    SELECT y.id, y.eposta FROM oturumlar o
    JOIN yoneticiler y ON y.id = o.yonetici_id
    WHERE o.token = ${token} AND o.bitis > now()
      AND o.son_aktivite > now() - interval '30 minutes'`;

  if (rows[0]) {
    await sql`UPDATE oturumlar SET son_aktivite = now() WHERE token = ${token}`;
    return { ...rows[0], token };
  }
  return null;
}

// /admin sayfalarının ve her Server Action'ın başında çağrılır.
// Geçerli oturum yoksa /giris sayfasına yönlendirir.
export async function requireAdmin() {
  const admin = await getAdmin();
  if (!admin) redirect('/giris');
  return admin;
}
