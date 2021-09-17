// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')
// const axios = require("axios");
module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    
    if (isServer) {
      config.externals([
        nodeExternals({
          allowlist: [/^vuetify/]
        })
      ])
    }
    // config.devServer
    //       .public("localhost:8080")
    //       .host("localhost")
    //       .port(8080)
    //       .hotOnly(true)
    //       .watchOptions({ poll: 1000 })
    //       .https(false)
    //       .disableHostCheck(true)
    //       .headers({ "Access-Control-Allow-Origin": ["*"] });
  })
  
  // api.loadSource(async({ addCollection }) => {

  // })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}