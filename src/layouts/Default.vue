<template>
  <v-app>
    <Header />
    <v-main>
      <Hero />
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default {
  components: {
    Header,
    Hero,
    Footer,
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    },
  },
};
</script>

<style scoped>
</style>
