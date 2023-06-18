<template>
    <nav role="navigation" class="z-20 bg-myWhite bg-opacity-90 fixed left-[50%] -translate-x-[50%] bottom-4 py-4 px-3 rounded-[200px] w-[350px]">
      <ul class="flex justify-center flex-row items-center gap-8">
        <li v-for="item in navLinks" :key="item.id" class='font-jos text-myDark cursor-pointer hover:opacity-60'>
            <a :href="item.link" v-if="item.link.startsWith('#') || item.link.startsWith('/#')" @click.prevent="scrollToSection(item.link)">{{ item.text }}</a>
       <router-link v-else :to="item.link">{{ item.text }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'OtherFloatingBar',
    data() {
      return {
        navLinks: [
          { id: 0, link: "/", text: "Home" },
          { id: 1, link: "#contact", text: "Contact" },
          { id: 3, link: "/cv", text: "Resume" },
        ],
      };
    },
    
    methods: {
        scrollToSection(link) {
      const section = document.querySelector(link);
      section.scrollIntoView({ behavior: "smooth" });
    },  
    },
   
   
  };
  </script>
  