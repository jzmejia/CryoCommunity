
<template>
  <Layout>
    <v-container>
      <v-row class="mt-10">
        <v-col cols="8" offset="2">
          <h4 class="text-center" color="accent">
            Browse the CryoCommunity Directory
          </h4>
          <p class="body-1">
            Use the career stage road-map below to find relevant content
            including the MARS Pod's original content and our curated lists of
            resources and tools across a wide range of categories.
            <b>Let us know</b> of more sources to add to the list.
          </p>
        </v-col>
      </v-row>
      <v-row id="undergrad">
        <v-col cols="8" offset="2">
          <v-timeline>
            <v-timeline-item
              color="accent"
              icon="fas fa-book-reader"
              fill-dot
              large
              
            >
              <v-card flat class="my-4" id="grad">
                <v-card-title>Undergraduates</v-card-title>
                <v-chip
                  v-for="(chip, index) in chips.Undergraduate"
                  :key="index"
                  color="accent"
                  class="ma-1"
                  :to="chip.path"
                  label
                  >{{ chip.tag }}
                </v-chip>
              </v-card>
            </v-timeline-item>
            <!-- <v-timeline-item hide-dot></v-timeline-item> -->

            <v-timeline-item
              color="accent"
              icon="fas fa-user-graduate"
              fill-dot
              large

            >
              <v-card flat class="my-4" id="ecr">
                <v-card-title> Graduate Students </v-card-title>
                <v-chip
                  v-for="(chip, index) in chips.Graduate"
                  :key="index"
                  color="accent"
                  class="ma-1"
                  :to="chip.path"
                  label
                  >{{ chip.tag }}
                </v-chip>
              </v-card>
            </v-timeline-item>

            <!-- <v-timeline-item hide-dot></v-timeline-item> -->

            <v-timeline-item
              color="accent"
              fill-dot
              icon="fas fa-user-md"
              large
            >
              <v-card flat class="my-4" id="pi">
                <v-card-title> Early Career Researchers </v-card-title>
                <v-chip
                  v-for="(chip, index) in chips.ECR"
                  :key="index"
                  color="accent"
                  class="ma-1"
                  :to="chip.path"
                  label
                  >{{ chip.tag }}
                </v-chip>
              </v-card>
            </v-timeline-item>

            <v-timeline-item
              color="accent"
              fill-dot
              icon="fas fa-chalkboard-teacher"
              large
            >
              <v-card flat class="my-4 pb-14">
                <v-card-title class="h3">
                  Principal Investigators
                </v-card-title>
                <v-chip
                  v-for="(chip, index) in chips.PI"
                  :key="index"
                  color="accent"
                  class="ma-1"
                  :to="chip.path"
                  label
                  >{{ chip.tag }}
                </v-chip>
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
};
</script>


<style lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.how-it-works.row .col-2.full-right:after {
  height: 100%;
  left: calc(50% - 3px);
}
</style>