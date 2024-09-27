<template>
  <v-btn icon plain :ripple="false" @click="handleClick" :class="{ 'primary--text': dark }">
    <component aria-hidden :is="dark ? 'moon' : 'sun'" />
  </v-btn>
</template>

<script>
export const DARK_MODE = "theme--dark";
export const LIGHT_MODE = "theme--light";

export default {
  components: {
    Moon: () => import("~/assets/svgs/moon.svg"),
    Sun: () => import("~/assets/svgs/sun.svg"),
  },
  data() {
    return {
      isDarkMode: false,
    };
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
  },
  methods: {
    handleClick() {
      const hasDarkMode =
        document.documentElement.classList.contains(DARK_MODE);
      return this.toggleTheme(!hasDarkMode);
    },
    toggleTheme(mode) {
      document.documentElement.classList.toggle(DARK_MODE, mode);
      document.documentElement.classList.toggle(LIGHT_MODE, !mode);
      this.$vuetify.theme.dark = mode;

      this.isDarkMode = mode;
      this.writeToStorage(mode);
      return mode;
    },
    detectPreferred() {
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    },
    hasInStorage() {
      return localStorage.getItem(DARK_MODE) !== null;
    },
    getFromStorage() {
      return localStorage.getItem(DARK_MODE) === "true";
    },
    writeToStorage(prefersDark) {
      localStorage.setItem(DARK_MODE, prefersDark ? "true" : "false");
    },
  },
  mounted() {
    if (this.hasInStorage()) {
      this.toggleTheme(this.getFromStorage());
    } else if (process.isClient && window.matchMedia) {
      this.toggleTheme(this.detectPreferred());
    }
  },
};
</script>

<style>
html.theme--dark {
  background-color: #121212;
}

html.theme--light {
  background-color: #ffffffd0;
}
</style>