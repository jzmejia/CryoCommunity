<template>
  <div>
    
    <v-list
      v-if="signatures.length > 0"
      :class="dark ? 'dark-marquee-list dark-container':'marquee-list light-container'"
    >
      <div class="marquee">
        <template v-for="(item, index) in signatures">
          <v-divider
            :class="dark ? 'grey darken-4' : 'grey lighten-5'"
            :key="`divider-${index}`"
          />
          <v-list-item :key="index">
            <v-list-item-icon>
<!-- <svg v-if="!dark" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-patch-check-fill amber--text" viewBox="0 0 16 16">
  <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
</svg> -->
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
              <v-list-item-title>
                {{ item.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.affiliation }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <!-- <v-list-item-icon class="d-flex align-self-center">
              <v-icon small color="amber">fa-certificate</v-icon>
            </v-list-item-icon> -->
          </v-list-item>
        </template>
      </div>
    </v-list>
    <v-card-text v-else>Sign the pledge</v-card-text>
  </div>
</template>

<script>
export default {
  name: "SignatureResults",
  props: ["signatures"],
  data: () => ({
    isPaused: false,
  }),
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  mounted() {
    this.shuffle(this.signatures);
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
.light-container {
  height: 8em;
  /* margin: 1em auto; */
  overflow: hidden;
  background: white;
  position: relative;
  box-sizing: border-box;
}
.dark-container {
  height: 8em;
  /* margin: 1em auto; */
  overflow: hidden;
  background: #121212;
  position: relative;
  box-sizing: border-box;
}

.marquee {
  top: 6em;
  position: relative;
  /* box-sizing: border-box; */
  animation: marquee 6s linear infinite;
}

.marquee:hover {
  animation-play-state: paused;
}

/* Make it move! */
@keyframes marquee {
  0% {
    top: 100%;
  }
  25% {
    top: 50%;
  }
  100% {
    top: -100%;
  }
}

/* Make it look pretty */
/* .microsoft .marquee { */
/* margin: 0; */
/* padding: 0 1em; */
/* line-height: 1.5em; */
/* font: 1em "Segoe UI", Tahoma, Helvetica, Sans-Serif; */
/* } */

.marquee-list:before,
.marquee-list::before,
.marquee-list:after,
.marquee-list::after {
  left: 0;
  z-index: 1;
  content: "";
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 2em;
  background-image: linear-gradient(180deg, #fff, rgba(255, 255, 255, 0));
}

.marquee-list:after,
.marquee-list::after {
  bottom: 0;
  transform: rotate(180deg);
}

.marquee-list:before,
.marquee-list::before {
  top: 0;
}

.dark-marquee-list:before,
.dark-marquee-list::before,
.dark-marquee-list:after,
.dark-marquee-list::after {
  left: 0;
  z-index: 1;
  content: "";
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 2em;
  background-image: linear-gradient(180deg, #121212, rgba(0, 0, 0, 0));
}

.dark-marquee-list:after,
.dark-marquee-list::after {
  bottom: 0;
  transform: rotate(180deg);
}

.dark-marquee-list:before,
.dark-marquee-list::before {
  top: 0;
}
</style>