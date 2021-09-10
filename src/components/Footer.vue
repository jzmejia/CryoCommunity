<template>
  <v-footer app absolute>
    <v-container>
      <v-row>
        <v-spacer></v-spacer>
        <v-col cols=3>
          <v-list subheader>
            <v-subheader>site map</v-subheader>
            <v-list-item-content>
              <v-list-item-title></v-list-item-title>
            </v-list-item-content>
          </v-list>
        </v-col>
        <v-col cols=3></v-col>
        <v-col cols=3></v-col>
        <v-spacer />
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <span class="mx-auto"
      >{{ new Date().getFullYear() }} —
      <b>{{ $static.metadata.siteName }}</b></span
    >
  </v-footer>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  components: {},
  data: () => ({
    icons: [
      {
        icon: "fab fa-twitter",
        link: "https://twitter.com/cryocommunity?s=21",
      },
    ],
  }),
};
</script>

