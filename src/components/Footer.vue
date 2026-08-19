<script setup>
import logo from "../assets/logo.png";
</script>

<template>
  <footer class="site-footer">
    <div class="footer-container">
      <!-- Col 1: Brand Info & Socials -->
      <div class="footer-col brand-col">
        <div class="footer-logo">
          <img :src="logo" alt="logo" width="36" height="36">
          <span class="brand-title">PLSCR</span>
        </div>
        <p class="brand-desc">
          Dedicated to excellence in education, instilling values, and building the character of our future generation.
        </p>
        <div class="social-icons">
          <a href="#" class="social-btn facebook" aria-label="Facebook">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.99 3.657 9.128 8.438 9.878v-6.987h-2.54V12.02h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12.02h2.773l-.443 2.89h-2.33v6.988C18.343 21.145 22 17.008 22 12.017 22 6.484 17.522 2 12 2z"/>
            </svg>
          </a>
          <a href="#" class="social-btn extra-icon" aria-label="Group/Community">
            <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Col 2: Institution Codes -->
      <div class="footer-col">
        <h3>Institution Codes</h3>
        <ul class="code-list">
          <li><strong>EIIN:</strong> 127501</li>
          <li><strong>School Code:</strong> 5289</li>
          <li><strong>College Code:</strong> 5253</li>
        </ul>
      </div>

      <!-- Col 3: Quick Access -->
      <div class="footer-col">
        <h3>Quick Access</h3>
        <a href="#" class="portal-btn">
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"/>
          </svg>
          Portal Login
        </a>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p>&copy; 2026 Police Lines School and College, Rangpur. All rights reserved.</p>
      <p class="developer-credit">
        Developed by <span class="dev-name">Ahnaf Al Sadid (SSC28)</span>
      </p>
    </div>
  </footer>
</template>

<style>

.site-footer {
  background: var(--footer-bg);
  border-top: 1px solid var(--footer-border);
  font-family: 'Plus Jakarta Sans', sans-serif;
  color: var(--text-main);
  padding: 60px 32px 24px;
}

.footer-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.2fr;
  gap: 40px;
  padding-bottom: 40px;
}

.footer-col h3 {
  font-size: 16px;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 16px;
  letter-spacing: -0.2px;
}

/* Brand Column */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
}

.footer-logo img {
  object-fit: contain;
  border-radius: 6px;
}

.brand-title {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.5px;
}

.brand-desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.6;
  max-width: 380px;
  margin-bottom: 20px;
}

.social-icons {
  display: flex;
  gap: 12px;
}

.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8fafc;
  border: 1px solid var(--footer-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-main);
  transition: all 0.2s ease;
  text-decoration: none;
}

.social-btn.facebook {
  background: #1877f2;
  color: #ffffff;
  border-color: #1877f2;
}

.social-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

/* Institution Codes Column */
.code-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.code-list li {
  font-size: 14px;
  color: var(--text-muted);
}

.code-list strong {
  color: var(--text-main);
  font-weight: 600;
}

/* Quick Access Portal Button */
.portal-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--accent-light);
  color: var(--accent);
  font-size: 14px;
  font-weight: 600;
  padding: 10px 18px;
  border-radius: 10px;
  text-decoration: none;
  border: 1px solid rgba(37, 99, 235, 0.15);
  transition: all 0.2s ease;
}

.portal-btn:hover {
  background: var(--accent);
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}

/* Bottom Bar */
.footer-bottom {
  margin: 24px auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  color: var(--text-muted);
}

.developer-credit {
  color: var(--text-muted);
}

.dev-name {
  color: var(--accent);
  font-weight: 600;
}

/* Responsive Design */
@media (max-width: 868px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 32px;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 12px;
    text-align: center;
  }
}
</style>