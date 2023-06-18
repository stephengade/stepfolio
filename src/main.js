import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './../router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const app = createApp(App);
app.use(router);
app.config.globalProperties.$gsap = gsap; // Register GSAP globally

app.mount('#app');
