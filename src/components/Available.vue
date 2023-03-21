<template>
  <div class="h-full mt-[4rem] md:mt-[8rem]" id="available">
    <h2 class="text-white text-[40px] md:text-[80px] md:font-[700] leading-[110%] font-syne">
     I'm really good at
  </h2>

    <div class="flex flex-col md:flex-row gap-10 my-[2rem]">
         <div v-for="item, index in skills" :key="index">
               <h2 class="text-white font-syne text-[20px] md:text-[40px]">{{ item.title }}</h2>
               <p class="text-myWhite font-jos text-base">{{ item.content }}</p>

               <div class="stacks mt-3">
                <p class="text-myWhite font-jos text-base mb-3">{{  ` ${index === 0 ? "Some recent tech I've been using": "The no-code things I can do"} :` }}</p>
                <ul class="ml-8 flex flex-row flex-wrap gap-6 md:w-1/2">
                  <li class="font-jos text-myWhite list-disc" v-for="(list, i) in item.stacks" :key="i">{{ list.item }}</li>
                 </ul>
               </div>
         </div>
    </div>
  </div>
  </template>
  
  <script>
 
  
  
  
  export default {
      name: "AvailablePage",
      props: {
        skills: {type: Array, required: true}
      }
  }
  </script>
  
  
  