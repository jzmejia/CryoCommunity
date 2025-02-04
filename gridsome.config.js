// project configuration and plugin options
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

module.exports = {
  siteName: "CryoCommunity",
  siteDescription: "fostering inclusivity within the cryospheric sciences",
  siteUrl: "https://cryocommunity.org/",
  icon: "./src/assets/favicon/apple-touch-icon.png",
  templates: {
    Article: "/projects/:title",
    Tag: "/tag/:id",
  },
  metadata: {
    // Display an important message below the navbar of the website.
    // Restart server in dev.
    bannerStatus: false,
  },
  chainWebpack: (config) => {
    config.plugin("vuetify-loader").use(VuetifyLoaderPlugin);
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  plugins: [
    // {
    //   use: "gridsome-plugin-gtag",
    //   options: {
    //     config: {
    //       id: process.env.GOOGLE_ANALYTICS_ID,
    //     },
    //   },
    // },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "articles/**/*.md",
        typeName: "Article",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
          plugins: [["gridsome-plugin-remark-youtube", { align: "auto" }]],
        },
        refs: {
          tags: {
            typeName: "Tag",
            create: true,
          },
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/data/hero.yml",
        typeName: "Hero",
        // resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/data/team.yml",
        typeName: "Team",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },

    // {
    //   use: "gridsome-source-google-sheets",
    //   options: {
    //     sheetId: process.env.GRIDSOME_GOOGLE_SHEET_ID,
    //     apiKey: process.env.GRIDSOME_GOOGLE_SHEET_API_KEY,
    //   },
    // },

    // {
    //   use: "@gridsome/source-filesystem",
    //   options: {
    //     path: "src/data/resource/**/*.yml",
    //     typeName: "Resource",
    //     resolveAbsolutePaths: true,
    //     remark: {
    //       externalLinksTarget: "_blank",
    //       externalLinksRel: ["nofollow", "noopener", "noreferrer"],
    //     },
    //   },
    // },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/data/resources.yml",
        typeName: "Resource",
        // resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    // {
    //   use: '@gridsome/source-filesystem',
    //   options: {
    //     path: 'blog/**/*.md',
    //     route: '/blog/:year/:month/:day/:slug',
    //     remark: {
    //       plugins: [
    //         ['gridsome-plugin-remark-youtube']
    //       ]
    //     }
    //   }
    // },
    // {
    //   use: `gridsome-plugin-netlify-cms`,
    //   options: {
    //     publicPath: `/admin`,
    //     modulePath: `src/admin/index.js`,
    //   },
    // },
    // {
    //   use: "gridsome-plugin-flexsearch",
    //   options: {
    //     searchFields: ["name", "description","url"],
    //     collections: [
    //       {
    //         typeName: "Resources",
    //         indexName: "Resources",
    //         fields: ["name", "description", "url", "tags"],
    //       },
    //     ],
    //   },
    // },
  ],

  // css: {
  //   loaderOptions: {
  //     scss: {
  //       prependData: '@import "./src/style/styles.scss";'
  //     }
  //   }
  // },

  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
