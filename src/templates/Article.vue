<template>
  <Layout>
    <v-container>
      <div class="d-flex">
        <v-card class="ma-sm-5 xs-sm-6">
          <v-img 
            height="500px" 
            :src="$page.article.preview_image"
            :alt="$page.article.alt"
            > </v-img>
          <v-card-text>
            <h2>
              {{ $page.article.title }}
            </h2>
            <h5 class="mt-n2 px-1">{{ $page.article.subtitle }}</h5>
            <span class="px-xs-5 mx-1">{{ $page.article.author }}</span
            ><br />
            <span class="px-xs-5 mx-1"
              >{{ $page.article.date }}</span>
              |
            <span class="px-xs-5 mx-1 text-right">
             {{ $page.article.timeToRead }} min to read</span
            >
            <div class="pa-xs-5 body-1">
              <ArticleContent :content="$page.article.content" />
            </div>
          </v-card-text>
          <v-card-actions>
            <v-btn
              v-for="(item, index) in $page.article.documents"
              :key="index"
              flat
              text
              color="accent"
              :href="item.url"
            >
              {{ item.name }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </div>
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
    documents {name, url}
    excerpt
    published
    preview_image
    alt
  }
}
</page-query>

<script>
import ArticleContent from "@/components/ArticleContent";

export default {
  components: {
    ArticleContent,
  },
};
</script>

<style scoped></style>
