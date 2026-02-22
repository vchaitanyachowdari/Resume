/* ============================================
   VC Admin — Shared Utilities (auth, toast, modal)
   Loaded on every admin page
   ============================================ */

/* ---------- AUTH HELPERS ---------- */
const Auth = {
  STORAGE_KEY: 'vc_admin_session',

  USERS: [
    { id: 1, email: 'admin@vc.com', password: 'Admin@123', name: 'V Chaitanya', role: 'Super Admin', avatar: null, initials: 'VC' },
    { id: 2, email: 'editor@vc.com', password: 'Editor@123', name: 'Editor User', role: 'Editor', avatar: null, initials: 'EU' },
  ],

  login(email, password, remember = false) {
    const user = this.USERS.find(u => u.email === email && u.password === password);
    if (!user) return null;
    const session = { ...user, expiresAt: remember ? Date.now() + 30 * 86400000 : Date.now() + 86400000 };
    delete session.password;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(session));
    return session;
  },

  logout() {
    localStorage.removeItem(this.STORAGE_KEY);
  },

  getSession() {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (!raw) return null;
      const session = JSON.parse(raw);
      if (Date.now() > session.expiresAt) { this.logout(); return null; }
      return session;
    } catch { return null; }
  },

  requireAuth(redirectTo = '../login.html') {
    const session = this.getSession();
    if (!session) { window.location.href = redirectTo; return null; }
    return session;
  }
};

