<template>
    <div class="h-full relative text-center mt-[8rem]" id="footer">

        <hr />
           
           <p className="font-jos text-myWhite mt-[4rem]">Made with 💙 and <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>

           <p className="font-syne mt-5 mb-10 text-myWhite">&copy; {{ currentYear }}</p>

           <img class="hidden w-[400px] rotate-footer md:block absolute -left-10 bottom-0 md:-ml-[15rem] xl:-ml-[20rem]" src="../assets/LyingLaptop.png" alt="" />
    </div>
</template>
    
<script>


export default {
    name: "MyFooter",
    data() {
        return {
            currentYear: new Date().getFullYear(),
        }
    }
  
}

</script>
    

<style>

</style>
    