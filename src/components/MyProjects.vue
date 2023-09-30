<template>
  <!-- brands -->
  <!-- <div class="mt-24">
    <Brands />
  </div> -->



  <!-- projects -->

  <div class="min-h-screen section w-full mt-[4rem] md:mt-[8rem] " id="projects">

    <h2 class="text-white hero-title text-[40px] md:text-[80px] md:font-[700] leading-[110%] font-syne">
      <span class="md:title">Selected Projects</span>
    </h2>

    <div class="flex flex-col md:flex-row flex-wrap md:items-center gap-10 my-[2rem]">
      <div v-for="item, index in projects" :key="index" class="w-2/2 md:w-1/4">
        <ProjectCard :title="item.title" :subtitle="item.subtitle" :info="item.info" :stacks="item.stacks" :link="item.link" />
      </div>
    </div>


    <!-- other projects -->
    <!-- <div class="other-projects mt-6 flex flex-col gap-3 md:flex-row items-center md:justify-between">
         <p class="font-syne hero-title text-myWhite text-[32px] font-bold">Some other cool projects &rarr;</p>
        <div v-for="project, key in FunProjectData" :key="key">
          <a :href="project.link" target="_blank" referrer="noreferrer" :title="project.title" class="text-myWhite font-jos text-lg hover:text-xl transition-all border-b border-b-solid border-myPink">{{ project.title }} &nearr;</a>
        </div>
    </div> -->


  </div>
</template>
    
<script>
import ProjectCard from '@/utils/ProjectCard.vue';
import { projectData, FunProjects } from '@/data/projectData';
// import Brands from "@/components/MyBrands.vue"


export default {
  name: "MyProjects",
  components: { ProjectCard },
  data() {
    return {
      projects: projectData,
      FunProjectData: FunProjects
    }
  }
}
</script>
    
    
    
>