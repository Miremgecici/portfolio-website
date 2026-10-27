import Link from 'next/link';

export default function NotFound() {
  return (
    <header className="sayfa-baslik">
      <div className="kod-satiri">&gt; hata 404</div>
      <h1>Sayfa bulunamadı</h1>
      <p>Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <div><Link href="/" className="dugme">Hakkımda sayfasına dön</Link></div>
    </header>
  );
}
