<template>
  <span>
    <!-- twitter -->
    <v-btn color="primary" icon href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      data-url="https://cryocommunity.org/census/" data-via="cryocommunity" data-hashtags="STEMcensus"
      data-show-count="false">
      <TwitterIcon />
    </v-btn>
    <!-- facebook -->
    <v-btn icon color="primary"
      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcryocommunity.org%2Fcensus&amp;src=sdkpreparse"
      class="fb-xfbml-parse-ignore">
      <FacebookIcon />
    </v-btn>
    <!-- linkedin -->
    <!-- <v-btn icon color="primary">
      <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15">
        <path
          d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z"
          stroke="currentColor"></path>
      </svg>
    </v-btn> -->
    <!-- copy link to page  -->

    <v-btn icon color="primary" v-clipboard:copy="censusUrl" v-clipboard:success="onCopy" v-clipboard:error="onError">
      <ClipboardIcon />
    </v-btn>

    <v-snackbar v-model="snackbar" bottom left outlined>
      {{ copyBtnText }}
    </v-snackbar>

    <!-- send to contact page -->
    <v-tooltip top>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon color="primary" v-bind="attrs" v-on="on" href="/contact">
          <EditIcon />
        </v-btn>
      </template>
      <span>Suggest Edits</span>
    </v-tooltip>
  </span>
</template>

<script>
import FacebookIcon from "~/assets/svgs/facebook.svg"
import TwitterIcon from "~/assets/svgs/twitter.svg"
import EditIcon from "~/assets/svgs/edit.svg"
import ClipboardIcon from "~/assets/svgs/clipboard.svg"

export default {
  components: {
    FacebookIcon,
    EditIcon,
    ClipboardIcon,
    TwitterIcon
  },
  data() {
    return {
      snackbar: false,
      timeout: 2000,
      censusUrl: "https://cryocommunity.org/census",
      copyBtnText: "",
    };
  },
  methods: {
    onCopy: function (e) {
      this.snackbar = true;
      this.copyBtnText = "Link copied to clipboard: " + e.text

    },
    onError: function (e) {
      alert("Failed to copy texts");
    },
  },
};
</script>

<style></style>