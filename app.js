/* ==========================================================================
   MÜESSER İREM GEÇİCİ - EASY FILE UPLOAD & REFINED WALLPAPER LOGIC
   ========================================================================== */

const STORAGE_KEY = "bigdata_portfolio_iremg_master";

const DEFAULT_DATA = {
  profilePhoto: "",
  texts: {
    siteLogoName: "Müesser İrem Geçici",
    authorName: "Müesser İrem Geçici",
    authorUniversity: "Manisa Celal Bayar Üniversitesi — Büyük Veri Analistliği",
    bioParagraph1: "Manisa Celal Bayar Üniversitesi'nde Büyük Veri Analistliği öğrencisiyim. Veri analizi ve makine öğrenmesi süreçlerine odaklanarak akademik çalışmalarımı sürdürüyorum.",
    bioParagraph2: "Teknik yetkinliklerimi pratik projelerde uygulamaya, veri odaklı problem çözme kapasitemi geliştirmeye ve dijital trendleri takip ederek değer yaratmaya odaklanıyorum.",
    eduDegreeTitle: "Manisa Celal Bayar Üniversitesi",
    eduDegreeDetail: "Büyük Veri Analistliği | 2025 - Devam ediyor",
    langTitle: "Diller",
    langDetail: "Türkçe (Anadil) | İngilizce: Orta Seviye (B1)",
    contactIntroTitle: "İletişime Geçin",
    contactIntroText: "Büyük veri analizi, makine öğrenmesi projeleri ve veri odaklı iş birliği fırsatları için benimle doğrudan iletişime geçebilirsiniz.",
    contactEmail: "iremgecici2@gmail.com",
    contactLinkedin: "linkedin.com/in/müesser-irem-gecici",
    contactGithub: "github.com/irewm11",
    footerName: "Müesser İrem Geçici | Büyük Veri Analisti"
  },
  skills: [
    { id: 1, icon: "🤖", name: "Makine Öğrenmesi", level: "Temel Makine Öğrenmesi algoritmalarına giriş ve uygulamaları" },
    { id: 2, icon: "📊", name: "Veri Analitiği", level: "SQL (Temel Seviye) • Excel (Veri Analizi & Pivot Tablolar)" },
    { id: 3, icon: "💻", name: "Programlama", level: "Python (Temel Seviye) • C# (Temel Seviye)" },
    { id: 4, icon: "🎨", name: "Dijital Araçlar", level: "Canva (Tasarım & Sunum)" },
    { id: 5, icon: "📑", name: "Ofis Araçları", level: "Microsoft Office (Word, PowerPoint, Excel)" }
  ],
  experiences: [
    {
      id: 1,
      role: "Büyük Veri Analistliği Öğrencisi & Araştırmacı",
      company: "Manisa Celal Bayar Üniversitesi",
      date: "2025 - Devam ediyor",
      desc: "Veri analizi ve makine öğrenmesi süreçlerine odaklanarak akademik çalışmalarımı sürdürüyorum. Teknik yetkinliklerimi pratik projelerde uygulamaya, veri odaklı problem çözme kapasitemi geliştirmeye ve dijital trendleri takip ederek değer yaratmaya odaklanıyorum."
    }
  ],
  courses: [
    { id: 1, platform: "Udemy", title: "C# Programlama: Sıfırdan Uzmanlığa", status: "Devam Ediyor" },
    { id: 2, platform: "Udemy", title: "Uygulamalı Microsoft Office Programları", status: "Devam Ediyor" },
    { id: 3, platform: "Udemy", title: "Python: Sıfırdan İleri Seviye (2026)", status: "Devam Ediyor" }
  ],
  projects: [
    {
      id: 1,
      title: "Uluslararası Öğrenci Rotaları ve Makine Öğrenmesi ile Maliyet Analizi",
      category: "Makine Öğrenmesi & Veri Analizi",
      status: "Tamamlandı",
      desc: "• Dünya genelindeki 71 ülkenin eğitim harçları, kira ve yaşam endeksi verilerini toplayarak veri temizleme ve ön işleme (Standardization) adımlarını gerçekleştirdim.\n\n• Gözetimsiz makine öğrenmesi modeli olan K-Means algoritmasını ve Dirsek (Elbow) yöntemini (K=3) kullanarak, rotaları matematiksel olarak 3 ana ekonomik profile (Elit, Optimum, Düşük Bütçe) segmente ettim.\n\n• Özellik mühendisliği ve korelasyon analizleri ile fiyat-performans (ROI) içgörüleri elde edip, tüm süreci interaktif bir İş Zekası (BI) Dashboard paneline dönüştürerek jüriye karar destek sistemi olarak sundu.",
      tags: ["Python", "Pandas", "Scikit-Learn (K-Means, StandardScaler)", "MS Excel (Dashboard)", "Veri Görselleştirme"]
    },
    {
      id: 2,
      title: "Dijital Bağımlılık Sosyal Sorumluluk Projesi (2026)",
      category: "Sosyal Sorumluluk & Veri Görselleştirme",
      status: "Tamamlandı",
      desc: "Veri analizi, veri görselleştirme süreçleri yürütüldü ve kampanya posteri tasarımı yapılarak proje sunumu gerçekleştirildi.",
      tags: ["Veri Analizi", "Veri Görselleştirme", "Canva", "Kampanya Posteri Tasarımı", "Proje Sunumu"]
    },
    {
      id: 3,
      title: "Büyük Veri ile E-Ticaret Müşteri Davranış Analizi & Segmentasyon",
      category: "Büyük Veri & Makine Öğrenmesi",
      status: "Devam Ediyor",
      desc: "E-ticaret kullanıcı hareketleri, sepet terk oranları ve müşteri satın alma alışkanlıkları üzerinde büyük veri analitiği yöntemleri uygulanmaktadır. Müşteri kaybı (Churn) tahmini ve RFM analizine dayalı dinamik kümeleme modeli geliştirilmektedir.",
      tags: ["Python", "Big Data", "Pandas", "SQL", "Scikit-Learn", "RFM Analizi"]
    },
    {
      id: 4,
      title: "Finansal Zaman Serileri ve Makine Öğrenmesi ile Trend Tahminleme",
      category: "Veri Bilimi & Tahmin Modelleri",
      status: "Devam Ediyor",
      desc: "Geçmiş piyasa ve finansal endeks verileri incelenerek makine öğrenmesi regresyon ve zaman serisi algoritmaları ile trend eğilimleri modellenmektedir. Elde edilen tahmin sonuçlarının karar vericiler için interaktif görsel grafiklerle sunulacağı bir analitik panel tasarlanmaktadır.",
      tags: ["Python", "Zaman Serisi Analizi", "Scikit-Learn", "MS Excel Dashboard", "Veri Görselleştirme"]
    }
  ]
};

let appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
let isEditMode = false;
let currentProjectFilter = "all";

document.addEventListener("DOMContentLoaded", () => {
  loadStoredData();
  restoreEditModeState();
  setupSinglePageNavigation();
  setupWaterfallAnimation();
  setupCanvasAnimation();
  setupEditMode();
  setupModals();
  setupProjectFilter();
  setupContactForm();
  renderAll();
  setupLiveAutoSave();

  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

function restoreEditModeState() {
  const savedMode = localStorage.getItem("bigdata_isEditMode");
  if (savedMode === "true") {
    isEditMode = true;
  }
}

function loadStoredData() {
  let saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    // Önceki versiyon anahtarlarını kontrol et ve kullanıcı verisini kaybetmeden aktar
    const prevKeys = [
      "bigdata_portfolio_iremg_v10",
      "bigdata_portfolio_iremg_v9",
      "bigdata_portfolio_iremg_v8",
      "bigdata_portfolio_iremg_v7"
    ];
    for (const k of prevKeys) {
      const prevData = localStorage.getItem(k);
      if (prevData) {
        saved = prevData;
        break;
      }
    }
  }

  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appData = {
        ...DEFAULT_DATA,
        ...parsed,
        texts: { ...DEFAULT_DATA.texts, ...(parsed.texts || {}) }
      };

      if (Array.isArray(parsed.skills) && parsed.skills.length > 0) appData.skills = parsed.skills;
      if (Array.isArray(parsed.experiences) && parsed.experiences.length > 0) appData.experiences = parsed.experiences;
      if (Array.isArray(parsed.courses) && parsed.courses.length > 0) appData.courses = parsed.courses;
      if (Array.isArray(parsed.projects) && parsed.projects.length > 0) appData.projects = parsed.projects;
      if (parsed.profilePhoto !== undefined) appData.profilePhoto = parsed.profilePhoto;

      delete appData.texts.contactPhone;

      // Master anahtarına kalıcı olarak yaz
      localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    } catch (e) {
      console.error("LocalStorage yükleme hatası:", e);
      appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    }
  } else {
    appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
  }
}

function saveData(silent = false) {
  // 1. Ekrandaki tüm düzenlenebilir alanları appData ile senkronize et
  document.querySelectorAll(".editable-field").forEach(el => {
    const val = el.innerText.trim();

    // A) Sabit metin alanları (id üzerinden appData.texts)
    const id = el.id;
    if (id && appData.texts && appData.texts.hasOwnProperty(id)) {
      appData.texts[id] = val;
    }

    // B) Dinamik kartlar (data-type, data-id, data-field üzerinden)
    const type = el.dataset.type;
    const itemId = el.dataset.id;
    const field = el.dataset.field;

    if (type && itemId && field) {
      if (type === "project" && Array.isArray(appData.projects)) {
        const item = appData.projects.find(p => String(p.id) === String(itemId));
        if (item) item[field] = val;
      } else if (type === "skill" && Array.isArray(appData.skills)) {
        const item = appData.skills.find(s => String(s.id) === String(itemId));
        if (item) item[field] = val;
      } else if (type === "exp" && Array.isArray(appData.experiences)) {
        const item = appData.experiences.find(e => String(e.id) === String(itemId));
        if (item) item[field] = val;
      } else if (type === "course" && Array.isArray(appData.courses)) {
        const item = appData.courses.find(c => String(c.id) === String(itemId));
        if (item) item[field] = val;
      }
    }
  });

  updateContactHrefs();

  // 2. LocalStorage'a kalıcı olarak kaydet
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(appData));
    localStorage.setItem("bigdata_isEditMode", isEditMode ? "true" : "false");
  } catch (err) {
    console.error("LocalStorage kaydetme hatası:", err);
  }

  // 3. Kullanıcıya bildirim göster
  if (!silent) {
    showToast("💾 Değişiklikler kalıcı olarak kaydedildi!");
  }
}

// Canlı Gerçek Zamanlı Otomatik Kaydetme (Auto-Save) Dinleyicileri
let autoSaveTimer = null;
function triggerAutoSave() {
  clearTimeout(autoSaveTimer);
  autoSaveTimer = setTimeout(() => {
    saveData(true);
  }, 350);
}

