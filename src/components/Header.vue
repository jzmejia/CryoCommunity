<template>
  <!-- <div> -->
    <v-app-bar
      app
      dense
      elevate-on-scroll
      :style="{
        backdropFilter: 'blur(2px) !important',
        background: '#ffffffd0 !important',
      }"
    >
      <!-- <v-app-bar-nav-icon
        @click="toggle"
      ></v-app-bar-nav-icon> -->
      <v-toolbar-title>
      <!-- <v-btn text href="/" tile> -->
        <!-- <g-image src="~/assets/snowflakes-white.png" height="40" width="32" class="mr-5"/> -->
        {{ $static.metadata.siteName }}
      <!-- </v-btn> -->
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon>fa-search</v-icon>
      </v-btn> -->
      <v-toolbar-items>
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          
          text
          :to="item.path"
          >{{ item.title }}</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
    <!-- <v-navigation-drawer
      app
      absolute
      v-model="collapse"
      :mini-variant.sync="mini"
    >
      <v-list-item>
        <v-list-item-avatar>
          <g-image src="~/assets/cryo-logo.png"></g-image>
        </v-list-item-avatar>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>fa-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :href="item.path"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  <!-- </div> -->
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      collapse: false,
      items: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Projects", path: "/projects" },
        { title: "Resources", path: "/resources" },
        { title: "Contact", path: "/contact" },
      ],
      mini: false,
    };
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse;
    },
  },
};
</script>
