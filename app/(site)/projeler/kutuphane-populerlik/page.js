import Link from 'next/link';

export const metadata = {
  title: 'Kütüphane Popülerlik Karşılaştırıcı · Güvenlik ve Altyapı',
  description:
    'Kütüphane Popülerlik Karşılaştırıcı vaka sayfası: Cloudflare Pages üzerinde güvenli bulut yayını, hesap güvenliği, CI/CD ve web güvenliği.',
};

const CANLI = 'https://kutuphane-populerlik.pages.dev';
const DEPO = 'https://github.com/Miremgecici/kutuphane-populerlik';
const belge = (yol) => `${DEPO}/blob/main/${yol}`;

const sonuclar = [
  ['Mozilla HTTP Observatory', 'A+ · 150/100 · 12/12 test'],
  ['securityheaders.com', 'A+'],
  ['OWASP ZAP (kendi adresime)', '1 orta + 1 düşük → 0 yüksek / orta / düşük'],
  ['Depoda / log’da gizli anahtar', '0 (gitleaks her push’ta tarıyor)'],
  ['Tehdit modeli', 'STRIDE, 11 tehdit; en yüksek risk 20 → 5'],
  ['Aylık maliyet', '0 TL (ücretsiz katman, ödeme yöntemi tanımlı değil)'],
];

const kontroller = [
  ['Hesap güvenliği (kart kontrolü)', 'GitHub ve Cloudflare’de TOTP ile 2FA, çevrimdışı kurtarma kodları. Cloudflare Super Admin yalnızca yönetim için; günlük inceleme için ayrı, okuma yetkili kimlik. Erişim incelemesi yapıldı.'],
  ['Ana dal koruması', 'Ruleset: PR zorunlu, force push ve silme yasak. Otomatik veri güncellemesi de PR ile geliyor. Doğrudan push denemesi “GH013” hatasıyla reddedildi.'],
  ['Gizli anahtar yönetimi', 'Ürün anahtar gerektirmiyor; dağıtım token’ı da yok (Cloudflare GitHub uygulaması yalnızca bu depoya erişebiliyor). CI yalnızca kısa ömürlü GITHUB_TOKEN kullanıyor.'],
  ['CI/CD ve tedarik zinciri', 'İş akışlarında varsayılan permissions: {}, izinler iş bazında. Tüm Actions commit SHA’sı ile sabit; Dependabot haftalık. gitleaks + GitHub secret scanning ve push protection.'],
  ['Web güvenliği', 'CSP (script-src ’self’, inline yok), HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors ’none’, COOP/CORP/COEP, security.txt.'],
  ['İzleme ve olay müdahalesi', '6 saatte bir sağlık kontrolü; sorun olursa ALARM etiketli issue ve e-posta. “API anahtarım sızdı” runbook’u: tespitten sonra 15 dakikada iptal.'],
  ['Kod olarak altyapı', 'wrangler.toml, _headers, scripts/build_site.sh (yayınlanacak dosyaların izin listesi), .github/ iş akışları.'],
];

export default function KutuphanePopulerlik() {
  return (
    <>
      <header className="sayfa-baslik">
        <div className="kod-satiri">&gt; projeler/kutuphane-populerlik --guvenlik</div>
        <h1>Kütüphane Popülerlik Karşılaştırıcı</h1>
        <p>
          Bir eğitim programının müfredat ekibi için npm ve PyPI paketlerinin günlük indirme sayılarını karşılaştıran
          canlı veri ürünü. Veri her gün GitHub Actions ile çekilir, site Cloudflare Pages üzerinde yayınlanır.
          Bulut Bilişim ve Siber Güvenlik dersi “Güvenli Bulut Yayını” çalışması.
        </p>
        <div className="hero-dugmeler">
          <a href={CANLI} className="dugme" target="_blank" rel="noopener noreferrer">Canlı site</a>
          <a href={DEPO} className="dugme ikincil" target="_blank" rel="noopener noreferrer">GitHub deposu</a>
        </div>
      </header>

      <section className="bolum">
        <div className="bolum-baslik"><h2>Güvenlik ve Altyapı</h2></div>
        <p>
          Kod ve bulut tarafında yüksek veya orta riskli açık bulgu yok. Ürün gizli bilgi tutmadığı için en büyük risk
          geliştirici ve bulut hesaplarının ele geçirilmesiydi; bu tehdit iki hesapta 2FA, korumalı ana dal ve en az
          yetkiyle 20 risk puanından 5’e indirildi.
        </p>
        <div className="tablo-kutu">
          <table>
            <thead><tr><th>Gösterge</th><th>Sonuç</th></tr></thead>
            <tbody>
              {sonuclar.map(([a, b]) => (
                <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bolum">
        <div className="bolum-baslik"><h2>Uygulanan kontroller</h2></div>
        <div className="tablo-kutu">
          <table>
            <thead><tr><th>Alan</th><th>Ne yapıldı</th></tr></thead>
            <tbody>
              {kontroller.map(([a, b]) => (
                <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bolum">
        <div className="bolum-baslik"><h2>Kalan riskler ve sonraki adım</h2></div>
        <p>
          TOTP gerçek zamanlı kimlik avıyla çalınabildiği için sonraki adım passkey eklemek. Veri API’lerinin uzun süre
          çalışmaması durumunda site son başarılı veriyi gösterip uyarıyor; 48 saatten eski veride alarm veriliyor.
        </p>
        <div className="etiketler">
          <a className="etiket" href={belge('docs/tehdit-modeli.md')} target="_blank" rel="noopener noreferrer">Tehdit modeli</a>
          <a className="etiket" href={belge('docs/hesap-guvenligi.md')} target="_blank" rel="noopener noreferrer">Hesap güvenliği</a>
          <a className="etiket" href={belge('docs/runbook-anahtar-sizintisi.md')} target="_blank" rel="noopener noreferrer">Runbook</a>
          <a className="etiket" href={belge('docs/zap/sonra/report_md.md')} target="_blank" rel="noopener noreferrer">ZAP raporu</a>
        </div>
      </section>

      <section className="bolum">
        <p className="small">
          CV cümlesi: Cloudflare Pages üzerinde 0 TL maliyetle canlı veri ürünü yayınladım; hesap güvenliği, korumalı
          CI/CD ve güvenlik başlıklarıyla Mozilla Observatory’de A+ (150/100) aldım ve OWASP ZAP bulgularını 0’a indirdim.
        </p>
        <p className="small">Yapay zekâ beyanı: Güvenlik yapılandırmaları hazırlanırken Claude (Anthropic) kullanıldı; hesap ayarları ve testler tarafımdan yapıldı.</p>
        <Link href="/projeler" className="dugme ikincil" style={{ alignSelf: 'flex-start' }}>← Tüm projeler</Link>
      </section>
    </>
  );
}
