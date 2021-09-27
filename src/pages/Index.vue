<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row class="grey lighten-5 py-16 my-4" justify="center" align="center">
            <v-col cols="6">
              <v-img
                src="/Cryo_Community_Logo_no_color.png"
                contain
                max-height="150"
              ></v-img>
            </v-col>
            <v-col cols="12" lg="6" class="align-self-start">
              <!-- The purpose of CryoCommunity is to build and foster a more just,
              equitable, diverse, and inclusive community and culture within the
              cryospheric sciences. -->
              CryoCommunity is the product of the MARS pod's (Midwest And Random
              Stragglers glaciology) participation in URGEGeosciences in Spring
              2021. Members of our URGE pod represent many different
              institutions and we seek to involve the broader cryospheric
              community in positive change. We started this website to generate,
              collate, and distribute best practices across a suite of academic
              processes and institution types.
              <g-link text to="/about">read more</g-link>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" lg="6" md="6">
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
// import Hero from "@/components/Hero";
export default {
  components:{
    // Hero
  }
};
</script>

