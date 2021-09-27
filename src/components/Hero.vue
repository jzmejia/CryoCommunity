<template>
  <v-parallax :src="heroData.hero.heroImgSrc" style="height: 100vh;">
    <v-row align="center" justify="center">
      <v-col cols="12" align="center" align-self="end">
        <div
          class="mb-8 font-weight-medium black--text"
          :class="{
            'text-h3': mdAndDown,
            'text-h1': !mdAndDown,
          }"
        >
          {{ heroData.hero.heroTitle }}
        </div>
        <div
          class="black--text line-height tb-5"
          :class="{
            'text-h5': !mdAndDown,
            'text-h6': mdAndDown,
          }"
        >
          {{ heroData.hero.heroSubtitle }}
        </div>
      </v-col>
      <v-col cols="auto" class="mx-auto" align-self="start" align="center">
        <v-chip-group column>
          <template v-for="(button, index) in heroData.buttons">
            <v-chip :key="index" color="#61b9f7" :to="button.link">{{
              button.name
            }}</v-chip>
          </template>
        </v-chip-group>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import heroData from "@/data/hero.yml";
export default {
  data() {
    return {
      heroData,
    };
  },
  computed: {
    mdAndDown() {
      return this.$vuetify.breakpoint.mdAndDown;
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
};
</script>
