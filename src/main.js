import Vuetify from "vuetify/lib/framework";
import "vuetify/dist/vuetify.min.css";
import DefaultLayout from "~/layouts/Default.vue";
// import "~/assets/styles.scss"

export default function(Vue, { appOptions, head }) {
  // head.link.push({
  //   rel: "stylesheet",
  //   href: "https://fonts.googleapis.com/icon?family=Material+Icons",
  // });
  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.10.2/css/all.css",
  });
  const opts = {
    icons: {
      iconfont: "fa",
    },
    theme: {
      themes: {
        light: {
          primary: "#008ee8",
          secondary: "#b9ddfc",
          accent: "#ff9703",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  };
  Vue.use(Vuetify);

  appOptions.vuetify = new Vuetify(opts);

  Vue.component("Layout", DefaultLayout);
}
