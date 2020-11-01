const Discord = require('discord.js')
exports.run = (bot, message, args, text) => {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(text.current.mute.permerror)
        let member = message.mentions.members.first()
        if(!member) return message.channel.send(text.current.mute.noping)
        if(member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerID) return message.channel.send(text.current.unmute.youcant)
        if(!member.manageable) return message.channel.send(text.current.unmute.icant)
        let muterole = message.guild.roles.cache.find(role => role.name === 'Mis en silencieux [GuiguiBot]')
        if(muterole && member.roles.has(muterole.id)) member.roles.remove(muterole)
        message.channel.send(member.user.tag + text.current.unmute.ok)
        console.log(`${message.author.username} dans "${message.guild}" : g/unmute`);

}