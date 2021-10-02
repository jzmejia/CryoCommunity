<template>
  <div>
    <!-- <template v-for="(tweet, index) in tweets.tweets">
      <v-lazy
        :key="index"
        v-model="tweet.isActive"
        :options="{
          threshold: 0.5,
        }"
        class="mb-2"
        min-height="175"
        transition="slide-y-reverse-transition"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            flat
            :color="hover ? 'grey lighten-3' : 'transparent'"
            rounded="lg"
            :href="`https://twitter.com/moulinology/status/${tweet.id}`"
          >
            <v-toolbar flat color="transparent">
              <v-list-item>
                <v-list-item-avatar left size="32">
                  <v-img
                    :src="
                      tweets.users.find(
                        (item) => item.id === tweet['author_id']
                      ).profile_image_url
                    "
                  ></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title
                    class="font-weight-black text-subtitle-2"
                    >{{
                      tweets.users.find(
                        (item) => item.id === tweet["author_id"]
                      ).name
                    }}</v-list-item-title
                  >
                  <v-list-item-subtitle class="caption"
                    >@{{
                      tweets.users.find(
                        (item) => item.id === tweet["author_id"]
                      ).username
                    }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                :class="hover ? 'blue--text' : 'grey--text'"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                />
              </svg>
            </v-toolbar>

            <v-card-text>
              <v-row
                ><v-col cols="10" offset="2"
                  ><div
                    class="text-body-2 text--primary"
                    v-html="tweet.text"
                  ></div>
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-text class="caption">
              <v-row>
                <v-col cols="3" offset="1">
                </v-col>
                <v-col cols="auto" class="ml-auto">
                  <span>{{ tweet.created_at }}</span>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-lazy>
    </template> -->

    <!-- <a
      class="twitter-timeline"
      data-chrome="nofooter noborders noheader noscrollbar"
      href="https://twitter.com/CryoCommunity?ref_src=twsrc%5Etfw"
    ></a> -->


    <TwitterTimeline
      id="cryocommunity"
      sourceType="profile"
      :options="{
        dnt: true,
        theme: 'light',
        chrome: 'nofooter noborders noheader noscrollbar',
      }"
    >
    </TwitterTimeline>
  </div>
</template>
<script>
// import axios from "axios";
import { Timeline } from "vue-tweet-embed";
export default {
  name: "Twitter",
  components: {
    TwitterTimeline: Timeline,
  },
  data: () => ({
    tweets: [],
  }),
  // async mounted() {
  //   const { data } = await axios.get("/.netlify/functions/twitter");
  //   this.tweets = data;
  // },
};
</script>