function setupLiveAutoSave() {
  // Yazarken anında otomatik kaydet (input)
  document.addEventListener("input", (e) => {
    if (e.target && (e.target.classList.contains("editable-field") || e.target.isContentEditable)) {
      triggerAutoSave();
    }
  });

  // Odaktan çıkıldığında (blur) beklemeden hemen kaydet
  document.addEventListener("blur", (e) => {
    if (e.target && (e.target.classList.contains("editable-field") || e.target.isContentEditable)) {
      saveData(true);
    }
  }, true);

  // Sayfa yenilenirken (F5 / reload) veya sekmeler arası geçişte anında kaydet
  window.addEventListener("beforeunload", () => {
    saveData(true);
  });
}

function updateContactHrefs() {
  const emailEl = document.getElementById("emailLink");
  if (emailEl && appData.texts.contactEmail) {
    emailEl.href = "mailto:" + appData.texts.contactEmail;
  }

  const linkedinEl = document.getElementById("linkedinLink");
  if (linkedinEl) {
    let url = appData.texts.contactLinkedin || "https://www.linkedin.com/in/m%C3%BCesser-irem-gecici-a684a8345";
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      if (url.includes("linkedin.com")) {
        url = "https://" + url;
      } else {
        url = "https://www.linkedin.com/in/m%C3%BCesser-irem-gecici-a684a8345";
      }
    }
    linkedinEl.href = url;
  }

  const githubEl = document.getElementById("githubLink");
  if (githubEl) {
    let url = appData.texts.contactGithub || "https://github.com/irewm11";
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      if (url.includes("github.com")) {
        url = "https://" + url;
      } else {
        url = "https://github.com/irewm11";
      }
    }
    githubEl.href = url;
  }
}

function renderAll() {
  const profileImg = document.getElementById("profileImage");
  const fallback = document.getElementById("avatarFallback");

  if (profileImg && fallback) {
    if (appData.profilePhoto && appData.profilePhoto.trim() !== "" && !appData.profilePhoto.includes("big_data_bg")) {
      profileImg.src = appData.profilePhoto;
      profileImg.style.display = "block";
      fallback.style.display = "none";
    } else {
      profileImg.style.display = "none";
      fallback.style.display = "flex";
    }
  }

  Object.keys(appData.texts).forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerText = appData.texts[id];
  });

  updateContactHrefs();
  renderSkillsPlain();
  renderExperiencesPlain();
  renderCoursesCards();
  renderProjectsPureText();

  if (isEditMode) enableContentEditable(true);
  triggerWaterfallCascade();
}

function renderSkillsPlain() {
  const container = document.getElementById("plainSkillsList");
  if (!container) return;
  container.innerHTML = "";

  appData.skills.forEach(sk => {
    const item = document.createElement("div");
    item.className = "plain-skill-item";
    item.innerHTML = `
      <span class="plain-skill-icon">${escapeHtml(sk.icon)}</span>
      <span class="plain-skill-name ${isEditMode ? 'editable-field' : ''}" data-type="skill" data-id="${sk.id}" data-field="name">${escapeHtml(sk.name)}</span>
      <span class="plain-skill-desc ${isEditMode ? 'editable-field' : ''}" data-type="skill" data-id="${sk.id}" data-field="level">${escapeHtml(sk.level)}</span>
      <button class="delete-btn-inline" onclick="deleteSkill(${sk.id})">Sil</button>
    `;
    container.appendChild(item);
  });
}

function renderExperiencesPlain() {
  const container = document.getElementById("plainExperienceList");
  if (!container) return;
  container.innerHTML = "";

  appData.experiences.forEach(exp => {
    const item = document.createElement("div");
    item.className = "plain-exp-item";
    item.innerHTML = `
      <div class="plain-exp-title-row">
        <div>
          <span class="plain-exp-role ${isEditMode ? 'editable-field' : ''}" data-type="exp" data-id="${exp.id}" data-field="role">${escapeHtml(exp.role)}</span>
          <span style="color: var(--text-dim); font-size: 0.9rem; margin: 0 6px;">—</span>
          <span class="plain-exp-company ${isEditMode ? 'editable-field' : ''}" data-type="exp" data-id="${exp.id}" data-field="company">${escapeHtml(exp.company)}</span>
        </div>
        <div class="plain-exp-date ${isEditMode ? 'editable-field' : ''}" data-type="exp" data-id="${exp.id}" data-field="date">${escapeHtml(exp.date)}</div>
      </div>
      <p class="plain-exp-desc ${isEditMode ? 'editable-field' : ''}" data-type="exp" data-id="${exp.id}" data-field="desc">${escapeHtml(exp.desc)}</p>
      <button class="delete-btn-inline" onclick="deleteExperience(${exp.id})" style="margin-top: 8px;">🗑️ Deneyimi Sil</button>
    `;
    container.appendChild(item);
  });
}

function renderCoursesCards() {
  const container = document.getElementById("coursesGrid");
  if (!container) return;
  container.innerHTML = "";

  appData.courses.forEach(c => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.innerHTML = `
      <div class="course-platform ${isEditMode ? 'editable-field' : ''}" data-type="course" data-id="${c.id}" data-field="platform">${escapeHtml(c.platform)}</div>
      <div class="course-title ${isEditMode ? 'editable-field' : ''}" data-type="course" data-id="${c.id}" data-field="title">${escapeHtml(c.title)}</div>
      <div class="course-status ${isEditMode ? 'editable-field' : ''}" data-type="course" data-id="${c.id}" data-field="status">${escapeHtml(c.status)}</div>
      <button class="delete-btn-inline" onclick="deleteCourse(${c.id})" style="margin-top: 10px;">Sil</button>
    `;
    container.appendChild(card);
  });
}

