<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="6">
          <div class="text-lg-h3 text-h4 font-weight-bold">
            {{ $page.article.title }}
          </div>
          <div class="text-capitalize text-h6">
            {{ $page.article.subtitle }}
          </div>
          <div class="primary--text">{{ $page.article.author }}</div>
          <div>
            {{ $page.article.date }} - {{ $page.article.timeToRead }} min read
          </div>
          <div>
            <v-btn v-for="(tag, index) in $page.article.tags" active-class="primary--text" :to="tag.path" :key="index"
              x-small depressed class="mr-1 mb-1">
              <v-icon x-small class="mr-1">mdi-pound</v-icon>
              {{ tag.title }}
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <v-img :aspect-ratio="16 / 9" style="max-height: 450px" :src="$page.article.preview_image" />

    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="6">
          <ArticleContent />
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="resource" class="mb-12 pt-6">
      <v-divider />
      <h1 class="text-center my-5">More Resources</h1>
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <ResourceCard :resource="resource"></ResourceCard>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-if="docs" class="my-12">
      <v-divider />
      <h1 class="text-center my-5">More Resources</h1>
      <ResourceCard :resource="docs"></ResourceCard>
    </v-container>
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article (path: $path) {
    path
    title
    subtitle
    author
    date (format: "MMMM DD, YYYY")
    timeToRead
    content
    documents {name, url, description}
    published
    preview_image (quality: 100)
    resource
    tags {
      title
      path
    }
    alt
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      resource: null
    };
  },
  async mounted() {
    try {
      const results = await this.$fetch("/resources");
      let data = results.data.resources.edges[0].node.data;

      this.resource = data.find(
        ({ tab }) => tab.toLowerCase() === this.$page.article.resource
      );
    } catch (error) {
      console.log(error);
    }
  },
  components: {
    ArticleContent: () => import("~/components/ArticleContent"),
    ResourceCard: () => import("~/components/ResourceCard"),
  },
  metaInfo: {
    title: "Article",
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
    docs() {
      if (this.$page.article.documents.length === 0) return;
      return {
        tab: "fieldwork",
        items: [
          { resources: this.$page.article.documents, title: "Documents" },
        ],
      };
    },
  },
};
</script>
