<template>
  <v-alert
    color="deep-orange"
    dark
    tile
    width="100%"
    style="position: fixed; z-index: 1"
  >
    A Census for the Science Workforce. Read the proposal and add your name as a
    supporter.
    <v-btn to="/census" small outlined :class="$vuetify.breakpoint.smAndDown ? 'mt-2' :'ml-2'"> Learn more </v-btn>
  </v-alert>
</template>



<script>
export default {
  name: "Banner",
  computed: {},
};
</script>

<style>
</style>