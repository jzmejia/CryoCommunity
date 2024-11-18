<template>
  <v-container>
    <v-card-title>
      Gear Sharing
    </v-card-title>
    <v-card-subtitle>
      A new resource to lend and borrow cold weather gear, view packing lists, and share information between cryospheric scientists.
    </v-card-subtitle>
    <v-card-text>
      A need for connection to resources regarding gear sharing, packing lists,
      and a list of local used gear shops. To address this need, CryoCommunity is
      developing a gear sharing database that will directly connect individuals 
      seeking to borrow gear to those willing to lend gear. Region or
      discipline-specific packing lists for fieldwork are also being collected 
      for community use and availability.
    </v-card-text>
    <v-row>
	
			<Request/>

      <v-col cols="12" lg="4" v-for="(item, idx) in gearCards" :key="idx">
        <v-card height="450">
          <div v-if="idx === 0">
          <v-img
            src="/fieldwork.jpg"
            height="200px"
           cover
          ></v-img>
          </div>
          <div v-else>
            <v-img
            src="/tents.jpg"
            height="200px"
           cover
          ></v-img>
          </div>
          <v-card-title class="py-2">
            {{ item }}
            <!-- <v-btn @click="toggle" class="ml-auto" icon
              ><v-icon v-if="!isActive">mdi-plus</v-icon
              ><v-icon v-else>mdi-minus</v-icon></v-btn
            > -->
          </v-card-title>
          <v-divider />
          <v-sheet>
            <component :is="item"></component>
          </v-sheet>
        </v-card>
      </v-col>
    </v-row>

      <v-col cols="12">
        <Table />
      </v-col>

      <v-col cols="12">
        <FAQ />
      </v-col>
    <!-- </v-row> -->
  </v-container>
</template>

<page-query>
  query MyData {
    sheets: allGoogleSheet {
      edges {
        node {
          id
        }
      }
    }
  }
</page-query>

<script>
export default {
  name: "Gear",
  data: () => ({
    isActive: false,
    gearCards: ["Lend", "Resources"],
    gearImgs: ["/fieldwork.jpg","/tents.jpg"],
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
