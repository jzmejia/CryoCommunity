<template>
  <v-navigation-drawer app v-model="collapse" right :width="mobile ? '100%' : ''"
    :color="dark ? '#121212d0' : '#ffffffd0'" floating temporary hide-overlay clipped :style="{
      backdropFilter: 'blur(3px)',
      top: $vuetify.application.top + 'px', zIndex: 4
    }">
    <!-- <v-toolbar dense flat :color="dark ? 'black' : ''">
      <v-avatar to="/" left rounded height="34" width="32">
        <g-image
        
        :src="
          dark
            ? '/cryocommunity_logo_dark.avif'
            : '/cryocommunity_logo_light.avif'
        "
        immediate
      />
      </v-avatar>
      <g-link
        to="/"
        class="text-decoration-none text--primary text-h5 font-weight-bold"
      >
        {{ $static.metadata.siteName }}
      </g-link>
      <v-spacer />
      <v-btn icon @click="$emit('update:collapse', false)">
        <CloseIcon />
      </v-btn>
    </v-toolbar> -->
    <v-list tile subheader>
      <v-list-item-group active-class="primary--text">
        <v-list-item tag="a" v-for="(item, index) in items" :key="index" :to="item.path" exact :ripple="false"
          @click="$emit('update:collapse', false)">
          <v-list-item-content>
            <v-list-item-title class="text-h4 font-weight-bold">{{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>

      <!-- <v-list-group no-action active-class="primary--text">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="text-h3 font-weight-bold"
                >Resources</v-list-item-title
              >
            </v-list-item-content>
          </template>
<v-list-item to="/resources/" exact>
  <v-list-item-title class="text-h5 text-capitalize">view all</v-list-item-title>
</v-list-item>
<v-list-item v-for="({ tab, slug }, idx) in resources" :key="idx" tag="a" :to="`/resources/#${slug}`">
  <v-list-item-content>
    <v-list-item-title class="text-h5">{{ tab }}</v-list-item-title>
  </v-list-item-content>
</v-list-item>

</v-list-group> -->
    </v-list>
  </v-navigation-drawer>
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
import CloseIcon from "~/assets/svgs/close.svg";

export default {
  props: {
    collapse: {
      deafult: false,
      required: true,
    },
  },
  components: {
    CloseIcon,
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
    toggle() {
      return this.collapse;
    },
    dark() {
      return this.$vuetify.theme.dark;
    },
    smAndDown() {
      return this.$vuetify.breakpoint.smAndDown;
    },
    mobile() {
      return this.$vuetify.breakpoint.mobile;
    },
  },
  beforeRouteLeave(to, from) {
    $emit('update:collapse', false);
    // called when the route that renders this component is about to be navigated away from.
    // As with `beforeRouteUpdate`, it has access to `this` component instance.
  },
};
</script>

<style></style>