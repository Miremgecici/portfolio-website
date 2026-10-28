import Link from 'next/link';
import { requireAdmin } from '@/lib/auth';
import Ikon from '@/components/Ikon';
import { cikisYap } from './actions';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Yönetim paneli', robots: { index: false } };

// Not: Layout istemci tarafı gezinmede yeniden çalışmayabilir; bu yüzden
// her /admin sayfası ve her Server Action ayrıca requireAdmin() çağırır.
export default async function AdminLayout({ children }) {
  const admin = await requireAdmin();

  return (
    <div className="admin-shell">
      <aside className="admin-side">
        <Link href="/admin" className="brand"><span className="marka-ikon"><Ikon ad="grafik" renk="#ffffff" boyut={18} kalinlik={2.2} /></span> Yönetim Paneli</Link>
        <nav aria-label="Panel menüsü">
          <Link href="/admin">Genel bakış</Link>
          <Link href="/admin/tasarimlar">Tasarımlar</Link>
          <Link href="/admin/mesajlar">Mesajlar</Link>
          <Link href="/admin/oturumlar">Oturumlar</Link>
          <Link href="/" target="_blank">Siteyi aç ↗</Link>
        </nav>
        <div>
          <div className="who">{admin.eposta}</div>
          <form action={cikisYap} style={{ marginTop: 10 }}>
            <button type="submit" className="btn ghost sm">Çıkış yap</button>
          </form>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
