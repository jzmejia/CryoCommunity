<template>
  <v-autocomplete
    prepend-inner-icon="mdi-magnify"
    search-input.sync="searchTerm"
    label="Find resources"
    :filter="customFilter"
    :items="resource"
    item-text="name"
    item-value="id"
    :menu-props="{
      nudgeBottom: 5,
    }"
    append-icon=""
    cache-items
    outlined
    dense
    flat
    solo
  >
    <template v-slot:item="{ item }">
      <v-list-item :href="item.url" target="_default">
        <v-list-item-content>
          <v-list-item-title class="text-wrap text-capitalize font-weight-bold">
            {{ item.name }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-wrap text-capitalize">
            {{ item.description }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-autocomplete>
</template>

<static-query>
query {
  resources: allResource {
    edges {
      node {
        data {
          items {
            resources {
              name
              url
              description
            }
          }
        }
      }
    }
  }
}
</static-query>

<script>

export default {
  data: () => ({
    searchTerm: null,
  }),
  computed: {
    data() {
      return this.$static.resources.edges[0].node.data;
    },
    resource() {
      let results = [];

      this.data.map(({ items }) => {
        items.map(({ resources }) => {
          resources.map(({ name, url, description }) => {
            results.push({
              name,
              description,
              url,
            });
          });
        });
      });

      return results;
    },
  },
  methods: {
    customFilter({ name, description }, queryText, itemText) {
      // let textTwo =
      //   typeof description === "string" ? description.toLowerCase() : "";
      let textTwo = description.toLowerCase();
      // let textOne = typeof name === "string" ? name.toLowerCase() : "";
      let textOne = name.toLowerCase();
      let searchText = queryText.toLowerCase();
      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
  },
};
</script>
