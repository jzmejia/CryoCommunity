<template>
  <Layout>
    <v-row>
      <v-col cols="12">
        <h1
          class="text-h2 primary--text font-weight-black"
          :class="{ 'text-center': smAndDown }"
        >
          Projects
        </h1>
      </v-col>
      <v-col
        cols="12"
        lg="4"
        md="6"
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
                <v-list-item-action class="">
                  {{ item.node.date }}
                </v-list-item-action>
              </v-list-item>
              <v-card-text v-text="item.node.excerpt"> </v-card-text>
            </g-link>
          </v-responsive>
        </v-hover>
      </v-col>
      <v-col cols="12">
        <Pager
          exact
          tag="li"
          linkClass="v-pagination__item text--primary secondary elevation-1 v-btn--outlined v-btn mx-1"
          :info="$page.articles.pageInfo"
        />
      </v-col>
    </v-row>
  </Layout>
</template>

<page-query>
query AllArticle ($page: Int) {
	articles: allArticle ( perPage: 6, page: $page, filter: { published: { eq: true }}) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import { Pager } from "gridsome";

export default {
  name: "Projects",
  components: {
    Pager,
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>
