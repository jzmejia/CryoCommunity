<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col>
          <v-row class="grey lighten-5 my-2" align="center">
            <v-col cols="6">
              <v-img
                src="/Cryo_Community_Logo_no_color.png"
                contain
                max-height="150"
              ></v-img>
            </v-col>
            <v-col cols="6">
              The purpose of CryoCommunity is to build and foster a more just,
              equitable, diverse, and inclusive community and culture within the
              cryospheric sciences.
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="5">
          <v-card
            class="mx-sm-auto"
            v-for="item in $page.articles.edges"
            :key="item.node.id"
            :href="item.node.path"
          >
            <v-img height="350px" :src="item.node.preview_image">
              <v-btn
                class="primary--text"
                depressed
                tile
                absolute
                bottom
                left
                :style="{
                  backdropFilter: 'blur(2px) !important',
                  background: '#ffffffd0 !important',
                }"
              >
                {{ item.node.title }}
              </v-btn>
            </v-img>

            <v-card-subtitle>
              {{ item.node.author }}
            </v-card-subtitle>
            <v-card-text>
              <span class="px-xs-5"
                >Date: {{ item.node.date }} | Time:
                {{ item.node.timeToRead }} min to read</span
              >
            </v-card-text>
            <v-card-actions>
              <v-btn text color="orange" :href="item.node.path"
                >Read More</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
        <!-- <Twitter /> -->
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
  query GetArticles {
    articles: allArticle (perPage: 1, filter: { published: { eq: true }}) {
      edges {
        node {
          id
          path
          date (format: "MMMM D, YYYY")
          preview_image (quality: 90)
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
import Twitter from "~/components/Twitter";
export default {
  components: {
    Twitter,
  },
};
</script>

<style></style>
