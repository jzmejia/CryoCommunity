<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="9" class="d-flex justify-space-between align-center">
          <div class="text-h3 font-weight-bold text-break">
            {{ $page.tag.title }}
          </div>
          <Pagination />
        </v-col>
        <v-col cols="12" lg="9">
          <ProjectList :projects="$page.tag.projects" />
          <Pagination class="my-2 d-flex justify-end" />
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query ($id: ID!,$page: Int) {
  tag(id: $id) {
    title
    path
    projects: belongsTo( perPage: 4, page: $page ) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ... on Article {
            id
            path
            title
            subtitle
            author
            tags {
              title
              path
            }
            published
            preview_image
            date (format: "MMMM DD, YYYY")
            excerpt
          }
        }
      }
    }
  }
}
</page-query>

<script>
// import ProjectList from "~/components/ProjectList";

export default {
  name: "Tags",
  components: {
    Pagination: () => import("~/components/Pagination"),
    ProjectList: () => import("~/components/ProjectList"),
  },
};
</script>

<style>
.v-card--link:before {
  background: none;
}
</style>