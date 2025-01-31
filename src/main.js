// import Vuetify from 'vuetify'
// import Vuetify from 'vuetify/lib/framework';
// import 'vuetify/dist/vuetify.min.css'

import Vuetify from 'vuetify/lib'
import DefaultLayout from '~/layouts/Default.vue'

import VueClipboard from 'vue-clipboard2'
import DynamicMarquee from 'vue-dynamic-marquee';
import '@mdi/font/css/materialdesignicons.css'

export default function(Vue, { appOptions, head }) {
  // head.link.push({
  //   rel: "stylesheet",
  //   href: "https://use.fontawesome.com/releases/v5.10.2/css/all.css",
  // });
  const opts = {
    theme: {
      themes: {
        dark: {
          primary: "#008ee8",
          secondary: "#ff9703",
          accent: "#ff9703",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
        light: {
          primary: "#008ee8",
          secondary: "#ff9703",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  };

  Vue.use(VueClipboard)
  
  Vue.use(Vuetify);
  
  appOptions.vuetify = new Vuetify(opts);

  Vue.component('dynamic-marquee', DynamicMarquee);
  
  Vue.component("Layout", DefaultLayout);
}
