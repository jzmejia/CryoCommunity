<template>
  <v-card rounded="lg">
    <v-tabs v-model="tab" show-arrows grow>
      <template v-for="item in resource">
        <v-tab v-for="(links, key) in item" :key="key" :href="`#${key}`" exact>
          {{ key }}
        </v-tab>
      </template>
    </v-tabs>

    <v-tabs-items v-model="tab" style="max-height: 400px; overflow-y: auto">
      <template v-for="item in resource">
        <v-tab-item v-for="(links, key) in item" :key="key" :value="`${key}`">
          <v-list-item
            exact
            v-for="(link, linkId) in links"
            :key="linkId"
            :href="link.url"
            target="_default"
          >
            <v-list-item-content>
              <v-list-item-title
                ><span class="mr-4">
                  {{ link.name }}
                </span>
                <v-chip
                  v-for="(tag, tagId) in link.tags"
                  :key="tagId"
                  color="accent"
                  x-small
                  link
                  class="mx-1"
                >
                  #{{ tag }}</v-chip
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
</template>

<script>
import resources from "~/data/resources.yml";

export default {
  props: ["obj"],
  data() {
    return {
      tab: "",
    };
  },
  computed: {
    resource() {
      return resources[this.obj];
    },
  },
};
</script>