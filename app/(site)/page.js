import Link from 'next/link';
import { cv } from '@/content/cv';
import Ikon from '@/components/Ikon';

export default function Hakkimda() {
  const tamamlanan = cv.projeler.filter((p) => p.durum.toLowerCase().includes('tamam')).length;

  return (
    <>
      {/* 1. Üst bölüm: tanıtım + fotoğraf */}
      <section className="hero">
        <div className="hero-yazi">
          <div className="kod-satiri">&gt; buyuk_veri_analisti --ogrenci --manisa</div>
          <h1>
            Müesser İrem
            <br />
            Geçici
          </h1>
          <p className="slogan">{cv.slogan}</p>
          <div className="bio">
            {cv.bio.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="hero-dugmeler">
            <Link href="/projeler" className="dugme">
              Projelerimi gör <Ikon ad="ok" renk="#ffffff" boyut={16} kalinlik={2.2} />
            </Link>
            <Link href="/iletisim" className="dugme ikincil">İletişime geç</Link>
          </div>
        </div>

        <div className="foto-alani">
          <div className="foto-halka">
            <div className="foto-ic">
              {cv.profilFoto ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={cv.profilFoto} alt={cv.adSoyad} />
              ) : (
                <Ikon ad="kisi" renk="#a78bfa" kalinlik={1.4} />
              )}
            </div>
          </div>
          <div className="foto-alti">{cv.fotoAlti}</div>
        </div>
      </section>

      {/* 2. Kısa özet şeridi (sayılar cv.js'ten hesaplanır) */}
      <section className="ozet" aria-label="Kısa özet">
        <div className="ozet-oge">
          <div className="ozet-sayi">{cv.projeler.length}</div>
          <div className="ozet-yazi">proje · {tamamlanan} tamamlandı</div>
        </div>
        <div className="ozet-oge">
          <div className="ozet-sayi">{cv.kurslar.length}</div>
          <div className="ozet-yazi">online kurs</div>
        </div>
        <div className="ozet-oge">
          <div className="ozet-sayi">{cv.yetenekler.length}</div>
          <div className="ozet-yazi">yetenek alanı</div>
        </div>
        <div className="ozet-oge">
          <div className="ozet-sayi">B1</div>
          <div className="ozet-yazi">İngilizce · Türkçe anadil</div>
        </div>
      </section>

      {/* 3. Yetenekler */}
      <section className="bolum">
        <div className="bolum-baslik">
          <h2>Yetenekler &amp; Uzmanlık Alanları</h2>
        </div>
        <div className="yetenek-izgara">
          {cv.yetenekler.map((y) => (
            <article className="yetenek" key={y.ad} style={{ '--kenar': `${y.renk}b3` }}>
              <Ikon ad={y.ikon} renk={y.renk} boyut={26} />
              <h3>{y.ad}</h3>
              <p>{y.seviye}</p>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Deneyimler */}
      <section className="bolum">
        <div className="bolum-baslik">
          <h2>Deneyimler &amp; Akademik Çalışmalar</h2>
        </div>
        <div className="cam-kart deneyim-liste">
          {cv.deneyimler.map((d, i) => (
            <article className="deneyim" key={i}>
              <div className="deneyim-tarih">{d.tarih}</div>
              <div>
                <h3>{d.rol}</h3>
                <div className="kurum">{d.kurum}</div>
                <p>{d.aciklama}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
