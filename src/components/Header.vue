<template>
  <span>
    <v-app-bar
      app
      dense
      elevate-on-scroll
      :style="{
        backdropFilter: 'blur(2px) !important',
      }"
      color="#ffffffd0"
    >
      <g-link
        to="/"
        class="
            d-flex
            justify-center
            align-center
            text-decoration-none
            text--primary
            text-h5
          "
      >
        <v-img
          class="mr-2"
          src="/Cryo_Community_Logo_no_color.png"
          width="30"
          contain
        />

        {{ $static.metadata.siteName }}
      </g-link>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.mobile"
        @click="collapse = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-items v-else>
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          text
          exact-active-class="black white--text"
          :to="item.path"
          >{{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-navigation-drawer
      v-model="collapse"
      app
      right
      temporary
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
      <v-list tile subheader>
        <v-list-item-group active-class="primary--text">
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
        </v-list-item-group>
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
        { title: "Our Team", path: "/team" },
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
