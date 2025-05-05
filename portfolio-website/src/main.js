import { createApp } from 'vue';
import App from './App.vue';
import i18n from './i18n';
import './assets/styles/theme.css';
import './assets/styles/base.css';
import './assets/styles/animations.css';
import './assets/styles/components.css';
import './assets/styles/responsive.css';

const app = createApp(App);
app.use(i18n);
app.mount('#app');