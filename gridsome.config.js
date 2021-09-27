// project configuration and plugin options

module.exports = {
  siteName: "CryoCommunity",
  siteUrl: "https://cryocommunity.org/",
  templates: {
    Article: "/:title",
    Tag: "/tag/:id",
  },
  plugins: [
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
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
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
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`,
      },
    },
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"],
    },
  },
};
