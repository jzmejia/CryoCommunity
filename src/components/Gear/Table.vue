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
  <v-card>
    <v-card-title flat dense color="transparent">
      <v-toolbar-title>Gear Library</v-toolbar-title>
      <v-spacer />
      <v-chip-group v-model="selected" active-class="primary--text" mandatory>
        <v-chip v-for="item in sheetList" :key="item" :value="item" small>
          {{ item }}
        </v-chip>
      </v-chip-group>
    </v-card-title>

    <v-sheet v-for="(sheet, idx) in spreadsheetData" :key="idx">
      <v-simple-table
        v-if="sheet.range.includes(selected)"
        fixed-header
        height="350px"
        style="border-radius: 4;"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th v-for="(item, idh) in sheet.values[1]" :key="idh">
                {{ item }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idr) in sheet.values.slice(2)" :key="idr">
              <td v-for="(item, idx) in row" :key="idx">
                {{ item }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-sheet>
  </v-card>
</template>

<script>
import axios from "axios";
// import table from "~/data/gear/table.yaml";

const key = process.env.GRIDSOME_GOOGLE_SHEET_API_KEY;
const spreadsheetId = process.env.GRIDSOME_GOOGLE_SPREADSHEET_ID;
const baseURL = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}`;

const config = {
  baseURL,
  params: {
    key,
  },
};

const instance = axios.create(config);

export default {
  data: () => ({
    selected: null,
    sheetList: ["Gear Needs", "Gear Availability"],
    spreadsheetData: null,
  }),
  computed: {
    url() {
      return `/values:batchGet?${this.sheetList
        .map((item) => `ranges=${item}`)
        .join("&")}`;
    },
    // sheet() {
    //   return this.$page.sheets.edges.node;
    // },
  },
  methods: {
    // selectItem({ name, url }) {
    //   if (url) window.open(url);
    // },
    async getData() {
      const {
        data: { valueRanges },
      } = await instance.get(this.url);
      this.spreadsheetData = valueRanges;
    },
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<!-- <style scoped>
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

</style> -->

