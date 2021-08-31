import Vuetify from "vuetify";
import DefaultLayout from "~/layouts/Default.vue";

import "vuetify/dist/vuetify.min.css";
import colors from "vuetify/lib/util/colors";
import "~/assets/styles.scss"

export default function(Vue, { appOptions, head }) {
  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/icon?family=Material+Icons"
  });
  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.10.2/css/all.css"
  });

  const opts = {
    icons: {
      iconfont: "fa" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
    },
    // adjust the theme if you would like to
    theme: {
      themes: {
        light: {
          primary: "glacier500",
          secondary: "#0093F5",
          accent: "#FF600A",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107"
        }
      }
    }

  };
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
