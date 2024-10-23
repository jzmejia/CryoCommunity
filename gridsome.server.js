// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
// const nodeExternals = require('webpack-node-externals')
// const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
// const fs = require("fs");
// const yaml = require("js-yaml");

// const fileContents = fs.readFileSync("./src/data/resources2.yml", "utf8");
// const resources = yaml.load(fileContents);

// const { readFile, access, ensureDirSync } = require("fs-extra");
// const createImage = require("node-html-to-image");
// const generateHtml = require("./functions/generateHtml");

// const defaultOptions = {
//   typeName: "Article", // This should be the typeName noted above 📝
//   backgroundColors: [
//     "#0014FF",
//     "#06283D",
//     "#1363DF",
//     "#001D6E",
//     "#2D31FA",
//     "#051367",
//     "#0028FF",
//   ],

//   imgWidth: 1024, // The width of your cover image
//   imgHeight: 512, // The height of your cover image
//   border: true, // I hard coded this to true in my html
//   domain: "cryocommunity.org", // Edmund includes this in their generated images
//   outputDir: "covers", // Where the cover images should be generated to
// };

module.exports = (api) => {
  // api.chainWebpack((config, { isServer }) => {
  //   config.plugin("vuetify-loader").use(VuetifyLoaderPlugin);
  //   const svgRule = config.module.rule("svg");
  //   svgRule.uses.clear();
  //   svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  // });

  // const options = { ...defaultOptions };
  // api.loadSource(async (actions) => {
  //   const collection = actions.getCollection(options.typeName);

  //   console.log("Generating Missing Cover Images");
  //   collection.data().forEach((node) => {
  //     if (node.internal.typeName === options.typeName) {
  //       const imgName = node.fileInfo.name;

  //       ensureDirSync(options.outputDir);
  //       const output = `${options.outputDir}/${imgName}.png`;
  //       access(output, (error) => {
  //         if (error) {
  //           createImage({
  //             output,
  //             quality: 100,
  //             html: generateHtml(node.title, node.subtitle || "", options),
  //           }).then(() =>
  //             console.log(`${imgName}.png was created successfully!`)
  //           );
  //         } else {
  //           console.log(`${output} already exists`);
  //         }
  //       });
  //     }
  //   });
  // });

  // api.loadSource(async (actions) => {
  //   const collection = actions.getCollection("Resource");
  //   collection.data().forEach((node) => {
  //     d = node.data.map(({image})=>image)
  //   });
  // });

  // api.chainWebpack((config, { isServer }) => {
  //   if (isServer) {
  //     config.externals([
  //       nodeExternals({
  //         allowlist: [/^vuetify/]
  //       })
  //     ])
  //   }
  // })

  // api.loadSource(({ addCollection, addSchemaTypes }) => {
  //   addSchemaTypes(`
  //     type ResourceItem implements Node @infer {
  //       id: ID!
  //       name: String
  //       url: String
  //       description: String
  //       tags: [String]
  //       twitter: String
  //     }
  //     type Item implements Node @infer {
  //       id: ID!
  //       title: String
  //       resources: [ResourceItem]
  //     }
  //     type Resource implements Node @infer {
  //       id: ID!
  //       tab: String
  //       slug: String
  //       image: Image
  //       items: [Item]
  //     }
  //   `);

  //   const resource = addCollection("Resource");
  //   const item = addCollection("Item");
  //   const resourceItem = addCollection("ResourceItem");

  //   let idx = 0;
  //   let jdx = 0
  //   let kdx = 0

  //   resource.addReference('items', 'Item')
  //   item.addReference('resources', 'ResourceItem')

  //   resources.forEach((i) => {
  //     let jList = []
  //     i.items.map((j) => {
  //       let tempj = ++jdx
  //       jList.push(tempj)

  //       let kList = []
  //       j.resources.map(k => {
  //         let tempk = ++kdx
  //         kList.push(tempk)
  //         resourceItem.addNode({
  //           id: tempk,
  //           name: k.name,
  //           url: k.url,
  //           description: k.description || "" ,
  //           twitter: k.twitter,
  //           tags: k.tags,
  //         });
  //       })
  //       item.addNode({ id: tempj, title: j.title, resources: kList });
  //     });
  //     resource.addNode({ id: ++idx, tab: i.tab, slug: i.slug, image: i.image, items: jList });
  //   });
  // });
};
