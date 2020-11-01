const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    var embed5 = new Discord.MessageEmbed()
        .setTitle(text.current.invite.links)
        .addField(text.current.invite.server, `[${text.current.invite.clickhere}](https://discord.gg/aJmXyrg)`)
        .addField(text.current.invite.invite, `[${text.current.invite.clickhere}](https://discordapp.com/oauth2/authorize?bot_id=549294278149668874&scope=bot&permissions=8)`)
        .setFooter(text.current.invite.requested + `${message.author}.`, message.author.avatarURL)
        .setColor('RANDOM')
    message.channel.send(embed5);
    console.log(`${message.author.username} a fait g/invite`)
}