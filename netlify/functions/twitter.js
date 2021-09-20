const axios = require("axios");

exports.handler = async (event, context) => {
    let tweets = [];
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

    for (const tweet of data.data) {
        let user = data.includes.users[0]        
        delete user.id
        tweets.push({ ...tweet, ...user })
    }
    return {
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        statusCode: 200,
        body: JSON.stringify({ ...tweets })
    };
}