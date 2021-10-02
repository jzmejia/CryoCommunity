<template>
  <v-app>
    <Header />
    <v-main>
      <!-- <Hero v-if="$route.path === '/'" /> -->
      <v-fade-transition hide-on-leave>
        <router-view />
      </v-fade-transition>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",
  components: {
    Header,
    Footer: () => import("@/components/Footer"),
    // Hero: () => import("@/components/Hero"),
  },
  data() {
    return {
    };
  },
  metaInfo() {
    return {
      meta: [
        { name: 'viewport', content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" }
      ]
    }
  }
};
</script>

<style>
/* .main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
} */
/* html,body {
  font-family: Lato, sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  display: block;
} */

.darkTheme {
  background-color: #000000 !important;
}
.lightTheme {
  background-color: #ffffff !important;
}
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
