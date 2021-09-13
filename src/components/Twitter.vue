<template>
  <v-row>
    <v-col cols="4">
      <v-card
        color="indigo accent-3"
        dark
        v-for="tweet in $static.tweets.edges"
        :key="tweet.node.id"
      >
        <v-card-title>
          <!-- <v-icon
        v-text="'mdi-twitter'"
      >
      </v-icon> -->
          <span class="font-weight-light">Twitter</span>
        </v-card-title>

        <v-card-text class="text-h5 font-weight-bold">
          "{{ tweet.node.text }}"
        </v-card-text>

        <v-card-actions>
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-img
                class="elevation-6"
                alt=""
                :src="tweet.node.profile_image_url"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>@{{ tweet.node.username }}</v-list-item-title>
            </v-list-item-content>

            <!-- <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">
            mdi-heart
          </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">
            mdi-share-variant
          </v-icon>
          <span class="subheading">45</span>
        </v-row> -->
          </v-list-item>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<static-query>
query{
  tweets: allTweets {
    edges{
      node{
        id
        created_at
        text
        author_id
        username

        profile_image_url
      }
    }
  }
}
</static-query>

<script>
export default {
  name: "Twitter",
};
</script>
