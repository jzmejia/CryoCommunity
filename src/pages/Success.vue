<template>
  <Layout>
    <v-row>
      <v-col cols="12" lg="6" offset-lg="3">
        <v-card outlined rounded="lg">
          <v-card-title>Thank you! </v-card-title>
          <v-card-subtitle>
            Your message has been recieved.
          </v-card-subtitle>
          <v-card-actions>
            <v-btn small depressed to="/">
              <v-icon left>fa-arrow-left</v-icon> Back to home</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>

<script>
export default {
  name: "Success",
};
</script>

<style></style>
