// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");

const fs = require("fs");
const yaml = require("js-yaml");

const fileContents = fs.readFileSync("./src/data/resources.yml", "utf8");
const resources = yaml.load(fileContents);

module.exports = (api) => {
  api.chainWebpack((config, { isServer }) => {
    config.plugin("vuetify-loader").use(VuetifyLoaderPlugin);
  });

  api.loadSource(({ addCollection }) => {
    const collection = addCollection({
      typeName: "Resources",
    });

    resources.map((item) => {
      item.items.map((obj) => {
        obj.resources.map((n) => {
          collection.addNode(n);
        });
      });
    });
  });

  // api.createPages(({ createPage }) => {
  // Use the Pages API here: https://gridsome.org/docs/pages-api/
  // })
};
