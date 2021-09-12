<template>
  <v-footer app absolute>
    <v-container>
      <v-row>
        <v-col cols="4" align="right" offset="8"
          ><h5>join the community</h5>
          <div><email-bar /></div>
        </v-col>
        <v-col cols="3">
          <!-- <div class=" overline">SITE MAP</div> -->
          <!-- <v-divider></v-divider> -->
          <!-- <v-subheader>Site map</v-subheader> -->
          <div v-for="link in sitemap" :key="link">
            <v-btn text flat :small="smAndDown" plain :to="link.path">{{ link.title }} </v-btn>
          </div>
        </v-col>
        <v-col cols="3" class="ml-n6 mr-6">
          <!-- <span class="overline">career stage</span> -->
          <!-- <v-divider></v-divider> -->
          <div v-for="link in featured" :key="link">
            <v-btn text flat plain :small="smAndDown" :to="link.path">{{ link.title }} </v-btn>
          </div>
        </v-col>
        <v-col cols="3">
          <!-- <span class="overline ml-3 font-weight-medium"></span> -->
          <div v-for="link in other" :key="link">
            <v-btn text flat plain :small="smAndDown" :to="link.path">{{ link.title }} </v-btn>
          </div>
        </v-col>
        <v-col cols="12" class="overline text-center">
          &copy; {{ new Date().getFullYear() }}
          {{ $static.metadata.siteName }}
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import EmailBar from "./EmailBar.vue";

export default {
  components: {
    EmailBar,
  },
  data: () => ({
    icons: [
      {
        icon: "fab fa-twitter",
        link: "https://twitter.com/cryocommunity?s=21",
      },
    ],
    sitemap: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Team", path: "/team" },
      { title: "Projects", path: "/projects" },
      { title: "Resources", path: "/resources" },
      { title: "Contact", path: "/contact" },
    ],
    featured: [
      { title: "career stage", path: "/careerstage"},
      { title: "undergraduates", path: "/careerstage" },
      { title: "graduate students", path: "/careerstage" },
      { title: "early career", path: "/careerstage" },
      { title: "pi's", path: "/careerstage" },
    ],
    other: [
      { title: "Geo Grad App", path: "http://geogradapp.com" },
      { title: "CryoSciListen", path: "https://cryoscilisten.weebly.com" },
      { title: "Best Practices", path: "/projects" },
      { title: "URGE", path: "https://urgeoscience.org/" },
    ],
  }),
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    }
  },
};
</script>

