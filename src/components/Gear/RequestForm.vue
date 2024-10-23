<template>
  <v-card min-height="400">
    <v-card-title class="py-2">
      Request
      <v-btn @click="toggle" class="ml-auto" icon
        ><v-icon v-if="!isActive">mdi-plus</v-icon
        ><v-icon v-else>mdi-minus</v-icon></v-btn
      >
    </v-card-title>
    <v-divider />
    <v-card-text v-show="isActive">
      <v-form>
        <v-text-field dense outlined label="field-1"></v-text-field>
        <v-text-field dense outlined label="field-2"></v-text-field>
        <v-btn type="submit" depressed block>send request</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSeJWs2XsUN_M8wSQvkg87HT3CvI7HIjsW8_tbBBW9NaFvA_xQ/viewform?usp=sf_link";
const sheetURL = "https://docs.google.com/spreadsheets/d/17yhJivJzU526hdAFKWWxq6S7nrTDBYPx25libBDPioI/pub?output=csv"
const CLIENT_ID = "616013307584-f2pjc6409fg7nnstuj5v0p73uq0d1lbi.apps.googleusercontent.com"
const API_KEY = "AIzaSyDdhHk_UzlzXcB1ks1KIFh4e3nvOzgtY7Y"
export default {
  data: () => ({
    isActive: false,
  }),
	mounted(){
		this.get()
	},
  methods: {
		get(){
			const data = fetch("https://sheets.googleapis.com/v4/spreadsheets/17yhJivJzU526hdAFKWWxq6S7nrTDBYPx25libBDPioI")
			console.log(data)
		},
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style></style>
