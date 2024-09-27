<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-h3 font-weight-bold">Resources</div>

          <p class="text-capitalize text-subtitle-1">
            Developed by the MARS Glaciology URGE Pod and adapted from the
            "Sample Phd Mentoring Plan" developed by Dr. Vashan Wright (WHOI)
            and Dr. Karin Block (CUNY)
            <g-link to="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >CC BY-NC-SA 4.0</g-link
            >.
          </p>
          <p>
            This resource map is designed to provide general information and
            resources outside of any one University or Institution. In addition
            to providing links to existing resources and programs, we also
            provide descriptions of where you can generally look for resources
            at your home institution as well as providing example resources
            (e.g. mentoring contract, field supply lists).
          </p>
          <p class="font-italic">
            This page is a work in progress, check out this
            <g-link :to="resourceGoogleDocument">pdf</g-link>
            for more resources or feel free to
            <g-link to="/contact/">contact us</g-link> to suggest more resoures
            we can add.
          </p>
          <Search />
        </v-col>
      </v-row>

      <ResourceCard />
    </v-container>
  </Layout>
</template>
          <!-- <v-btn text class="white primary--text rounded-lg" absolute right top x-small light
                  href="https://twitter.com/CodyTBarnett">illustrated by Cody Barnett</v-btn> -->

<page-query>
query{
  resources: allResource{
    edges{
      node{
        data{
          tab
          image
          slug
          items {
            title
            resources{
              name
              url
              description
              tags
              twitter
            }
          }
        }
      }
    }
  }
}
</page-query>


<script>
// import ResourceCard from "~/components/ResourceCard.vue";
export default {
  metaInfo: {
    title: "Resources",
  },
  components: {
    ResourceCard: () => import("~/components/ResourceCard"),
    Search: () => import("~/components/Search"),
  },
  data() {
    return {
      resourceGoogleDocument:
        "https://docs.google.com/document/d/1kesGrmHSOH-esxfD-lIRAkckS_QfcLaWq40p8_HdJZw/edit?usp=sharing",
    };
  },
  computed: {
    // results() {
    //   return this.$page.resources.edges.map(({ node: { data } }) => data)[0];
    // },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>
