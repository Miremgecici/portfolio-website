'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { sql } from '@/lib/db';
import { OTURUM_CEREZI } from '@/lib/auth';

// Çıkış: oturumu veritabanından sil, çerezi temizle.
export async function cikisYap() {
  const jar = await cookies();
  const token = jar.get(OTURUM_CEREZI)?.value;
  if (token) {
    await sql`DELETE FROM oturumlar WHERE token = ${token}`;
  }
  jar.delete(OTURUM_CEREZI);
  redirect('/giris');
}