/* ---------- CMS DATA STORE ---------- */
const CMS = {
  KEYS: {
    projects:   'cms_projects',
    skills:     'cms_skills',
    experience: 'cms_experience',
    education:  'cms_education',
    messages:   'cms_messages',
    media:      'cms_media',
    users:      'cms_users',
    settings:   'cms_settings',
    pageViews:  'cms_pageviews',
  },

  _defaults: {
    projects: [
      { id: 1, title: 'AI Resume Builder', category: 'AI/ML', tech: ['Python', 'OpenAI', 'FastAPI', 'React'], description: 'An intelligent resume builder powered by GPT-4 that tailors resumes to job descriptions with ATS optimization.', status: 'Published', featured: true, liveUrl: 'https://example.com', githubUrl: 'https://github.com', image: '', date: '2024-12-01', views: 1240 },
      { id: 2, title: 'Appwrite CMS Dashboard', category: 'Full Stack', tech: ['React', 'Appwrite', 'TypeScript'], description: 'A fully-featured content management system connected to Appwrite backend with real-time sync.', status: 'Published', featured: true, liveUrl: '', githubUrl: 'https://github.com', image: '', date: '2025-01-15', views: 875 },
      { id: 3, title: 'Portfolio Analytics', category: 'Data', tech: ['Python', 'Recharts', 'D3.js'], description: 'Real-time analytics dashboard for tracking portfolio performance and visitor engagement.', status: 'Draft', featured: false, liveUrl: '', githubUrl: '', image: '', date: '2025-02-10', views: 0 },
      { id: 4, title: 'E-Commerce Platform', category: 'Full Stack', tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'], description: 'Complete e-commerce solution with inventory management, payments, and order tracking.', status: 'Published', featured: false, liveUrl: 'https://example.com', githubUrl: '', image: '', date: '2024-10-20', views: 2100 },
      { id: 5, title: 'Automation Workflow Engine', category: 'DevOps', tech: ['Node.js', 'Docker', 'GitHub Actions'], description: 'CI/CD pipeline automation with custom workflow triggers and notification system.', status: 'Archived', featured: false, liveUrl: '', githubUrl: 'https://github.com', image: '', date: '2024-08-05', views: 430 },
    ],
    skills: [
      { id: 1, category: 'Frontend', skills: [{name:'React',level:95},{name:'TypeScript',level:88},{name:'Next.js',level:85},{name:'CSS/SCSS',level:90},{name:'Framer Motion',level:78}] },
      { id: 2, category: 'Backend', skills: [{name:'Node.js',level:87},{name:'Python',level:92},{name:'FastAPI',level:83},{name:'PostgreSQL',level:80},{name:'Redis',level:72}] },
      { id: 3, category: 'AI/ML', skills: [{name:'OpenAI API',level:90},{name:'LangChain',level:82},{name:'TensorFlow',level:68},{name:'Prompt Engineering',level:95},{name:'RAG Systems',level:80}] },
      { id: 4, category: 'DevOps & Cloud', skills: [{name:'Docker',level:85},{name:'GitHub Actions',level:88},{name:'AWS',level:75},{name:'Vercel',level:92},{name:'Linux',level:80}] },
    ],
    experience: [
      { id: 1, company: 'TechCorp AI', role: 'Senior Full Stack Developer', type: 'Full-time', start: '2023-06', end: '', current: true, description: 'Leading development of AI-powered applications using React, Python, and OpenAI APIs. Architected microservices infrastructure serving 50K+ daily users.', technologies: ['React', 'Python', 'OpenAI', 'Docker', 'PostgreSQL'], location: 'Hyderabad, India' },
      { id: 2, company: 'StartupXYZ', role: 'Full Stack Developer', type: 'Full-time', start: '2022-01', end: '2023-05', current: false, description: 'Built and maintained the core product from scratch. Implemented real-time features using WebSockets and developed the mobile app.', technologies: ['Next.js', 'Node.js', 'MongoDB', 'Socket.io', 'React Native'], location: 'Remote' },
      { id: 3, company: 'Freelance / Self', role: 'AI Automation Consultant', type: 'Freelance', start: '2021-03', end: '2022-01', current: false, description: 'Delivered 20+ automation projects for SMBs including web scrapers, data pipelines, and workflow automation tools.', technologies: ['Python', 'Selenium', 'Zapier', 'Make.com', 'REST APIs'], location: 'Remote' },
    ],
    education: [
      { id: 1, institution: 'JNTU Hyderabad', degree: 'B.Tech in Computer Science', year: '2020', grade: '8.2 CGPA', description: 'Specialized in Software Engineering and Data Structures. Final year project on ML-based code review automation.', type: 'Degree' },
      { id: 2, institution: 'Coursera / DeepLearning.AI', degree: 'Deep Learning Specialization', year: '2021', grade: 'Certificate', description: '5-course specialization covering Neural Networks, CNN, RNN, and Sequence Models.', type: 'Certification' },
      { id: 3, institution: 'AWS', degree: 'AWS Solutions Architect Associate', year: '2022', grade: 'SAA-C03', description: 'Cloud architecture, security, and deployment best practices on Amazon Web Services.', type: 'Certification' },
    ],
    messages: [
      { id: 1, name: 'Sarah Johnson', email: 'sarah@example.com', subject: 'Project Collaboration', message: 'Hi! I came across your portfolio and was really impressed with the AI Resume Builder project. I\'d love to discuss a potential collaboration on a similar AI-driven project for our HR platform.', date: '2025-02-20T10:30:00', status: 'unread' },
      { id: 2, name: 'Alex Kumar', email: 'alex.kumar@startup.io', subject: 'Freelance Opportunity', message: 'We\'re building a startup in the edtech space and need an experienced full-stack developer. Our budget is $5-8K for a 3-month contract. Would you be interested?', date: '2025-02-18T14:22:00', status: 'read' },
      { id: 3, name: 'Priya Sharma', email: 'priya@techco.com', subject: 'Speaking at Hyderabad DevFest', message: 'We\'d love to have you speak at our upcoming DevFest event in March about AI-powered development workflows. Can you share your availability?', date: '2025-02-15T09:15:00', status: 'read' },
      { id: 4, name: 'Marcus Wu', email: 'marcus@vc.fund', subject: 'Investment Inquiry', message: 'I\'m a VC partner looking for talented builders working on AI tools. Your work caught our attention. Would you be open to a 30-minute call next week?', date: '2025-02-10T16:45:00', status: 'unread' },
      { id: 5, name: 'Emma Davis', email: 'emma@agency.com', subject: 'Website Redesign Project', message: 'We have a client who needs a complete website overhaul with a modern design. Timeline is 6 weeks. Looking at React + headless CMS. Could you share your rate?', date: '2025-02-05T11:00:00', status: 'read' },
    ],
    media: [
      { id: 1, name: 'profile-photo.jpg', type: 'image/jpeg', size: '245 KB', url: '', date: '2025-01-10', thumb: '🖼️' },
      { id: 2, name: 'project-ai-builder.png', type: 'image/png', size: '512 KB', url: '', date: '2025-01-15', thumb: '🖼️' },
      { id: 3, name: 'resume-v4.pdf', type: 'application/pdf', size: '189 KB', url: '', date: '2025-02-01', thumb: '📄' },
      { id: 4, name: 'certifications.zip', type: 'application/zip', size: '2.4 MB', url: '', date: '2025-02-05', thumb: '🗜️' },
      { id: 5, name: 'hero-bg.webp', type: 'image/webp', size: '128 KB', url: '', date: '2025-02-10', thumb: '🖼️' },
      { id: 6, name: 'project-ecommerce.png', type: 'image/png', size: '890 KB', url: '', date: '2025-02-15', thumb: '🖼️' },
    ],
    users: [
      { id: 1, name: 'V Chaitanya', email: 'admin@vc.com', role: 'Super Admin', status: 'active', lastLogin: '2025-02-22T10:00:00', initials: 'VC' },
      { id: 2, name: 'Editor User', email: 'editor@vc.com', role: 'Editor', status: 'active', lastLogin: '2025-02-20T14:30:00', initials: 'EU' },
      { id: 3, name: 'Viewer Only', email: 'viewer@vc.com', role: 'Viewer', status: 'inactive', lastLogin: '2025-01-15T09:00:00', initials: 'VO' },
    ],
    settings: {
      siteName: 'V Chaitanya Chowdari — Portfolio',
      tagline: 'AI Generalist · Automation Expert · Full Stack Developer',
      email: 'chaitanya@vc.com',
      phone: '+91 99999 00000',
      location: 'Hyderabad, India',
      bio: 'Building AI-powered products and automation systems that scale. Passionate about the intersection of engineering and intelligent systems.',
      siteTitle: 'VC Portfolio — AI & Full Stack Developer',
      metaDesc: 'Portfolio of V Chaitanya Chowdari — AI, Automation, and Full Stack Development.',
      metaKeywords: 'AI developer, full stack, automation, React, Python, OpenAI',
      openToWork: true,
      githubUrl: 'https://github.com',
      linkedinUrl: 'https://linkedin.com',
      twitterUrl: 'https://twitter.com',
    },
    pageViews: [
      { date: '2025-02-16', views: 120 }, { date: '2025-02-17', views: 180 }, { date: '2025-02-18', views: 150 },
      { date: '2025-02-19', views: 220 }, { date: '2025-02-20', views: 310 }, { date: '2025-02-21', views: 280 },
      { date: '2025-02-22', views: 195 },
    ],
  },

  get(key) {
    try {
      const raw = localStorage.getItem(this.KEYS[key]);
      if (raw) return JSON.parse(raw);
      // Seed defaults
      const def = this._defaults[key];
      if (def) localStorage.setItem(this.KEYS[key], JSON.stringify(def));
      return def || (Array.isArray(this._defaults[key]) ? [] : {});
    } catch { return this._defaults[key] || []; }
  },

  set(key, data) {
    localStorage.setItem(this.KEYS[key], JSON.stringify(data));
  },

  add(key, item) {
    const arr = this.get(key);
    const maxId = arr.reduce((m, x) => Math.max(m, x.id || 0), 0);
    item.id = maxId + 1;
    arr.push(item);
    this.set(key, arr);
    return item;
  },

  update(key, id, updates) {
    const arr = this.get(key);
    const idx = arr.findIndex(x => x.id === id);
    if (idx === -1) return null;
    arr[idx] = { ...arr[idx], ...updates };
    this.set(key, arr);
    return arr[idx];
  },

  remove(key, id) {
    const arr = this.get(key);
    const filtered = arr.filter(x => x.id !== id);
    this.set(key, filtered);
  },
};

/* ---------- TOAST SYSTEM ---------- */
const Toast = {
  container: null,

  init() {
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(message, type = 'info', title = '', duration = 3500) {
    this.init();
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    const titles = { success: 'Success', error: 'Error', warning: 'Warning', info: 'Info' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type]}</span>
      <div class="toast-body">
        <div class="toast-title">${title || titles[type]}</div>
        <div class="toast-msg">${message}</div>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    this.container.appendChild(toast);
    setTimeout(() => { toast.classList.add('removing'); setTimeout(() => toast.remove(), 300); }, duration);
  },

  success: function(msg, title) { this.show(msg, 'success', title); },
  error:   function(msg, title) { this.show(msg, 'error', title); },
  info:    function(msg, title) { this.show(msg, 'info', title); },
  warning: function(msg, title) { this.show(msg, 'warning', title); },
};

/* ---------- MODAL SYSTEM ---------- */
const Modal = {
  show(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.add('open'); document.body.style.overflow = 'hidden'; }
  },
  hide(id) {
    const el = document.getElementById(id);
    if (el) { el.classList.remove('open'); document.body.style.overflow = ''; }
  },
  hideAll() {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
};

// Close modal on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay')) Modal.hideAll();
});

