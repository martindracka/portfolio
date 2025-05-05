Sure, here's the updated content for the file: /portfolio-website/portfolio-website/src/components/ProjectsSection.vue

<template>
  <section id="projects" class="projects">
    <div class="container">
      <h2 class="section-title">{{ t('projects.title') }}</h2>
      <transition-group name="project-list" tag="div" class="projects-grid">
        <ProjectCard 
          v-for="(project, index) in projects" 
          :key="project.id" 
          :project="project" 
          :animation-delay="index * 0.1"
        />
      </transition-group>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import ProjectCard from './ProjectCard.vue';
import projects from '../data/projects.js';

const { t } = useI18n();
</script>

<style scoped>
.projects {
  padding: 100px 0;
  background-color: var(--primary-bg);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
}

.section-title {
  text-align: center;
  margin-bottom: 2rem;
}
</style>