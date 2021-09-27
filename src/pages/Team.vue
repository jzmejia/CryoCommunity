<template>
  <Layout>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-lg-h2 text-h3 secondary--text">Our Team</div>
        </v-col>
        <v-col
          v-for="(person, index) in teamData"
          :key="index"
          :cols="12"
          :lg="3"
          :md="4"
          :sm="6"
          :xs="12"
        >
          <v-hover v-slot="{ hover }" close-delay="250">
            <v-card
              v-intersect="{
                handler: onIntersect,
                options: {
                  threshold: [0, 0.5, 1.0],
                },
              }"
              rounded="lg"
              :elevation="isIntersecting[index] && smAndDown ? 2 : 0"
              :id="index"
              color="grey lighten-4"
              :class="{ 'on-hover': hover }"
              class="transition-fast-in-fast-out pt-4 fill-height"
            >
              <v-img
                :src="person.avatar.src"
                :alt="person.alt"
                height="125"
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
              <v-card-title v-text="person.name" />
              <v-card-subtitle v-text="person.affil" />
              <v-card-actions>
                <v-btn icon :href="person.website">
                  <svg
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6"
                      stroke="currentColor"
                    ></path>
                  </svg>
                </v-btn>
                <v-spacer />
                <v-slide-x-transition
                  ><v-btn
                    v-if="smAndDown ? isIntersecting[index] : hover"
                    plain
                    small
                    >{{ person.pronouns }}</v-btn
                  ></v-slide-x-transition
                >
              </v-card-actions>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  team: allTeam {
    edges {
      node {
        data {
          name
          pronouns
          email
          title
          avatar (quality: 100)
          affil
          twitter
          website
          alt
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  data() {
    return {
      isIntersecting: {},
    };
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    teamData() {
      return this.$page.team.edges[0].node.data;
    },
  },
  methods: {
    onIntersect(entries, observer) {
      // this.isIntersecting[entries[0].target.id] = entries[0].isIntersecting;
      this.$set(
        this.isIntersecting,
        entries[0].target.id,
        entries[0].intersectionRatio >= 1
      );
    },
  },
};
</script>
