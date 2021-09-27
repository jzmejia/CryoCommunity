<template>
  <Layout>
    <h1 class="text-center d-flex justify-center align-center">
      <v-icon left large color="deep-orange accent-3">fa-hashtag</v-icon
      >{{ $page.tag.title }}
    </h1>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="4"
          v-for="item in $page.tag.belongsTo.edges"
          :key="item.node.id"
          class="d-flex child-flex"
        >
          <v-hover v-slot="{ hover }">
            <v-responsive
              :class="hover ? 'elevation-4' : 'elevation-2'"
              class="transition-fast-in-fast-out rounded-lg"
              style="cursor: pointer;"
            >
              <g-link
                class="text-decoration-none text--primary"
                :to="item.node.path"
              >
                <v-img
                  :src="item.node.preview_image"
                  :lazy-src="item.node.preview_image.src"
                  :srcset="`${item.node.preview_image.src}`"
                  :aspect-ratio="16 / 9"
                  class="grey lighten-5"
                  rounded="lg"
                  eager
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
                    class="ma-2"
                    flat
                    tile
                    style="position: absolute; bottom: 0; left:0; right:0;"
                    :style="{
                      backdropFilter: 'blur(2px)',
                    }"
                    color="#ffffffd0"
                  >
                    <v-card-title
                      class="font-weight-thin primary--text text-break"
                    >
                      {{ item.node.title }}
                    </v-card-title>
                    <v-card-subtitle class="text-capitalize">{{
                      item.node.subtitle
                    }}</v-card-subtitle>
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
              <v-card-subtitle class="text-subtitle-1 py-0">
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
                        class="mr-1"
                        color="deep-orange accent-3"
                        small
                        dark
                        label
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
              </v-card-subtitle>

              <g-link
                class="text-decoration-none  text--primary"
                :to="item.node.path"
              >
                <v-card-text v-text="item.node.excerpt"></v-card-text>
              </g-link>
              <!-- <v-btn text x-small absolute bottom right :to="item.node.path" color="primary">read more</v-btn> -->
            </v-responsive>
          </v-hover>
        </v-col>
        <!-- <v-col cols="12">
          <Pager
            exact
            tag="li"
            linkClass="v-pagination__item text--primary secondary elevation-1 v-btn--outlined v-btn mx-1"
            :info="$page.articles.pageInfo"
          />
        </v-col> -->
      </v-row>
    </v-container>
    <!-- <v-container>
      <v-row>
        <v-col
          cols="12"
          lg="4"
          v-for="item in $page.tag.belongsTo.edges"
          :key="item.node.id"
        >
          <v-responsive
            class="ma-2 rounded-lg"
            max-width="360"
            max-height="650"
            :to="item.node.path"
            :href="item.node.path"
          >
            <v-img
              class="rounded-top-lg"
              max-height="250px"
              min-height="250px"
              :src="item.node.preview_image"
            >
              <v-card
                class="ma-2"
                flat
                width="95%"
                rounded="lg"
                style="position:absolute; bottom: 0; left:0;"
                :style="{
                  backdropFilter: 'blur(2px) !important',
                }"
                color="#ffffffd0"
              >
                <v-card-title class="primary--text text-wrap">
                  {{ item.node.title }}
                </v-card-title>
                <v-card-subtitle class="text-capitalize">{{
                  item.node.subtitle
                }}</v-card-subtitle>
              </v-card>
            </v-img>

            <v-list-item dense>
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
            <v-divider class="grey lighten-4" />
            <v-card-text v-text="item.node.excerpt"> </v-card-text>
          </v-responsive>
        </v-col>
      </v-row>
    </v-container> -->
  </Layout>
</template>

<page-query>
query ($id: ID!) {
  tag(id: $id) {
    title
    belongsTo {
      edges {
        node {
          ... on Article {
            id
            path
            title
            subtitle
            author
            tags {
                title
                path
            }
            published
            preview_image (quality: 90)
            date (format: "DD.MM.YY")
            excerpt
          }
        }
      }
    }
  }
}
</page-query>
