<template>
  <v-app class="overflow-hidden">
    <Header />
    <v-main>
      <Hero v-if="$route.path === '/'" />
      <v-fade-transition hide-on-leave leave-absolute>
        <router-view />
      </v-fade-transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Hero,
  },
};
</script>

<style>
.view-enter-active,
.view-leave-active {
  opacity: 0;
  transition: opacity 0.3s;
}
.view-enter-active {
  transition-delay: 0.3s;
}
.view-enter {
  opacity: 0;
}
.view-enter-to {
  opacity: 1;
}
.view-leave {
  opacity: 1;
}
.view-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  /* -webkit-opacity: 0; */
  opacity: 0;
  /* -webkit-transition: opacity 0.25s; */
  transition: opacity 0.3s ease;
}

.fade-enter-active {
  /* -webkit-opacity: 0; */
  opacity: 0;
  /* -webkit-transition-delay: 0.25s; */
  transition-delay: 0.3s;
}

.fade-enter,
.fade-leave-active {
  -webkit-opacity: 0;
  opacity: 0;
}
</style>
