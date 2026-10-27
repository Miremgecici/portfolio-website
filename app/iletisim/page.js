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
        <p>Formu doldurun, mesajınız doğrudan e-posta adresime ulaşsın.</p>
        <IletisimFormu eposta={c.eposta} />
      </section>
    </>
  );
}
