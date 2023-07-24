<template>
   <section class="bg-myDark w-full px-5 pb-12 md:px-[5rem] xl:px-[10rem] min-h-screen h-full">
   <div class="flex justify-between items-center pt-6">
    <Logo />
    <PrimaryButton text="contact me" link="mailto:hello@stephengade.com?subject=I%20need%20something%20done%2C%20are%20you%20available%3F&body=%0AHello%20Stephen%2C%0A%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20am%20reaching%20out%20from%20your%20website%20(stephengade.com)%20because%20I%20am%20interested%20in%20hiring%20you%20for%20a%20project.%0A%0AThe%20project%20is%20related%20to%20%5Bbriefly%20describe%20the%20project%20here%5D%20and%20my%20budget%20for%20the%20project%20is%20%5Bstate%20your%20budget%5D.%0A%0AI%20was%20wondering%20if%20you%20are%20available%20to%20take%20on%20this%20project%3F%20If%20so%2C%20I%20would%20love%20to%20discuss%20the%20details%20with%20you%20further.%0A%0ALooking%20forward%20to%20your%20response.%0A%0ABest%20regards%2C%0A%5BYour%20Name%5D
"/>
  </div>

  <div class="mt-10 rounded-[32px]">
    <iframe title="PDF" width="100%" height="700px" :src="`/pdfjs-3.4.120-dist/web/viewer.html?file=${documentUrl}&zoom=125`"></iframe>
  </div>
</section>
 <section class="bg-myDark px-5 py-12 md:px-[5rem] xl:px-[10rem]">
 <ContactMe />
  <MyFooter />
  <OtherFloatingBar v-if="!isHomePage" />
</section>
</template>

<script>
import PrimaryButton from "@/utils/Button.vue"
import Logo from "@/utils/Logo.vue";
import ContactMe from "./ContactMe.vue";
import MyFooter from "./MyFooter.vue";
import OtherFloatingBar from "@/utils/OtherFloating.vue"

export default {
  name: "MyResume",
  components: {Logo, PrimaryButton, ContactMe, MyFooter, OtherFloatingBar},
 
  data() {
    return {
      documentUrl: "/01_Stephen_Gbolagade_CV.3.pdf"
    }
  },

  computed: {
    isHomePage() {
      return window.location.pathname === "/";
    },
  },
}
</script>
