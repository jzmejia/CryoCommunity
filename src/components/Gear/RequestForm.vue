<template>
  <v-card min-height="400">
    <v-card-title class="py-2"> Request </v-card-title>
    <v-divider />
    <v-card-text>
      <!-- <v-form>
        <v-text-field dense outlined label="field-1"></v-text-field>
        <v-text-field dense outlined label="field-2"></v-text-field>
        <v-btn type="submit" depressed block>send request</v-btn>
      </v-form> -->

      <v-list-item
        href="https://docs.google.com/forms/d/e/1FAIpQLSeyQLTjbscKJC3HXeLy16AkkJpnvYLytVCrJp5YnRefiX-uAA/viewform"
      >
        <v-list-item-title>Make a Request</v-list-item-title>
      </v-list-item>

      <v-list-item
        href="https://docs.google.com/spreadsheets/d/17yhJivJzU526hdAFKWWxq6S7nrTDBYPx25libBDPioI/edit?gid=84482305#gid=84482305"
      >
        <v-list-item-title> Browse Gear Library </v-list-item-title>
      </v-list-item>
      <v-list-item href="https://docs.google.com/spreadsheets/d/17yhJivJzU526hdAFKWWxq6S7nrTDBYPx25libBDPioI/edit?gid=22125841#gid=22125841">
        <v-list-item-title>Community Expectations</v-list-item-title>
        </v-list-item>
      </v-list-item>
        <v-list-item href="https://docs.google.com/document/d/1CX9xeCvr1eLMy8C9I78eX9sKS9RDqRGIxMr47aAPhm8/edit?tab=t.0">
            <v-list-item-title>
                    Gear Sharing Agreement
            </v-list-item-title>
        </v-list-item>
    </v-card-text>
  </v-card>
</template>

<script>
const formURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeJWs2XsUN_M8wSQvkg87HT3CvI7HIjsW8_tbBBW9NaFvA_xQ/viewform?usp=sf_link";
const sheetURL =
  "https://docs.google.com/spreadsheets/d/17yhJivJzU526hdAFKWWxq6S7nrTDBYPx25libBDPioI/pub?output=csv";
const CLIENT_ID =
  "616013307584-f2pjc6409fg7nnstuj5v0p73uq0d1lbi.apps.googleusercontent.com";
const API_KEY = "AIzaSyDdhHk_UzlzXcB1ks1KIFh4e3nvOzgtY7Y";
export default {
  data: () => ({
    isActive: false,
  }),
  mounted() {
    this.get();
  },
  methods: {
    get() {
      const data = fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/17yhJivJzU526hdAFKWWxq6S7nrTDBYPx25libBDPioI"
      );
      console.log(data);
    },
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style></style>
