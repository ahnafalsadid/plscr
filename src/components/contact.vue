<script setup>
const contactItems = [
  {
    type: 'location',
    title: 'Address',
    value: 'Police Lines, Rangpur, Bangladesh'
  },
  {
    type: 'phone',
    title: 'Phone & Mobile',
    value: '0521-63532'
  },
  {
    type: 'email',
    title: 'Email Address',
    value: 'info@plscr.edu.bd'
  }
]

import SectionHeading from './heading.vue';
</script>

<template>
  <section class="contact-section">
    <div class="contact-container">

      <div class="section-heading">
      <SectionHeading
  eyebrow="Get In Touch"
  title="Contact"
  highlight="Information"
  description="Get in touch with the administration for inquiries."
  align="center"
/>
      </div>

      <div class="contact-card">

        <div class="contact-details">

          <div
            v-for="item in contactItems"
            :key="item.title"
            class="contact-item"
          >

            <div class="contact-icon">

              <svg
                v-if="item.type === 'location'"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/>
                <circle cx="12" cy="10" r="2.5"/>
              </svg>

              <svg
                v-else-if="item.type === 'phone'"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/>
              </svg>

              <svg
                v-else
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2"/>
                <path d="m3 7 9 6 9-6"/>
              </svg>

            </div>

            <div class="contact-text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.value }}</p>
            </div>

          </div>

        </div>

        <div class="map-container">

          <a
            href="https://www.google.com/maps/search/?api=1&query=Police+Lines+School+%26+College+Rangpur"
            target="_blank"
            rel="noopener noreferrer"
            class="map-button"
          >
            Open in Maps

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M14 3h7v7"/>
              <path d="M10 14 21 3"/>
              <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"/>
            </svg>
          </a>

          <iframe
            src="https://www.google.com/maps?q=Police%20Lines%20School%20%26%20College%20Rangpur&output=embed"
            width="100%"
            height="100%"
            style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Police Lines School and College Rangpur location"
          ></iframe>

        </div>

      </div>

    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.contact-section {
  width: 100%;
  padding: 100px 24px;

  box-sizing: border-box;

  background: #ffffff;

  font-family: 'Plus Jakarta Sans', sans-serif;
}

.contact-container {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
}

.section-heading {
  margin-bottom: 48px;

  text-align: center;
}

.section-heading h2 {
  margin: 0;

  color: #0f172a;

  font-size: clamp(34px, 4vw, 46px);
  font-weight: 800;

  line-height: 1.15;
  letter-spacing: -1.5px;
}

.section-heading h2 span {
  color: #4f46e5;
}

.section-heading p {
  margin: 16px 0 0;

  color: #475569;

  font-size: 16px;

  line-height: 1.6;
}

.contact-card {
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr;

  min-height: 330px;

  overflow: hidden;

  background: #f8fafc;

  border: 1px solid #e2e8f0;

  border-radius: 22px;

  box-shadow:
    0 8px 30px rgba(15, 23, 42, 0.06);
}

.contact-details {
  display: flex;
  flex-direction: column;
  justify-content: center;

  gap: 34px;

  padding: 40px 48px;
}

.contact-item {
  display: flex;
  align-items: center;

  gap: 17px;
}

.contact-icon {
  width: 48px;
  height: 48px;

  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #4f46e5;

  background: #eef2ff;

  border-radius: 50%;
}

.contact-text h3 {
  margin: 0 0 6px;

  color: #172033;

  font-size: 16px;
  font-weight: 700;

  line-height: 1.4;
}

.contact-text p {
  margin: 0;

  color: #52627a;

  font-size: 15px;

  line-height: 1.5;
}

.map-container {
  position: relative;

  min-height: 330px;

  overflow: hidden;

  background: #e2e8f0;
}

.map-container iframe {
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  display: block;
}

.map-button {
  position: absolute;

  top: 10px;
  left: 10px;

  z-index: 5;

  display: inline-flex;
  align-items: center;

  gap: 6px;

  padding: 9px 13px;

  color: #2563eb;

  background: rgba(255, 255, 255, 0.96);

  border: 1px solid #e2e8f0;

  border-radius: 5px;

  box-shadow:
    0 2px 7px rgba(15, 23, 42, 0.12);

  font-size: 13px;
  font-weight: 600;

  text-decoration: none;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.map-button:hover {
  background: #ffffff;

  transform: translateY(-1px);
}

@media (max-width: 800px) {
  .contact-section {
    padding: 80px 20px;
  }

  .contact-card {
    grid-template-columns: 1fr;
  }

  .contact-details {
    padding: 38px 30px;

    gap: 28px;
  }

  .map-container {
    min-height: 350px;
  }
}

@media (max-width: 480px) {
  .contact-section {
    padding: 65px 16px;
  }

  .section-heading {
    margin-bottom: 35px;
  }

  .section-heading h2 {
    font-size: 34px;
  }

  .section-heading p {
    font-size: 14px;
  }

  .contact-card {
    border-radius: 17px;
  }

  .contact-details {
    padding: 30px 20px;

    gap: 26px;
  }

  .contact-item {
    gap: 13px;
  }

  .contact-icon {
    width: 44px;
    height: 44px;
  }

  .contact-text h3 {
    font-size: 15px;
  }

  .contact-text p {
    font-size: 13px;
  }

  .map-container {
    min-height: 300px;
  }
}
</style>