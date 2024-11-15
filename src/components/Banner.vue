<template>
  <v-alert
    color="deep-orange"
    dark
    tile
    width="100%"
    style="position: fixed; z-index: 1"
  >
    A Near Gear Sharing Iniative.
    <v-btn to="/gear-sharing" small outlined :class="$vuetify.breakpoint.smAndDown ? 'mt-2' :'ml-2'"> Learn more </v-btn>
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