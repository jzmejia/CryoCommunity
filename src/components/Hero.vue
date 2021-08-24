<template>
  <v-parallax 
  :src="heroData.hero.heroImgSrc">

  <!-- <v-parallax 
    dark
    src="~/assets/celia-terminus.jpg"> -->
    <v-row align="center" justify="center">
      <v-col/>
      <v-col>
        <h1 class="h1 font-weight-bold text-center">{{heroData.hero.heroTitle}}</h1>
        <br />
        <h3 class="h3 text-center">{{heroData.hero.heroSubtitle}}</h3>
      </v-col>
      <v-col/>
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