<template>
  <nav>
    <v-app-bar
      dark
      color="primary"
    >
      <v-app-bar-nav-icon
        class="d-flex d-sm-none"
        @click="toggle"
      ></v-app-bar-nav-icon>
      <v-btn text large href="/">
        <g-image src="~/assets/snowflakes-white.png" height="40" width="32" class="mr-5" />
        {{
          $static.metadata.siteName
        }}
      </v-btn>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>fa-search</v-icon>
      </v-btn>
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn text to="/">Home</v-btn>
        <v-btn text to="/about">About</v-btn>
        <v-btn text to="/projects">Projects</v-btn>
        <v-btn text to="/resources">Resources</v-btn>
        <v-btn text to="/contact">Contact</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      absolute
      v-model="collapse"
      :mini-variant.sync="mini"
      class="d-flex d-sm-none dark"
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
    </v-navigation-drawer>
  </nav>
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
        { title: "Home", icon: "fa-home", path: "/" },
        { title: "About", icon: "fa-user-astronaut", path: "/about" },
        { title: "Projects", icon: "fa-newspaper", path: "/projects" },
        { title: "Contact", icon: "fa-envelope", path: "/contact" }
      ],
      mini: false
    };
  },
  methods: {
    toggle() {
      this.collapse = !this.collapse;
    }
  }
};
</script>
