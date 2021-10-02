<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12" class="my-16">
          <v-row justify="space-around" align="center">
            <v-col cols="auto">
              <!-- <g-image
                v-if="dark"
                src="~/assets/cryocommunity_logo_dark.png"
                width="225"
                quality="100"
                fit="inside"
              ></g-image> -->
              <!-- <g-image
                src="~/assets/cryocommunity_logo_light.png"
                width="225"
                quality="100"
                fit="inside"
              ></g-image> -->
              <v-img
                :src="dark ? '/cryocommunity_logo_dark.png':'/cryocommunity_logo_light.png'"
                width="225"
                contain
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-card-text class="text--primary">
                {{ $route.name === "home" }}
                <!-- The purpose of CryoCommunity is to build and foster a more just,
              equitable, diverse, and inclusive community and culture within the
              cryospheric sciences. -->
                <b>CryoCommunity</b> is the product of the MARS pod's (Midwest
                And Random Stragglers glaciology) participation in
                URGEGeosciences in Spring 2021. Members of our URGE pod
                represent many different institutions and we seek to involve the
                broader cryospheric community in positive change. We started
                this website to generate, collate, and distribute best practices
                across a suite of academic processes and institution types.
                <v-btn small tile color="primary" text to="/about"
                  >read more</v-btn
                >
              </v-card-text>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          lg="4"
          v-for="item in $page.articles.edges"
          :key="item.node.id"
        >
          <g-link
            class="text-decoration-none text--primary"
            :to="item.node.path"
          >
            <v-responsive
              class="fill-height rounded-lg"
              :class="{
                'grey lighten-5': !dark,
                'grey darken-4': dark,
              }"
            >
              <v-img
                height="200"
                :src="item.node.preview_image.src"
                class="rounded-t-lg"
              >
                <v-btn
                  depressed
                  tile
                  class="rounded-lg"
                  absolute
                  bottom
                  left
                  :style="{
                    backdropFilter: 'blur(2px) !important',
                  }"
                  :color="dark ? '#272727d0' : '#ffffffd0'"
                >
                  {{ item.node.title }}
                </v-btn>
              </v-img>
              <v-card-subtitle>
                {{ item.node.author }}
                <v-spacer />
                <span class="text--disabled"
                  >{{ item.node.date }} · {{ item.node.timeToRead }} min
                  read</span
                >
              </v-card-subtitle>
              <v-card-actions>
                <v-btn text color="orange" :to="item.node.path"
                  >Read More</v-btn
                >
              </v-card-actions>
            </v-responsive>
          </g-link>
        </v-col>
        <v-col cols="12"><v-btn to="/projects">view more</v-btn></v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
  query {
    articles: allArticle (perPage: 3, filter: { published: { eq: true }}) {
      edges {
        node {
          id
          path
          date (format: "MMM D, YYYY")
          preview_image (width: 1100, height: 250, quality: 100)
          title
          published
          author
          timeToRead
          excerpt
        }
      }
    }
  }
</page-query>

<script>
export default {
  name: "Home",
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
  metaInfo: {
    title: "Home",
  },
};
</script>

<style scoped>
.text--primary {
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  box-sizing: inherit;
  line-height: 32px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  display: block;
}
</style>
