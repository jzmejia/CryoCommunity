<template>
  <v-container>
    <v-card-title>
      Gear Sharing
    </v-card-title>
    <v-card-subtitle>
      Sub Title
    </v-card-subtitle>
    <v-card-text>
      A need for connection to resources regarding gear sharing, packing lists,
      and a list of local used gear shops. To address this need, we are
      collaborating with CryoCommunity and Mariama Dryak with the Polar Science
      Early Career Community Office PSECCO to develop a gear sharing database
      through that will directly connect individuals seeking to borrow gear to
      those willing to lend gear. Additionally, any region or
      discipline-specific packing lists for fieldwork are being collected in a
      separate Google sheet and made available to the community.
    </v-card-text>
    <v-row>
			<v-col>
				<Request/>
			</v-col>

      <v-col cols="12" lg="4" v-for="(item, idx) in gearCards" :key="idx">
        <v-card height="400">
          <v-card-title class="py-2">
            {{ item }}
            <v-btn @click="toggle" class="ml-auto" icon
              ><v-icon v-if="!isActive">mdi-plus</v-icon
              ><v-icon v-else>mdi-minus</v-icon></v-btn
            >
          </v-card-title>
          <v-divider />
          <v-sheet>
            <component v-show="isActive" :is="item"></component>
          </v-sheet>
        </v-card>
      </v-col>

      <v-col cols="12">
        <Table />
      </v-col>

      <v-col cols="12">
        <FAQ />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Gear",
  data: () => ({
    isActive: false,
    gearCards: ["Lend", "Resources"],
  }),
  components: {
    FAQ: () => import("~/components/Gear/FAQ"),
    Table: () => import("~/components/Gear/Table"),
    Request: () => import("~/components/Gear/RequestForm"),
    Lend: () => import("~/components/Gear/Lend"),
    Resources: () => import("~/components/Gear/Resources"),
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style scoped>
.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}

.v-expansion-panels {
  display: flex !important;
  flex-direction: column;
}

.v-expansion-panel-content {
  flex-grow: 1;
  overflow: auto;
}

.v-sheet {
  flex-grow: 1;
  overflow: auto;
}
</style>
