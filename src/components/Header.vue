<script setup>
import { ref } from 'vue'
import logo from '../assets/logo.png'

const isMobileMenuOpen = ref(false)
const activeDropdown = ref(null)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value

  if (!isMobileMenuOpen.value) {
    activeDropdown.value = null
  }
}

const toggleDropdown = (name) => {
  activeDropdown.value =
    activeDropdown.value === name ? null : name
}

const closeMenu = () => {
  isMobileMenuOpen.value = false
  activeDropdown.value = null
}
</script>

<template>
  <header class="site-header">

    <!-- Logo / Institution -->
    <div class="logo">
      <img
        :src="logo"
        alt="Police Lines School & College logo"
        width="48"
        height="48"
      >

      <div class="logo-text">
        <span class="institution-name">
          Police Lines School & College, Rangpur
        </span>

        <span class="institution-location">
          EIIN: 127501 | School: 5289 | College: 5253
        </span>
      </div>
    </div>

    <!-- Mobile Menu Button -->
    <button
      class="menu-toggle"
      :class="{ open: isMobileMenuOpen }"
      @click="toggleMenu"
      aria-label="Toggle navigation menu"
      :aria-expanded="isMobileMenuOpen"
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

    <!-- Navigation -->
    <nav
      :class="{ 'nav-active': isMobileMenuOpen }"
      aria-label="Main navigation"
    >

      <!-- Home -->
      <a
        href="#"
        class="nav-link"
        @click="closeMenu"
      >
        Home
      </a>

      <!-- About -->
      <div
        class="dropdown"
        :class="{ 'dropdown-active': activeDropdown === 'about' }"
      >
        <button
          class="nav-link dropdown-toggle"
          @click="toggleDropdown('about')"
        >
          <span>About</span>

          <svg
            class="arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        <div class="dropdown-menu">
          <a href="#" @click="closeMenu">Overview</a>
          <a href="#" @click="closeMenu">Administration</a>
          <a href="#" @click="closeMenu">Faculty & Staff</a>
          <a href="#" @click="closeMenu">Academic Council</a>
        </div>
      </div>

      <!-- Academics -->
      <div
        class="dropdown"
        :class="{ 'dropdown-active': activeDropdown === 'academics' }"
      >
        <button
          class="nav-link dropdown-toggle"
          @click="toggleDropdown('academics')"
        >
          <span>Academics</span>

          <svg
            class="arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        <div class="dropdown-menu">
          <a href="#" @click="closeMenu">Library & Labs</a>
          <a href="#" @click="closeMenu">Magazine</a>
          <a href="#" @click="closeMenu">Results</a>
        </div>
      </div>

      <!-- Activities -->
      <div
        class="dropdown"
        :class="{ 'dropdown-active': activeDropdown === 'activities' }"
      >
        <button
          class="nav-link dropdown-toggle"
          @click="toggleDropdown('activities')"
        >
          <span>Activities</span>

          <svg
            class="arrow"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </button>

        <div class="dropdown-menu">
          <a href="#" @click="closeMenu">Clubs & Societies</a>
          <a href="#" @click="closeMenu">Cadet & Youth</a>
        </div>
      </div>

      <!-- Contact -->
      <a
        href="#"
        class="nav-link"
        @click="closeMenu"
      >
        Contact
      </a>

    </nav>
  </header>
</template>

<style>
/* ========================================
   HEADER
======================================== */

.site-header {
  width: 100%;
  max-width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;

  background: var(--header-bg);

  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border-bottom: 1px solid var(--header-border);

  position: sticky;
  top: 0;

  z-index: 1000;

  font-family: 'Plus Jakarta Sans', sans-serif;
}


/* ========================================
   LOGO
======================================== */

.site-header .logo {
  display: flex;
  align-items: center;

  gap: 12px;

  min-width: 0;
}

.site-header .logo img {
  width: 48px;
  height: 48px;

  object-fit: contain;

  border-radius: 8px;

  flex-shrink: 0;
}


/* ========================================
   LOGO TEXT
======================================== */

.logo-text {
  display: flex;
  flex-direction: column;

  min-width: 0;
}

.institution-name {
  font-size: 17px;
  font-weight: 700;

  color: var(--text-main);

  letter-spacing: -0.3px;

  line-height: 1.3;

  white-space: nowrap;
}

.institution-location {
  font-size: 13px;
  font-weight: 500;

  color: var(--text-muted);

  line-height: 1.4;

  white-space: nowrap;
}


/* ========================================
   NAVIGATION
======================================== */

.site-header nav {
  display: flex;
  align-items: center;

  gap: 8px;
}


/* ========================================
   NAV LINKS
======================================== */

.nav-link {
  border: none;
  background: transparent;

  text-decoration: none;

  color: var(--text-main);

  font-family: inherit;

  font-size: 15px;
  font-weight: 500;

  padding: 8px 14px;

  border-radius: 8px;

  cursor: pointer;

  transition:
    color 0.25s ease,
    background 0.25s ease;
}

