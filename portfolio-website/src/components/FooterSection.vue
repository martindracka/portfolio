<template>
  <footer class="footer">
    <div class="container">
      <div class="social-links">
        <a href="https://www.linkedin.com/in/martindracka/" target="_blank" class="social-link" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </a>
        <a href="https://github.com/martindracka" target="_blank" class="social-link" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
        <a href="mailto:contact@martindracka.com" class="social-link" aria-label="Email">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
        </a>
      </div>
      <a href="portfolio-website/public/images/Martin-Dracka-Resume.pdf" @click.prevent="downloadCV" class="download-cv">{{ t('footer.downloadCV') }}</a>
      <p class="copyright">© {{ new Date().getFullYear() }} {{ t('Martin Dracka') }}. {{ t('footer.rights') }}</p>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

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
.footer {
  padding: 60px 0;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  text-align: center;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: var(--primary-color);
  transition: all 0.3s ease;
}

.social-link:hover {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  transform: translateY(-3px);
}

.download-cv {
  display: inline-block;
  color: var(--primary-color);
  text-decoration: none;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: 2px solid var(--primary-color);
  border-radius: 25px;
  transition: all 0.3s ease;
}

.download-cv:hover {
  background-color: var(--primary-color);
  color: var(--secondary-color);
  transform: translateY(-2px);
}

.icon {
  width: 24px;
  height: 24px;
}

.copyright {
  font-size: 0.9rem;
  opacity: 0.7;
}

@media (max-width: 768px) {
  .social-links {
    gap: 15px;
  }
  
  .social-link {
    width: 45px;
    height: 45px;
  }
  
  .icon {
    width: 20px;
    height: 20px;
  }
}
</style>