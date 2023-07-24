import { createWebHistory, createWebHashHistory, createRouter } from "vue-router"
import HomePage from "./src/views/AppHome.vue"
import AboutMe from "./src/views/AboutPage.vue"
import  MyResume  from '@/components/MyResume.vue';


const links = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },

  {
    path: "/about",
    name: "About",
    component: AboutMe,
  },

  {
    path: "/cv",
    name: "Resume",
    component: MyResume,
  },
]

const router = createRouter({
  history: createWebHistory() || createWebHashHistory(),
  routes: links,
})

export default router