.nav-link:hover {
  color: var(--accent);

  background: rgba(37, 99, 235, 0.05);
}


/* ========================================
   DROPDOWN
======================================== */

.dropdown {
  position: relative;
}


/* Dropdown Button */

.dropdown-toggle {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  gap: 5px;
}


/* Arrow */

.arrow {
  flex-shrink: 0;

  transition:
    transform 0.25s ease,
    color 0.25s ease;
}


/* ========================================
   DROPDOWN MENU
======================================== */

.dropdown-menu {
  position: absolute;

  top: calc(100% + 8px);
  left: 0;

  min-width: 210px;

  padding: 8px;

  display: flex;
  flex-direction: column;

  gap: 2px;

  background: var(--dropdown-bg);

  border: 1px solid var(--header-border);

  border-radius: 12px;

  box-shadow: var(--shadow);

  opacity: 0;

  visibility: hidden;

  transform: translateY(10px);

  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform 0.25s ease;

  z-index: 100;
}


/* Dropdown Items */

.dropdown-menu a {
  display: block;

  width: 100%;

  padding: 10px 14px;

  border-radius: 7px;

  text-decoration: none;

  color: var(--text-main);

  font-size: 14px;
  font-weight: 500;

  transition:
    background 0.2s ease,
    color 0.2s ease;
}

.dropdown-menu a:hover {
  background: var(--dropdown-hover);

  color: var(--accent);
}


/* ========================================
   DESKTOP DROPDOWN HOVER
======================================== */

@media (min-width: 969px) {

  .dropdown:hover .dropdown-menu {
    opacity: 1;

    visibility: visible;

    transform: translateY(0);
  }

  .dropdown:hover .arrow {
    transform: rotate(180deg);

    color: var(--accent);
  }

}


/* ========================================
   MOBILE MENU BUTTON
======================================== */

.menu-toggle {
  display: none;

  width: 40px;
  height: 40px;

  padding: 8px;

  border: none;

  background: transparent;

  cursor: pointer;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 5px;

  flex-shrink: 0;
}

.menu-toggle span {
  display: block;

  width: 24px;
  height: 2px;

  border-radius: 2px;

  background: var(--text-main);

  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
}


/* Hamburger → X */

.menu-toggle.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}


/* ========================================
   TABLET
======================================== */

@media (max-width: 968px) {

  .site-header {
    padding: 14px 20px;
  }

  .menu-toggle {
    display: flex;
  }

  .site-header nav {
    position: absolute;

    top: 100%;
    left: 0;

    width: 100%;
    max-width: 100vw;

    padding: 16px;

    display: flex;
    flex-direction: column;

    align-items: stretch;

    gap: 4px;

    background: var(--dropdown-bg);

    border-bottom: 1px solid var(--header-border);

    box-shadow: var(--shadow);

    opacity: 0;
    visibility: hidden;

    transform: translateY(-10px);

    transition:
      opacity 0.3s ease,
      visibility 0.3s ease,
      transform 0.3s ease;
  }

  .site-header nav.nav-active {
    opacity: 1;

    visibility: visible;

    transform: translateY(0);
  }


  /* Mobile Nav Links */

  .nav-link {
    width: 100%;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 12px 16px;

    text-align: left;
  }


  /* Mobile Dropdown */

  .dropdown {
    width: 100%;
  }

  .dropdown-toggle {
    width: 100%;

    justify-content: space-between;
  }

  .dropdown-menu {
    position: static;

    width: 100%;

    min-width: 0;

    padding: 0 0 0 16px;

    border: none;

    border-radius: 0;

    box-shadow: none;

    background: transparent;

    display: none;

    opacity: 1;

    visibility: visible;

    transform: none;
  }


  /* Open dropdown */

  .dropdown.dropdown-active .dropdown-menu {
    display: flex;
  }

  .dropdown.dropdown-active .arrow {
    transform: rotate(180deg);

    color: var(--accent);
  }


  /* Mobile dropdown links */

  .dropdown-menu a {
    padding: 10px 14px;

    font-size: 14px;
  }

}


/* ========================================
   SMALL MOBILE
======================================== */

@media (max-width: 600px) {

  .site-header {
    padding: 12px 16px;
  }

  .site-header .logo {
    gap: 9px;
  }

  .site-header .logo img {
    width: 42px;
    height: 42px;
  }

  .institution-name {
    font-size: 14px;

    white-space: normal;

    line-height: 1.25;
  }

  /*
    Hide the long EIIN information
    on very small screens.
  */

  .institution-location {
    display: none;
  }

}


/* ========================================
   EXTRA SMALL PHONES
======================================== */

@media (max-width: 380px) {

  .site-header {
    padding: 10px 12px;
  }

  .site-header .logo img {
    width: 38px;
    height: 38px;
  }

  .institution-name {
    font-size: 13px;
  }

  .menu-toggle {
    width: 36px;
    height: 36px;
  }

}
</style>