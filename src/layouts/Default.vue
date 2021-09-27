<template>
  <div>
    <!-- <Hero/> -->
    <!-- <v-fade-transition mode="out-in"> -->
      <slot />
    <!-- </v-fade-transition> -->
  </div>
</template>

<script>
// import Hero from "../components/Hero";

export default {
  components: {
    // Hero,
  },
  computed: {
    isHome() {
      return this.$route.name === "home";
    },
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}
</style>
