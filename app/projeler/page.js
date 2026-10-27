import { cv } from '@/content/cv';
import ProjeListesi from './ProjeListesi';

export const metadata = {
  title: 'Projeler',
  description: 'Müesser İrem Geçici - Büyük veri analizi, K-Means makine öğrenmesi modelleri ve veri görselleştirme projeleri.',
};

export default function Projeler() {
  return (
    <>
      <header className="sayfa-baslik">
        <div className="kod-satiri">&gt; projeler.filtrele(durum=&quot;hepsi&quot;)</div>
        <h1>Projelerim &amp; Analiz Çalışmalarım</h1>
        <p>Makine öğrenmesi, büyük veri ve veri görselleştirme üzerine yaptığım ve devam eden çalışmalar.</p>
      </header>
      <section className="bolum">
        <ProjeListesi projeler={cv.projeler} />
      </section>
    </>
  );
}
