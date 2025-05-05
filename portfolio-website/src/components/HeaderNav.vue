Sure, here's the updated contents for the file: /portfolio-website/portfolio-website/src/components/HeaderNav.vue

<template>
  <header class="header-nav">
    <div class="container">
      <div class="logo">Portfolio</div>
      <nav class="nav">
        <a href="#about" class="nav-link">{{ t('nav.about') }}</a>
        <a href="#projects" class="nav-link">{{ t('nav.projects') }}</a>
        <a href="#video-cv" class="nav-link">{{ t('nav.videoCV') }}</a>
        <div class="language-switcher">
          <button @click="setLanguage('en')" :class="{ active: locale === 'en' }">EN</button>
          <span>/</span>
          <button @click="setLanguage('da')" :class="{ active: locale === 'da' }">DA</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

const setLanguage = (lang) => {
  if (lang === 'en' || lang === 'da') {
    locale.value = lang;
    localStorage.setItem('preferredLanguage', lang);
  }
};
</script>

<style scoped>
.header-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 0;
  background-color: rgba(230, 244, 255, 0.9);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-primary);
}

.nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

.nav-link {
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--accent);
}

.language-switcher {
  display: flex;
  align-items: center;
  gap: 5px;
}

.language-switcher button {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  color: var(--text-primary);
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.language-switcher button.active {
  opacity: 1;
  font-weight: 700;
}

.language-switcher button:hover {
  opacity: 1;
}
</style>