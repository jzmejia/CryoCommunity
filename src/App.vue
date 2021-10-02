<template>
  <v-app>
    <Header />
    <v-main>
      <transition name="fade">
        <Hero v-if="$route.name === 'home'" />
      </transition>
      <transition name="fade">
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Hero,
    Footer,
  },
  metaInfo: {
    title: "Loading",
    titleTemplate: "%s | CryoCommunity",
  },
};
</script>

<style>
.darkTheme {
  background-color: #000000 !important;
}
.lightTheme {
  background-color: #ffffff !important;
}
.view-enter-active,
.view-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.view-enter-active {
  opacity: 0;
  transition-delay: 0.3s;
}

.view-leave,
.view-enter-to {
  opacity: 1;
}
.view-leave-to,
.view-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
