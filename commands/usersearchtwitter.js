/**/
const Discord = require('discord.js')
const Twitter = require('twitter')

exports.run = (bot, message, args, text) => {
    var twitterClient = new Twitter({
        consumer_key: 'KpbiCLPX6nVt9XUXPbYEooyoy',
        consumer_secret: 'DKVUa20JGZqx8XBAcIr84kbVfiMoCR3w0uDvdJzOGSO0Ql6XDw',
        access_token_key: '1205918998585589760-orQ5IqrMUvev8jwjSFT0qTzxFXcdSs',
        access_token_secret: 'usGX3uqAjY7c09boHPvvWd1UtAc4IpYbzC2AzdNkGhvUa'
    });
    
    twitterClient.cache.get('users/search', {q: args.join(" "), count: "5"}, function(error, users, response) {
        if (!error){
            var searchEmbed = new Discord.MessageEmbed()
            var résultats = JSON.parse(response.body[0])
            résultats.forEach(utilisateur => {
                
            });
            console.log(résultats);
            message.channel.send("Check les logs!")
        }else{
            console.log(error)
        }
    });
}