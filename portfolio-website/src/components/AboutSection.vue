<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">{{ t('about.title') }}</h2>
      <div class="about-content">
        <div class="about-text">
          <p>{{ t('about.paragraph1') }}</p>
          <p>{{ t('about.paragraph2') }}</p>
        </div>
        <div class="about-image">
          <img src="/portfolio-website/public/images/martindracka.jpg" alt="Martin Dracka" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.about {
  padding: 100px 0;
  background: var(--secondary-bg);
}

.about-content {
  display: flex;
  align-items: center;
  gap: 50px;
}

.about-text {
  flex: 1;
}

.about-image {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow);
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.about-image img:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column-reverse;
  }
}
</style>