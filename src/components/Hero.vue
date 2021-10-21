<template>
  <v-parallax src="/ice.jpg" height="1000" style="height: 100vh">
    <v-row justify="center">
      <v-col cols="12" align-self="end" align="center">
        <v-img :src="heroData.hero.heroLogo" height="70" contain class="mb-4" />
        <div class="mb-2 text-lg-h2 text-h3 font-weight-medium black--text">
          {{ heroData.hero.heroTitle }}
        </div>
        <div class="text-lg-h5 text-h6 black--text">
          {{ heroData.hero.heroSubtitle }}
        </div>
      </v-col>
      <v-col cols="auto" align-self="start" align="start">
        <v-row>
          <v-col>
            <v-btn color="primary" to="/career/" exact>
              <v-icon left>fa-search</v-icon>
              career stage
            </v-btn>
          </v-col>
          <v-col v-for="(button, index) in heroData.buttons" :key="index">
            <v-btn color="primary" :to="button.link" exact>
              {{ button.name }}
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<static-query>
query {
  hero: allHero {
    edges {
      node {
        hero {
          heroImgSrc (height: 1000, quality: 100)
          heroTitle
          heroSubtitle
        }
        buttons {
          name
          link
          icon
        }
      }
    }
  }
}
</static-query>
<script>
export default {
  name: "Hero",
  computed: {
    heroData() {
      return this.$static.hero.edges[0].node;
    },
    mdAndDown() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
};
</script>
