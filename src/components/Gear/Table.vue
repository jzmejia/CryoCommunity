<!-- <template>
  <div>
    <v-card-title>Gear Library</v-card-title>
    <v-data-table
      dense
      sort-by="name"
      hide-default-footer
      @click:row="selectItem"
      :headers="table.headers"
      :items="table.data"
      :items-per-page="5"
      class="elevation-1 "
    >
    </v-data-table>
  </div>
</template> -->

<template>
  <div>
    <v-card-title>Gear Library</v-card-title>
    <v-simple-table light>
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="(item, thId) in tableHeaders" :key="thId">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td v-for="(item, tdId) in tableData" :key="tdId">{{ item }}</td>
          </tr>
          <tr>
            <td v-for="(item, tdId) in tableData2" :key="tdId">{{ item }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>
<!-- https://docs.google.com/spreadsheets/d/17yhJivJzU526hdAFKWWxq6S7nrTDBYPx25libBDPioI/edit?gid=84482305#gid=84482305
https://docs.google.com/spreadsheets/d/e/2PACX-1vSC-EGjlqgKIfnqtGt5u_4j8pi1taAJaItGX2Gy2mwPKv2nF8imBHn-rlwafFGI6pQQaVS-Zk4WHhVr/pubhtml# -->
<script>
import axios from "axios";
import table from "~/data/gear/table.yaml";
export default {
  data: () => ({
    spreadSheetUrl: `https://sheets.googleapis.com/v4/spreadsheets/${process.env.GRIDSOME_PUBLISHED_ID}/values/Gear Availability!A1%3AZZ10000`,
    newUrl:
      "https://docs.google.com/spreadsheets/d/17yhJivJzU526hdAFKWWxq6S7nrTDBYPx25libBDPioI/gviz/tq?tqx=out:csv&gid=898670185&tq",
    table,
    tableData: null,
    tableHeaders: null,
  }),
  computed: {
    sheet() {
      return this.$page.sheets.edges.node;
    },
  },
  methods: {
    selectItem({ name, url }) {
      if (url) window.open(url);
    },
    async getSpreadSheet() {
      return await axios
        .get(this.spreadSheetUrl, {
          params: {
            key: process.env.GRIDSOME_GOOGLE_SHEET_API_KEY,
            majorDimension: "ROWS",
          },
        })
        .then((res) => {
          this.tableHeaders = res.data.values[0];
          this.tableData = res.data.values[1];
          this.tableData2 = res.data.values[2];
        });
    },
  },
  async mounted() {
    await this.getSpreadSheet();
  },
};
</script>

<style scoped>
:deep(.v-data-table__wrapper tbody) {
  display: block;
  max-height: 300px;
  overflow-y: auto;
}

:deep(.v-data-table__wrapper thead),
:deep(.v-data-table__wrapper tbody tr) {
  display: table;
  width: 100%;
  table-layout: fixed;
}

/* .v-data-table__wrapper table {
	display: flex !important;
	flex-direction: column;
	width: 100%;
} */

/* .v-data-table__wrapper tbody {
	height: 50px !important;
	overflow: auto !important;
	flex-grow: 1;
} */
</style>

