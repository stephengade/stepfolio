<template>
    <button class="bg-transparent flex relative after:content-[''] after:z-0 after:absolute after:w-full after:h-full after:bg-myWhite hover:after:bg-myPink after:top-[8%] after:left-[2.5%]">
    <div class="bg-myDark hover:animate-pulse flex justify-center py-2 px-3 z-10 text-myWhite font-jos border-solid border-2 border-myWhite">
     <span><a :href="link" target="_blank">{{ text }}</a></span>
    </div>
</button>
  </template>
  
  <script>
  export default {
    name: 'primaryButton',
    props: {
      text: String,
      link: String
    }
  };
  </script>
  