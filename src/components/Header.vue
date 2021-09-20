<template>
  <span>
    <v-app-bar
      app
      dense
      elevate-on-scroll
      :style="{
        backdropFilter: 'blur(2px) !important',
        background: '#ffffffd0 !important',
      }"
    >
      <v-toolbar-title>
        <g-link
          to="/"
          class="
            d-flex
            justify-center
            align-center
            text-decoration-none
            black--text
          "
        >
          <img
            class="mr-2"
            src="/Cryo_Community_Logo_no_color.png"
            height="40"
          />

          {{ $static.metadata.siteName }}
        </g-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn v-if="$vuetify.breakpoint.smAndDown" @click="collapse = true" color="black" icon>
        <v-icon>fa-bars</v-icon>
      </v-btn>
      <v-toolbar-items v-else>
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          text
          class="transparent"
          exact-active-class="primary--text"
          :to="item.path"
          >{{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
      app
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="collapse"
      
      right
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img
            contain
            src="/Cryo_Community_Logo_no_color.png"
            height="35px"
          />
        </v-list-item-avatar>
        {{ $static.metadata.siteName }}

      </v-list-item>

      <v-divider></v-divider>

      <v-list nav>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          exact
          :to="item.path"
        >
          <!-- <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon> -->

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </span>
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
