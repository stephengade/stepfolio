<template>
    <div class="min-h-screen section w-full mt-[4rem] md:mt-[8rem] " id="projects">
     
      <h2 class="text-white hero-title text-[40px] md:text-[80px] md:font-[700] leading-[110%] font-syne">
         Selected Projects
      </h2>
  
         <div class="flex flex-col md:flex-row flex-wrap md:items-center gap-10 my-[2rem]">
           <div v-for="item, index in projects" :key="index" class="w-2/2 md:w-1/4">
             <ProjectCard :title="item.title" :info="item.info" :stacks="item.stacks" :link="item.link"/>  
           </div>
      </div>

   
    </div>
    </template>
    
    <script>
import ProjectCard from '@/utils/ProjectCard.vue';
import { projectData } from '@/data/projectData';

   
    export default {
    name: "MyProjects",
    components: { ProjectCard },
    data() {
    return {
    projects: projectData
  }
}
    }
    </script>
    
    
    
>