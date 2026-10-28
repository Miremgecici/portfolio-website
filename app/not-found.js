import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="auth">
      <div className="panel">
        <div className="kod-satiri">&gt; hata 404</div>
        <h1>Sayfa bulunamadı</h1>
        <p className="muted">Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.</p>
        <div><Link href="/" className="dugme">Hakkımda sayfasına dön</Link></div>
      </div>
    </main>
  );
}
