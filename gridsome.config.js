// project configuration and plugin options
module.exports = {
  siteName: "CryoCommunity",
  siteDescription: "fostering inclusivity within the cryospheric sciences",
  siteUrl: "https://cryocommunity.org/",
  icon: './src/favicon/apple-touch-icon.png',
  templates: {
    Article: "/projects/:title",
    Tag: "/tag/:id",
  },
  plugins: [
    {
      use: "gridsome-plugin-gtag",
      options: {
        config: {
          id: process.env.GOOGLE_ANALYTICS_ID,
        },
      },
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "articles/**/*.md",
        typeName: "Article",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
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
        resolveAbsolutePaths: true,
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
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "src/data/resources.yml",
        typeName: "Resource",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"],
        },
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`,
      },
    },
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
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
