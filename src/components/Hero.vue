<template>
  <v-parallax
  :src="heroData.hero.heroImgSrc"
  height="1000"
   
  >
    <v-row align="center" justify="center">
      <v-col>
        <div 
        class="my-8 font-weight-regular text-center black--text"
        :class="{
          'text-h3': smAndDown,
          'text-h1': !smAndDown
        }"
        >{{heroData.hero.heroTitle}}</div>
        <div 
        class="text-center black--text line-height mt-0 tb-5"
        :class="{
          'text-h5': !smAndDown,
          'text-subtitle-1': smAndDown
        }"
        >
          {{heroData.hero.heroSubtitle}}</div>
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
              elevation="1"
              small
              rounded
              color=#61b9f7
              class="ma-2 black--text"
              min-width="100px"
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
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile
    },
  }
};
</script>

