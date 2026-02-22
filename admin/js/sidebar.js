/* ============================================
   Shared Sidebar Renderer
   Injected on every admin page via sidebarMount
   ============================================ */
(function renderSidebar() {
    const mount = document.getElementById('sidebarMount');
    if (!mount) return;

    const path = window.location.pathname;
    const isActive = (page) => path.includes(page) ? 'active' : '';

    mount.innerHTML = `
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-header">
        <div class="sidebar-brand">
          <div class="sidebar-logo">VC</div>
          <div class="sidebar-brand-text">
            <div class="sidebar-brand-name">VC Admin</div>
            <div class="sidebar-brand-sub">CMS Portal</div>
          </div>
        </div>
        <button class="sidebar-toggle" id="sidebarToggle" aria-label="Collapse sidebar">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
      </div>

      <nav class="sidebar-nav">
        <div class="sidebar-section">
          <div class="sidebar-section-title">Main</div>
          <a href="dashboard.html" class="nav-item ${isActive('dashboard')}" data-page="dashboard">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
            <span class="sidebar-label">Dashboard</span>
          </a>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-title">Content</div>
          <a href="projects.html" class="nav-item ${isActive('projects')}" data-page="projects">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            <span class="sidebar-label">Projects</span>
          </a>
          <a href="skills.html" class="nav-item ${isActive('skills')}" data-page="skills">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span class="sidebar-label">Skills</span>
          </a>
          <a href="experience.html" class="nav-item ${isActive('experience')}" data-page="experience">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            <span class="sidebar-label">Experience</span>
          </a>
          <a href="education.html" class="nav-item ${isActive('education')}" data-page="education">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            <span class="sidebar-label">Education</span>
          </a>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-title">Manage</div>
          <a href="media.html" class="nav-item ${isActive('media')}" data-page="media">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <span class="sidebar-label">Media</span>
          </a>
          <a href="messages.html" class="nav-item ${isActive('messages')}" data-page="messages" id="navMessages">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span class="sidebar-label">Messages</span>
            <span class="nav-badge" id="unreadBadge" style="display:none"></span>
          </a>
          <a href="users.html" class="nav-item ${isActive('users')}" data-page="users">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span class="sidebar-label">Users</span>
          </a>
        </div>

        <div class="sidebar-section">
          <div class="sidebar-section-title">System</div>
          <a href="settings.html" class="nav-item ${isActive('settings')}" data-page="settings">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            <span class="sidebar-label">Settings</span>
          </a>
          <a href="../../index.html" class="nav-item">
            <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            <span class="sidebar-label">View Portfolio</span>
          </a>
        </div>
      </nav>

      <div class="sidebar-footer">
        <div class="user-card" data-dropdown="sidebarUserDrop">
          <div class="user-avatar user-initials">VC</div>
          <div class="user-info">
            <div class="user-name user-display-name">V Chaitanya</div>
            <div class="user-role user-display-role">Super Admin</div>
          </div>
          <svg class="user-menu-btn" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="12" cy="19" r="1"/></svg>
          <div class="dropdown-menu" id="sidebarUserDrop">
            <div class="dropdown-item" onclick="location.href='settings.html'">⚙️ Settings</div>
            <div class="dropdown-divider"></div>
            <div class="dropdown-item danger" data-logout>🚪 Logout</div>
          </div>
        </div>
      </div>
    </aside>
  `;

    // Update unread badge
    try {
        const msgs = JSON.parse(localStorage.getItem('cms_messages')) || [];
        const unread = msgs.filter(m => m.status === 'unread').length;
        const badge = document.getElementById('unreadBadge');
        if (badge && unread > 0) { badge.textContent = unread; badge.style.display = 'flex'; }
    } catch (e) { }
})();

// Add sidebar overlay for mobile
(function addOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'sidebarOverlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.5);z-index:250;display:none';
    document.body.insertBefore(overlay, document.body.firstChild);
})();
