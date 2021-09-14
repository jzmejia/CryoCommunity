<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="10">
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
          <p class="body-1 text-justify">
            This resource map is designed to provide general information and
            resources outside of any one University or Institution. In addition
            to providing links to existing resources and programs, we also
            provide descriptions of where you can generally look for resources
            at your home institution as well as providing example resources
            (e.g. mentoring contract, field supply lists).
          </p>
        </v-col>

        <!-- <v-col>
          <v-card-title>Teaching</v-card-title>
          <v-card height="500" class="overflow-y-auto">
            <v-list v-for="(item, index) in teaching" :key="index">
              <v-list-item-group>
                <template v-for="(links, key) in item">
                  <v-subheader :key="key">{{ key }}</v-subheader>
                  <v-list-item
                    exact
                    v-for="(link, linkId) in links"
                    :key="linkId"
                    :href="link.url"
                    target="_default"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        ><span class="mr-4">{{ link.name }}</span>
                        <v-chip
                          v-for="(tag, tagId) in link.tags"
                          :key="tagId"
                          color="accent"
                          x-small
                          link
                        >
                          {{ tag }}</v-chip
                        >
                      </v-list-item-title>
                      <v-list-item-subtitle class="text-wrap">{{
                        link.description
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-col> -->
        <!-- <v-col cols="12">
          <v-card-title>Teaching</v-card-title>
          <v-card rounded="lg">
              <v-tabs v-model="tab">
                <template v-for="item in teaching">
                  <v-tab
                    v-for="(links, key) in item"
                    :key="key"
                    :href="`#${key}`"
                    exact
                  >
                    {{ key }}
                  </v-tab>
                </template>
              </v-tabs>

            <v-tabs-items :key="index" v-model="tab">
              <template v-for="item in teaching">
                <v-tab-item
                  v-for="(links, key) in item"
                  :key="key"
                  :value="`${key}`"
                >
                  <v-list-item
                    exact
                    v-for="(link, linkId) in links"
                    :key="linkId"
                    :href="link.url"
                    target="_default"
                  >
                    <v-list-item-content>
                      <v-list-item-title
                        ><span class="mr-4">{{ link.name }}</span>
                        <v-chip
                          v-for="(tag, tagId) in link.tags"
                          :key="tagId"
                          color="accent"
                          x-small
                          link
                        >
                          {{ tag }}</v-chip
                        >
                      </v-list-item-title>
                      <v-list-item-subtitle class="text-wrap">{{
                        link.description
                      }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-tab-item>
              </template>
            </v-tabs-items>
          </v-card>
        </v-col> -->
        <v-col cols="12">
          <v-card-title>Teaching</v-card-title>
          <v-col cols="6">
            <resource obj="teaching"></resource>
          </v-col>
          <v-col cols="6"></v-col>
          <v-divider></v-divider>
        </v-col>
        

        <v-col cols="12">
          <v-card-title>Fieldwork</v-card-title>
          <v-row>
          <v-col cols="6">
            <v-card rounded="lg" flat>
              <v-img
                src="\ropeteam.jpg"
                height="500"
              ></v-img>
            </v-card>
          </v-col>
          <v-col cols="6">
            <resource obj="fieldwork"></resource>
          </v-col>
          </v-row>
        </v-col>

        <v-col cols="6">
          <v-card-title>Community</v-card-title>
          <resource obj="community"></resource
        ></v-col>
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