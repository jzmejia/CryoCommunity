<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12" lg="10">
          <h2>Glaciology Resource Map</h2>
          <p class="subtitle-2">
            Developed by the MARS Glaciology URGE Pod and adapted from the
            "Sample Phd Mentoring Plan" developed by Dr. Vashan Wright (WOHI)
            and Dr. Karin Block (CUNY)
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              >CC BY-NC-SA 4.0</a
            >.
          </p>
        </v-col>
        <v-col cols="12">
          <p class="body-1">
            This resource map is designed to provide general information and
            resources outside of any one University or Institution. In addition
            to providing links to existing resources and programs, we also
            provide descriptions of where you can generally look for resources
            at your home institution as well as providing example resources
            (e.g. mentoring contract, field supply lists).
          </p>
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
              <v-card flat rounded="lg" class="fill-height d-flex align-center justify-center">
                <v-img
                  contain
                  src="/illustrated_fig_barnett.png"
                  :height="$vuetify.breakpoint.mobile ? 300 : 400"
                >
                </v-img>
                <v-btn
                  text
                  color="primary"
                  absolute
                  tile
                  right
                  top
                  x-small
                  href="https://twitter.com/CodyTBarnett"
                  >illustrated by Cody Barnett</v-btn
                >
              </v-card>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" id="fieldwork">
          <v-card-title class="text-h4">Fieldwork</v-card-title>
          <v-row>
            <v-col cols="12" md="6">
              <v-card flat rounded="lg" class="fill-height">
                <v-img src="\ropeteam.jpg" height="100%"></v-img>
              </v-card>
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
              <v-card tile flat class="fill-height d-flex align-center justify-center">
                <v-img src="/networking-01.png" :height="$vuetify.breakpoint.mobile ? 300 : 400"></v-img
              ></v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import resources from "~/data/resources.yml";
import Resource from "~/components/ResourceCard";

export default {
  components: {
    Resource,
  },
  data() {
    return {
      resources,
      tab: "",
    };
  },
  computed: {
    teaching() {
      return resources.teaching;
    },
    fieldwork() {
      return resources.fieldwork;
    },
    community() {
      return resources.community;
    },
  },
};
</script>