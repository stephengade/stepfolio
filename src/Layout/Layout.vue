<template>
    <section className="bg-myDark px-5 pb-12 md:px-[5rem] min-h-screen h-full">
        <!-- The navbar -->
    <div className="flex justify-between items-center pt-6">
    <Logo />
    <PrimaryButton text="contact me"/>
  </div>

    <!-- the children -->
      <slot />

      <MenuBar />
    </section>
</template>

<script>
import PrimaryButton from "@/utils/Button.vue"
import Logo from "@/utils/Logo.vue";
import MenuBar from "@/utils/FloatingBar.vue"


export default {
    name: 'appLayout',
    components: {Logo, PrimaryButton, MenuBar},
}

</script>