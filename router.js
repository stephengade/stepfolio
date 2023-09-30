import { createWebHistory, createWebHashHistory, createRouter } from "vue-router"
import HomePage from "./src/views/AppHome.vue"
import AboutMe from "./src/views/AboutPage.vue"



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

  // {
  //     path: '/cv',
  //     redirect: '/resume.pdf',
  // },
]

const router = createRouter({
  history: createWebHistory() || createWebHashHistory(),
  routes: links,
})

export default router