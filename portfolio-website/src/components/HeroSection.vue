Sure, here's the updated content for the file `/portfolio-website/portfolio-website/src/components/HeroSection.vue` with the suggested code changes:

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title fade-in">
          {{ t('hero.greeting') }} 
          <span class="highlight">{{ t('hero.name') }}</span>
        </h1>
        <p class="hero-subtitle slide-up">{{ t('hero.title') }}</p>
        <div class="hero-cta">
          <a href="#projects" class="btn primary" @click="scrollToProjects">
            {{ t('hero.viewWork') }}
          </a>
          <a href="#" class="btn secondary" @click.prevent="downloadCV">
            {{ t('hero.downloadCV') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const scrollToProjects = (e) => {
  e.preventDefault();
  const projectsSection = document.querySelector('#projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const downloadCV = () => {
  const cvUrl = '/cv.pdf';
  const link = document.createElement('a');
  link.href = cvUrl;
  link.download = 'Martin_Dracka_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: var(--primary-bg);
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
  opacity: 0;
  animation: fadeIn 1s ease-out forwards;
}

.highlight {
  color: var(--accent);
  position: relative;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: var(--text-secondary);
  opacity: 0;
  animation: slideUp 1s ease-out 0.5s forwards;
}

.hero-cta {
  display: flex;
  gap: 20px;
  justify-content: center;
  opacity: 0;
  animation: fadeIn 1s ease-out 1s forwards;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>