// import Vuetify from 'vuetify'
// import Vuetify from 'vuetify/lib/framework';
import Vuetify from 'vuetify/lib'

// import 'vuetify/dist/vuetify.min.css'
import DefaultLayout from '~/layouts/Default.vue'

// import colors from 'vuetify/lib/util/colors'

import VueClipboard from 'vue-clipboard2'
import DynamicMarquee from 'vue-dynamic-marquee';
import '@mdi/font/css/materialdesignicons.css'

export default function(Vue, { appOptions, head }) {
  // head.link.push({
  //   rel: "stylesheet",
  //   href: "https://use.fontawesome.com/releases/v5.10.2/css/all.css",
  // });
  const opts = {
    // icons: {
    //   iconfont: "fa",
    // },
    // icons: {
    //   iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    // },
    // treeShake: true,
    // options: {
    //   customProperties: true
    // },
    theme: {
      themes: {
        dark: {
          primary: "#008ee8",
          // primary: "#7CF5FF",
          // primary: colors.teal.accent4,

          // primary: "#033FFF",
          // primary: "#007fff",
          secondary: "#ff9703",
          // primary: "#b9ddfc",
          accent: "#ff9703",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
        light: {
          primary: "#008ee8",
          // primary: "#3DC2EC",
          // secondary: "#b9ddfc",
          secondary: "#ff9703",
          // accent: "#ff9703",
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
