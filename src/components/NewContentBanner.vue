<template>
  <v-alert
    color="deep-orange"
    dark
    tile
    class=""
    style="position: absolute; z-index: 1; width: 100vw"
  >
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      class="mx-3"
    >
      <path
        d="M8 10.5V10H7v.5h1zm-1 .01v.5h1v-.5H7zM7 4v4h1V4H7zm0 6.5v.01h1v-.01H7zm.5 3.5A6.5 6.5 0 011 7.5H0A7.5 7.5 0 007.5 15v-1zM14 7.5A6.5 6.5 0 017.5 14v1A7.5 7.5 0 0015 7.5h-1zM7.5 1A6.5 6.5 0 0114 7.5h1A7.5 7.5 0 007.5 0v1zm0-1A7.5 7.5 0 000 7.5h1A6.5 6.5 0 017.5 1V0z"
        fill="currentColor"
      ></path>
    </svg>
    A Census for the Science Workforce. Read the proposal and add your name as a supporter.
    <v-btn to="/census" text small outlined class="ml-2"> Learn more </v-btn>
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