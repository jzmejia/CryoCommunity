<template>
  <v-autocomplete
    solo
    :menu-props="{
      rounded: 'lg',
      nudgeBottom: 5,
    }"
    dense
    cache-items
    class="rounded-lg"
    outlined
    flat
    search-input.sync="searchTerm"
    item-text="name"
    append-icon=""
    label="Find a resource"
    :filter="customFilter"
    item-value="id"
    :items="resources"
  >
  <template v-slot:prepend-inner>
    <v-icon size="18" :color="dark ?'grey darken-1': 'primary'">fa-search</v-icon>
  </template>
    <template v-slot:item="{ item }">
      <v-list-item :href="item.url" target="_default">
        <v-list-item-content>
          <v-list-item-title
            style="width: 550px;"
            class="d-flex text-wrap text-break"
          >
            {{ item.name }}</v-list-item-title
          >
          <v-list-item-subtitle
            style="width: 550px;"
            class="d-flex text-wrap text-break"
            >{{ item.description }}</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<static-query>
query {
  resources: allResources {
    edges {
      node {
        description
        name
        url
      }
    }
  }
}
</static-query>

<script>
export default {
  data: () => ({
    searchTerm: "",
  }),
  computed: {
    dark (){
      return this.$vuetify.theme.dark;
    },
    resources() {
      return this.$static.resources.edges.map((item) => ({
        ...item.node,
      }));
    },
  },
  methods: {
    customFilter(item, queryText, itemText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.description.toLowerCase();
      const searchText = queryText.toLowerCase();
      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
  },
};
</script>
