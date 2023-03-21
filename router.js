import { createWebHistory, createWebHashHistory, createRouter } from "vue-router"
import HomePage from "./src/AppHome.vue"
import  MyResume  from './src/components/MyResume.vue';

const links = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
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