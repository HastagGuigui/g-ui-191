const Discord = require('discord.js');
const request = require('request');

exports.run = (bot, message, args, text) => {
    if (message.author.id != '448560475987509268') return;
    request({url: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLgu-4-oMqRZVbgwbgzIo7A&fields=items/statistics/subscriberCount&key=AIzaSyCx7tSe-nVQxMtQogL4ieGW5-Rf7dPKP04`, json: true}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var subs = body.items[0].statistics.subscriberCount
            var setGame = `${args.join(' ')} | g/help | #Guigui has ${subs}/200 subscribers on youtube | Version 1.8.1`
            bot.user.setActivity(setGame);
            console.log(setGame)
            message.channel.send('Statut mis sur : **' + args.join(' ') + '**')
        }
    })

}