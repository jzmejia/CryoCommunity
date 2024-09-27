<template>
  <v-app>
    <Header :collapse.sync="collapse" />
    <NavigationDrawer :collapse.sync="collapse" />
    <Banner v-if="showBanner" />
    <v-main style="min-height: 95vh">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<static-query>
  query {
    metadata {
      bannerStatus
    }
  }
</static-query>

<script>
import Header from "~/components/Header";

export default {
  name: "App",
  metaInfo: {
    title: "Loading",
    titleTemplate: "CryoCommunity",
  },
  components: {
    Header,
    NavigationDrawer: () => import("~/components/NavigationDrawer"),
    Banner: () => import("~/components/Banner"),
    Footer: () => import("~/components/Footer"),
  },
  data: () => ({
    collapse: false,
  }),
  computed: {
    showBanner() {
      return this.$route.path === "/" && this.$static.metadata.bannerStatus;
    },
  },
  watch: {
    $route(to, from) {
      this.collapse = false;
    },
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

svg {
  position: sticky;
}
</style>
