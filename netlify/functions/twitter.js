const axios = require("axios");
const twitter = require("twitter-text");

exports.handler = async (event, context, callback) => {
  const instance = axios.create({
    baseURL: "https://api.twitter.com",
  });

  const user_id = process.env.GRIDSOME_TWITTER_ID;
  const username = process.env.GRIDSOME_CONSUMER_KEY;
  const password = process.env.GRIDSOME_CONSUMER_SECRET;
  const auth_url = "/oauth2/token";
  const url = `/2/users/${user_id}/tweets`;

  const {
    data: { access_token },
  } = await instance({
    method: "POST",
    url: auth_url,
    auth: {
      username,
      password,
    },
    params: {
      grant_type: "client_credentials",
    },
  });

  await instance({
    method: "GET",
    url,
    params: {
      "user.fields": "name,profile_image_url,username",
      max_results: 10,
      "tweet.fields": "author_id,created_at,referenced_tweets,attachments", // public_metrics
      expansions:
        "attachments.media_keys,author_id,referenced_tweets.id.author_id,referenced_tweets.id",
      exclude: "retweets,replies",
      "media.fields": "preview_image_url,type,alt_text,url",
    },
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "v2UserTweetsJS",
      Authorization: `Bearer ${access_token}`,
    },
  }).then(({ data }) => {
    console.log(data);
    const { media, users, tweets } = data.includes;
    let parsed_tweets = [];
    for (const item of data.data) {
      item["text"] = twitter.autoLink(item["text"]);
      item["created_at"] = new Date(item["created_at"]).toLocaleDateString(
        "en-US",
        { month: "short", day: "numeric", year: "numeric" }
      );
      // item['attachments'] = media.find(t => t['media_key'] === item['attachments']['media_keys'][0]);

      // item.author_id = users.find(t => t.id === item['author_id']);
      // item.referenced_tweets = tweets.find(t => t.id === item['referenced_tweets']['id'])
      parsed_tweets.push(item);
    }

    let referenced_tweets = [];

    for (const rt of tweets) {
      rt["text"] = twitter.autoLink(rt["text"]);
      rt["created_at"] = new Date(rt["created_at"]).toLocaleDateString(
        "en-US",
        { month: "short", day: "numeric", year: "numeric" }
      );
      referenced_tweets.push(rt);
    }
    response = { referenced_tweets, tweets: parsed_tweets, users, media };
    callback(null, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      statusCode: 200,
      body: JSON.stringify(response),
    });
  });
};
