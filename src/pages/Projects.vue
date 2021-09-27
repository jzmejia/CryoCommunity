<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-lg-h2 text-h3 secondary--text">Projects</div>
        </v-col>

        <v-col
          cols="12"
          lg="4"
          md="6"
          v-for="item in $page.articles.edges"
          :key="item.node.id"
        >
          <v-card color="grey lighten-4" class="fill-height">
            <g-link
              class="text-decoration-none text--primary"
              :to="item.node.path"
            >
              <v-img
                class="grey lighten-4"
                :srcset="`${item.node.preview_image.srcset}`"
                :src="item.node.preview_image"
                :lazy-src="item.node.preview_image.src"
                height="250"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="white"
                      size="45"
                      width="5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-card
                  class="ma-3"
                  tile
                  style="position: absolute; bottom: 0; left:0; right:0;"
                  :style="{
                    backdropFilter: 'blur(2px)',
                  }"
                  color="#ffffffd0"
                >
                  <v-card-title class="text-break">
                    {{ item.node.title }}
                  </v-card-title>
                  <v-card-subtitle
                    class="text-capitalize text-subtitle-2 font-weight-thin"
                    >{{ item.node.subtitle }}</v-card-subtitle
                  >
                </v-card>
              </v-img>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle class="text-wrap">{{
                    item.node.author
                  }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-list-item-action-text>{{
                    item.node.date
                  }}</v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </g-link>
            <v-card-text class="py-0">
              <v-chip-group column active-class="primary--text">
                <template v-for="(tag, index) in item.node.tags">
                  <v-tooltip
                    transition="fade-transition"
                    content-class="py-1 px-2"
                    bottom
                    color="black"
                    :key="index"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-chip
                        small
                        label
                        dark
                        color="black"
                        class="rounded-0"
                        v-bind="attrs"
                        v-on="on"
                        :to="tag.path"
                        ><v-icon left>fa-hashtag</v-icon>{{ tag.title }}</v-chip
                      >
                    </template>
                    <span class="pa-0 caption"
                      >View more on {{ tag.title }}</span
                    >
                  </v-tooltip>
                </template>
              </v-chip-group>
            </v-card-text>

            <g-link
              class="text-decoration-none  text--primary"
              :to="item.node.path"
            >
              <v-card-text v-text="item.node.excerpt"></v-card-text>
            </g-link>
          </v-card>
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
    </v-container>
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
        preview_image (quality: 100)
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
};
</script>
