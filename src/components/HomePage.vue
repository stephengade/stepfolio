<template>
  <div class="relative h-screen" id="home section " ref="Hero">

    <h3 class="text-right text-myWhite font-jos mt-[60px]">
      <span class="animate-ping animation-duration-3000">👋</span>Hi
      there, I'm Stephen,</h3>

    <h2
      class="text-white hero-title text-[35px] mt-5 md:ml-[20%] md:text-[80px] font-[400] md:font-[700] leading-[105%] text-right font-syne">
      a Frontend <span class="title">Engineer</span>,<br /> <span class="highlight title">available to work </span> <br /> globally.
    </h2>

    <p class="text-myWhite font-jos my-7 text-base md:text-[18px] leading-[24px] text-right md:pl-[40%]">
      With a focus on modern web technologies and pixel-perfect implementation, I am committed to creating high-quality
      and user-centric websites that enhance brand image and drive conversions.

    </p>


    <img class="md:h-[500px] rotate-60 z-10 absolute left-10 md:left-20 md:bottom-0 -ml-[10rem] md:-ml-[20rem]" src="../../src/assets/heroVector.png" alt="" />
   
   
    
  </div>



</template>



<script>
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);


export default {
  name: "HomePage",
 
  mounted() {
    // spotlight

    const spotlightSize = 400;

const updateSpotlightPosition = (event) => {
  if (window.event) {
    event = window.event;
  }
  let titleRect = document.querySelector('.title').getBoundingClientRect();
  let mouseX = event.clientX;
  let spotlightX = mouseX - (spotlightSize / 2) - titleRect.left;
  let mouseY = event.clientY;
  let spotlightY = mouseY - (spotlightSize / 2) - titleRect.top;

  const element = document.querySelector('.title');
  element.style.backgroundPosition = spotlightX + 'px ' + spotlightY + 'px';
};

document.addEventListener('mousemove', updateSpotlightPosition, false);

// Trigger the animation again when the mouse leaves the element
document.querySelector('.title').addEventListener('mouseleave', () => {
  const element = document.querySelector('.title');
  element.style.backgroundPosition = 'center center';

  // Delay re-adding the animation to prevent an immediate jump
  setTimeout(() => {
    document.addEventListener('mousemove', updateSpotlightPosition, false);
  }, 500);
});

  }
}
</script>

<style>
/* .highlight {
  animation: 2s highlight 1s 1 normal forwards;
  background-color: none;
  background: linear-gradient(90deg, #BD26CB 50%, rgba(255, 255, 255, 0) 50%);
  background-size: 200% 100%;
  background-position: 100% 0;
  color: black;
} */

/* @keyframes highlight {
  0% {
    background-position: 100% 0;
  }
  30%, 70% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
} */

/* title animation */

.title {
   background-clip: text;
  -webkit-background-clip: text;
  background-image: radial-gradient(closest-side, #BD26CB 100%, transparent 0);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 400px 400px;
  
  transition: all .7s cubic-bezier(.19,1,.22,1);
  
}

</style>
