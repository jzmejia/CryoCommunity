<template>
  <Layout>
    <Hero />
    <v-container>
      <v-row justify="center" class="py-12 mb-8 my-lg-8" :class="{ 'grey lighten-5': !dark }">
        <v-col cols="12" lg="9" align="center">
          <v-avatar class="mx-auto" rounded height="180" width="160">
            <g-image :src="dark
                ? './cryocommunity_logo_dark.avif'
                : './cryocommunity_logo_light.avif'
              " />
          </v-avatar>
          <div class="mx-lg-3 px-lg-8 my-8 text-lg-h6 text-center text-h6">
            <!-- <v-img
              :src="
                dark
                  ? './cryocommunity_logo_dark.avif'
                  : './cryocommunity_logo_light.avif'
              "
              width="200"
            /> -->

            <!-- The purpose of CryoCommunity is to build and foster a more just,
              equitable, diverse, and inclusive community and culture within the
              cryospheric sciences. -->
            <b class="primary--text">CryoCommunity</b> is the product of the
            MARS pod's (Midwest And Random Stragglers glaciology) participation
            in URGEGeosciences in Spring 2021. Members of our URGE pod represent
            many different institutions and we seek to involve the broader
            cryospheric community in positive change. We started this website to
            generate, collate, and distribute best practices across a suite of
            academic processes and institution types.
            <g-link to="/about/">read more</g-link>
          </div>
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="12" lg="9">
          <ProjectList :projects="$page.projects" />
          <v-btn color="primary" :ripple="false" depressed block class="my-4" to="/projects/">view all projects</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>


<script>
import Hero from "@/components/Hero";

export default {
  name: "Home",
  metaInfo: {
    title: "Home",
  },
  components: {
    ProjectList: () => import("@/components/ProjectList"),
    Hero
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>

<page-query>
  query AllArticle ($page: Int) {
      projects: allArticle ( perPage: 2, page: $page, filter: { published: { eq: true }}) @paginate {
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
            date (format: "DD.MM.YY")
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