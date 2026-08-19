<script setup>
const highlights = [
  {
    number: '1986',
    title: 'Established',
    text: 'Founded with a vision of spreading quality education across the greater Rangpur region.'
  },
  {
    number: '8,000+',
    title: 'Students',
    text: 'A thriving academic community welcoming students from Rangpur, Dinajpur and surrounding areas.'
  },
  {
    number: '40+',
    title: 'Years of Excellence',
    text: 'Decades of commitment to quality education, discipline, character and holistic development.'
  }
]

import SectionHeading from './heading.vue';
</script>

<template>
  <section class="about-section">
    <div class="about-container">
        <SectionHeading
          eyebrow="About Our Institution"
          title="Building minds,"
          highlight="shaping character."
          description="Police Lines School and College, Rangpur is committed to creating an educational environment where knowledge, skill and values receive equal importance."
        />
      <div class="about-grid">

        <div class="about-content">
          <div class="content-label">
            <span></span>
            Our Story
          </div>

          <h3>
            A small beginning with a vision for excellence.
          </h3>

          <p>
            Like many educational institutions in our country, Police Lines
            School and College, Rangpur had a humble beginning. Founded in
            1986, the institution was established with a vision of spreading
            quality education among the children of police personnel serving
            in this part of the country, as well as children from socially,
            educationally and economically disadvantaged communities of the
            greater Rangpur area.
          </p>

          <p>
            Since its foundation, the institution has continued its pursuit
            of excellence by combining quality education with a disciplined
            academic environment. Under the patronage of the then Police
            Superintendent of Rangpur, Mr. Mominullah Patwari B.P., a person
            deeply devoted to education, the institution began its academic
            journey with a strong commitment to learning and character
            development.
          </p>

          <p>
            Today, the institution stands as an important centre of education
            in the region, surrounded by the greenery and landmarks of
            Rangpur, including Police Hall, Collectorate Maidan, Shurovi
            Garden, Zoological Garden, Cricket Garden, Rangpur Stadium and
            Rangpur Government College.
          </p>
        </div>

        <div class="mission-card">
          <div class="mission-icon">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M12 3 4 7l8 4 8-4-8-4Z"/>
              <path d="m4 12 8 4 8-4"/>
              <path d="m4 17 8 4 8-4"/>
            </svg>
          </div>

          <span class="mission-label">
            Our Mission
          </span>

          <blockquote>
            “Our mission is to build up our educational institution where
            knowledge, skill and values are given prior consideration in lieu
            of only examination result oriented education.”
          </blockquote>

          <p>
            We believe education has a formative effect on the mind,
            character and physical ability of an individual. Our goal is to
            nurture responsible, capable and principled individuals who can
            contribute positively to society.
          </p>
        </div>

    </div>

    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.about-section {
  width: 100%;
  padding: 110px 24px;

  background: #f8fafc;

  font-family: 'Plus Jakarta Sans', sans-serif;

  box-sizing: border-box;
}

.about-container {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
}

.about-header {
  max-width: 780px;

  margin-bottom: 70px;
}

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 20px;

  color: #2563eb;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.2px;
  text-transform: uppercase;
}

.badge-line {
  width: 24px;
  height: 2px;

  background: #2563eb;

  border-radius: 10px;
}

.about-header h2 {
  margin: 0;

  color: #0f172a;

  font-size: clamp(36px, 5vw, 58px);
  font-weight: 800;

  line-height: 1.1;
  letter-spacing: -2px;
}

.about-header h2 span {
  color: #2563eb;
}

.about-intro {
  max-width: 680px;

  margin: 24px 0 0;

  color: #64748b;

  font-size: 17px;
  line-height: 1.7;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;

  gap: 70px;

  align-items: start;
}

.about-content {
  max-width: 700px;
}

.content-label {
  display: flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 16px;

  color: #2563eb;

  font-size: 13px;
  font-weight: 700;

  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.content-label span {
  width: 7px;
  height: 7px;

  background: #2563eb;

  border-radius: 50%;
}

.about-content h3 {
  margin: 0 0 22px;

  color: #0f172a;

  font-size: clamp(25px, 3vw, 34px);
  font-weight: 750;

  line-height: 1.25;
  letter-spacing: -0.8px;
}

.about-content p {
  margin: 0 0 18px;

  color: #475569;

  font-size: 15px;
  line-height: 1.8;
}

.about-content p:last-child {
  margin-bottom: 0;
}

.mission-card {
  padding: 38px;

  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 20px;

  box-shadow:
    0 15px 40px rgba(15, 23, 42, 0.06);
}

.mission-icon {
  width: 54px;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 24px;

  color: #2563eb;

  background: #eff6ff;

  border-radius: 14px;
}

.mission-label {
  display: block;

  margin-bottom: 16px;

  color: #64748b;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 1px;
  text-transform: uppercase;
}

.mission-card blockquote {
  margin: 0 0 22px;

  color: #0f172a;

  font-size: 20px;
  font-weight: 600;

  line-height: 1.55;

  letter-spacing: -0.4px;
}

.mission-card p {
  margin: 0;

  color: #64748b;

  font-size: 14px;
  line-height: 1.75;
}

.about-highlights {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  margin-top: 75px;

  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.highlight {
  display: flex;
  gap: 20px;

  padding: 32px 28px;
}

.highlight + .highlight {
  border-left: 1px solid #e2e8f0;
}

.highlight-number {
  flex-shrink: 0;

  color: #2563eb;

  font-size: 26px;
  font-weight: 800;

  letter-spacing: -1px;
}

.highlight h4 {
  margin: 2px 0 7px;

  color: #0f172a;

  font-size: 15px;
  font-weight: 700;
}

.highlight p {
  margin: 0;

  color: #64748b;

  font-size: 13px;
  line-height: 1.6;
}

@media (max-width: 900px) {
  .about-section {
    padding: 85px 24px;
  }

  .about-header {
    margin-bottom: 55px;
  }

  .about-grid {
    grid-template-columns: 1fr;

    gap: 45px;
  }

  .about-content {
    max-width: none;
  }

  .mission-card {
    max-width: 700px;
  }

  .about-highlights {
    grid-template-columns: 1fr;
  }

  .highlight {
    padding: 26px 20px;
  }

  .highlight + .highlight {
    border-left: none;
    border-top: 1px solid #e2e8f0;
  }
}

@media (max-width: 600px) {
  .about-section {
    padding: 70px 18px;
  }

  .about-header h2 {
    font-size: 36px;

    letter-spacing: -1.2px;
  }

  .about-intro {
    font-size: 15px;
  }

  .about-content h3 {
    font-size: 26px;
  }

  .about-content p {
    font-size: 14px;

    line-height: 1.75;
  }

  .mission-card {
    padding: 28px 24px;

    border-radius: 16px;
  }

  .mission-card blockquote {
    font-size: 18px;
  }

  .highlight {
    gap: 15px;

    padding: 24px 10px;
  }
}
</style>