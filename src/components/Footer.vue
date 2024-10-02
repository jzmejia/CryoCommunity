<template>
  <v-footer class="px-0" :color="dark ? '' : 'grey lighten-5'">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="3" class="text-right" :order="mobile ? 'first' : 'last'">
          <div class="text-h6">join the community</div>
          <v-btn icon href="https://twitter.com/CryoCommunity">
            <TwitterIcon aria-hidden />
          </v-btn>
          <v-btn icon href="https://github.com/jzmejia/CryoCommunity">
            <GithubIcon aria-hidden />
          </v-btn>
          <v-btn icon to="/contact/">
            <EmailIcon aria-hidden />
          </v-btn>
          <v-btn icon to="/about/">
            <InfoIcon aria-hidden />
          </v-btn>
        </v-col>
        <v-col cols="12" lg="6" md="8" sm="12">
          <v-row>
            <v-col v-for="(key, index) in footerMenu" cols="6" :key="index">
              <div v-for="(link, idx) in key" :key="idx">
                <g-link :to="link.path" class="caption text--primary text-decoration-none text-uppercase"
                  exact-active-class="primary--text">
                  {{ link.title }}
                </g-link>
              </div>
            </v-col>

            <v-col cols="12">
              <div class="caption mt-4">
                <div class="d-flex align-center">
                  <CodeIcon />with
                  <HeartIcon class="pink--text" />by
                  <g-link class="mx-1" href="https://github.com/jzmejia/">J. Mejia</g-link>
                  and
                  <g-link class="mx-1" href="https://twitter.com/LummusMalisse">M. Lummus</g-link>
                </div>
                <div class="d-flex align-center">
                  <v-icon x-small class="black--text mr-1">mdi-copyright</v-icon>
                  {{ new Date().getFullYear() }} {{ $static.metadata.siteName }}
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
        <!-- <v-col
          cols="12"
          lg="4"
          md="4"
          :order="mobile ? 'first' : ''"
          style="max-height: 325px;"
          class="overflow-auto"
        >
          <Twitter />
        </v-col> -->
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
export default {
  components: {
    CodeIcon: () => import("~/assets/svgs/code.svg"),
    Twitter: () => import("~/components/Twitter"),
    EmailIcon: () => import("~/assets/svgs/envelope.svg"),
    TwitterIcon: () => import("~/assets/svgs/twitter.svg"),
    GithubIcon: () => import("~/assets/svgs/github.svg"),
    InfoIcon: () => import("~/assets/svgs/info.svg"),
    HeartIcon: () => import("~/assets/svgs/heart.svg"),
  },
  data: () => ({
    icons: [
      {
        icon: "fab fa-twitter",
        link: "https://twitter.com/cryocommunity?s=21",
      },
    ],
    footerMenu: {
      sitemap: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        // { title: "Team", path: "/team" },
        { title: "STEM Census", path: "/census" },
        { title: "Projects", path: "/projects" },
        { title: "Resources", path: "/resources" },
        { title: "Contact", path: "/contact" },
      ],
      featured: [
        { title: "career stage", path: "/career" },
        { title: "undergraduates", path: "/career#undergrad" },
        { title: "graduate students", path: "/career#grad" },
        { title: "early career", path: "/career#ecr" },
        { title: "pi's", path: "/career#pi" },
      ],
      // other: [
      // { title: "Geo Grad App", path: "http://geogradapp.com" },
      // { title: "CryoSciListen", path: "https://cryoscilisten.weebly.com" },
      // { title: "Best Practices", path: "https://"+window.location.hostname+"/projects" },
      // { title: "URGE", path: "https://urgeoscience.org/" },
      // ],
    },
  }),
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>
