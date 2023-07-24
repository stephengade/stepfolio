<template>
  <Layout>
  <HomePage />
  <!-- main section starts -->
  
   <!-- <AboutMe /> -->
  <Available :skills="skill_data"/>
  <MyProjects />
  <MyBlog />
  <ContactMe />
  <MyFooter />

  <!-- main section ends -->
</Layout>
</template>


<script>
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Layout from '@/Layout/AppLayout.vue';
// import AboutMe from '@/components/AboutMe.vue';
import Available from '@/components/Available.vue';
import HomePage from '@/components/HomePage.vue';
import MyProjects from '@/components/MyProjects.vue';
import { availableData } from '@/data/availabilityData';
import ContactMe from "@/components/ContactMe.vue";
import MyFooter from '@/components/MyFooter.vue';
import MyBlog from '@/components/MyBlog.vue';

export default {
  name: "MainApp",
  
  components: {
    HomePage,
    Layout,
    Available,
    // AboutMe,
    MyProjects,
    MyBlog,
    ContactMe,
    MyFooter
  },

  data() {
    return {
      skill_data: availableData,
    };
  },
  

};
</script>


<style>
html {
  overflow: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;

}

html::-webkit-scrollbar {
    width: 10px;  /* Remove scrollbar space */
    background: #0E1012;  /* Optional: just make scrollbar invisible */
    cursor: pointer;
}

html::-webkit-scrollbar-thumb {
    background: #BD26CB;
    border-radius: 10px;
}
</style>