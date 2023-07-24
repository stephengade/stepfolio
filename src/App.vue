<template>
  <div>
    <!-- <MyPreloader v-if="isLoading" /> -->
    <router-view  />
  </div>
</template>

<script>
// import MyPreloader from "@/components/MyPreloader.vue"

export default {
  name: 'App',
  // components: {
  //   MyPreloader,
  // },
  data() {
    return {
      isLoading: true, // Set this to false when your app finishes loading
    };
  },
}
</script>
