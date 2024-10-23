<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col
          cols="12"
          lg="9"
          class="d-flex justify-space-between align-center"
        >
          <div class="text-h3 font-weight-bold">Projects</div>
          <Pagination />
        </v-col>
        <v-col cols="12" lg="9">
          <ProjectList :projects="$page.projects" />
          <Pagination class="my-2 d-flex justify-end" />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query AllArticle ($page: Int) {
    projects: allArticle ( perPage: 4, page: $page, filter: { published: { eq: true }}) @paginate {
      totalCount
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
          author
          published
          preview_image
          date (format: "MMMM DD, YYYY")
          excerpt
          timeToRead
          tags {
            title
            path
          }
        }
      }
    }
}
</page-query>

<script>
export default {
  name: "Projects",
  metaInfo: {
    title: "Projects",
  },
  components: {
    Pagination: () => import("@/components/Pagination"),
    ProjectList: () => import("@/components/ProjectList"),
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>
