<template>
    <Layout>
        <AboutMe />
        <ContactMe />
        <MyFooter />
    </Layout>
</template>



<script>
import Layout from '@/Layout/AppLayout.vue';
import AboutMe from '@/components/AboutMe.vue'
import MyFooter from '@/components/MyFooter.vue';
import ContactMe from '@/components/ContactMe.vue';



export default {
  name: "AboutApp",

components: {
    AboutMe,
    ContactMe,
    Layout,
    MyFooter
}

};


</script>
