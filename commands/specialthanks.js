const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    var Embed = new Discord.MessageEmbed()
        .setTitle(text.current.specialthanks.title)
        .addField(text.current.specialthanks.nitroBooster, "![IrisBenD]#9781")
        .addField(text.current.specialthanks.firstEnglishServer, "\"zeliots hang out / club house for everyone\", owned by Cameron the dragat#4962")
        .addField(text.current.specialthanks.firstInLeaderboard, "n1fffan#6536, level 13")
        .addField(text.current.specialthanks.nitroGifter, "Godwersming#9999")
    message.channel.send(Embed)
}