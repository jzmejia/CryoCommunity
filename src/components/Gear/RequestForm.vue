<template>
    <v-list subheader class="py-0">
        <!-- v-list-item :ripple="false"> -->
            <v-list-item-content>
              <v-list-item
        href="https://docs.google.com/forms/d/e/1FAIpQLSfn4vJSzkd7WsDcFkTnDHrqMYwgnMs1ZO_3h6ZVOU6xcqbiDw/viewform?usp=sharing&ouid=104316629180025309314">
        <v-list-item-title>Make a Request</v-list-item-title>
      </v-list-item>

      <v-list-item
        href="https://docs.google.com/spreadsheets/d/1bvONbQnWsjof56XzNtLsoHYsHeue8cwJx2D6GWPDjM8/edit?usp=sharing">
        <v-list-item-title> Browse Gear Library </v-list-item-title>
      </v-list-item>
      <v-list-item href="https://docs.google.com/spreadsheets/d/1bvONbQnWsjof56XzNtLsoHYsHeue8cwJx2D6GWPDjM8/edit?usp=sharing">
        <v-list-item-title>Community Expectations</v-list-item-title>
        </v-list-item>
 
        <v-list-item 
href="https://docs.google.com/document/d/1INmwWaOiD0WOkpWx4UTUBh0D1w6t9uMb2Dx-IcOmFrM/edit?usp=sharing">
            <v-list-item-title> Gear Sharing Agreement </v-list-item-title>
        </v-list-item>
    </v-list-item-content>
  </v-listlist-item-content>
  </v-list>
</template>

<script>
const formURL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfn4vJSzkd7WsDcFkTnDHrqMYwgnMs1ZO_3h6ZVOU6xcqbiDw/viewform?usp=sharing&ouid=104316629180025309314";


const sheetURL =
  "https://docs.google.com/spreadsheets/d/1bvONbQnWsjof56XzNtLsoHYsHeue8cwJx2D6GWPDjM8/edit?usp=sharing";


const CLIENT_ID =
  "1bvONbQnWsjof56XzNtLsoHYsHeue8cwJx2D6GWPDjM81bvONbQnWsjof56XzNtLsoHYsHeue8cwJx2D6GWPDjM8.apps.googleusercontent.com";


const API_KEY = "AIzaSyDdhHk_UzlzXcB1ks1KIFh4e3nvOzgtY7Y";


export default {
  data: () => ({
    isActive: false,
  }),
  mounted() {
    // // this.get();
  },
  methods: {
    get() {
      const data = fetch(
        "https://sheets.googleapis.com/v4/spreadsheets/1bvONbQnWsjof56XzNtLsoHYsHeue8cwJx2D6GWPDjM81bvONbQnWsjof56XzNtLsoHYsHeue8cwJx2D6GWPDjM8"
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
