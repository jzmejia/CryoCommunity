<template>
  <v-row>
    <v-col cols="12" v-for="(resource, idx) in resources" :key="idx">
      <v-row :id="resource.slug" class="pb-lg-8">
        <v-col cols="12" lg="6" :class="{ 'd-flex align-center': !mobile }">
          <v-card :flat="mobile" :color="dark ? 'grey darken-4' : 'grey lighten-5'" class="fill-height" height="550">
            <v-card-title class="text-h5 text-break text-capitalize font-weight-bold">{{ resource.tab }}</v-card-title>
            <v-tabs v-model="tab[idx]" :show-arrows="mobile" center-active grow>
              <v-tab v-for="(item, jdx) in resource.items" :key="jdx">
                {{ item.title }}
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab[idx]" style="max-height: 425px; overflow-y: auto">
              <v-tab-item v-for="(item, jdx) in resource.items" :key="jdx">
                <v-list-item v-for="(link, kdx) in item.resources" :key="kdx" :href="link.url" target="_default"
                  :class="{ 'grey lighten-5': !dark }">
                  <v-list-item-content>
                    <v-list-item-title class="text-wrap">
                      {{ link.name }}
                      <v-chip-group column>
                        <v-chip v-for="tag in link.tags" :key="tag" color="primary" x-small>
                          <v-icon role="img" left x-small>fa-hashtag</v-icon>
                          {{ tag }}
                        </v-chip>
                      </v-chip-group>
                    </v-list-item-title>
                    <v-list-item-subtitle class="text-wrap text-capitalize">{{
                      link.description
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
        </v-col>
        <v-col v-if="resource.image" cols="12" lg="6" :order="idx % 2 === 1 || mobile ? 'first' : 'last'"
          :class="{ 'd-flex align-center': !mobile }">
          <v-responsive>
            <g-image class="rounded" :src="resource.image" style="width: 100%" />
          </v-responsive>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["resource"],
  data() {
    return {
      tab: [],
    };
  },
  computed: {
    resources() {
      return this.resource
        ? [this.resource]
        : this.$page.resources.edges[0].node.data;
    },
    dark() {
      return this.$vuetify.theme.dark;
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
};
</script>
