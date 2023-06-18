<template>
  <div class="min-h-screen relative mt-[4rem] md:mt-[8rem] section" id="available">
    <h2 class="text-white hero-title text-[40px] md:text-[80px] md:font-[700] leading-[110%] font-syne">
      I'm really good at
    </h2>

    <div class=" grid grid-cols-1 md:grid-cols-2 gap-10 my-[2rem]">
      <div v-for="item, index in skills" :key="index">
        <h2 class="text-white  font-syne text-[20px] md:text-[40px]">{{ item.title }}</h2>
        <p class="text-myWhite font-jos text-base">{{ item.content }}</p>

        <div class="stacks mt-10">
          <p class="text-myWhite font-jos text-base mb-3">{{ ` ${index === 0 ? "Some recent tech I've been using" : "The no / low - code things I can do "}:` }}</p>
          <ul class="ml-8 grid grid-cols-2 gap-6">
            <li class="font-jos mr-4 text-myWhite list-disc" v-for="(list, i) in item.stacks" :key="i">{{ list.item }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <img class="hidden h-[500px] rotate-right md:block absolute right-20 bottom-0 md:-mr-[20rem]"
      src="../../src/assets/guyLaptop.png" alt="" />
  </div>
</template>

<style>
.rotate-right {
  transform: rotate(-30deg);
}
</style>
  
<script>



export default {
  name: "AvailablePage",
  props: {
    skills: { type: Array, required: true }
  }
}
</script>
  
  
  