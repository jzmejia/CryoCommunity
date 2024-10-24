<template>
  <div>
    <v-card-title>FAQ</v-card-title>
    <v-expansion-panels>
      <v-expansion-panel v-for="({ q, a }, idx) in faq" :key="idx">
        <v-expansion-panel-header>
          {{ q }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          {{ a }}
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import faq from "~/data/gear/faq.yaml";
// data structure:
// {
//   q: "q"
//   a: "a"
// }

export default {
  data: () => ({
    faq,
  }),
};
</script>

<style></style>