/* ---------- THEME HELPER ---------- */
const Theme = {
  init() {
    const saved = localStorage.getItem('vc_admin_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    return saved;
  },
  toggle() {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('vc_admin_theme', next);
    return next;
  }
};

Theme.init();

/* ---------- SIDEBAR TOGGLE ---------- */
function initSidebar() {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('sidebarToggle');
  const mobileBtn = document.getElementById('mobileSidebarBtn');
  const overlay = document.getElementById('sidebarOverlay');

  if (toggleBtn && sidebar) {
    const collapsed = localStorage.getItem('vc_sidebar_collapsed') === 'true';
    if (collapsed) sidebar.classList.add('collapsed');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      localStorage.setItem('vc_sidebar_collapsed', sidebar.classList.contains('collapsed'));
    });
  }

  if (mobileBtn && sidebar) {
    mobileBtn.addEventListener('click', () => {
      sidebar.classList.toggle('mobile-open');
      if (overlay) overlay.classList.toggle('active');
    });
  }

  if (overlay && sidebar) {
    overlay.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      overlay.classList.remove('active');
    });
  }
}

/* ---------- TOPBAR DROPDOWN ---------- */
function initDropdowns() {
  document.querySelectorAll('[data-dropdown]').forEach(trigger => {
    const menuId = trigger.getAttribute('data-dropdown');
    const menu = document.getElementById(menuId);
    if (!menu) return;

    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = menu.classList.contains('open');
      document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
      if (!isOpen) menu.classList.add('open');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-menu.open').forEach(m => m.classList.remove('open'));
  });
}

