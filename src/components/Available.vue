<template>
  <div className="h-full mt-[5rem]" id="available">
    <h2 className="text-white text-[40px] md:text-[80px] md:font-[700] leading-[110%] font-syne">
     I'm really good at
  </h2>

    <div className="flex flex-col md:flex-row gap-10 my-[2rem]">
         <div v-for="item, index in skills" :key="index">
               <h2 className="text-white font-syne text-[20px] md:text-[40px]">{{ item.title }}</h2>
               <p className="text-myWhite font-jos text-base">{{ item.content }}</p>
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
  
  
  