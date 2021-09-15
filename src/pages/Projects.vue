<template>
  <Layout>
    <v-container>
      <div class="d-flex-row d-block flex-wrap d-sm-inline-flex">
        <v-card
          class="ma-sm-2 my-5 d-flex align-start flex-column"
          max-width="360"
          max-height="650"
          v-for="item in $page.articles.edges"
          :key="item.node.id"
          :href="item.node.path"
        >
          <v-img
            max-height="250px"
            min-height="250px"
            :src="item.node.preview_image"
          >
          </v-img>

          <v-card-title class="primary--text text-justify">
            {{ item.node.title }}
          </v-card-title>
          <v-card-subtitle class="primary--text">
            {{ item.node.subtitle }}
          </v-card-subtitle>
          <v-card-text>
            <!-- <v--{{ item.node.subtitle }}</span> -->
            <v-chip
              class="mr-1 mb-1"
              color="accent"
              link
              x-small
              v-for="(tag, index) in item.node.tags"
              :key="index"
              >#{{ tag }}</v-chip
            >
          </v-card-text>
          <v-card-text class="body-2 text-justify"
            >{{ item.node.excerpt }}
          </v-card-text>
          <v-card-text>
            <span class="caption">{{ item.node.author }}</span>
            <br />
            <span class="caption">{{ item.node.date }}</span>
          </v-card-text>

          <!-- <v-card-actions>
            <v-btn text bottom color="orange" 
              >Read More</v-btn
            >
          </v-card-actions> -->
        </v-card>
      </div>
      <div class="text-center">
        <Pager
          linkClass="v-btn v-btn--contained v-btn--fab v-btn--round v-size--small secondary mx-1"
          :info="$page.articles.pageInfo"
        />
      </div>
    </v-container>
  </Layout>
</template>

<page-query>
query AllArticle ($page: Int) {
	articles: allArticle ( perPage: 3, page: $page, filter: { published: { eq: true }}) @paginate {
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
        tags
        author
        published
        preview_image (quality: 90)
        date (format: "DD.MM.YY")
        excerpt
      }
    }
  }
}
</page-query>

<script>
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
};
</script>
