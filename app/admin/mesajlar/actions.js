'use server';

import { revalidatePath } from 'next/cache';
import { sql } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

function idOku(formData) {
  const s = String(formData.get('id') ?? '');
  return /^\d+$/.test(s) ? Number(s) : null;
}

function yenile() {
  revalidatePath('/admin');
  revalidatePath('/admin/mesajlar');
}

// Okundu / okunmadı olarak işaretle (UPDATE)
export async function okunduDegistir(formData) {
  await requireAdmin();
  const id = idOku(formData);
  if (id) await sql`UPDATE iletisim_mesajlari SET okundu = NOT okundu WHERE id = ${id}`;
  yenile();
}

// Mesajı sil (DELETE)
export async function mesajSil(formData) {
  await requireAdmin();
  const id = idOku(formData);
  if (id) await sql`DELETE FROM iletisim_mesajlari WHERE id = ${id}`;
  yenile();
}
