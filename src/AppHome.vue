<template>
  <Layout>
  <HomePage />
   <AboutMe />
  <Available :skills="skill_data"/>
  <MyProjects />
  <MyBlog />
  <ContactMe />
  <MyFooter />

  
</Layout>
</template>


<script>
import Layout from './Layout/AppLayout.vue';
import AboutMe from './components/AboutMe.vue';
import Available from './components/Available.vue';
import HomePage from './components/HomePage.vue';
import MyProjects from './components/MyProjects.vue';
import { availableData } from './data/availabilityData';
import ContactMe from "@/components/ContactMe.vue"
import MyFooter from './components/MyFooter.vue';
import MyBlog from '@/components/MyBlog.vue'


export default {
  name: "MainApp",
  
  components: {
    HomePage,
    Layout,
    Available,
    AboutMe,
    MyProjects,
     MyBlog,
    ContactMe,
    MyFooter
},

data() {
  return {
    skill_data: availableData
  }
}
}
</script>

<style>
html {
  overflow: scroll;
  overflow-x: hidden;
}

html::-webkit-scrollbar {
    width: 5px;  /* Remove scrollbar space */
    background: #0E1012;  /* Optional: just make scrollbar invisible */
}

html::-webkit-scrollbar-thumb {
    background: #CBC9E2;
    border-radius: 10px;
}
</style>