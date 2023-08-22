<template>
    <section class="bg-myDark w-full px-5 pb-12 md:px-[5rem] xl:px-[10rem] min-h-screen h-full overflow-x-hidden">
        <!-- The navbar -->
    <div class="flex justify-between items-center pt-6">
    <Logo />
    <PrimaryButton text="Schedule a Call 🚀" link="https://calendly.com/stephengade/hire"/>
  </div>

    <!-- the children -->
      <slot />

    <MenuBar v-if="isHomePage" />
    <OtherFloatingBar v-if="!isHomePage" />
    </section>
</template>

<script>
import PrimaryButton from "@/utils/Button.vue"
import Logo from "@/utils/Logo.vue";
import MenuBar from "@/utils/FloatingBar.vue"
import OtherFloatingBar from "@/utils/OtherFloating.vue"


export default {
    name: 'appLayout',
    components: {Logo, PrimaryButton, MenuBar, OtherFloatingBar},

    computed: {
    isHomePage() {
      return window.location.pathname === "/";
    },
  },
}

</script>