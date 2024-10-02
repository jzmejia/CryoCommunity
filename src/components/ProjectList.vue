<template>
  <v-row>
    <v-col v-for="(item, idx) in projects.edges" :key="idx" cols="12" lg="6" md="6" sm="6">
      <g-link class="text-decoration-none text--primary" :to="item.node.path">
        <v-hover v-slot="{ hover }">
          <v-responsive :ripple="false" class="rounded fill-height transition-swing" :hover="!smAndDown" :class="{
            'grey darken-4': dark,
            'elevation-3': hover,
            'elevation-1': !hover,
          }">
            <v-img class="rounded-t" height="250" :src="item.node.preview_image">
              <!-- <g-image style="width: 100%" :src="item.node.preview_image">
            </g-image> -->
              <v-card style="position: absolute; bottom: 0; left: 0; right: 0" class="rounded-sm ma-2 transition-swing"
                :color="dark ? '#272727d0' : '#ffffffd0'" 
                :style="{
                  backdropFilter: hover ? 'blur(4px)' : '',
                }">
                <v-card-title class="text-capitalize font-weight-bold">
                  {{ item.node.title }}
                </v-card-title>
                <v-card-subtitle class="text-capitalize">
                  {{ item.node.subtitle }}
                </v-card-subtitle>
              </v-card>
            </v-img>
            <v-card-subtitle class="pt-2 pb-1">
              <a>{{ item.node.author }}</a> 
              <v-icon>mdi-circle-small</v-icon>{{ item.node.date }}
            </v-card-subtitle>

            <v-card-text>
              <div>
                <!-- <v-btn v-for="(tag, index) in item.node.tags" active-class="primary--text" :to="tag.path"
                  :key="index" :x-small="mobile" :small="!mobile" depressed class="ma-1">
                  <v-icon :x-small="mobile" :small="!mobile" :left="!mobile">mdi-pound</v-icon>
                  {{ tag.title }}
                </v-btn> -->
                <v-btn v-for="(tag, index) in item.node.tags" active-class="primary--text" :to="tag.path" :key="index"
                  x-small depressed class="mr-1 mb-1">
                  <v-icon x-small class="mr-1">mdi-pound</v-icon>
                  {{ tag.title }}
                </v-btn>
              </div>
              {{ item.node.excerpt }}
            </v-card-text>
          </v-responsive>
        </v-hover>
      </g-link>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProjectList",
  props: ["projects"],
  metaInfo: {
    title: "Project List",
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
};
</script>

<style scoped>
.v-card--link:before {
  background: none;
}
</style>
