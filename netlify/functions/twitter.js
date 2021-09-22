const axios = require("axios");
const twitter = require("twitter-text");

exports.handler = async (event, context) => {
  let tweets = [];

  const user_id = process.env.GRIDSOME_TWITTER_ID;
  const token = process.env.GRIDSOME_BEARER_TOKEN;

  let url = `https://api.twitter.com/2/users/${user_id}/tweets`;

  const { data } = await axios.get(url, {
    params: {
      "user.fields": "name,profile_image_url",
      max_results: 10,
      "tweet.fields": "attachments,created_at,public_metrics",
      expansions: "attachments.media_keys,author_id",
      exclude: "retweets,replies",
      "media.fields": "preview_image_url,height,width,type,alt_text,url",
    },
    headers: {
      "User-Agent": "v2UserTweetsJS",
      Authorization: `Bearer ${token}`,
    },
  });

  for (const tweet of data.data) {
    let media = data.includes.media;
    let user = data.includes.users[0];
    delete user.id;
    tweet.text = twitter.autoLink(twitter.htmlEscape(tweet.text));
    tweet["created_at"] = new Date(tweet.created_at).toLocaleDateString();
    tweets.push({ ...tweet, ...user, media });
  }

  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Credentials": true,
    },
    statusCode: 200,
    body: JSON.stringify(tweets),
  };
};
