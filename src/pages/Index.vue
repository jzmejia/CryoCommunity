<template>
  <Layout>
    <v-container>
    <v-row>
      <v-col cols="5" class="mb-16 d-flex align-center">
        <v-img src="/Cryo_Community_Logo_no_color.png" contain max-height="150"></v-img>
      </v-col >
      <v-col cols="6" class="mb-16 d-flex align-center text-subtitle">





        The purpose of CryoCommunity is to build and foster a more just, 
          equitable, diverse, and inclusive community and culture within the cryospheric sciences.
      </v-col>



      <v-col cols="12" md="6">
    <v-card
      class="mx-sm-auto"
      v-for="item in $page.articles.edges"
      :key="item.node.id"
      :href="item.node.path"
      
    >
      <v-img height="500px" :src="item.node.preview_image"> </v-img>

      <v-card-title class="primary--text">
          {{ item.node.title }}
        </v-card-title>
        <v-card-subtitle class="black--text">
        {{ item.node.author }}
        </v-card-subtitle>
        <v-card-text class="black--text">
        <span class="px-xs-5"
          >Date: {{ item.node.date }} | Time: {{ item.node.timeToRead }} min to
          read</span
        >
      </v-card-text>
      <v-card-actions>
        <v-btn text color="orange" :href="item.node.path">Read More</v-btn>
      </v-card-actions>
    </v-card>
      </v-col>
    <Twitter/>
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
import Twitter from "~/components/Twitter"
export default {
  components:{
    Twitter
  }
}
</script>

<style></style>
