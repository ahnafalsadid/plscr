<script setup>
const notices = [
  {
    date: '18',
    month: 'AUG',
    year: '2026',
    title: 'Admission Notice for the New Academic Session',
    description: 'Important information regarding admission procedures, requirements and schedules.',
    category: 'Admission',
    featured: true
  },
  {
    date: '15',
    month: 'AUG',
    year: '2026',
    title: 'Half-Yearly Examination Schedule',
    description: 'Students are requested to check the examination schedule and prepare accordingly.',
    category: 'Examination',
    featured: false
  },
  {
    date: '12',
    month: 'AUG',
    year: '2026',
    title: 'Annual Sports Competition Registration',
    description: 'Registration is now open for students interested in participating in the annual sports competition.',
    category: 'Activities',
    featured: false
  },
  {
    date: '08',
    month: 'AUG',
    year: '2026',
    title: 'Parent-Teacher Meeting',
    description: 'Parents and guardians are requested to attend the upcoming parent-teacher meeting.',
    category: 'General',
    featured: false
  }
]
const headingLoad = {
    content_head: 'Notice Board',
    heading_black: 'Latest',
    heading_blue: 'Notices',
    heading_intro: 'Stay updated with the latest announcements, academic information and important notices from the institution.'
}

import SectionHeading from './heading.vue';
</script>

<template>
  <section class="notice-section">
    <div class="notice-container">

      <div class="notice-header">
        <SectionHeading
  eyebrow="Notice Board"
  title="Stay"
  highlight="informed."
  description="Keep up with the latest announcements, academic updates and important information from our institution."
/>
      </div>

      <div class="notice-board">

        <article
          v-for="notice in notices"
          :key="notice.title"
          class="notice-card"
          :class="{ featured: notice.featured }"
        >
          <div class="notice-date">
            <span class="notice-day">
              {{ notice.date }}
            </span>

            <span class="notice-month">
              {{ notice.month }}
            </span>

            <span class="notice-year">
              {{ notice.year }}
            </span>
          </div>

          <div class="notice-content">
            <div class="notice-meta">
              <span class="notice-category">
                {{ notice.category }}
              </span>

              <span
                v-if="notice.featured"
                class="new-badge"
              >
                New
              </span>
            </div>

            <h3>
              {{ notice.title }}
            </h3>

            <p>
              {{ notice.description }}
            </p>
          </div>

          <a
            href="#"
            class="notice-arrow"
            aria-label="Read notice"
          >
            <svg
              width="18"
              height="18"
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
        </article>

      </div>

      <div class="notice-footer">
        <span>
          Showing {{ notices.length }} recent notices
        </span>

        <a href="#">
          Browse notice archive
        </a>
      </div>

    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.notice-section {
  width: 100%;
  padding: 100px 24px;

  box-sizing: border-box;

  background: #f8fafc;

  font-family: 'Plus Jakarta Sans', sans-serif;
}

.notice-container {
  width: 100%;
  margin: 0 auto;
}
.notice-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.notice-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  gap: 30px;

  margin-bottom: 40px;
}

