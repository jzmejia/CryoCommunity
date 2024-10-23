<template>
  <div>
    <!--       @input="(e) => $router.push(`${baseUrl}${e === 1 ? '':e }`)"
 -->
    <v-pagination
      :hidden="pagination.total === 1"
      v-model="pagination.page"
      :length="pagination.total"
      @input="nextPage"
      :total-visible="$vuetify.breakpoint.mobile ? 0 : 3"
    >
    </v-pagination>

    <!-- <v-btn-toggle active-class="primary--text" dense class="my-4">
      <v-btn
        exact
        plain
        v-if="!isFirstPage(currentPage, totalPages)"
        :disabled="currentPage === 1"
        :to="previousPage(currentPage, totalPages)"
      >
        <v-icon>fa-caret-left</v-icon>
      </v-btn>
      <v-btn
        exact
        plain
        v-for="page in pages"
        :key="page.name"
        :disabled="page.isDisabled"
        :to="page.link"
      >
        {{ page.name }}
      </v-btn>
      <v-btn
        exact
        plain
        v-if="!isLastPage(currentPage, totalPages)"
        :disabled="currentPage === totalPages"
        :to="nextPage(currentPage, totalPages)"
      >
        <v-icon>fa-caret-right</v-icon>
      </v-btn>
    </v-btn-toggle> -->
  </div>
</template>
  
<script>
export default {
  name: "Pagination",
  computed: {
    maxVisibleButtons() {
      return this.$vuetify.breakpoint.smAndDown ? 1 : 1;
    },
    projects() {
      return this.$page.projects || this.$page.tag.projects;
    },
    currentPage() {
      return this.projects.pageInfo.currentPage;
    },
    totalPages() {
      return this.projects.pageInfo.totalPages;
    },
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }
      if (this.currentPage === this.totalPages) {
        return this.currentPage - 1;
      }
      return this.currentPage - 1;
    },
    pages() {
      const range = [];
      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          link: i === 1 ? `${this.baseUrl}` : `${this.baseUrl}${i}`,
        });
      }
      return range;
    },
    baseUrl() {
      const {
        path,
        params: { page },
      } = this.$route;
      const normalizedPath = path.replace(/\/+$/g, "");
      const suffix = /\/$/.test(path) ? "/" : "";
      const currentPagePath =
        page && /^\d+$/.test(page) && /\/\d+$/.test(normalizedPath)
          ? `${normalizedPath.split("/").slice(0, -1).join("/")}${suffix}` ||
            "/"
          : `${normalizedPath}${suffix}` || "/";
      const unslashEnd = currentPagePath.replace(/\/+$/g, "");

      return page > 1 ? unslashEnd + `/` : currentPagePath;
    },
    pagination() {
      return {
        page: this.currentPage,
        total: this.totalPages,
        perPage: 0,
        visible: this.maxVisibleButtons,
      };
    },
  },
  methods: {
    isFirstPage(currentPage, totalPages) {
      return currentPage == 1;
    },
    isLastPage(currentPage, totalPages) {
      return currentPage == totalPages;
    },
    isCurrentPage(currentPage, pageElement) {
      return currentPage == pageElement;
    },
    nextPage(page) {
      if (page > 1) {
        this.$router.push(`${this.baseUrl}${page}`);
      } else {
        this.$router.push(this.baseUrl);
      }
    },
    // nextPage() {
    //   return `${this.baseUrl}${this.currentPage + 1}`;
    // },
    previousPage(currentPage, totalPages) {
      return currentPage === 2
        ? `${this.baseUrl}`
        : `${this.baseUrl}${this.currentPage - 1}`;
    },
  },
};
</script>


<style>
.v-pagination__item {
  box-shadow: none !important;
}
.v-pagination__navigation {
  box-shadow: none !important;
}
</style>