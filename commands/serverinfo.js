const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
        var embed = new Discord.MessageEmbed()
        .setTitle(text.current.server.title1)
        .setDescription(text.current.server.title2)
        .addField(text.current.server.guild, message.guild.name)
        .addField(text.current.server.owner, message.guild.owner)
        .addField(text.current.server.created, message.guild.createdAt)
        .addField(text.current.server.joined, message.member.joinedAt)
        .addField(text.current.server.users, message.guild.memberCount)
        .setThumbnail(message.guild.iconURL())
        .setColor("0x00DD00")
        .setFooter(`${text.current.invite.requested}${message.author.username}`)
    message.channel.send(embed);
    console.log(`${message.author.username} dans "${message.guild}" : g/server`);
}