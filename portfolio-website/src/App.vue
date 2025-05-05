<template>
  <div class="app" :class="{ 'dark-mode': isDarkMode }">
    <HeaderNav />
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <VideoCVSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import HeaderNav from './components/HeaderNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import VideoCVSection from './components/VideoCVSection.vue'
import FooterSection from './components/FooterSection.vue'

const { locale } = useI18n()
const isDarkMode = ref(false)

onMounted(() => {
  
  isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  
  window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => isDarkMode.value = e.matches)
})


watch(locale, (newLocale) => {
  localStorage.setItem('preferred-locale', newLocale)
})
</script>

<style>
.app {
  min-height: 100vh;
  background: var(--primary-bg);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

main {
  padding-top: var(--header-height, 60px);
}
</style>