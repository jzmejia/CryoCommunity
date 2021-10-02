<template>
  <Layout>
    <v-responsive class="mb-8">
      <v-row justify="center">
        <v-col cols="12" lg="6">
          <v-card
            :style="{
              backdropFilter: 'blur(1px)',
            }"
            flat
            rounded="lg"
            color="transparent"
          >
            <v-card-title
              class="text-lg-h3 text-h4 font-weight-black text-break"
            >
              {{ $page.article.title }}
            </v-card-title>
            <v-card-subtitle class="text-capitalize text-h6 pb-0">
              {{ $page.article.subtitle }}
            </v-card-subtitle>
            <v-card-subtitle class="py-0">
              <v-chip-group column>
                <template v-for="(tag, index) in $page.article.tags">
                  <v-tooltip
                    transition="slide-y-reverse-transition"
                    bottom
                    :key="index"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-chip :color="dark ?'grey darken-4':'grey lighten-4'" small v-bind="attrs" v-on="on" :to="tag.path"
                        ><v-icon x-small left>fa-hashtag</v-icon
                        >{{ tag.title }}</v-chip
                      >
                    </template>
                    <span>View more on {{ tag.title }}</span>
                  </v-tooltip>
                </template>
              </v-chip-group>
              {{ $page.article.author }}
              <br />
              {{ $page.article.date }}
              · {{ $page.article.timeToRead }} min read
            </v-card-subtitle>
          </v-card>
        </v-col>

        <!-- <v-col cols="12" lg="8"> -->
        <g-image :src="$page.article.preview_image"></g-image>
        <!-- <v-img
            :lazy-src="$page.article.preview_image.src"
            :height="smAndDown ? 300 : 450"
            position="center"
            :srcset="`${$page.article.preview_image.srcset}`"
            :src="$page.article.preview_image.src"
          > -->
        <!-- <v-card
              class="ma-3"
              :style="{
                backdropFilter: 'blur(1px)',
              }"
              flat
              rounded="lg"
              :color="dark ? '#222222d0' : '#ffffffd0'"
            >
              <v-card-title class="text-lg-h4 font-weight-bold text-break">
                {{ $page.article.title }}
              </v-card-title>
              <v-card-subtitle
                class="text-capitalize text-lg-subtitle-1 text-subtitle-2 font-weight-thin"
              >
                {{ $page.article.subtitle }}
              </v-card-subtitle>
            </v-card> -->
        <!-- </v-img> -->
        <!-- </v-col> -->

        <v-col cols="12" lg="6" class="pt-0">
          <!-- <v-card flat tile> -->
          <!-- <v-card-subtitle class="text--primary">
              {{ $page.article.author }}

              <div class="grey--text text--lighten-1">
                {{ $page.article.date }}
                · {{ $page.article.timeToRead }} min read
              </div> -->

          <!-- <v-chip-group column active-class="primary--text">
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
                        ><v-icon left>fa-hashtag</v-icon>{{ tag.title }}</v-chip
                      >
                    </template>
                    <span class="pa-0 caption"
                      >View more on {{ tag.title }}</span
                    >
                  </v-tooltip>
                </template>
              </v-chip-group> -->
          <!-- </v-card-subtitle> -->
          <!-- <v-divider class="mb-4" /> -->
          <!-- <ArticleContent :content="$page.article.content" /> -->
          <v-card-text>
            <div
              class="text--primary article-text"
              v-html="$page.article.content"
            ></div>
          </v-card-text>
          <!-- </v-card> -->
        </v-col>
      </v-row>
    </v-responsive>
    <v-divider inset class="my-12" />
    <v-container class="my-12" v-if="resource">
      <h1 class="text--secondary">More Resources</h1>
      <ResourceCard :resource="resource"></ResourceCard>
    </v-container>

    <v-container class="my-12" v-if="docs">
      <h1 class="text--secondary">
        <span v-if="resource">Event</span> More Resources
      </h1>
      <ResourceCard :resource="docs"></ResourceCard>
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
    documents {name, url, description}
    published
    preview_image (width: 1100,height:550,quality:100 )
    resource
    tags {
      title
      path
    }
    alt
  }
  resources: allResource {
    edges {
      node {
        data {
          tab
          items {
            resources {
              name
              url
              description
              twitter
              tags
            }
            title
          }
        }
      }
    }
  }
}
</page-query>

<script>
import ResourceCard from "@/components/ResourceCard";
export default {
  components: {
    ResourceCard,
  },
  metaInfo: {
    title: "Article" ,
  },
  computed: {
    resources() {
      return this.$page.resources.edges[0].node.data;
    },
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
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
    resource() {
      return this.resources.find(
        (item) => item.tab === this.$page.article.resource
      );
    },
  },
};
</script>

<style scoped>
.article-text {
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  box-sizing: inherit;
  line-height: 32px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>

<style lang="scss" scoped>
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}
.post {
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    p:first-of-type {
      font-size: 1.2em;
      color: var(--title-color);
    }
    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}
.post-comments {
  padding: calc(var(--space) / 2);
  &:empty {
    display: none;
  }
}
.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
