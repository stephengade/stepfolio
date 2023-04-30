<template>
    <div class="h-full w-full md:w-[100vw] mt-[4rem] md:mt-[8rem]">
      <h2 class="text-white hero-title text-[40px] md:text-[80px] md:font-[700] leading-[110%] font-syne">Recent Articles</h2>
        <p class="font-jos mb-10 text-myWhite my-3">Discover my recent articles and explore new ideas related to frontend development and software engineering</p>
     
   
      <div class="w-full flex flex-col md:flex-row gap-10">
        <div v-for="(post, index) in posts" :key="index" class="relative shadow-md hover:shadow-2xl bg-myWhite mt-5 md:mt-10 w-2/2 md:w-1/4 px-2 py-5">
         <h2 class="title font-syne text-myDark text-[24px] font-bold">{{ post.title }}</h2>
          <p class="font-jos mb-10 text-myDark my-3">{{ post.description }}</p>
          <p class="absolute bottom-5 bg-myDark hover:bg-slate-600 cursor-pointer font-jos px-3 py-2 text-myWhite text-center"><a :href="post.url" target="_blank">Read more...</a></p>
        </div>
    </div>

    <div class="mt-12 text-center">
     <PrimaryButton text="Check all articles" link="https://dev.to/stephengade" />
    </div>



    </div>
  </template>
  
  <script>

 import PrimaryButton from "@/utils/Button.vue"

  export default {
    name: "myBlog",
    components: {PrimaryButton},

    data() {
      return {
        posts: [],
      };
    },
    created() {
      fetch('https://dev.to/api/articles?username=stephengade')
        .then((response) => response.json())
        .then((data) => {
          this.posts = data.slice(0, 3).map((post) => ({
            title: post.title,
            description: post.description,
            url: post.url,
            image: post.social_image,
          }));
        })
        .catch((error) => console.log(error));
    },
  };
  </script>
  