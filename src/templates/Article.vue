<template>
  <Layout>
    <v-container :class="{ 'px-0': $vuetify.breakpoint.mobile }">
      <v-card :flat="$vuetify.breakpoint.mobile" tile>
        <v-img
          height="450"
          :src="$page.article.preview_image"
          :alt="$page.article.alt"
        >
        </v-img>
        <v-card-title class="text-lg-h4">
          {{ $page.article.title }}
        </v-card-title>
        <v-card-subtitle>
          <div class="text-lg-h6">{{ $page.article.subtitle }}</div>
          <span class="text-caption grey--text">
            {{ $page.article.author }}
            <v-spacer /><span class="grey--text">
              {{ $page.article.timeToRead }} min read</span
            >

            <br />
            {{ $page.article.date }}
            <br />
          </span>
        </v-card-subtitle>
        <v-divider class="grey lighten-3" />
        <v-card-text>
          <ArticleContent :content="$page.article.content" />
        </v-card-text>
        <v-row class="mb-8">
          <v-col
            v-if="docs.length" 
            cols="12"
            md="6"
            class="ml-4"
          >
            <resource :resource="docs" ></resource>
          </v-col>
          <v-col
            cols="12"
            md="6"
            class="ml-4"
          >
            <resource :resource="resources[$page.article.resource]"></resource> 
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    path
    title
    subtitle
    author
    date (format: "DD.MM.YY")
    timeToRead
    content
    tags
    documents { guides {name, url, description}}
    excerpt
    published
    preview_image
    resource
    alt
  }
}
</page-query>

<script>
import ArticleContent from "@/components/ArticleContent";
import Resource from "~/components/ResourceCard";
import resources from "~/data/resources.yml";

export default {
  components: {
    ArticleContent,
    Resource,
  },
  data() {
    return {
      resources
    };
  },
  computed: {
    docs() {
      return this.$page.article.documents.map((item) => item);
    },
    fieldwork() {
      return this.resources.fieldwork;
    },
  },
};
</script>





