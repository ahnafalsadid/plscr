<script setup>
defineProps({
  eyebrow: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  highlight: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  align: {
    type: String,
    default: 'left'
  }
})
</script>

<template>
  <div
    class="section-heading"
    :class="`align-${align}`"
  >
    <div
      v-if="eyebrow"
      class="section-eyebrow"
    >
      <span></span>
      {{ eyebrow }}
    </div>

    <h2>
      {{ title }}
      <strong v-if="highlight">
        {{ highlight }}
      </strong>
    </h2>

    <p v-if="description">
      {{ description }}
    </p>
  </div>
</template>

<style scoped>
.section-heading {
  width: 100%;
  margin-bottom: 55px;
}

.section-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;

  margin-bottom: 20px;

  color: #2563eb;

  font-size: 13px;
  font-weight: 700;

  letter-spacing: 0.2px;
  text-transform: uppercase;
}

.section-eyebrow span {
  width: 24px;
  height: 2px;

  flex-shrink: 0;

  background: #2563eb;

  border-radius: 10px;
}

.section-heading h2 {
  margin: 0;

  color: #0f172a;

  font-size: clamp(40px, 5vw, 58px);
  font-weight: 800;

  line-height: 1.1;
  letter-spacing: -2.5px;
}

.section-heading h2 strong {
  color: #2563eb;
  font-weight: 800;
}

.section-heading p {
  max-width: 700px;

  margin: 26px 0 0;

  color: #64748b;

  font-size: 16px;
  font-weight: 400;

  line-height: 1.7;
}

.align-center {
  text-align: center;
}

.align-center .section-eyebrow {
  justify-content: center;
}

.align-center .section-heading p {
  margin-left: auto;
  margin-right: auto;
}

.align-right {
  text-align: right;
}

.align-right .section-eyebrow {
  justify-content: flex-end;
}

.align-right .section-heading p {
  margin-left: auto;
}

@media (max-width: 600px) {
  .section-heading {
    margin-bottom: 40px;
  }

  .section-heading h2 {
    font-size: 38px;
    letter-spacing: -1.5px;
  }

  .section-heading p {
    margin-top: 20px;

    font-size: 14px;
  }
}
</style>