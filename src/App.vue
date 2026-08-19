<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Hero from './components/Hero.vue';
import numInfo from './components/numInfo.vue';
import about from './components/About.vue'
import teacher from './components/teacher.vue';
import nb from './components/nb.vue';
import contact from './components/contact.vue';

</script>

<template>
  <main>
    <Header />
    <Hero />
    <teacher />
    <about />
    <numInfo/>
    <nb />
    <contact />
    <Footer />
  </main>
</template>

<style>
@import url('https://fonts.cdnfonts.com/css/solaimanlipi');
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');

:root {
  --footer-bg: #ffffff;
  --footer-border: #e2e8f0;
  --text-main: #1e293b;
  --text-muted: #64748b;
  --accent: #2563eb;
  --accent-light: #eff6ff;
}
:root {
  --header-bg: rgba(255, 255, 255, 0.85);
  --header-border: rgba(226, 232, 240, 0.8);
  --text-main: #1e293b;
  --text-muted: #64748b;
  --accent: #2563eb;
  --dropdown-bg: #ffffff;
  --dropdown-hover: #f1f5f9;
  --shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.08);
}

/* ========================================
   GLOBAL SAFETY
======================================== */

* {
    margin: 0;
    padding: 0;
    font-family: solaimanlipi, poppins;
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}


</style>