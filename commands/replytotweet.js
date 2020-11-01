const Discord = require('discord.js')
const Twitter = require('twitter')

exports.run = (bot, message, args, text) => {
    //1215981687596707843
    if (message.author.id != "448560475987509268") return;
    var twitterClient = new Twitter({
        consumer_key: 'never gonna give you up',
        consumer_secret: 'never gonna let you down',
        access_token_key: 'never gonna run around',
        access_token_secret: 'and desert you!'
    });
    console.log(args[1])

    if (!args[2] || !args[1].startsWith('@')) return message.channel.send(text.current.tweet.notEnoughArgs)

    var params = {screen_name: 'nodejs'};
    twitterClient.post('statuses/update', {status: args.slice(1).join(' '), in_reply_to_status_id: args[0]},  function(error, tweet, response) {
        var date = Date()
        dateString = date.toString()
        if(error) throw error;
        var completeTweet = JSON.parse(response.body)
        var embeddedTweet = new Discord.MessageEmbed()
            .setTitle(completeTweet.user.name + `, ${text.current.tweet.reply} [${args[1]}](https://twitter.com/${args[1].slice(1)})`)
            .setDescription(completeTweet.text)
            .setFooter(dateString, completeTweet.user.profile_image_url_https)
        message.channel.send(text.current.tweet.ok, embeddedTweet);  // Tweet body.
        console.log(completeTweet.user, completeTweet.text);  // Raw response object.
    })
}