function setupProjectFilter() {
  const filterBtns = document.querySelectorAll(".filter-pill-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentProjectFilter = btn.getAttribute("data-filter") || "all";
      renderProjectsPureText();
    });
  });
}

function toggleProjectStatus(id) {
  const proj = appData.projects.find(p => p.id === id);
  if (proj) {
    const isOngoing = (proj.status || "").toLowerCase().includes("devam");
    proj.status = isOngoing ? "Tamamlandı" : "Devam Ediyor";
    saveData();
    renderProjectsPureText();
    showToast(`📌 Proje durumu değiştirildi: ${proj.status}`);
  }
}

function renderProjectsPureText() {
  const container = document.getElementById("projectsEditorialList");
  if (!container) return;
  container.innerHTML = "";

  // Sayaçları güncelle
  const allCount = appData.projects.length;
  const ongoingCount = appData.projects.filter(p => (p.status || "").toLowerCase().includes("devam")).length;
  const completedCount = appData.projects.filter(p => (p.status || "").toLowerCase().includes("tamam")).length;

  const cAll = document.getElementById("countAll");
  const cOng = document.getElementById("countOngoing");
  const cComp = document.getElementById("countCompleted");
  if (cAll) cAll.textContent = allCount;
  if (cOng) cOng.textContent = ongoingCount;
  if (cComp) cComp.textContent = completedCount;

  // Filtreye göre projeleri al
  let filtered = appData.projects;
  if (currentProjectFilter === "ongoing") {
    filtered = appData.projects.filter(p => (p.status || "").toLowerCase().includes("devam"));
  } else if (currentProjectFilter === "completed") {
    filtered = appData.projects.filter(p => (p.status || "").toLowerCase().includes("tamam"));
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-dim); background: var(--bg-matte); border: 1px dashed var(--border-purple); border-radius: var(--radius-md);">
        Bu filtreye ait proje bulunamadı.
      </div>
    `;
    return;
  }

  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card-item";

    const isOngoing = (p.status || "").toLowerCase().includes("devam");
    const statusClass = isOngoing ? "status-ongoing" : "status-completed";
    const statusText = isOngoing ? "Devam Ediyor" : "Tamamlandı";
    const statusIcon = isOngoing ? '<span class="status-pulse-dot"></span>' : '✅';

    const tagsHTML = (p.tags || []).map(t => `<span class="tech-pill">${escapeHtml(t)}</span>`).join("");

    card.innerHTML = `
      <div>
        <div class="project-card-header">
          <span class="project-cat-badge ${isEditMode ? 'editable-field' : ''}" data-type="project" data-id="${p.id}" data-field="category">${escapeHtml(p.category || 'Proje')}</span>
          <span class="project-status-badge ${statusClass}" title="Durumu değiştirmek için tıklayın" onclick="toggleProjectStatus(${p.id})">
            ${statusIcon} ${statusText}
          </span>
        </div>
        <h3 class="project-card-title ${isEditMode ? 'editable-field' : ''}" data-type="project" data-id="${p.id}" data-field="title">${escapeHtml(p.title)}</h3>
        <p class="project-card-desc ${isEditMode ? 'editable-field' : ''}" data-type="project" data-id="${p.id}" data-field="desc">${escapeHtml(p.desc)}</p>
      </div>
      <div class="project-card-footer">
        <div class="tech-tag-row">${tagsHTML}</div>
        ${isEditMode ? `
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255, 255, 255, 0.08);">
            <button type="button" class="btn-edit-action" onclick="toggleProjectStatus(${p.id})">🔄 Durum: ${statusText}</button>
            <button type="button" class="delete-btn-inline" onclick="deleteProject(${p.id})">🗑️ Projeyi Sil</button>
          </div>
        ` : ''}
      </div>
    `;
    container.appendChild(card);
  });

  triggerWaterfallCascade();
}

function setupSinglePageNavigation() {
  const tabs = document.querySelectorAll(".nav-tab");
  let currentPage = window.location.pathname.split("/").pop();
  if (!currentPage || currentPage === "/") currentPage = "index.html";

  tabs.forEach(tab => {
    const href = tab.getAttribute("href");
    if (href === currentPage) {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}

function setupWaterfallAnimation() {
  triggerWaterfallCascade();
}

// Görsel ve yazıların sırayla yukarıdan aşağıya şelale gibi akarak ekranı doldurması
function triggerWaterfallCascade() {
  const cascadeSelectors = [
    ".bio-hero-block",
    ".edu-banner-box",
    ".contact-intro-box",
    ".projects-filter-bar",
    ".section-title-wrapper",
    ".plain-skill-item",
    ".plain-exp-item",
    ".course-card",
    ".project-card-item",
    ".contact-card-link",
    ".contact-form-wrapper",
    ".add-placeholder-btn"
  ];

  const mainWrapper = document.querySelector(".main-wrapper");
  if (!mainWrapper) return;

  const items = mainWrapper.querySelectorAll(cascadeSelectors.join(", "));
  
  items.forEach((item, index) => {
    item.classList.remove("waterfall-cascade-item");
    // Yeniden başlatmak için reflow tetikle
    void item.offsetWidth;
    // Sırayla yumuşak akan gecikme ver (staggered delay)
    const delay = 0.05 + index * 0.065;
    item.style.animationDelay = `${delay.toFixed(3)}s`;
    item.classList.add("waterfall-cascade-item");
  });
}

function setupEditMode() {
  const btnToggle = document.getElementById("btnToggleEdit");
  const banner = document.getElementById("editBanner");
  const editIcon = document.getElementById("editIcon");
  const editText = document.getElementById("editText");

  // Sayfa yüklendiğinde düzenleme modu önceki oturumda açıksa arayüzü güncelle
  if (isEditMode) {
    document.body.classList.add("edit-mode-active");
    if (banner) banner.classList.add("active");
    if (btnToggle) btnToggle.classList.add("active-mode");
    if (editIcon) editIcon.textContent = "🔓";
    if (editText) editText.textContent = "Düzenleme Açık";
  }

  // Düzenleme modundayken kart bağlantılarına yanlışlıkla tıklanıp sayfa geçişini önle
  document.querySelectorAll(".contact-card-link").forEach(link => {
    link.addEventListener("click", (e) => {
      if (isEditMode) {
        e.preventDefault();
      }
    });
  });

  if (btnToggle) {
    btnToggle.addEventListener("click", () => {
      isEditMode = !isEditMode;

      if (isEditMode) {
        document.body.classList.add("edit-mode-active");
        if (banner) banner.classList.add("active");
        btnToggle.classList.add("active-mode");
        if (editIcon) editIcon.textContent = "🔓";
        if (editText) editText.textContent = "Düzenleme Açık";
        renderAll();
        localStorage.setItem("bigdata_isEditMode", "true");
        showToast("✏️ Düzenleme modu açıldı. Metinlere tıklayarak doğrudan düzenleyebilirsiniz.");
      } else {
        // Önce ekrandaki değişiklikleri kaydet, ARDINDAN yeniden render et!
        saveData(false);
        document.body.classList.remove("edit-mode-active");
        if (banner) banner.classList.remove("active");
        btnToggle.classList.remove("active-mode");
        if (editIcon) editIcon.textContent = "✏️";
        if (editText) editText.textContent = "Düzenleme Modu";
        renderAll();
        localStorage.setItem("bigdata_isEditMode", "false");
      }
    });
  }

  const btnSave = document.getElementById("btnSaveData");
  if (btnSave) {
    btnSave.addEventListener("click", () => {
      saveData(false);
    });
  }

  const btnReset = document.getElementById("btnResetData");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      if (confirm("Tüm değişiklikleri sıfırlayıp orijinal CV verilerine dönmek istiyor musunuz?")) {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem("bigdata_isEditMode");
        appData = JSON.parse(JSON.stringify(DEFAULT_DATA));
        isEditMode = false;
        document.body.classList.remove("edit-mode-active");
        if (banner) banner.classList.remove("active");
        if (btnToggle) btnToggle.classList.remove("active-mode");
        if (editIcon) editIcon.textContent = "✏️";
        if (editText) editText.textContent = "Düzenleme Modu";
        renderAll();
        showToast("🔄 CV verileri başarıyla sıfırlandı!");
      }
    });
  }

  const exportBtn = document.getElementById("btnExportJSON");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      saveData(true);
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appData, null, 2));
      const downloadAnchor = document.createElement("a");
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "muesser_irem_gecici_cv.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });
  }
}

function enableContentEditable(enable) {
  document.querySelectorAll(".editable-field").forEach(el => {
    el.contentEditable = enable ? "true" : "false";
  });
}

function setupModals() {
  const photoModal = document.getElementById("photoModal");
  const btnClosePhotoModal = document.getElementById("btnClosePhotoModal");
  const btnSavePhotoUrl = document.getElementById("btnSavePhotoUrl");
  const photoUrlInput = document.getElementById("photoUrlInput");
  const profileFileInput = document.getElementById("profileFileInput");

  const profileClickArea = document.getElementById("profilePhotoClickArea");
  const btnTriggerUploadDirect = document.getElementById("btnTriggerUploadDirect");
  const directFileInput = document.getElementById("directProfileFileInput");

  // Doğrudan Fotoğraf Seçme (1-Tıkla Bilgisayardan Seçim)
  const triggerFilePicker = () => {
    if (directFileInput) {
      directFileInput.value = '';
      directFileInput.click();
    }
  };

  if (profileClickArea) {
    profileClickArea.addEventListener("click", triggerFilePicker);
  }

  if (btnTriggerUploadDirect) {
    btnTriggerUploadDirect.addEventListener("click", (e) => {
      e.stopPropagation();
      triggerFilePicker();
    });
  }

  if (directFileInput) {
    directFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          appData.profilePhoto = evt.target.result;
          renderAll();
          saveData();
          showToast("🖼️ Profil fotoğrafınız başarıyla yüklendi!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (btnClosePhotoModal) {
    btnClosePhotoModal.addEventListener("click", () => photoModal.classList.remove("open"));
  }

  if (profileFileInput) {
    profileFileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          appData.profilePhoto = evt.target.result;
          renderAll();
          saveData();
          photoModal.classList.remove("open");
          showToast("🖼️ Profil fotoğrafınız başarıyla güncellendi!");
        };
        reader.readAsDataURL(file);
      }
    });
  }

  if (btnSavePhotoUrl) {
    btnSavePhotoUrl.addEventListener("click", () => {
      const val = photoUrlInput.value.trim();
      if (val) {
        appData.profilePhoto = val;
        renderAll();
        saveData();
        photoModal.classList.remove("open");
        showToast("🖼️ Profil fotoğrafı URL'si uygulandı!");
      }
    });
  }

  const itemModal = document.getElementById("itemModal");
  const modalForm = document.getElementById("modalForm");
  const btnCloseModal = document.getElementById("btnCloseModal");

  const addExp = document.getElementById("addExpBtn");
  if (addExp) {
    addExp.addEventListener("click", () => {
      openItemModal("exp", "Yeni Deneyim / Çalışma Ekle");
    });
  }

  const addSkill = document.getElementById("addSkillBtn");
  if (addSkill) {
    addSkill.addEventListener("click", () => {
      openItemModal("skill", "Yeni Yetenek Ekle");
    });
  }

  const addCourse = document.getElementById("addCourseBtn");
  if (addCourse) {
    addCourse.addEventListener("click", () => {
      openItemModal("course", "Yeni Kurs / Sertifika Ekle");
    });
  }

  const addProj = document.getElementById("addProjectBtn");
  if (addProj) {
    addProj.addEventListener("click", () => {
      openItemModal("project", "Yeni Proje Ekle");
    });
  }

  if (btnCloseModal) {
    btnCloseModal.addEventListener("click", () => itemModal.classList.remove("open"));
  }

  if (modalForm) {
    modalForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const type = document.getElementById("modalTargetType").value;
      const title = document.getElementById("modalTitle").value.trim();
      const sub = document.getElementById("modalSub").value.trim();
      const desc = document.getElementById("modalDesc").value.trim();
      const tagsStr = document.getElementById("modalTags").value.trim();

      if (type === "exp") {
        appData.experiences.push({
          id: Date.now(),
          role: title,
          company: sub,
          date: "Yeni",
          desc: desc
        });
        renderExperiencesPlain();
      } else if (type === "skill") {
        appData.skills.push({
          id: Date.now(),
          icon: "⚡",
          name: title,
          level: sub
        });
        renderSkillsPlain();
      } else if (type === "course") {
        appData.courses.push({
          id: Date.now(),
          platform: sub || "Online Platform",
          title: title,
          status: desc || "Devam Ediyor"
        });
        renderCoursesCards();
      } else if (type === "project") {
        const tags = tagsStr ? tagsStr.split(",").map(t => t.trim()) : ["Veri Analizi"];
        const statusSelect = document.getElementById("modalStatus");
        const projStatus = statusSelect ? statusSelect.value : "Devam Ediyor";
        appData.projects.push({
          id: Date.now(),
          title: title,
          category: sub || "Makine Öğrenmesi",
          status: projStatus,
          desc: desc,
          tags: tags
        });
        renderProjectsPureText();
      }

      saveData();
      itemModal.classList.remove("open");
      if (isEditMode) enableContentEditable(true);
    });
  }
}

function openItemModal(type, header) {
  const modal = document.getElementById("itemModal");
  if (!modal) return;
  
  const headerEl = document.getElementById("modalHeaderTitle");
  if (headerEl) headerEl.textContent = header;
  
  const typeEl = document.getElementById("modalTargetType");
  if (typeEl) typeEl.value = type;

  const tagsGroup = document.getElementById("modalTagsGroup");
  const statusGroup = document.getElementById("modalStatusGroup");
  const modalDesc = document.getElementById("modalDesc");
  const modalDescGroup = modalDesc ? modalDesc.closest(".form-group") : null;

  if (tagsGroup) {
    tagsGroup.style.display = (type === "project") ? "block" : "none";
  }

  if (statusGroup) {
    statusGroup.style.display = (type === "project") ? "block" : "none";
  }

  // Yetenek ve Kurs eklerken modalDesc zorunluluğunu kaldır
  if (modalDesc) {
    if (type === "skill") {
      if (modalDescGroup) modalDescGroup.style.display = "none";
      modalDesc.required = false;
    } else {
      if (modalDescGroup) modalDescGroup.style.display = "block";
      modalDesc.required = (type === "exp" || type === "project");
    }
  }

  const form = document.getElementById("modalForm");
  if (form) form.reset();
  
  modal.classList.add("open");
}

function deleteExperience(id) {
  if (confirm("Bu deneyimi silmek istiyor musunuz?")) {
    appData.experiences = appData.experiences.filter(e => e.id !== id);
    saveData();
    renderExperiencesPlain();
  }
}

function deleteSkill(id) {
  if (confirm("Bu yeteneği silmek istiyor musunuz?")) {
    appData.skills = appData.skills.filter(s => s.id !== id);
    saveData();
    renderSkillsPlain();
  }
}

function deleteCourse(id) {
  if (confirm("Bu kursu silmek istiyor musunuz?")) {
    appData.courses = appData.courses.filter(c => c.id !== id);
    saveData();
    renderCoursesCards();
  }
}

function deleteProject(id) {
  if (confirm("Bu projeyi silmek istiyor musunuz?")) {
    appData.projects = appData.projects.filter(p => p.id !== id);
    saveData();
    renderProjectsPureText();
  }
}

// Background Canvas Animation: AŞAĞIYA DOĞRU AKAN IŞINLAR (Data Beams Stream) + Veri Düğümleri
function setupCanvasAnimation() {
  const canvas = document.getElementById("nodeCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  let mouse = { x: null, y: null, radius: 180 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  });

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  // 1. AŞAĞIYA DOĞRU AKAN DİJİTAL LAZER IŞINLARI (Data Beams)
  const beams = [];
  const numBeams = 55;

  function createBeam(initialY = null) {
    const isCyan = Math.random() > 0.45;
    const isPink = !isCyan && Math.random() > 0.5;
    let baseColor = isCyan ? "56, 189, 248" : (isPink ? "244, 114, 182" : "192, 132, 252");

    return {
      x: Math.random() * width,
      y: initialY !== null ? initialY : Math.random() * height,
      length: Math.random() * 160 + 60,       // Işın boyu: 60px - 220px
      speed: Math.random() * 3.8 + 2.4,        // Aşağıya doğru akış hızı (2.4 - 6.2 px/frame)
      width: Math.random() * 1.8 + 1.1,        // Işın kalınlığı
      color: baseColor,
      headGlow: isCyan ? "#38bdf8" : (isPink ? "#f472b6" : "#c084fc"),
      alpha: Math.random() * 0.45 + 0.5
    };
  }

  for (let i = 0; i < numBeams; i++) {
    beams.push(createBeam());
  }

  // 2. YÜZEN VERİ DÜĞÜMLERİ (PARTICLES)
  const particles = [];
  const numParticles = 45;

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 3.0 + 1.8,
      pulse: Math.random() * Math.PI,
      color: Math.random() > 0.4 ? "rgba(56, 189, 248, " : "rgba(192, 132, 252, "
    });
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // A) AŞAĞIYA DOĞRU AKAN IŞINLARI ÇİZ
    for (let i = 0; i < numBeams; i++) {
      let b = beams[i];
      b.y += b.speed;

      // Ekranın altından çıktığında yukarıdan tekrar başlat
      if (b.y - b.length > height) {
        beams[i] = createBeam(-b.length - Math.random() * 60);
        continue;
      }

      // Işın gövdesi (Yukarıdan aşağıya parlayan gradyan)
      const grad = ctx.createLinearGradient(b.x, b.y - b.length, b.x, b.y);
      grad.addColorStop(0, `rgba(${b.color}, 0)`);
      grad.addColorStop(0.65, `rgba(${b.color}, ${b.alpha * 0.55})`);
      grad.addColorStop(1, `rgba(${b.color}, ${b.alpha})`);

      ctx.beginPath();
      ctx.moveTo(b.x, b.y - b.length);
      ctx.lineTo(b.x, b.y);
      ctx.strokeStyle = grad;
      ctx.lineWidth = b.width;
      ctx.stroke();

      // Işının en ucundaki parlayan veri noktası (Glowing Leading Head)
      ctx.beginPath();
      ctx.arc(b.x, b.y, b.width * 1.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${b.alpha * 0.95})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = b.headGlow;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Mouse etkileşimi: Farenin yakından geçtiği ışınlar hızlanır
      if (mouse.x !== null) {
        let distMouse = Math.abs(b.x - mouse.x);
        if (distMouse < 80) {
          b.y += b.speed * 0.4;
        }
      }
    }

    // B) VERİ AĞI DÜĞÜMLERİ VE ÇİZGİLERİ
    for (let i = 0; i < numParticles; i++) {
      let p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.04;

      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;

      const alpha = 0.5 + Math.sin(p.pulse) * 0.4;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + alpha + ")";
      ctx.fill();

      // Mouse ile etkileşim
      if (mouse.x !== null && mouse.y !== null) {
        let mdx = p.x - mouse.x;
        let mdy = p.y - mouse.y;
        let mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouse.radius) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * (1 - mdist / mouse.radius)})`;
          ctx.lineWidth = 1.0;
          ctx.stroke();
        }
      }

      // Parçacıklar arası bağlantı çizgileri
      for (let j = i + 1; j < numParticles; j++) {
        let p2 = particles[j];
        let dx = p.x - p2.x;
        let dy = p.y - p2.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(192, 132, 252, ${0.5 * (1 - dist / 150)})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

function showToast(msg) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.style.cssText = `
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #7c3aed;
      color: #fff;
      padding: 12px 24px;
      border-radius: 12px;
      font-weight: 600;
      box-shadow: 0 10px 30px rgba(124, 58, 237, 0.5);
      z-index: 3000;
      transition: all 0.3s ease;
      transform: translateY(100px);
      opacity: 0;
    `;
    document.body.appendChild(toast);
  }

  toast.textContent = msg;
  toast.style.transform = "translateY(0)";
  toast.style.opacity = "1";

  setTimeout(() => {
    toast.style.transform = "translateY(100px)";
    toast.style.opacity = "0";
  }, 3000);
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   İLETİŞİM FORMU & E-POSTA / DOSYA İLETİM İŞLEMLERİ
   ========================================================================== */
