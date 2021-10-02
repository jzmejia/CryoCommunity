<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div
            class="text-h2 primary--text font-weight-black"
            :class="{ 'text-center': smAndDown }"
          >
            Resources
          </div>
        </v-col>
        <v-col cols="12">
          <h3>Glaciology Resource Map</h3>
          <p class="subtitle-2">
            Developed by the MARS Glaciology URGE Pod and adapted from the
            "Sample Phd Mentoring Plan" developed by Dr. Vashan Wright (WHOI)
            and Dr. Karin Block (CUNY)
            <g-link href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >CC BY-NC-SA 4.0</g-link
            >.
          </p>
        </v-col>
        <v-col cols="12">
          <p>
            This resource map is designed to provide general information and
            resources outside of any one University or Institution. In addition
            to providing links to existing resources and programs, we also
            provide descriptions of where you can generally look for resources
            at your home institution as well as providing example resources
            (e.g. mentoring contract, field supply lists).
          </p>
          <Search />
        </v-col>
        <v-col cols="12" id="teaching">
          <v-card-title class="text-h4">Teaching</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <resource :resource="teaching"></resource>
            </v-col>
            <v-col
              cols="12"
              md="6"
              :order="$vuetify.breakpoint.mobile ? 'first' : ''"
            >
              <v-img
                class="rounded-lg"
                src="/illustrated_fig_barnett.png"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
              >
                <v-btn
                  text
                  class="white primary--text rounded-lg"
                  absolute
                  right
                  top
                  x-small
                  light
                  href="https://twitter.com/CodyTBarnett"
                  >illustrated by Cody Barnett</v-btn
                >
              </v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" id="fieldwork">
          <v-card-title class="text-h4">Fieldwork</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <v-img
                class="rounded-lg"
                src="\ropeteam.jpg"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <resource :resource="fieldwork"></resource>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" id="community">
          <v-card-title class="text-h4">Community</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <resource :resource="community"></resource
            ></v-col>
            <v-col
              cols="12"
              md="6"
              :order="$vuetify.breakpoint.mobile ? 'first' : ''"
            >
              <v-img
                class="rounded-lg"
                src="/networking-01.png"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
                contain
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
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
export default {
  components: {
    Resource: () => import("@/components/ResourceCard"),
    Search: () => import("@/components/Search"),
  },
  data() {
    return {
      tab: "",
    };
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    resources() {
      return this.$page.resources.edges[0].node.data;
    },
    teaching() {
      return this.resources.find((item) => item.tab === "teaching");
    },
    fieldwork() {
      return this.resources.find((item) => item.tab === "fieldwork");
    },
    community() {
      return this.resources.find((item) => item.tab === "community");
    },
  },
};
</script>
