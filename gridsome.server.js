// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const nodeExternals = require('webpack-node-externals')
const axios = require("axios");
module.exports = function (api) {
  api.chainWebpack((config, { isServer }) => {
    
    if (isServer) {
      config.externals([
        nodeExternals({
          whitelist: [/^vuetify/]
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
  
  api.loadSource(async({ addCollection }) => {
    const collection = addCollection("Tweets");
    let user_id = "1429908995721027594"
    let url = `https://api.twitter.com/2/users/${user_id}/tweets`
    const { data } = await axios.get(url, {
      params: {
        expansions: 'author_id',
        'tweet.fields': 'id,created_at,text',
        'user.fields': 'name,profile_image_url'
      },
        headers: {
          Authorization: `Bearer ${process.env.GRIDSOME_BEARER_TOKEN}`,
        },
    });
    console.log(data.includes.users[0])
    for (const tweet of data.data) {
      
      collection.addNode({...tweet, ...data.includes.users[0]})
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}