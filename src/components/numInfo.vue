<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const stats = ref([
  { target: 188, suffix: '', label: 'Teachers', current: 0 },
  { target: 8000, suffix: '+', label: 'Students', current: 0 },
  { target: 1984, suffix: '', label: 'Established', current: 2026 },
  { target: 99, suffix: '%', label: 'Passing Rate', current: 0 },
]);

const sectionRef = ref(null);
let hasAnimated = false;
let observer = null;

const startCounting = () => {
  if (hasAnimated) return;

  hasAnimated = true;

  stats.value.forEach((stat, index) => {
    let startTimestamp = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }

      const progress = Math.min(
        (timestamp - startTimestamp) / duration,
        1
      );

      const easeOutQuad = progress * (2 - progress);

      stats.value[index].current = Math.floor(
        easeOutQuad * stat.target
      );

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        stats.value[index].current = stat.target;
      }
    };

    window.requestAnimationFrame(step);
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.disconnect();
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<template>
  <section
    ref="sectionRef"
    class="num-info-section"
  >
    <div class="num-info-container">
      <div
        v-for="(stat, index) in stats"
        :key="index"
        class="stat-item"
      >
        <h2 class="stat-number">
          {{ stat.current.toLocaleString() }}{{ stat.suffix }}
        </h2>

        <p class="stat-label">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

:root {
  --accent: #2563eb;
  --text-muted: #64748b;
  --border-color: #e2e8f0;
}

.num-info-section {
  width: 100%;
  box-sizing: border-box;

  background: #ffffff;

  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);

  padding: 50px 24px;

  font-family: 'Plus Jakarta Sans', sans-serif;
}

.num-info-container {
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  gap: 30px;

  text-align: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 8px;
}

.stat-number {
  margin: 0;

  color: var(--accent);

  font-size: clamp(36px, 4vw, 48px);
  font-weight: 800;

  line-height: 1;
  letter-spacing: -1px;
}

.stat-label {
  margin: 0;

  color: var(--text-muted);

  font-size: 15px;
  font-weight: 600;

  line-height: 1.4;
}

@media (max-width: 900px) {
  .num-info-section {
    padding: 45px 20px;
  }

  .num-info-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px 20px;
  }
}

@media (max-width: 480px) {
  .num-info-section {
    padding: 40px 18px;
  }

  .num-info-container {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .stat-number {
    font-size: 40px;
  }

  .stat-label {
    font-size: 14px;
  }
}
</style>