<template>
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
</template>

<script>
import table from "~/data/gear/table.yaml";
export default {
  data: () => ({
    table,
  }),
  methods: {
    selectItem({ name, url }) {
      if (url) window.open(url);
    },
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
