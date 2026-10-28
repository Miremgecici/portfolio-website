import { cv } from '@/content/cv';
import Ikon from '@/components/Ikon';

export const metadata = {
  title: 'Eğitim & Kurslar',
  description: 'Müesser İrem Geçici - Akademik eğitim, yabancı dil ve aldığı kurslar.',
};

export default function Egitim() {
  const e = cv.egitim;
  const [bolum, tarih] = e.detay.split('|').map((x) => x.trim());

  return (
    <>
      <header className="sayfa-baslik">
        <div className="kod-satiri">&gt; egitim.listele()</div>
        <h1>Eğitim &amp; Kurslar</h1>
        <p>Üniversite eğitimim, dil bilgim ve kendimi geliştirmek için aldığım online kurslar.</p>
      </header>

      <section className="egitim-izgara">
        <article className="cam-kart egitim-kart">
          <div className="ust">
            <span className="ikon-kutu"><Ikon ad="okul" renk="#c084fc" /></span>
            <div>
              <h2>{e.okul}</h2>
              <div className="alt">{bolum}</div>
            </div>
          </div>
          <div className="tarih">{tarih}</div>
        </article>

        <article className="cam-kart egitim-kart">
          <div className="ust">
            <span className="ikon-kutu"><Ikon ad="dil" renk="#7dd3fc" /></span>
            <h2>Diller</h2>
          </div>
          <div>
            <div className="dil-satir"><span>Türkçe</span><span>Anadil</span></div>
            <div className="dil-satir"><span>İngilizce</span><span>Orta seviye · B1</span></div>
          </div>
        </article>
      </section>

      <section className="bolum">
        <div className="bolum-baslik">
          <h2>Aldığım Kurslar &amp; Sertifikalar</h2>
          <span className="not">{cv.kurslar.length} kurs</span>
        </div>
        <div className="kurs-izgara">
          {cv.kurslar.map((k) => {
            const devam = k.durum.toLowerCase().includes('devam');
            return (
              <article className="cam-kart kurs" key={k.baslik}>
                <div className="platform">{k.platform}</div>
                <h3>{k.baslik}</h3>
                <span>
                  <span className={`durum ${devam ? 'devam' : 'tamam'}`}>
                    {devam && <span className="nokta" />}
                    {k.durum}
                  </span>
                </span>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
