<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div
            class="text-h3 text-md-h2 font-weight-black mt-lg-12 mb-md-4"
            
          >
            Resources
          </div>
          <div class="subtitle-2 font-weight-bold mb-6">
            Developed by the MARS Glaciology URGE Pod and adapted from the
            "Sample Phd Mentoring Plan" developed by Dr. Vashan Wright (WHOI)
            and Dr. Karin Block (CUNY)
            <g-link href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >CC BY-NC-SA 4.0</g-link
            >.
          </div>
          <p>
            This resource map is designed to provide general information and
            resources outside of any one University or Institution. In addition
            to providing links to existing resources and programs, we also
            provide descriptions of where you can generally look for resources
            at your home institution as well as providing example resources
            (e.g. mentoring contract, field supply lists).
          </p>
          <p>
            This page is a work in progress, check out this
            <a
              href="https://docs.google.com/document/d/1kesGrmHSOH-esxfD-lIRAkckS_QfcLaWq40p8_HdJZw/edit?usp=sharing"
              >pdf</a
            >
            for more resources or feel free to contact us to suggest more
            resoures we can add.
          </p>
          <Search />
        </v-col>
        <v-col cols="12" id="teaching">
          <v-card-title class="text-h5 text-md-h4">Teaching</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <ResourceCard :resource="teaching" />
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
          <v-card-title class="text-h5 text-md-h4">Fieldwork</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <v-img
                class="rounded-lg"
                src="\ropeteam.jpg"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <ResourceCard :resource="fieldwork" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" id="community">
          <v-card-title class="text-h5 text-md-h4">Community</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <ResourceCard :resource="community"
            /></v-col>
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
        <v-col cols="12" id="placeNames">
          <v-card-title class="text-h5 text-md-h4">Glacier Names</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <v-img
                class="rounded-lg"
                src="https://i.ibb.co/LZn5vHG/Airdevronsix-Icefalls.jpg"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <ResourceCard :resource="placeNames" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" id="apps">
          <v-card-title class="text-h5 text-md-h4 text-wrap">Applications and Hiring</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <ResourceCard :resource="applications" />
            </v-col>
            <v-col
              cols="12"
              md="6"
              :order="$vuetify.breakpoint.mobile ? 'first' : ''"
            >
              <v-img
                class="rounded-lg"
                src="/newjob.png"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" id="funding">
          <v-card-title class="text-h5 text-md-h4 text-wrap">Funding Opportunities</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <v-img
                class="rounded-lg"
                src="/funding.png"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <ResourceCard :resource="funding" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" id="fieldworkOpps">
          <v-card-title class="text-h5 text-md-h4 text-wrap">Fieldwork Opportunities</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <ResourceCard :resource="fieldworkOpp" />
            </v-col>
            <v-col
              cols="12"
              md="6"
              :order="$vuetify.breakpoint.mobile ? 'first' : ''"
            >
              <v-img
                class="rounded-lg"
                src="https://images.squarespace-cdn.com/content/v1/506e663fe4b04973cff68e47/1544217516954-59Z3YU9FTHSDZLZ4VU63/DSC02468+take2crop-crop2-BillyArmstrong.jpg?format=2500w"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
              ></v-img>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" id="professionalDev">
          <v-card-title class="text-h5 text-md-h4 text-wrap">Professional Development</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <v-img
                class="rounded-lg"
                src="/recording.png"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
              ></v-img>
            </v-col>
            <v-col cols="12" md="6">
              <ResourceCard :resource="professionalDev" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" id="coreWork">
          <v-card-title class="text-h5 text-md-h4 text-wrap">Core Work Resources</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <ResourceCard :resource="coreWork" />
            </v-col>
            <v-col
              cols="12"
              md="6"
              :order="$vuetify.breakpoint.mobile ? 'first' : ''"
            >
              <v-img
                class="rounded-lg"
                src="/reading.png"
                :height="$vuetify.breakpoint.smAndDown ? 275 : 450"
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
import ResourceCard from "@/components/ResourceCard";
import Search from "@/components/Search";
export default {
  components: {
    ResourceCard,
    Search,
  },
  data() {
    return {
      tab: "",
    };
  },
  metaInfo: {
    title: "Resources",
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
    placeNames() {
      return this.resources.find((item) => item.tab === "placeNames");
    },
    professionalDev() {
      return this.resources.find((item) => item.tab === "professionalDev");
    },
    coreWork() {
      return this.resources.find((item) => item.tab === "coreWorkResources");
    },
    applications() {
      return this.resources.find((item) => item.tab === "applications");
    },
    funding() {
      return this.resources.find((item) => item.tab === "funding");
    },
    fieldworkOpp() {
      return this.resources.find(
        (item) => item.tab === "fieldworkOpportunities"
      );
    },
  },
};
</script>
