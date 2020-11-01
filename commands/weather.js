const Discord = require('discord.js');
const weather = require('weather-js');

exports.run = (bot, message, args, text) => {
    if (!args[0]) return message.channel.send(text.current.weather.noArgs)
    weather.find({search: args.join(' '), degreeType: 'C', lang: 'en-US'}, function(err, result) {
        console.log('=====================')
        if(err) console.log(err);
        var nextDays = result[0].forecast
        var météo = new Discord.MessageEmbed()
            .setTitle(text.current.weather.title + result[0].location.name)
            .setThumbnail(result[0].current.imageUrl)
            .addField(text.current.weather.current + result[0].current.temperature + "°C", result[0].current.skytext)
            .setFooter('Yes it only works in english 🤷‍♀️')
        for (var i = 0; i < 5; i++) {
            console.log(nextDays[i].day + " (" + nextDays[i].date + ") :\n" + nextDays[i].low + "°C/" + nextDays[i].high + "°C \n" + nextDays[i].skytextday)
            météo.addField(nextDays[i].day + " (" + nextDays[i].date + ") :", nextDays[i].low + "°C/" + nextDays[i].high + "°C \n" + nextDays[i].skytextday)
        }
        message.channel.send(météo)
    });
}