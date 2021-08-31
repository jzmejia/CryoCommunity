<template>
  <v-parallax
  :src="heroData.hero.heroImgSrc"
  height="900"
  >
    <v-row align="center" justify="center">
      <v-col>
        <h1 class="h1 font-weight-bold text-center black--text">{{heroData.hero.heroTitle}}</h1>
        <h5 class="text-center font-weight-light black--text">
          {{heroData.hero.heroSubtitle}}</h5>
          <v-row>
            <v-col
              cols="12"
              align-self="center"
            >
            <div class="text-center">
            <v-btn
              elevation="0"
              rounded
              color="secondary"
            >Career Stage</v-btn>
            <v-btn
              rounded
              color="secondary"
              >Button 2</v-btn>
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