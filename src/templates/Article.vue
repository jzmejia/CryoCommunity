<template>
  <Layout>
    <v-responsive>
      <v-row justify="center">
        <v-col cols="12" lg="7">
          <v-img
            height="375"
            :srcset="`${$page.article.preview_image.srcset}`"
            :src="$page.article.preview_image.src"
            class="d-flex align-end"
          >
            <v-card
              class="ma-3"
              tile
              :style="{
                backdropFilter: 'blur(1px)',
                backgroundColor: '#ffffffd0',
              }"
            >
              <v-card-title class="text-lg-h4 font-weight-bold text-break">
                {{ $page.article.title }}
              </v-card-title>
              <v-card-subtitle
                class="text-capitalize text-lg-subtitle-1 text-subtitle-2 font-weight-thin"
              >
                {{ $page.article.subtitle }}
              </v-card-subtitle>
            </v-card>
          </v-img>
        </v-col>
      </v-row>

      <v-container>
        <v-row justify="center">
          <v-col cols="12" lg="8">
            <v-card flat tile>
              <v-card-subtitle class="px-0 text--primary">
                {{ $page.article.author }}

                <div class="grey--text text--lighten-1">
                  {{ $page.article.date }}
                  · {{ $page.article.timeToRead }} min read
                </div>
                <v-chip-group column active-class="primary--text">
                  <template v-for="(tag, index) in $page.article.tags">
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
                          ><v-icon left>fa-hashtag</v-icon
                          >{{ tag.title }}</v-chip
                        >
                      </template>
                      <span class="pa-0 caption"
                        >View more on {{ tag.title }}</span
                      >
                    </v-tooltip>
                  </template>
                </v-chip-group>
              </v-card-subtitle>
              <v-divider class="mb-4" />
              <!-- <ArticleContent :content="$page.article.content" /> -->
              <p v-html="$page.article.content"></p>
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
    <!-- </v-responsive> -->
    <!-- <v-container> -->
    <!-- <resource :resource="docs"></resource> -->
    <!-- <resource v-if="resourceTabs" :resource="resourceTabs"></resource> -->
    <!-- </v-container> -->
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
    documents {name, url, description}
    published
    preview_image ( quality:100)
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
// import ArticleContent from "@/components/ArticleContent";
import Resource from "~/components/ResourceCard";
import resources from "~/data/resources.yml";

export default {
  components: {
    // ArticleContent,
    Resource,
  },
  data() {
    return {
      resources,
    };
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.mobile;
    },
    docs() {
      return this.$page.article.documents;
    },
    resourceTabs() {
      return this.resources[this.$page.article.resource];
    },
    fieldwork() {
      return this.resources.fieldwork;
    },
  },
};
</script>

<style scoped>
/* .article-text {
  color: #0a0a23;
  color: var(--gray90);
  font-family: Lato, sans-serif;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 1.6em;
} */
</style>