function openGmailCompose() {
  const name = document.getElementById("senderName") ? document.getElementById("senderName").value.trim() : "";
  const email = document.getElementById("senderEmail") ? document.getElementById("senderEmail").value.trim() : "";
  const subject = document.getElementById("msgSubject") ? document.getElementById("msgSubject").value.trim() : "Portfolyo İletişim Mesajı";
  const message = document.getElementById("msgText") ? document.getElementById("msgText").value.trim() : "";
  const fileInput = document.getElementById("fileAttachment");
  const fileName = fileInput && fileInput.files.length > 0 ? fileInput.files[0].name : "";

  let body = `Gönderen: ${name || 'Belirtilmedi'}\nE-Posta: ${email || 'Belirtilmedi'}\n\nMesaj:\n${message || 'Merhaba, sizinle iletişime geçmek istiyorum.'}`;
  if (fileName) {
    body += `\n\n[İletilmek İstenen Dosya: ${fileName} - Lütfen bu dosyayı Gmail'deki ataş butonuyla ekleyiniz]`;
  }

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=iremgecici2@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, "_blank");
}

function setupContactForm() {
  const form = document.getElementById("directContactForm");
  const fileInput = document.getElementById("fileAttachment");
  const fileNameLabel = document.getElementById("fileNameLabel");
  const btnGmail = document.getElementById("btnSendViaGmail");
  const btnMailClient = document.getElementById("btnOpenMailClient");
  const statusAlert = document.getElementById("formSendStatus");
  const btnSubmit = document.getElementById("btnSubmitMessage");

  // Seçilen dosya adını anında gösterme
  if (fileInput && fileNameLabel) {
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        fileNameLabel.innerHTML = `📎 Seçilen Dosya: <strong>${escapeHtml(file.name)}</strong> (${(file.size / 1024).toFixed(1)} KB)`;
        fileNameLabel.style.color = "#a78bfa";
      } else {
        fileNameLabel.textContent = "Bilgisayarınızdan dosya seçin veya sürükleyin...";
        fileNameLabel.style.color = "";
      }
    });
  }

  // 1. Gmail ile Doğrudan Aç & Gönder Butonu (En Güvenilir & Anında Çözüm)
  if (btnGmail) {
    btnGmail.addEventListener("click", () => {
      openGmailCompose();
      showToast("🔴 Gmail e-posta ekranı açıldı!");
    });
  }

  // 2. Varsayılan E-Posta Uygulamasıyla Aç (Outlook / Apple Mail vb.)
  if (btnMailClient) {
    btnMailClient.addEventListener("click", () => {
      const name = document.getElementById("senderName") ? document.getElementById("senderName").value.trim() : "";
      const email = document.getElementById("senderEmail") ? document.getElementById("senderEmail").value.trim() : "";
      const subject = document.getElementById("msgSubject") ? document.getElementById("msgSubject").value.trim() : "Portfolyo İletişim Mesajı";
      const message = document.getElementById("msgText") ? document.getElementById("msgText").value.trim() : "";

      const bodyText = `Gönderen: ${name}\nE-Posta: ${email}\n\nMesaj:\n${message}\n\n(Not: Dosyanız varsa lütfen e-posta uygulamanızdan ekleyiniz)`;
      const mailtoUrl = `mailto:${appData.texts.contactEmail || 'iremgecici2@gmail.com'}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      window.location.href = mailtoUrl;
    });
  }

  // 3. Web Formu Gönderimi (AJAX + Akıllı Yerel Mod Tespiti)
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Yerel dosya protokolü (file://) kontrolü: Form servisleri yerel dosyaları güvenlik nedeniyle engeller
      if (window.location.protocol === "file:") {
        openGmailCompose();
        if (statusAlert) {
          statusAlert.style.display = "block";
          statusAlert.className = "form-status-alert info";
          statusAlert.innerHTML = `
            ℹ️ <strong>Yerel Dosya (file://) Modu:</strong> Sayfayı web sunucusu olmadan doğrudan bilgisayarınızdan açtığınız için mesajınız ve bilgileriniz doğrudan <strong>Gmail</strong> ekranına aktarıldı.<br>
            Açılan Gmail sekmesinden dosyanızı ekleyip tek tıkla <strong>iremgecici2@gmail.com</strong> adresine gönderebilirsiniz.<br><br>
            💡 <em>Not: Web siteniz GitHub Pages veya bir sunucuya yüklendiğinde bu form hiçbir ek uygulama açmadan doğrudan arka planda otomatik iletilir.</em>
          `;
        }
        showToast("📬 Bilgiler Gmail ekranına aktarıldı!");
        return;
      }

      if (statusAlert) {
        statusAlert.style.display = "block";
        statusAlert.className = "form-status-alert info";
        statusAlert.innerHTML = "⏳ Mesajınız iletiliyor, lütfen bekleyiniz...";
      }

      if (btnSubmit) {
        btnSubmit.disabled = true;
        btnSubmit.style.opacity = "0.7";
      }

      try {
        const formData = new FormData(form);
        const response = await fetch("https://formsubmit.co/ajax/iremgecici2@gmail.com", {
          method: "POST",
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        const data = await response.json();

        if (data.success === "true" || data.success === true) {
          if (statusAlert) {
            statusAlert.className = "form-status-alert success";
            statusAlert.innerHTML = "🎉 <strong>Harika!</strong> Mesajınız başarıyla <strong>iremgecici2@gmail.com</strong> adresime iletildi. En kısa sürede dönüş yapacağım.";
          }
          form.reset();
          showToast("✉️ Mesajınız başarıyla iletildi!");
        } else if (data.message && data.message.includes("Activation")) {
          // FormSubmit ilk seferlik aktivasyon uyarısı
          if (statusAlert) {
            statusAlert.className = "form-status-alert warning";
            statusAlert.innerHTML = `
              ⚠️ <strong>Form Aktivasyonu Gerekli (İlk Seferlik):</strong><br>
              FormSubmit servisi <strong>iremgecici2@gmail.com</strong> adresinize bir aktivasyon e-postası gönderdi.<br>
              Lütfen Gmail gelen kutunuzu (veya <em>Spam / Gereksiz</em> klasörünü) kontrol edip <strong>'Activate Form'</strong> butonuna 1 kez tıklayınız.<br>
              Aktivasyonu yaptıktan sonra tüm form mesajları otomatik olarak kutunuza düşecektir.<br><br>
              <button type="button" class="btn-gmail-compose" onclick="openGmailCompose()">🔴 Hemen Gmail ile Gönder</button>
            `;
          }
        } else {
          throw new Error(data.message || "Bilinmeyen yanıt");
        }
      } catch (err) {
        console.warn("Form gönderim uyarısı:", err);
        if (statusAlert) {
          statusAlert.className = "form-status-alert warning";
          statusAlert.innerHTML = `
            ⚠️ Form iletimi sırasında bir sorun oluştu veya aktivasyon bekleniyor.<br>
            Mesajınızı hemen iletmek için lütfen <strong>'🔴 Gmail ile Aç & Gönder'</strong> veya <strong>'📬 E-Posta Uygulamasıyla Aç'</strong> butonunu kullanınız.
          `;
        }
      } finally {
        if (btnSubmit) {
          btnSubmit.disabled = false;
          btnSubmit.style.opacity = "1";
        }
      }
    });
  }
}
