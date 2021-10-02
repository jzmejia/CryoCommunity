<template>
  <v-card rounded="lg" class="fill-height" flat outlined>
    <v-tabs v-model="tab" show-arrows grow>
      <v-tab v-for="(item, index) in tabs" :key="index">
        {{ item.title }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" style="max-height: 400px; overflow-y: auto;">
      <v-tab-item v-for="(item, index) in tabs" :key="index">
        <v-list-item
          v-for="(link, linkId) in item.resources"
          :key="linkId"
          :href="link.url"
          target="_default"
        >
          <v-list-item-content>
            <v-list-item-title
              ><span class="mr-4">
                {{ link.name }}
              </span>
              <v-chip-group column>
                <v-chip
                  v-for="(tag, tagId) in link.tags"
                  :key="tagId"
                  color="primary"
                  :outlined="dark"
                  x-small
                  link
                  class="mx-1"
                >
                  <v-icon left size="8">fa-hashtag</v-icon>{{ tag }}</v-chip
                >
              </v-chip-group>
            </v-list-item-title>
            <v-list-item-subtitle class="text-wrap">{{
              link.description
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
export default {
  props: ["resource"],
  data() {
    return {
      tab: "",
    };
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    tabs() {
      return this.resource.items;
    },
  },
};
</script>
