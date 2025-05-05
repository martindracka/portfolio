<template>
  <section id="video-cv" class="video-cv">
    <div class="container">
      <h2 class="section-title">{{ t('videoCV.title') }}</h2>
      <p class="video-description">{{ t('videoCV.description') }}</p>
      <div class="video-container">
        <template v-if="hasVideo">
          <video 
            class="video-player" 
            controls 
            :poster="videoPlaceholder"
          >
            <source 
              src="portfolio-website/public/videos/videocv.mp4" 
              type="video/mp4"
            >
            {{ t('videoCV.browserSupport') }}
          </video>
        </template>
        <div v-else class="video-placeholder">
          <img :src="videoPlaceholder" alt="Video placeholder" />
          <p class="placeholder-text">{{ t('videoCV.comingSoon') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import videoPlaceholder from '@/assets/images/projects/video-placeholder.jpg'

const { t } = useI18n()
const hasVideo = ref(false)


onMounted(() => {
  fetch('/videos/cv.mp4', { method: 'HEAD' })
    .then(response => {
      hasVideo.value = response.ok
    })
    .catch(() => {
      hasVideo.value = false
    })
})
</script>

<style scoped>
.video-cv {
  padding: 100px 0;
  background: var(--primary-bg);
}

.video-description {
  text-align: center;
  margin-bottom: 2rem;
  color: var(--text-secondary);
}

.video-container {
  max-width: 900px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px var(--shadow);
}

.video-player {
  width: 100%;
  display: block;
  background: var(--secondary-bg);
}

.video-placeholder {
  position: relative;
  width: 100%;
  background: var(--secondary-bg);
  text-align: center;
}

.video-placeholder img {
  width: 100%;
  height: auto;
  opacity: 0.7;
}

.placeholder-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>