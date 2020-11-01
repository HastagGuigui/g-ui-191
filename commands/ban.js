const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply(text.current.ban.permerror)
    const banmember = message.mentions.members.first();
    if (!banmember) return message.reply(text.current.ban.notarget)
    banmember.ban({
        days: args[1] || null,
        reason: text.current.ban.banned + message.author.tag
    });
    message.channel.send(banmember.username + "#" + banmember.discriminator + text.current.ban.confirm)
}