'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

// "Diğer tüm oturumları kapat": bu yöneticinin, şu an kullanılan oturum
// DIŞINDAKİ bütün oturumlarını siler. Diğer tarayıcı bir sonraki istekte /giris'e düşer.
export async function digerOturumlariKapat() {
  const admin = await requireAdmin();
  await sql`
    DELETE FROM oturumlar
    WHERE yonetici_id = ${admin.id} AND token <> ${admin.token}`;
  revalidatePath('/admin/oturumlar');
}

// Süresi dolmuş tüm oturumları temizle (sorgular.sql'deki Görev 6 sorgusu)
export async function suresiDolanlariTemizle() {
  await requireAdmin();
  await sql`
    DELETE FROM oturumlar
    WHERE bitis <= now()
       OR son_aktivite <= now() - interval '30 minutes'`;
  revalidatePath('/admin/oturumlar');
}