.section-eyebrow {
  display: flex;
  align-items: center;
  gap: 9px;

  margin-bottom: 15px;

  color: #2563eb;

  font-size: 12px;
  font-weight: 700;

  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.section-eyebrow span {
  width: 7px;
  height: 7px;

  background: #2563eb;

  border-radius: 50%;
}

.notice-header h2 {
  margin: 0;

  color: #0f172a;

  font-size: clamp(32px, 4vw, 46px);
  font-weight: 700;

  line-height: 1.15;
  letter-spacing: -1.5px;
}

.notice-header h2 strong {
  color: #2563eb;
  font-weight: 800;
}

.notice-header p {
  max-width: 650px;

  margin: 14px 0 0;

  color: #64748b;

  font-size: 14px;

  line-height: 1.7;
}

.view-all {
  display: inline-flex;
  align-items: center;

  gap: 8px;

  flex-shrink: 0;

  padding: 11px 16px;

  color: #2563eb;

  background: #ffffff;

  border: 1px solid #dbeafe;

  border-radius: 9px;

  font-size: 13px;
  font-weight: 600;

  text-decoration: none;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}

.view-all:hover {
  background: #eff6ff;

  transform: translateX(2px);
}

.notice-board {
  display: flex;
  flex-direction: column;

  background: #ffffff;

  border: 1px solid #e2e8f0;

  border-radius: 16px;

  overflow: hidden;

  box-shadow:
    0 10px 30px rgba(15, 23, 42, 0.04);
}

.notice-card {
  display: grid;

  grid-template-columns: 100px 1fr 45px;

  align-items: center;

  gap: 25px;

  padding: 24px 28px;

  border-bottom: 1px solid #e2e8f0;

  transition:
    background 0.2s ease,
    padding-left 0.2s ease;
}

.notice-card:last-child {
  border-bottom: none;
}

.notice-card:hover {
  background: #f8fafc;

  padding-left: 32px;
}

.notice-card.featured {
  background: #f8fbff;
}

.notice-date {
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 70px;

  padding: 10px 8px;

  background: #f8fafc;

  border: 1px solid #e2e8f0;

  border-radius: 10px;
}

.featured .notice-date {
  background: #eff6ff;

  border-color: #dbeafe;
}

.notice-day {
  color: #0f172a;

  font-size: 26px;
  font-weight: 800;

  line-height: 1;
}

.notice-month {
  margin-top: 4px;

  color: #2563eb;

  font-size: 10px;
  font-weight: 800;

  letter-spacing: 0.8px;
}

.notice-year {
  margin-top: 3px;

  color: #94a3b8;

  font-size: 10px;
  font-weight: 500;
}

.notice-content {
  min-width: 0;
}

.notice-meta {
  display: flex;
  align-items: center;

  gap: 8px;

  margin-bottom: 7px;
}

.notice-category {
  color: #2563eb;

  font-size: 10px;
  font-weight: 700;

  letter-spacing: 0.7px;
  text-transform: uppercase;
}

.new-badge {
  padding: 3px 7px;

  color: #15803d;

  background: #f0fdf4;

  border: 1px solid #dcfce7;

  border-radius: 5px;

  font-size: 9px;
  font-weight: 700;

  text-transform: uppercase;
}

.notice-content h3 {
  margin: 0;

  color: #0f172a;

  font-size: 16px;
  font-weight: 700;

  line-height: 1.4;
}

.notice-content p {
  margin: 6px 0 0;

  color: #64748b;

  font-size: 13px;

  line-height: 1.6;
}

.notice-arrow {
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #64748b;

  background: #f8fafc;

  border: 1px solid #e2e8f0;

  border-radius: 9px;

  text-decoration: none;

  transition:
    color 0.2s ease,
    background 0.2s ease,
    transform 0.2s ease;
}

.notice-arrow:hover {
  color: #2563eb;

  background: #eff6ff;

  border-color: #dbeafe;

  transform: translateX(2px);
}

.notice-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 4px 0;

  color: #94a3b8;

  font-size: 12px;
}

.notice-footer a {
  color: #64748b;

  font-weight: 600;

  text-decoration: none;
}

.notice-footer a:hover {
  color: #2563eb;
}

@media (max-width: 700px) {
  .notice-section {
    padding: 75px 18px;
  }

  .notice-header {
    align-items: flex-start;
    flex-direction: column;

    gap: 20px;

    margin-bottom: 30px;
  }

  .view-all {
    align-self: flex-start;
  }

  .notice-card {
    grid-template-columns: 70px 1fr;

    gap: 18px;

    padding: 20px;
  }

  .notice-card:hover {
    padding-left: 20px;
  }

  .notice-date {
    width: 62px;
  }

  .notice-day {
    font-size: 23px;
  }

  .notice-arrow {
    display: none;
  }

  .notice-content h3 {
    font-size: 14px;
  }

  .notice-content p {
    font-size: 12px;
  }
}

@media (max-width: 450px) {
  .notice-section {
    padding: 65px 14px;
  }

  .notice-card {
    grid-template-columns: 58px 1fr;

    gap: 14px;

    padding: 17px 14px;
  }

  .notice-card:hover {
    padding-left: 14px;
  }

  .notice-date {
    width: 58px;

    padding: 8px 5px;
  }

  .notice-day {
    font-size: 21px;
  }

  .notice-month,
  .notice-year {
    font-size: 9px;
  }

  .notice-footer {
    flex-direction: column;
    align-items: flex-start;

    gap: 8px;
  }
}
</style>