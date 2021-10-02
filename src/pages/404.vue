<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12" lg="4" offset-lg="4">
          <v-card flat>
            <v-card-title class="text-h1 font-weight-black">404!</v-card-title>
            <v-card-subtitle class="text-h5">
              something went wrong
            </v-card-subtitle>
            <v-card-actions>
              <v-btn dark to="/" block class="rounded-lg">
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
  metaInfo: {
    title: '404',
  },
};
</script>

<style></style>
