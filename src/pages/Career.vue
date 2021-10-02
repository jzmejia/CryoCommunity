<template>
  <Layout>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="8">
          <div
            class="text-h4 my-4 font-weight-black text-wrap primary--text"
            :class="{ 'text-center': smAndDown }"
          >
            CryoCommunity Directory
          </div>
          <p class="text-h6">
            Use the career stage road-map below to find relevant content
            including the MARS Pod's original content and our curated lists of
            resources and tools across a wide range of categories.
            <b>Let us know</b> of more sources to add to the list.
          </p>
        </v-col>
      </v-row>
      <v-row justify="center" id="undergrad">
        <v-col sm="12" lg="8">
          <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              color="secondary"
              icon="fas fa-book-reader"
              fill-dot
              large
            >
              <v-card
                rounded="lg"
                flat
                class="mb-4"
                id="grad"
                color="transparent"
              >
                <v-card-title class="text-h5 font-weight-black"
                  >Undergraduates</v-card-title
                >
                <v-card-subtitle>
                  <v-chip-group column>
                    <v-chip
                      v-for="(chip, index) in chips.Undergraduate"
                      :key="index"
                      color="orange"
                      :to="chip.path"
                      >{{ chip.tag }}
                    </v-chip>
                  </v-chip-group>
                </v-card-subtitle>
              </v-card>
            </v-timeline-item>
            <!-- <v-timeline-item hide-dot></v-timeline-item> -->

            <v-timeline-item
              color="secondary"
              icon="fas fa-user-graduate"
              fill-dot
              large
            >
              <v-card
                rounded="lg"
                flat
                class="mb-4"
                id="ecr"
                color="transparent"
              >
                <v-card-title class="text-h5 font-weight-black"
                  >Graduate Students</v-card-title
                >
                <v-card-subtitle>
                  <v-chip-group column>
                    <v-chip
                      v-for="(chip, index) in chips.Graduate"
                      :key="index"
                      color="orange"
                      :to="chip.path"
                      >{{ chip.tag }}
                    </v-chip>
                  </v-chip-group>
                </v-card-subtitle>
              </v-card>
            </v-timeline-item>

            <!-- <v-timeline-item hide-dot></v-timeline-item> -->

            <v-timeline-item
              color="secondary"
              fill-dot
              icon="fas fa-user-md"
              large
            >
              <v-card
                rounded="lg"
                flat
                class="mb-4"
                id="pi"
                color="transparent"
              >
                <v-card-title class="text-h5 font-weight-black"
                  >Early Career</v-card-title
                >
                <v-card-subtitle>
                  <v-chip-group column>
                    <v-chip
                      v-for="(chip, index) in chips.ECR"
                      :key="index"
                      color="orange"
                      :to="chip.path"
                      >{{ chip.tag }}
                    </v-chip>
                  </v-chip-group>
                </v-card-subtitle>
              </v-card>
            </v-timeline-item>

            <v-timeline-item
              color="secondary"
              fill-dot
              icon="fas fa-chalkboard-teacher"
              large
            >
              <v-card rounded="lg" flat class="mb-4" color="transparent">
                <v-card-title class="text-h5 font-weight-black">
                  PIs
                </v-card-title>
                <v-card-subtitle>
                  <v-chip-group column>
                    <v-chip
                      v-for="(chip, index) in chips.PI"
                      :key="index"
                      color="orange"
                      :to="chip.path"
                      >{{ chip.tag }}
                    </v-chip>
                  </v-chip-group>
                </v-card-subtitle>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<script>
import chips from "~/data/sort.yml";

export default {
  data() {
    return {
      chips,
    };
  },
  metaInfo: {
    title: 'Career',
  },
  computed: {
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
};
</script>
