<template>
    <div class="h-full text-center mt-[8rem]" id="footer">

        <hr />
           
           <p className="font-jos text-myWhite mt-[4rem]">Made with 💙 and <a href="https://vuejs.org/" target="_blank">Vue.js</a></p>

           <p className="font-syne mt-5 mb-10 text-myWhite">&copy; {{ currentYear }}</p>
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
    
    
    