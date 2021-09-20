<template>
  <Layout>
    <v-container :class="{ 'px-0': $vuetify.breakpoint.mobile }">
      <v-card :flat="$vuetify.breakpoint.mobile" tile>
        <v-img
          height="450px"
          position="left"
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
        <v-card-actions class="pa-0">
          <v-tabs show-arrows color="accent" grow>
            <v-tab
              v-for="(item, index) in $page.article.documents"
              :key="index"
              :href="item.url"
            >
              {{ item.name }}
            </v-tab>
          </v-tabs>
        </v-card-actions>
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
