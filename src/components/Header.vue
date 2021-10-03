<template>
  <div>
    <v-app-bar
      app
      dense
      :style="{
        backdropFilter: 'blur(2px) !important',
      }"
      :color="dark ? '#121212d0' : '#ffffffd0'"
      elevate-on-scroll
    >
      <g-link
        to="/"
        class="
            text-decoration-none
            text--primary
            text-h5
            font-weight-black
          "
        exact
      >
        <v-avatar left rounded width="35" height="35">
          <v-img
            :src="
              dark
                ? '/cryocommunity_logo_dark.png'
                : '/cryocommunity_logo_light.png'
            "
            contain
            height="35"
            width="32"
          />
        </v-avatar>
        {{ $static.metadata.siteName }}
      </g-link>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme" class="text-h3">
        <svg
          v-if="dark"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-moon"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-sun"
        >
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
      </v-btn>
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click="collapse = true"
      ></v-app-bar-nav-icon>
      <v-btn-toggle group dense v-else active-class="primary--text">
        <v-btn
          v-for="(item, index) in items"
          :key="index"
          :to="item.path"
          exact
          small
          depressed
          >{{ item.title }}
        </v-btn>
      </v-btn-toggle>
    </v-app-bar>

    <v-navigation-drawer
      v-model="collapse"
      app
      right
      temporary
      floating
      :width="smAndDown ? '100vw' : ''"
      :color="dark ? 'black' : ''"
    >
      <v-toolbar dense flat :color="dark ? 'black' : ''">
        <g-link
          to="/"
          class="
            text-decoration-none
            text--primary
            text-h5
            font-weight-black
          "
        >
          <v-avatar left rounded width="35" height="35">
            <v-img
              :src="
                dark
                  ? '/cryocommunity_logo_dark.png'
                  : '/cryocommunity_logo_light.png'
              "
              contain
              height="35"
              width="32"
            />
          </v-avatar>
          {{ $static.metadata.siteName }}
        </g-link>
        <v-spacer />
        <v-btn icon large @click="collapse = false">
          <v-icon>fa-times</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list tile subheader>
        <v-list-item-group active-class="primary--text">
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :to="item.path"
            exact
          >
            <v-list-item-content>
              <v-list-item-title class="text-h3 font-weight-black"
                >{{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
  pages: allPage {
    path
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      toggle_exclusive: 0,
      isDark: false,
      collapse: false,
      items: [
        { title: "Home", path: "/" },
        { title: "Our Team", path: "/team/" },
        { title: "About", path: "/about/" },
        { title: "Projects", path: "/projects/" },
        { title: "Resources", path: "/resources/" },
        { title: "Contact", path: "/contact/" },
      ],
      mini: false,
    };
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
  },
  mounted() {
    const body = document.getElementsByTagName("body")[0];
    if (localStorage.getItem("dark")) {
      const theme = JSON.parse(localStorage.getItem("dark"));
      if (theme) {
        this.isDark = theme;
        body.className = "darkTheme";
        this.$vuetify.theme.dark = true;
      } else {
        this.isDark = theme;
        body.className = "lightTheme";
        this.$vuetify.theme.dark = false;
      }
    } else {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          if (e.matches) {
            this.isDark = true;
            body.className = "darkTheme";
            this.$vuetify.theme.dark = true;
          } else {
            this.isDark = false;
            body.className = "lightTheme";
            this.$vuetify.theme.dark = false;
          }
        });
    }
  },
  methods: {
    toggleTheme() {
      const body = document.getElementsByTagName("body")[0];
      this.isDark = !this.isDark;
      body.className = this.isDark ? "darkTheme" : "lightTheme";
      localStorage.setItem("dark", this.isDark);
      this.$vuetify.theme.dark = this.isDark;
    },
    toggle() {
      this.collapse = !this.collapse;
    },
  },
};
</script>

<style>
.darkTheme {
  background-color: #121212 !important;
}
.lightTheme {
  background-color: #ffffff !important;
}
</style>
