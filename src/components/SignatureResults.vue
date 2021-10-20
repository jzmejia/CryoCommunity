<template>
  <v-list
    color="transparent"
    class="py-0 marquee-wrapper"
    :height="smAndDown ? '250px' : '15vh'"
  >
    <dynamic-marquee
      v-if="signatures.length > 0"
      :speed="{ type: 'pps', number: 60 }"
      :repeatMargin="0"
      reverse
      :class="dark ? 'dark-wrapper' : 'light-wrapper'"
    >
      <template v-for="(item, index) in shuffledSignatures">
        <v-list-item :key="index">
          <v-list-item-icon class="align-self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-patch-check amber--text"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
              />
              <path
                d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"
              />
            </svg>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="text-wrap">
              {{ item.name }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-wrap">
              {{ item.affiliation }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider
          inset
          :class="dark ? 'grey darken-4' : 'grey lighten-5'"
          :key="`divider-${index}`"
        />
      </template>
    </dynamic-marquee>
  </v-list>
</template>

<script>
export default {
  name: "SignatureResults",
  props: ["signatures"],
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    shuffledSignatures() {
      return this.shuffle(this.signatures);
    },
  },
  methods: {
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    },
  },
};
</script>

<style scoped>
/* .marquee-wrapper {
  width: 100%;
} */

.light-wrapper {
  background: #ffffff;
}

.light-wrapper:before,
.light-wrapper::before,
.light-wrapper:after,
.light-wrapper::after {
  left: 0;
  z-index: 1;
  content: "";
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 2.5em;
  background-image: linear-gradient(180deg, #ffffff, rgba(255, 255, 255, 0));
}

.light-wrapper:after,
.light-wrapper::after {
  bottom: 0;
  transform: rotate(180deg);
}
.light-wrapper:before,
.light-wrapper::before {
  top: 0;
}

.dark-wrapper {
  background: #121212;
}

.dark-wrapper:before,
.dark-wrapper::before,
.dark-wrapper:after,
.dark-wrapper::after {
  left: 0;
  z-index: 1;
  content: "";
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 2.5em;
  background-image: linear-gradient(180deg, #121212, rgba(0, 0, 0, 0));
}

.dark-wrapper:after,
.dark-wrapper::after {
  bottom: 0;
  transform: rotate(180deg);
}
.dark-wrapper:before,
.dark-wrapper::before {
  top: 0;
}
</style>