/* ---------- THEME TOGGLE BTN ---------- */
function initThemeToggle() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = Theme.toggle();
    btn.querySelector('.theme-icon').textContent = next === 'dark' ? '☀️' : '🌙';
  });
  const cur = document.documentElement.getAttribute('data-theme');
  const icon = btn.querySelector('.theme-icon');
  if (icon) icon.textContent = cur === 'dark' ? '☀️' : '🌙';
}

/* ---------- NAV ACTIVE STATE ---------- */
function setActiveNav() {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-item[data-page]').forEach(item => {
    const page = item.getAttribute('data-page');
    if (path.includes(page)) item.classList.add('active');
    else item.classList.remove('active');
  });
}

/* ---------- FORMAT HELPERS ---------- */
function formatDate(dateStr) {
  if (!dateStr) return '—';
  return new Date(dateStr).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function timeAgo(dateStr) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const days  = Math.floor(hours / 24);
  if (days > 0)  return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (mins > 0)  return `${mins}m ago`;
  return 'Just now';
}

function escapeHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function initPage() {
  initSidebar();
  initDropdowns();
  initThemeToggle();
  setActiveNav();

  // Populate user info from session
  const session = Auth.getSession();
  if (session) {
    document.querySelectorAll('.user-initials').forEach(el => el.textContent = session.initials || 'VC');
    document.querySelectorAll('.user-display-name').forEach(el => el.textContent = session.name || 'Admin');
    document.querySelectorAll('.user-display-role').forEach(el => el.textContent = session.role || 'Admin');
  }

  // Logout buttons
  document.querySelectorAll('[data-logout]').forEach(btn => {
    btn.addEventListener('click', () => { Auth.logout(); window.location.href = '../login.html'; });
  });
}
