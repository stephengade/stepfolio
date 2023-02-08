<template>
  <Layout>
  <HomePage />
  <Available :skills="skill_data"/>
</Layout>
</template>


<script>
import Layout from './Layout/Layout.vue';
import Available from './components/Available.vue';
import HomePage from './components/HomePage.vue';
import { availableData } from './data/availabilityData';

export default {
  components: {
    HomePage,
    Layout,
    Available
},

data() {
  return {
    skill_data: availableData
  }
}
}
</script>