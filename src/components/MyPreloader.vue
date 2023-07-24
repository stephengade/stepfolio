<template>
  <div class="preloader bg-myDark">
    <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
    <div class="loading-text" v-if="isLoading">{{ randomText }}</div>
  </div>
</template>

<style>

.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000; /* Adjust the background color as needed */
  z-index: 9999;
  overflow: hidden;
}

.progress-bar {
  height: 10%;
  background-color: #BD26CB; /* Adjust the progress bar color as needed */
  transition: width 1s linear;
  position: fixed;
  bottom: 0;

}
html::-webkit-scrollbar {
   display: none;
}

html::-webkit-scrollbar-thumb {
  display: none;
}
/* Your existing styles */

.loading-text {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff; /* Adjust the text color as needed */
  font-size: 24px; /* Adjust the font size as needed */
  font-weight: bold;
}
</style>

<script>
export default {
  name: 'MyPreloader',
  data() {
    return {
      progress: 0,
      isLoading: true,
      randomText: '',
      textOptions: ['Loading...', 'Please wait...', 'Almost there...'], // Add more text options as needed
    };
  },
  mounted() {
    this.startProgress();
    this.startRandomText();
  },
  methods: {
    startProgress() {
      const interval = setInterval(() => {
        this.progress += 1;
        if (this.progress === 100) {
          clearInterval(interval);
          this.isLoading = false;
        }
      }, 10); // Increase the progress every 30 milliseconds (adjust as needed)
    },
    startRandomText() {
      setInterval(() => {
        this.randomText = this.textOptions[Math.floor(Math.random() * this.textOptions.length)];
      }, 1000); // Change the random text every 2 seconds (adjust as needed)
    },
  },
};
</script>
