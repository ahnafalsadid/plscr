<script setup>
import { ref } from 'vue';
import defaultHeroBg from "../assets/building.jpeg";

const props = defineProps({
  bgImage: {
    type: String,
    default: defaultHeroBg
  }
});
</script>

<template>
  <section class="hero" :style="{ backgroundImage: `url(${props.bgImage})` }">
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="badge">
        Welcome to PLSCR
      </div>

      <h1>
        Shaping Tomorrow's Leaders with Excellence & Values
      </h1>

      <p>
        Dedicated to academic rigor, discipline, and holistic development.
        Empowering students to achieve their highest potential.
      </p>

      <div class="hero-actions">
        <a href="#" class="btn primary-btn">
          Admission Info
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m13 6 6 6-6 6"/>
          </svg>
        </a>
      </div>
    </div>

    <div class="hero-bottom-fade"></div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.hero {
  position: relative;
  min-height: calc(100vh - 80px);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 80px 24px;

  box-sizing: border-box;

  background-color: #f8fafc;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  overflow: hidden;

  font-family: 'Plus Jakarta Sans', sans-serif;
  text-align: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;

  background:
    linear-gradient(
      0deg,
      #fff,
      #ffffffc2,
      rgba(255, 255, 255, 0.208)
    );

  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;

  width: 100%;
  max-width: 850px;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 24px;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  padding: 7px 15px;

  border-radius: 999px;

  background: rgba(255, 255, 255, 0.85);

  border: 1px solid rgba(37, 99, 235, 0.15);

  color: #2563eb;

  font-size: 13px;
  font-weight: 600;

  box-shadow:
    0 4px 14px rgba(15, 23, 42, 0.06);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.badge-dot {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #2563eb;

  box-shadow:
    0 0 0 4px rgba(37, 99, 235, 0.1);
}

.hero h1 {
  max-width: 850px;

  margin: 0;

  color: #0f172a;

  font-size: clamp(34px, 5vw, 58px);

  font-weight: 800;

  line-height: 1.12;

  letter-spacing: -1.8px;

  text-wrap: balance;
}

.hero p {
  max-width: 650px;

  margin: 0;

  color: #475569;

  font-size: clamp(15px, 2vw, 18px);

  font-weight: 400;

  line-height: 1.7;

  text-wrap: balance;
}

.hero-actions {
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;

  margin-top: 8px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  gap: 9px;

  min-height: 50px;

  padding: 0 24px;

  border-radius: 11px;

  font-size: 15px;
  font-weight: 600;

  text-decoration: none;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.25s ease;
}

.primary-btn {
  background: #2563eb;

  color: #ffffff;

  box-shadow:
    0 10px 24px rgba(37, 99, 235, 0.25);
}

.primary-btn:hover {
  background: #1d4ed8;

  transform: translateY(-2px);

  box-shadow:
    0 14px 28px rgba(37, 99, 235, 0.32);
}

.primary-btn svg {
  transition: transform 0.25s ease;
}

.primary-btn:hover svg {
  transform: translateX(3px);
}

.hero-bottom-fade {
  position: absolute;

  bottom: 0;
  left: 0;

  width: 100%;
  height: 100px;

  background: linear-gradient(
    to top,
    rgba(248, 250, 252, 0.65),
    transparent
  );

  pointer-events: none;

  z-index: 1;
}

@media (max-width: 768px) {
  .hero {
    min-height: calc(100vh - 68px);

    padding: 70px 20px;
  }

  .hero-overlay {
    background:
      linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.94) 0%,
        rgba(255, 255, 255, 0.9) 55%,
        rgba(255, 255, 255, 0.78) 100%
      );
  }

  .hero-content {
    gap: 20px;
  }

  .hero h1 {
    font-size: clamp(32px, 9vw, 46px);

    letter-spacing: -1.2px;
  }

  .hero p {
    font-size: 15px;

    line-height: 1.65;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 60px 18px;
  }

  .badge {
    font-size: 12px;

    padding: 6px 13px;
  }

  .hero h1 {
    font-size: 31px;

    line-height: 1.15;
  }

  .hero p {
    font-size: 14px;
  }

  .hero-actions {
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>