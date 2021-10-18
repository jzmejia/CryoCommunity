<template>
  <div>
    <!-- <v-system-bar dense flat lights-out>
      <v-spacer />
      <svg
        v-if="signatures.length > 0"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
      >
        <path
          d="M10.5 14.49v.5h.5v-.5h-.5zm-10 0H0v.5h.5v-.5zm14 .01v.5h.5v-.5h-.5zM8 3.498a2.499 2.499 0 01-2.5 2.498v1C7.433 6.996 9 5.43 9 3.498H8zM5.5 5.996A2.499 2.499 0 013 3.498H2a3.499 3.499 0 003.5 3.498v-1zM3 3.498A2.499 2.499 0 015.5 1V0A3.499 3.499 0 002 3.498h1zM5.5 1A2.5 2.5 0 018 3.498h1A3.499 3.499 0 005.5 0v1zm5 12.99H.5v1h10v-1zm-9.5.5v-1.996H0v1.996h1zm2.5-4.496h4v-1h-4v1zm6.5 2.5v1.996h1v-1.997h-1zm-2.5-2.5a2.5 2.5 0 012.5 2.5h1a3.5 3.5 0 00-3.5-3.5v1zm-6.5 2.5a2.5 2.5 0 012.5-2.5v-1a3.5 3.5 0 00-3.5 3.5h1zM14 13v1.5h1V13h-1zm.5 1H12v1h2.5v-1zM12 11a2 2 0 012 2h1a3 3 0 00-3-3v1zm-.5-3A1.5 1.5 0 0110 6.5H9A2.5 2.5 0 0011.5 9V8zM13 6.5A1.5 1.5 0 0111.5 8v1A2.5 2.5 0 0014 6.5h-1zM11.5 5A1.5 1.5 0 0113 6.5h1A2.5 2.5 0 0011.5 4v1zm0-1A2.5 2.5 0 009 6.5h1A1.5 1.5 0 0111.5 5V4z"
          fill="currentColor"
        ></path>
      </svg>
      <span class="ml-2 text-h6">{{ signatures.length }}</span>
    </v-system-bar> -->
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
import axios from "axios";
import DynamicMarquee from "vue-dynamic-marquee";
export default {
  name: "SignatureResults",
  data: () => ({
    isPaused: false,
    signatures: [],
    access_token: process.env.GRIDSOME_NETLIFY_PERSONAL_ACCESS_TOKEN,
    form_id: process.env.GRIDSOME_NETLIFY_CENSUS_FORM_ID,
  }),
  components: {
    DynamicMarquee,
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  mounted() {
    this.getFormResults();
  },
  methods: {
    async getFormResults() {
      const { data } = await axios.get(
        `https://api.netlify.com/api/v1/forms/${this.form_id}/submissions`,
        {
          headers: {
            Authorization: "Bearer " + this.access_token,
          },
        }
      );
      this.signatures = data.map((item) => ({
        name: item.data.name,
        email: item.data.email,
        affiliation: item.data.affiliation,
      }));
      this.shuffle(this.signatures);
    },
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
  background-image: linear-gradient(180deg, #121212, rgba(255, 255, 255, 0));
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