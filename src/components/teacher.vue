<script setup>
const leaders = [
  {
    role: 'Md Mozammel Haque',
    name: "President, Governing Body",
    image: 'https://plscr.edu.bd/assets/img/president.jpeg',
    message: "Fostering an environment of absolute academic rigor and disciplined growth to nurture the true leaders of tomorrow's Bangladesh."
  },
  {
    role: 'Md Oabydul Anwar',
    name: 'Principal',
    image: '../src/assets/principal.jpg',
    message:
      'Our commitment is to provide quality education in a disciplined academic environment while nurturing knowledge, skill, character and values in every student.'
  }
]

import SectionHeading from './heading.vue';
</script>

<template>
  <section class="leadership-section">
    <div class="leadership-container">

      <div class="section-heading">
       <SectionHeading
  eyebrow="Our Leadership"
  title="Guided by vision,"
  highlight="driven by values."
  description="Strong leadership and a shared commitment to education guide, Police Lines School & College towards continued excellence."
/>
      </div>

      <div class="leaders-grid">
        <article
          v-for="leader in leaders"
          :key="leader.role"
          class="leader-card"
        >
          <div class="leader-image-wrapper">
            <img
              :src="leader.image"
              :alt="`${leader.role} - ${leader.name}`"
              class="leader-image"
            >

            <div class="image-overlay"></div>
          </div>

          <div class="leader-content">
            <span class="leader-role">
              {{ leader.role }}
            </span>

            <h3>
              {{ leader.name }}
            </h3>

            <div
              v-if="leader.message"
              class="leader-message"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M10 11a5 5 0 0 1 5-5"/>
                <path d="M5 11h10v8H5z"/>
                <path d="M15 13h4v6h-4"/>
              </svg>

              <p>
                {{ leader.message }}
              </p>
            </div>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.leadership-section {
  width: 100%;
  padding: 110px 24px;

  background: #ffffff;

  font-family: 'Plus Jakarta Sans', sans-serif;

  box-sizing: border-box;
}

.leadership-container {
  width: 100%;
  max-width: 1100px;

  margin: 0 auto;
}

.section-heading {
  max-width: 700px;

  margin: 0 auto 65px;

  text-align: center;
}

.section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 18px;

  color: #2563eb;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.section-eyebrow span {
  width: 7px;
  height: 7px;

  border-radius: 50%;

  background: #2563eb;
}

.section-heading h2 {
  margin: 0;

  color: #0f172a;

  font-size: clamp(34px, 5vw, 50px);
  font-weight: 700;

  line-height: 1.15;
  letter-spacing: -1.6px;
}

.section-heading h2 strong {
  color: #2563eb;
  font-weight: 800;
}

.section-heading p {
  max-width: 620px;

  margin: 20px auto 0;

  color: #64748b;

  font-size: 15px;
  line-height: 1.7;
}

.leaders-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 28px;
}

.leader-card {
  display: grid;
  grid-template-columns: 220px 1fr;

  min-height: 290px;

  overflow: hidden;

  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 18px;

  box-shadow:
    0 12px 35px rgba(15, 23, 42, 0.06);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.leader-card:hover {
  transform: translateY(-5px);

  box-shadow:
    0 20px 45px rgba(15, 23, 42, 0.1);
}

.leader-image-wrapper {
  position: relative;

  min-height: 290px;

  overflow: hidden;

  background: #f1f5f9;
}

.leader-image {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;
  object-position: center;

  transition: transform 0.5s ease;
}

.leader-card:hover .leader-image {
  transform: scale(1.04);
}

.image-overlay {
  position: absolute;
  inset: 0;

  background: linear-gradient(
    to right,
    transparent 65%,
    rgba(255, 255, 255, 0.08)
  );

  pointer-events: none;
}

.leader-content {
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px 28px;
}

.leader-role {
  display: inline-block;

  margin-bottom: 8px;

  color: #2563eb;

  font-size: 11px;
  font-weight: 700;

  letter-spacing: 1px;
  text-transform: uppercase;
}

.leader-content h3 {
  margin: 0 0 22px;

  color: #0f172a;

  font-size: 21px;
  font-weight: 750;

  line-height: 1.3;
}

.leader-message {
  display: flex;
  align-items: flex-start;

  gap: 11px;

  padding-top: 18px;

  border-top: 1px solid #e2e8f0;

  color: #64748b;
}

.leader-message svg {
  flex-shrink: 0;

  margin-top: 2px;

  color: #2563eb;
}

.leader-message p {
  margin: 0;

  font-size: 13px;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .leadership-section {
    padding: 85px 20px;
  }

  .leaders-grid {
    grid-template-columns: 1fr;

    max-width: 700px;

    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .leadership-section {
    padding: 70px 18px;
  }

  .section-heading {
    margin-bottom: 45px;
  }

  .section-heading h2 {
    font-size: 35px;

    letter-spacing: -1px;
  }

  .section-heading p {
    font-size: 14px;
  }

  .leader-card {
    grid-template-columns: 130px 1fr;

    min-height: 230px;
  }

  .leader-image-wrapper {
    min-height: 230px;
  }

  .leader-content {
    padding: 22px 18px;
  }

  .leader-content h3 {
    margin-bottom: 16px;

    font-size: 17px;
  }

  .leader-message {
    padding-top: 14px;

    gap: 7px;
  }

  .leader-message svg {
    width: 18px;
    height: 18px;
  }

  .leader-message p {
    font-size: 12px;
    line-height: 1.6;
  }
}

@media (max-width: 420px) {
  .leader-card {
    grid-template-columns: 105px 1fr;
  }

  .leader-image-wrapper {
    min-height: 220px;
  }

  .leader-content {
    padding: 18px 14px;
  }

  .leader-role {
    font-size: 10px;
  }

  .leader-content h3 {
    font-size: 15px;
  }
}
</style>