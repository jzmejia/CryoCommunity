<template>
  <v-app-bar app dense :style="{
    backdropFilter: 'blur(3px)',
  }" :color="dark ? '#121212d0' : '#ffffffd0'" flat clipped-right>
    <v-avatar to="/" left rounded height="34" width="30">
      <g-image :src="dark
        ? '/cryocommunity_logo_dark.png'
        : '/cryocommunity_logo_light.png'
        " immediate />
    </v-avatar>

    <g-link to="/" class="text-decoration-none text--primary text-h5 font-weight-bold">
      {{ $static.metadata.siteName }}
    </g-link>

    <v-spacer />

    <ThemeToggle />

    <v-btn v-if="mobile" icon plain :ripple="false" @click.prevent="$emit('update:collapse', !collapse)">
      <component aria-hidden :is="!collapse ? 'Menu' : 'Close'" />
    </v-btn>

    <span v-if="!mobile">
      <v-btn-toggle active-class="primary--text" group dense>
        <v-btn v-for="(item, index) in items" :key="index" :to="{ path: item.path, params: { collapse: false } }" small
          depressed exact>
          {{ item.title }}
        </v-btn>

        <!-- <v-menu bottom tile content-class="elevation-2" offset-y offset-x>
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" small depressed> Resources </v-btn>
          </template>

<v-list subheader color="primary--text" dense>
  <v-list-item to="/resources" exact>
    <v-list-item-title>View All</v-list-item-title>
  </v-list-item>
  <v-divider></v-divider>
  <v-list-item v-for="{ tab, slug } in resources" :key="slug" tag="a" :to="`/resources#${slug}`" exact>
    <v-list-item-title>{{ tab }}</v-list-item-title>
  </v-list-item>
</v-list>
</v-menu> -->
      </v-btn-toggle>
    </span>
  </v-app-bar>
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
  props: {
    collapse: {
      deafult: null,
      required: true,
    },
  },
  components: {
    Menu: () => import("~/assets/svgs/menu.svg"),
    Close: () => import("~/assets/svgs/close.svg"),
    ThemeToggle: () => import("~/components/ThemeToggle"),
  },
  data() {
    return {
      items: [
        { title: "Home", path: "/" },
        // { title: "Our Team", path: "/team/" },
        { title: "About", path: "/about/" },
        { title: "Projects", path: "/projects/" },
        { title: "VICE Squads", path: "/vice/" },
        { title: "Stem Census", path: "/census/" },
        { title: "Resources", path: "/resources/" },
        { title: "Contact", path: "/contact/" },
      ],
    };
  },
  computed: {
    dark() {
      return this.$vuetify.theme.dark;
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
};
</script>
