<template>
  <div 
    class="project-card"
    ref="card"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
    :style="cardStyle"
  >
    <div class="project-image">
      <img :src="project.image" :alt="project.title" />
    </div>
    <div class="project-info">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>
      <div class="project-tags">
        <span v-for="tech in project.technologies" :key="tech" class="project-tag">{{ tech }}</span>
      </div>
      <div class="project-links">
        <a :href="project.liveLink" target="_blank" class="project-link">Live Demo</a>
        <a :href="project.githubLink" target="_blank" class="project-link">GitHub</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { use3DEffect } from '../composables/use3DEffect';

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
});

const card = ref(null);
const { handleMouseMove: handle3DMouseMove, handleMouseLeave: handle3DMouseLeave, cardStyle } = use3DEffect();

const handleMouseMove = (e) => {
  handle3DMouseMove(e, card.value);
};

const handleMouseLeave = () => {
  handle3DMouseLeave(card.value);
};
</script>

<style scoped>
.project-card {
  background-color: var(--card-bg);
  border-radius: 10px;
  box-shadow: 0 15px 35px var(--shadow);
  overflow: hidden;
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.project-image {
  position: relative;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-info {
  padding: 20px;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-secondary);
  margin-bottom: 15px;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.project-tag {
  background-color: var(--primary-color);
  color: var(--text-primary);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 15px;
}

.project-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: var(--accent-color);
}
</style>