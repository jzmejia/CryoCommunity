<template>
  <v-parallax
  :src="heroData.hero.heroImgSrc"
  height="800"
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
            <v-btn
              v-for="(button, index) in heroData.buttons"
              :key="index"
              elevation="2"
              small
              rounded
              color="secondary"
              class="mx-2"
              :to="button.link"
            >{{button.name}}</v-btn>
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