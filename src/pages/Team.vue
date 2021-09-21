<template>
  <Layout>
    <v-container>
      <h1 class="text-h1 secondary--text my-8">Our Team</h1>
      <v-row>
        <v-col
          v-for="(person, index) in teamData.teamInfo"
          :key="index"
          :cols="12"
          :lg="3"
          :md="4"
          :sm="6"
          :xs="12"
        >
          <v-hover v-slot="{ hover }">
            <v-card
              rounded="lg"
              class="pt-4"
              flat
              color="grey lighten-4"
              :class="{ 'on-hover': hover }"
            >
              <v-fade-transition
                ><v-btn plain x-small absolute bottom right v-if="hover">{{
                  person.pronouns
                }}</v-btn></v-fade-transition
              >
              <v-img
                :src="require(`~/assets/avatars/${person.avatar}`)"
                :alt="person.alt"
                max-height="150"
                contain
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height" align="center" justify="center">
                    <v-progress-circular
                      indeterminate
                      color="#009cf6"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
              <v-card-title v-text="person.name"></v-card-title>
              <v-card-subtitle v-text="person.affil"></v-card-subtitle>
              <v-card-actions>
                <v-btn icon :href="person.website"
                  >
                  <!-- <v-icon small>fa-link</v-icon> -->
                  <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6" stroke="currentColor"></path></svg>
                  </v-btn
                >
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import teamData from "~/data/team.yml";

export default {
  data() {
    return {
      teamData,
    };
  },
};
</script>