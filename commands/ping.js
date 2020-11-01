const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    var pingembed = new Discord.MessageEmbed()
        .setTitle("Pong :)")
        .setDescription(`${text.current.ping.pong} **${message.createdTimestamp - Date.now()}ms**`)
        .setColor("0x00FF00")
    message.channel.send(pingembed);
}