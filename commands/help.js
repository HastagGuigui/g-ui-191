const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    var embed = new Discord.MessageEmbed()
        .setColor("0x00FF00")
        .setTitle(text.current.help.helptitle)
        .setFooter(`${message.author.username}`)
    var page = args[0]
    if (!page) {
        embed
            .addField(text.current.help.category.mod, 'g/ban | g/unban | g/kick | g/mute | g/unmute | g/clear')
            .addField(text.current.help.category.server, 'g/serverinfo | g/userinfo | g/money | g/level | g/desc')
            .addField(text.current.help.category.gd, 'g/gdlevel | g/gduser')
            .addField(text.current.help.category.imageManipulation, 'g/meirl | g/meme | g/profile | g/changestyle')
            .addField(text.current.help.category.random, 'g/8ball | g/calc | g/global | g/setglobal | g/invite | g/lang | g/subscribercount | g/help | g/weather | g/qod | g/ping | g/suggestions')
    }
    
    message.channel.send(embed);
    console.log(`${message.author.username} dans "${message.guild}" : g/help`);
}
