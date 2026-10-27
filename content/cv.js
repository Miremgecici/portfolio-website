// =====================================================================
// CV BİLGİLERİ — eski sitedeki (app.js → DEFAULT_DATA) içeriğin aynısı.
// Hakkımda, Eğitim & Kurslar, Projeler ve İletişim sayfaları buradan okunur.
// Bir şeyi değiştirmek için sadece bu dosyayı düzenleyin.
// =====================================================================

export const cv = {
  adSoyad: 'Müesser İrem Geçici',
  footer: 'Müesser İrem Geçici | Büyük Veri Analisti',
  universite: 'Manisa Celal Bayar Üniversitesi — Büyük Veri Analistliği',
  slogan: 'Veriyi temizliyor, modelliyor ve karar verdiren panellere dönüştürüyorum.',
  fotoAlti: 'MCBÜ · Büyük Veri Analistliği · 2025–',

  // Profil fotoğrafı: resmi public/assets/ klasörüne koyup yolunu yazın (ör. '/assets/profil.jpg').
  // Boş bırakılırsa kişi simgesi görünür.
  profilFoto: '',

  bio: [
    "Manisa Celal Bayar Üniversitesi'nde Büyük Veri Analistliği öğrencisiyim. Veri analizi ve makine öğrenmesi süreçlerine odaklanarak akademik çalışmalarımı sürdürüyorum.",
    'Teknik yetkinliklerimi pratik projelerde uygulamaya, veri odaklı problem çözme kapasitemi geliştirmeye ve dijital trendleri takip ederek değer yaratmaya odaklanıyorum.',
  ],

  yetenekler: [
    // ikon: ml | veri | kod | tasarim | ofis  (components/Ikon.js) · renk: ikonun ve kart kenarının rengi
    { ikon: 'ml', renk: '#7dd3fc', ad: 'Makine Öğrenmesi', seviye: 'Temel Makine Öğrenmesi algoritmalarına giriş ve uygulamaları' },
    { ikon: 'veri', renk: '#d8b4fe', ad: 'Veri Analitiği', seviye: 'SQL (Temel Seviye) • Excel (Veri Analizi & Pivot Tablolar)' },
    { ikon: 'kod', renk: '#f9a8d4', ad: 'Programlama', seviye: 'Python (Temel Seviye) • C# (Temel Seviye)' },
    { ikon: 'tasarim', renk: '#7dd3fc', ad: 'Dijital Araçlar', seviye: 'Canva (Tasarım & Sunum)' },
    { ikon: 'ofis', renk: '#d8b4fe', ad: 'Ofis Araçları', seviye: 'Microsoft Office (Word, PowerPoint, Excel)' },
  ],

  deneyimler: [
    {
      rol: 'Büyük Veri Analistliği Öğrencisi & Araştırmacı',
      kurum: 'Manisa Celal Bayar Üniversitesi',
      tarih: '2025 - Devam ediyor',
      aciklama:
        'Veri analizi ve makine öğrenmesi süreçlerine odaklanarak akademik çalışmalarımı sürdürüyorum. Teknik yetkinliklerimi pratik projelerde uygulamaya, veri odaklı problem çözme kapasitemi geliştirmeye ve dijital trendleri takip ederek değer yaratmaya odaklanıyorum.',
    },
  ],

  egitim: {
    okul: 'Manisa Celal Bayar Üniversitesi',
    detay: 'Büyük Veri Analistliği | 2025 - Devam ediyor',
    dillerEtiket: 'Türkçe (Anadil) • İngilizce (Orta Seviye - B1)',
    dillerDetay: 'Türkçe (Anadil) | İngilizce: Orta Seviye (B1)',
  },

  kurslar: [
    { platform: 'Udemy', baslik: 'C# Programlama: Sıfırdan Uzmanlığa', durum: 'Devam Ediyor' },
    { platform: 'Udemy', baslik: 'Uygulamalı Microsoft Office Programları', durum: 'Devam Ediyor' },
    { platform: 'Udemy', baslik: 'Python: Sıfırdan İleri Seviye (2026)', durum: 'Devam Ediyor' },
  ],

  projeler: [
    {
      baslik: 'Uluslararası Öğrenci Rotaları ve Makine Öğrenmesi ile Maliyet Analizi',
      kategori: 'Makine Öğrenmesi & Veri Analizi',
      durum: 'Tamamlandı',
      aciklama:
        '• Dünya genelindeki 71 ülkenin eğitim harçları, kira ve yaşam endeksi verilerini toplayarak veri temizleme ve ön işleme (Standardization) adımlarını gerçekleştirdim.\n\n• Gözetimsiz makine öğrenmesi modeli olan K-Means algoritmasını ve Dirsek (Elbow) yöntemini (K=3) kullanarak, rotaları matematiksel olarak 3 ana ekonomik profile (Elit, Optimum, Düşük Bütçe) segmente ettim.\n\n• Özellik mühendisliği ve korelasyon analizleri ile fiyat-performans (ROI) içgörüleri elde edip, tüm süreci interaktif bir İş Zekası (BI) Dashboard paneline dönüştürerek jüriye karar destek sistemi olarak sundum.',
      etiketler: ['Python', 'Pandas', 'Scikit-Learn (K-Means, StandardScaler)', 'MS Excel (Dashboard)', 'Veri Görselleştirme'],
    },
    {
      baslik: 'Dijital Bağımlılık Sosyal Sorumluluk Projesi (2026)',
      kategori: 'Sosyal Sorumluluk & Veri Görselleştirme',
      durum: 'Tamamlandı',
      aciklama:
        'Veri analizi, veri görselleştirme süreçleri yürütüldü ve kampanya posteri tasarımı yapılarak proje sunumu gerçekleştirildi.',
      etiketler: ['Veri Analizi', 'Veri Görselleştirme', 'Canva', 'Kampanya Posteri Tasarımı', 'Proje Sunumu'],
    },
    {
      baslik: 'Büyük Veri ile E-Ticaret Müşteri Davranış Analizi & Segmentasyon',
      kategori: 'Büyük Veri & Makine Öğrenmesi',
      durum: 'Devam Ediyor',
      aciklama:
        'E-ticaret kullanıcı hareketleri, sepet terk oranları ve müşteri satın alma alışkanlıkları üzerinde büyük veri analitiği yöntemleri uygulanmaktadır. Müşteri kaybı (Churn) tahmini ve RFM analizine dayalı dinamik kümeleme modeli geliştirilmektedir.',
      etiketler: ['Python', 'Big Data', 'Pandas', 'SQL', 'Scikit-Learn', 'RFM Analizi'],
    },
    {
      baslik: 'Finansal Zaman Serileri ve Makine Öğrenmesi ile Trend Tahminleme',
      kategori: 'Veri Bilimi & Tahmin Modelleri',
      durum: 'Devam Ediyor',
      aciklama:
        'Geçmiş piyasa ve finansal endeks verileri incelenerek makine öğrenmesi regresyon ve zaman serisi algoritmaları ile trend eğilimleri modellenmektedir. Elde edilen tahmin sonuçlarının karar vericiler için interaktif görsel grafiklerle sunulacağı bir analitik panel tasarlanmaktadır.',
      etiketler: ['Python', 'Zaman Serisi Analizi', 'Scikit-Learn', 'MS Excel Dashboard', 'Veri Görselleştirme'],
    },
  ],

  iletisim: {
    baslik: 'İletişime Geçin',
    metin:
      'Büyük veri analizi, makine öğrenmesi projeleri ve veri odaklı iş birliği fırsatları için benimle doğrudan iletişime geçebilirsiniz.',
    eposta: 'iremgecici2@gmail.com',
    linkedinUrl: 'https://www.linkedin.com/in/m%C3%BCesser-irem-gecici-a684a8345',
    linkedinYazi: 'linkedin.com/in/müesser-irem-gecici',
    githubUrl: 'https://github.com/irewm11',
    githubYazi: 'github.com/irewm11',
  },
};
