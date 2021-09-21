<template>
  <Layout>
    <v-container class="fill-height" align-center justify-center>
      <v-card flat>
        <v-card-title class="text-h1 secondary--text">success</v-card-title>
        <v-card-text>
          <v-btn color="primary" to="/"> <v-icon left>fa-arrow-left</v-icon> home</v-btn>
        </v-card-text>
      </v-card>
    </v-container>
  </Layout>
</template>

<script>
export default {
  name: "Success",
};
</script>

<style>
</style>
