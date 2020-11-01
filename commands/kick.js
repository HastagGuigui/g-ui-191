const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    // Easy way to get member object though mentions.
    if (!message.member.permissions.has('KICK_MEMBERS')) return message.reply(text.current.kick.permerror)
    var member= message.mentions.members.first();
    if (!member) return message.reply(text.current.kick.notarget)
    // Kick
    member.kick({
        reason: text.current.kick.banned + message.author.tag
    }).then((member) => {
        // Successmessage
        message.channel.sendMessage(banmember.username + "#" + banmember.discriminator + text.current.kick.confirm)
    }).catch(() => {
         // Failmessage
        message.channel.send("Access Denied");
        });
    };