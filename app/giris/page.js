import Link from 'next/link';
import { redirect } from 'next/navigation';
import { getAdmin } from '@/lib/auth';
import Arkaplan from '@/components/Arkaplan';
import GirisFormu from './GirisFormu';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Yönetici girişi', robots: { index: false } };

export default async function GirisSayfasi() {
  // Zaten geçerli bir oturum varsa doğrudan panele gönder.
  if (await getAdmin()) redirect('/admin');

  return (
    <main className="auth">
      <Arkaplan />
      <div className="panel">
        <span className="eyebrow">Yönetim paneli</span>
        <h1>Giriş yap</h1>
        <p className="muted small" style={{ marginBottom: 18 }}>Bu alan yalnızca site sahibi içindir.</p>
        <GirisFormu />
        <p className="small" style={{ marginTop: 20 }}>
          <Link href="/">← Siteye dön</Link>
        </p>
      </div>
    </main>
  );
}
