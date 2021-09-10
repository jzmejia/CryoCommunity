<template>
  <v-footer app absolute>
    <v-container>
      <v-row
        ><v-spacer></v-spacer
        ><v-col cols="4" align="right"><h4>join the community</h4></v-col></v-row
      >
      <v-row>
        <v-col cols="1"></v-col>
        <v-col cols="3" class="justify-content-left">
          <span class="overline ml-3 font-weight-medium">site map</span>
          <!-- <v-divider></v-divider> -->
          <div v-for="link in sitemap" :key="link">
            <v-btn text flat plain small :to="link.path"
              >{{ link.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="3" class="justify-content-left pl-0">
          <span class="overline ml-3 font-weight-medium">career stage</span>
          <!-- <v-divider></v-divider> -->
          <div v-for="link in featured" :key="link">
            <v-btn text flat plain small :to="link.path"
              >{{ link.title }}
            </v-btn>
          </div>
        </v-col>
        <v-col cols="3" class="justify-content-left pl-0">
          <span class="overline ml-3 font-weight-medium"></span>
          <div v-for="link in other" :key="link">
            <v-btn text flat plain small :to="link.path"
              >{{ link.title }}
            </v-btn>
          </div>
        </v-col>
        <v-spacer />
      </v-row>
      <div class="mt-3"></div>
    </v-container>

    <span class="mx-auto overline"
      >{{ new Date().getFullYear() }} —
      <b>{{ $static.metadata.siteName }}</b>
    </span>
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
export default {
  components: {},
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
      { title: "undergraduates", path: "/careerstage" },
      { title: "graduate students", path: "/careerstage" },
      { title: "early career", path: "/careerstage" },
      { title: "pi's", path: "/careerstage" },
    ],
    other: [
      { title: "Geo Grad App", path: "http://geogradapp.com" },
      { title: "CryoSciListen", path: "https://cryoscilisten.weebly.com" },
      { title: "Best Practices", path: "/projects" },
      { title: "", path: "" },
    ],
  }),
};
</script>

