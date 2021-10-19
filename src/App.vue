<template>
  <v-app>
    <Header />
    <v-main>
      <v-fade-transition mode="out-in">
      <Banner v-if="$route.path === '/'" />
      </v-fade-transition>
      <v-fade-transition mode="out-in">
        <Hero v-if="$route.path === '/'" />
      </v-fade-transition>
      <v-fade-transition mode="out-in">
        <router-view />
      </v-fade-transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Banner from "@/components/NewContentBanner";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Hero,
    Banner,
    Footer,
  },
  metaInfo: {
    title: "Loading",
    titleTemplate: "%s | CryoCommunity",
  },
};
</script>

<style>
h1,
h2,
h3,
h4,
h5 {
  font-family: "Poppins", sans-serif;
}
/* body {
  font-family: "Hind", sans-serif;
} */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 250ms;
}

.fade-enter-active {
  transition-delay: 250ms;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
