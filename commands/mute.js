const Discord = require('discord.js')
exports.run = (bot, message, args, text) => {


    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(text.current.mute.permerror)
    let member = message.mentions.members.first()
    if (!member) return message.channel.send(text.current.mute.noping)
    if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID) return message.channel.send(text.current.mute.permerror2)
    if (!member.manageable) return message.channel.send(text.current.mute.no)
    let muterole = message.guild.roles.cache.find(role => role.name === 'Mis en silencieux [GuiguiBot]')
    if (muterole) {
        member.addRole(muterole)
        message.channel.send(member + text.current.mute.yes)
    }
    else {
        message.guild.roles.create({name: 'Mis en silencieux [GuiguiBot]', permissions: 0}).then(function (role) {
            message.guild.channels.cache.filter(channel => channel.type === 'text').forEach(function (channel) {
                channel.overwritePermissions(role, {
                    SEND_MESSAGES: false
                })
            })
            member.roles.add(role)
            message.channel.send(member.user.tag + text.current.mute.yes)
            console.log(`${message.author.username} dans "${message.guild}" : g/mute`);
        })
    }

}