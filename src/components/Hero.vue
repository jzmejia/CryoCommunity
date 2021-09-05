<template>
  <v-parallax
  :src="heroData.hero.heroImgSrc"
  height="600"
  >
    <v-row align="center" justify="center">
      <v-col>
        <h1 class="h1 font-weight-bold text-center black--text">{{heroData.hero.heroTitle}}</h1>
        <h5 class="text-center font-weight-light black--text line-height mt-0 tb-5">
          {{heroData.hero.heroSubtitle}}</h5>
          <br/>
          <v-row>
            <v-col
              cols="12"
              align-self="center"
            >
            <div class="text-center">
            <!-- <span class="d-flex justify-space-around"> -->
            <v-btn
              elevation="2"
              small
              rounded
              color="secondary"
            >Career Stage</v-btn>
            <v-btn
              rounded
              small
              elevation="2"
              class="mx-4"
              min-width="100"
              color="secondary"
              >Button 2</v-btn>
            <v-btn
              rounded
              elevation="2"
              min-width="100"
              small
              color="secondary"
              >Button 3
            </v-btn>
            <!-- </span> -->
            </div>
            </v-col>
          </v-row>
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import heroData from "~/data/hero.yml";
export default {
  data() {
    return {
      heroData
    };
  }
};
</script>