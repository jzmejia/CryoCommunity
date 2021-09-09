
<template>
<Layout>
  <v-card>
    <v-btn to="/team">Our Team</v-btn>
  </v-card>
  </Layout>
</template>
<script>
import aboutData from "~/data/about.yml";

export default {
  data() {
    return {
      aboutData
    };
  }
};
</script>



