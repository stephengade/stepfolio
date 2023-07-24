<template>

  <div class="p-5 wrapper h-[300px] w-[95%] md:max-w-[300px]  mb-10 border-[1px] shadow-md cursor-pointer border-solid border-[#CBC9E2]" :id="projects">
    <!-- front -->
    <div class="front-face card flex justify-center items-center">
      <h2 class="title font-syne text-myDark text-[32px]">{{ title }}.</h2>
  </div>

  <!-- back -->
  <div class="back-face card">

    <h2 class="title font-syne text-myDark text-[32px]">{{ title }}.</h2>

    <p class="info font-jos text-center text-base text-myDark">{{ info }}</p>

    <div class="stacks mt-5 flex flex-row items-center text-[14px] text-myDark font-jos">
        <span class="rounded-full p-2 border-2 border-myDark">🚀</span>
        <p class="left-8 py-1 px-3 border-b-2 border-solid border-myDark">{{ stacks }}</p>
    </div>

    <PrimaryButton text="view live" :link="link"/>
  </div>

  

    <!-- back ends -->
</div>

</template>


<script>
import PrimaryButton from "@/utils/Button.vue";

 export default {
    name: "ProjectCard",
    components: {PrimaryButton},
    props: {
        title: {type: String, required: true},
        info: {type: String, required: true},
        stacks: {type: String, required: true},
        link: {type: String, required: true},
     }
 }
</script>

<style>

.wrapper {
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
}

.wrapper .card{
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 5px;
  background: #CBC9E2;
 
  transform: translateY(0deg);
  transform-style: preserve-3d;
  backface-visibility: hidden;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
  transition: transform 1s cubic-bezier(0.4,0.2,0.2,1);
}
.wrapper:hover > .front-face{
  transform: rotateY(-180deg);
}

.wrapper .back-face{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  transform: rotateY(180deg);
}
.wrapper:hover > .back-face{
  transform: rotateY(0deg);
}


</style>