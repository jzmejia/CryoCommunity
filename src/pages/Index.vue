<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12" class="my-16">
          <v-row justify="space-around" align="center">
            <v-col cols="auto">
              <v-img
                :src="
                  dark
                    ? '/cryocommunity_logo_dark.png'
                    : '/cryocommunity_logo_light.png'
                "
                width="225"
                contain
              />
            </v-col>
            <v-col cols="12" lg="6">
              <v-card-text class="text--primary">
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
          <v-hover v-slot="{ hover }">
            <v-responsive
              flat
              class="transition-swing fill-height rounded-lg"
              :style="{ cursor: 'pointer' }"
              :class="{
                'grey lighten-5': !dark,
                'grey darken-4': dark,
                'elevation-6': hover,
                'elevation-1': !hover,
              }"
            >
              <g-link
                class="text-decoration-none text--primary"
                :to="item.node.path"
              >
                <v-img
                  :lazy-src="item.node.preview_image.src"
                  :src="item.node.preview_image.src"
                  height="250"
                  class="rounded-t-lg"
                  transition="fade-transition"
                >
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        indeterminate
                        color="primary"
                        size="45"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                  <v-card
                    style="position: absolute; bottom: 0; left:0; right:0;"
                    :style="{
                      backdropFilter: hover ? '' : 'blur(2px) !important',
                    }"
                    flat
                    rounded="0"
                    class="d-flex flex-column justify-end ma-2 rounded-lg"
                    :color="dark ? '#272727d0' : '#ffffffd0'"
                  >
                    <v-card-title
                      class="text--primary text-break font-weight-bold"
                    >
                      {{ item.node.title }}
                    </v-card-title>
                    <v-card-subtitle class="text-capitalize text-body-2">{{
                      item.node.subtitle
                    }}</v-card-subtitle>
                  </v-card>
                </v-img>
              </g-link>
              <v-card-text class="py-0">
                <v-chip-group column active-class="primary--text">
                  <v-tooltip
                    v-for="(tag, index) in item.node.tags"
                    transition="fade-transition"
                    content-class="rounded-0"
                    bottom
                    color="black"
                    :key="index"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-chip
                        :color="dark ? 'grey darken-4' : 'grey lighten-4'"
                        small
                        v-bind="attrs"
                        v-on="on"
                        :to="tag.path"
                        ><v-icon x-small left>fa-hashtag</v-icon
                        >{{ tag.title }}</v-chip
                      >
                    </template>
                    <span>View more on {{ tag.title }}</span>
                  </v-tooltip>
                </v-chip-group>
              </v-card-text>
              <g-link
                class="text-decoration-none  text--primary"
                :to="item.node.path"
              >
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle class="text-wrap">{{
                      item.node.author
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-list-item-action-text>{{ item.node.date }}</v-list-item-action-text>
                  </v-list-item-action>
                </v-list-item>
                <v-card-text v-text="item.node.excerpt"> </v-card-text>
              </g-link>
            </v-responsive>
          </v-hover>
          <!-- <g-link
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
          </g-link> -->
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
          title
          subtitle
          author
          published
          preview_image (width: 700, height: 250, quality: 100)
          date (format: "DD.MM.YY")
          excerpt
          timeToRead
          tags {
            title
            path
          }
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
