<template>
  <v-app class="overflow-hidden">
    <Header />
    <Hero v-if="isHome" :height="dynamicHeight" />

    <v-main>
      <v-container>
      <slot />
      </v-container>
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
      return this.$route.path === "/";
    },
  },
};
</script>

<style scoped>
</style>
