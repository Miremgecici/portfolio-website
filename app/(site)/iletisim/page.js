import { cv } from '@/content/cv';
import Ikon from '@/components/Ikon';
import IletisimFormu from './IletisimFormu';

export const metadata = {
  title: 'İletişim',
  description: 'Müesser İrem Geçici - E-posta, LinkedIn ve GitHub iletişim kanalları ve mesaj formu.',
};

export default function Iletisim() {
  const c = cv.iletisim;
  return (
    <>
      <header className="sayfa-baslik">
        <div className="kod-satiri">&gt; iletisim.baslat()</div>
        <h1>{c.baslik}</h1>
        <p>{c.metin}</p>
      </header>

      <section className="iletisim-kartlar" aria-label="İletişim kanalları">
        <a href={`mailto:${c.eposta}`} className="cam-kart iletisim-kart">
          <span className="ikon-kutu"><Ikon ad="eposta" renk="#c084fc" /></span>
          <span className="metin"><span className="ad">E-posta</span><span className="deger">{c.eposta}</span></span>
        </a>
        <a href={c.linkedinUrl} target="_blank" rel="noopener noreferrer" className="cam-kart iletisim-kart">
          <span className="ikon-kutu"><Ikon ad="linkedin" renk="#7dd3fc" /></span>
          <span className="metin"><span className="ad">LinkedIn</span><span className="deger">{c.linkedinYazi}</span></span>
        </a>
        <a href={c.githubUrl} target="_blank" rel="noopener noreferrer" className="cam-kart iletisim-kart">
          <span className="ikon-kutu"><Ikon ad="github" renk="#f9a8d4" /></span>
          <span className="metin"><span className="ad">GitHub</span><span className="deger">{c.githubYazi}</span></span>
        </a>
      </section>

      <section className="cam-kart form-kart">
        <h2>Bana mesaj gönderin</h2>
        <p>Formu doldurun, mesajınızı okuyup e-posta ile dönüş yapayım.</p>
        <IletisimFormu eposta={c.eposta} />

        <details className="aydinlatma" id="aydinlatma">
          <summary>KVKK Aydınlatma Metni</summary>
          <p>
            6698 sayılı Kişisel Verilerin Korunması Kanunu uyarınca veri sorumlusu {cv.adSoyad}&apos;dir. Bu formla
            paylaştığınız ad soyad, e-posta adresi ve mesaj içeriği yalnızca mesajınıza yanıt verebilmek amacıyla,
            açık rızanıza dayanarak işlenir.
          </p>
          <p>
            Verileriniz üçüncü kişilerle paylaşılmaz; sitenin barındırıldığı Vercel ve veritabanı hizmeti Neon
            (Avrupa – Frankfurt) altyapısında saklanır ve mesajınız yanıtlandıktan sonra en geç 1 yıl içinde silinir.
          </p>
          <p>
            KVKK&apos;nın 11. maddesi kapsamındaki haklarınız (verilerinize erişme, düzeltilmesini veya silinmesini
            isteme vb.) için {c.eposta} adresine yazabilirsiniz.
          </p>
        </details>
      </section>
    </>
  );
}
