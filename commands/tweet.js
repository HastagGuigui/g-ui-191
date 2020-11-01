const Discord = require('discord.js')
const Twitter = require('twitter')

exports.run = (bot, message, args, text) => {
    if (message.author.id != "448560475987509268") return;
    var twitterClient = new Twitter({
        consumer_key: 'never gonna make you cry',
        consumer_secret: 'never gonna say goodbye',
        access_token_key: '1205918998585589760-orQ5IqrMUvev8jwjSFT0qTzxFXcdSs',
        access_token_secret: 'usGX3uqAjY7c09boHPvvWd1UtAc4IpYbzC2AzdNkGhvUa'
    });

    var params = {screen_name: 'nodejs'};
    twitterClient.post('statuses/update', {status: args.join(' ')},  function(error, tweet, response) {
        var date = Date()
        dateString = date.toString()
        if(error) throw error;
        var completeTweet = JSON.parse(response.body)
        var embeddedTweet = new Discord.MessageEmbed()
            .setTitle(completeTweet.user.name, `${text.current.tweet.from}[${JSON.stringify(response.body.rel)}](https://help.twitter.com/fr/using-twitter/how-to-tweet?lang=browser#source-labels)`)
            .setDescription(completeTweet.text)
            .setFooter(dateString, completeTweet.user.profile_image_url_https)
        message.channel.send(text.current.tweet.ok, embeddedTweet);  // Tweet body.
    })
}

//
