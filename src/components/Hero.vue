<template>

  <v-parallax :src="hero.backgroundImage.src" height="1000" style="height: 100vh">
    <div class="text-center">
      <v-avatar rounded height="180" width="160">
        <g-image :src="hero.logo" />
      </v-avatar>
      <div class="text-h3 text-lg-h1 font-weight-medium black--text">
        {{ hero.title }}
      </div>
      <div class="text-capitalize text-lg-h5 text-h6 black--text">
        {{ hero.subtitle }}
      </div>

      <v-btn class="mt-2 mr-2" v-for="(item, idx) in hero.links" :key="idx" :to="item.url" exact depressed
        :ripple="false" color="primary">
        <v-icon v-if="item.icon" left>mdi-magnify</v-icon>
        {{ item.name }}
      </v-btn>
    </div>
  </v-parallax>
</template>

<static-query>
query {
  hero: allHero {
    edges {
      node {
        title
        subtitle
        backgroundImage
        links {
          name
          url
          icon
        }
        logo
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "Hero",
  computed: {
    hero() {
      return this.$static.hero.edges[0].node;
    }
  }
};
</script>