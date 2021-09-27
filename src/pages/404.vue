<template>
  <Layout>
    <v-container>
        <v-row align="center" justify="center">
            <v-col cols="auto">
      <v-card width="400px" flat>
        <v-card-title class="text-h1 font-weight-black"
          >404!</v-card-title
        >
        <v-card-subtitle class="text-h4 pink--text text--accent-3">
          something went wrong
        </v-card-subtitle>
        <v-card-actions>
          <v-btn dark to="/" large block class="rounded-lg">
            <v-icon left>fa-home</v-icon><span>go home</span></v-btn
          >
        </v-card-actions>
      </v-card>
            </v-col>
        </v-row>
    </v-container>
  </Layout>
</template>

<script>
export default {
  name: "404",
};
</script>

<style></style>
