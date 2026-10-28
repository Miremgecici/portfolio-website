'use client';

import Link from 'next/link';
import { useState } from 'react';

const devamMi = (p) => (p.durum || '').toLowerCase().includes('devam');

// Proje kartları ve Tümü / Devam Edenler / Tamamlananlar filtresi
export default function ProjeListesi({ projeler }) {
  const [filtre, setFiltre] = useState('hepsi');
  const [acik, setAcik] = useState({}); // "Devamını oku" ile açılan kartlar

  const devam = projeler.filter(devamMi);
  const tamam = projeler.filter((p) => !devamMi(p));
  const liste = filtre === 'devam' ? devam : filtre === 'tamam' ? tamam : projeler;

  const secenekler = [
    ['hepsi', `Tümü (${projeler.length})`],
    ['devam', `Devam Edenler (${devam.length})`],
    ['tamam', `Tamamlananlar (${tamam.length})`],
  ];

  return (
    <>
      <div className="filtre" role="group" aria-label="Projeleri filtrele">
        {secenekler.map(([deger, metin]) => (
          <button
            key={deger}
            type="button"
            className={filtre === deger ? 'aktif' : ''}
            aria-pressed={filtre === deger}
            onClick={() => setFiltre(deger)}
          >
            {metin}
          </button>
        ))}
      </div>

      <div className="proje-izgara">
        {liste.length === 0 && <div className="cam-kart bos">Bu filtreye ait proje bulunamadı.</div>}
        {liste.map((p) => {
          const d = devamMi(p);
          return (
            <article className="cam-kart proje" key={p.baslik}>
              <div className="proje-ust">
                <span className="kategori">{p.kategori}</span>
                <span className={`durum ${d ? 'devam' : 'tamam'}`}>
                  {d && <span className="nokta" />}
                  {d ? 'Devam ediyor' : 'Tamamlandı'}
                </span>
              </div>
              <h3>{p.baslik}</h3>
              <p className={p.aciklama.length > 220 && !acik[p.baslik] ? 'kisa' : ''}>{p.aciklama}</p>
              {p.aciklama.length > 220 && (
                <button
                  type="button"
                  className="devami"
                  aria-expanded={!!acik[p.baslik]}
                  onClick={() => setAcik({ ...acik, [p.baslik]: !acik[p.baslik] })}
                >
                  {acik[p.baslik] ? 'Daha az göster' : 'Devamını oku'}
                </button>
              )}
              <div className="etiketler">
                {p.etiketler.map((t) => <span className="etiket" key={t}>{t}</span>)}
              </div>
              {p.link && (
                <Link href={p.link} className="dugme ikincil" style={{ alignSelf: 'flex-start' }}>
                  Vaka sayfası: Güvenlik ve Altyapı
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </>
  );
}
