/* ============================================
   Login Page JavaScript
   ============================================ */

// Generate floating particles
(function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const size = Math.random() * 6 + 2;
        p.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${Math.random() * 100}%;
      animation-duration: ${Math.random() * 15 + 8}s;
      animation-delay: ${Math.random() * 10}s;
    `;
        container.appendChild(p);
    }
})();

// Theme init
const saved = localStorage.getItem('vc_admin_theme') || 'dark';
document.documentElement.setAttribute('data-theme', saved);

// DOM refs
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passInput = document.getElementById('password');
const emailErr = document.getElementById('emailError');
const passErr = document.getElementById('passwordError');
const loginBtn = document.getElementById('loginBtn');
const btnText = loginBtn.querySelector('.btn-text');
const btnSpinner = loginBtn.querySelector('.btn-spinner');
const btnArrow = loginBtn.querySelector('.btn-arrow');
const alert = document.getElementById('loginAlert');
const togglePwd = document.getElementById('togglePassword');
const eyeOpen = togglePwd.querySelector('.eye-open');
const eyeClosed = togglePwd.querySelector('.eye-closed');
const fillDemo = document.getElementById('fillDemo');
const rememberMe = document.getElementById('rememberMe');

// Demo credentials fill
fillDemo.addEventListener('click', () => {
    emailInput.value = 'admin@vc.com';
    passInput.value = 'Admin@123';
    clearErrors();
});

// Password toggle
togglePwd.addEventListener('click', () => {
    const isPass = passInput.type === 'password';
    passInput.type = isPass ? 'text' : 'password';
    eyeOpen.classList.toggle('hidden', isPass);
    eyeClosed.classList.toggle('hidden', !isPass);
});

// Real-time validation
emailInput.addEventListener('input', () => {
    if (emailInput.value && !isValidEmail(emailInput.value)) {
        showFieldError(emailInput, emailErr, 'Please enter a valid email address');
    } else { clearFieldError(emailInput, emailErr); }
});
passInput.addEventListener('input', () => {
    if (passInput.value && passInput.value.length < 6) {
        showFieldError(passInput, passErr, 'Password must be at least 6 characters');
    } else { clearFieldError(passInput, passErr); }
});

// Form submit
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    const email = emailInput.value.trim();
    const password = passInput.value;
    let valid = true;

    if (!email) { showFieldError(emailInput, emailErr, 'Email is required'); valid = false; }
    else if (!isValidEmail(email)) { showFieldError(emailInput, emailErr, 'Please enter a valid email'); valid = false; }
    if (!password) { showFieldError(passInput, passErr, 'Password is required'); valid = false; }

    if (!valid) return;

    // Loading state
    setLoading(true);
    await delay(900);

    // Mock auth
    const USERS = [
        { id: 1, email: 'admin@vc.com', password: 'Admin@123', name: 'V Chaitanya', role: 'Super Admin', initials: 'VC' },
        { id: 2, email: 'editor@vc.com', password: 'Editor@123', name: 'Editor User', role: 'Editor', initials: 'EU' },
    ];

    const user = USERS.find(u => u.email === email && u.password === password);

    if (user) {
        const session = { ...user };
        session.expiresAt = rememberMe.checked ? Date.now() + 30 * 86400000 : Date.now() + 86400000;
        localStorage.setItem('vc_admin_session', JSON.stringify(session));

        // Success animation
        loginBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        btnText.textContent = 'Success! Redirecting...';
        btnArrow.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>';

        await delay(600);
        window.location.href = 'pages/dashboard.html';
    } else {
        setLoading(false);
        showAlert('❌ Invalid email or password. Try admin@vc.com / Admin@123');
        emailInput.classList.add('error');
        passInput.classList.add('error');
        // Shake animation
        form.style.animation = 'none';
        setTimeout(() => { form.style.animation = 'shake 0.4s ease'; }, 10);
    }
});

// Helpers
function isValidEmail(email) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); }
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

function setLoading(on) {
    loginBtn.disabled = on;
    btnText.textContent = on ? 'Signing in...' : 'Sign In';
    btnSpinner.classList.toggle('hidden', !on);
    btnArrow.classList.toggle('hidden', on);
}

function showAlert(msg) {
    alert.className = 'login-alert error';
    alert.textContent = msg;
}

function clearErrors() {
    alert.className = 'login-alert';
    alert.textContent = '';
    clearFieldError(emailInput, emailErr);
    clearFieldError(passInput, passErr);
}

function showFieldError(input, errEl, msg) {
    input.classList.add('error');
    errEl.textContent = msg;
}

function clearFieldError(input, errEl) {
    input.classList.remove('error');
    errEl.textContent = '';
}

// Add shake keyframe dynamically
const style = document.createElement('style');
style.textContent = `@keyframes shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }`;
document.head.appendChild(style);
