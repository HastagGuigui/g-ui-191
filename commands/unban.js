const Discord = require ('discord.js')

exports.run = (bot, message, args, text) => {
    yesnt
    /*
    if (!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"]) || !message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send(text.current.ban.unban.notEnoughPermissions)
    let bannedMember = bot.users.fetch(args[0])
    if (!bannedMember) return message.channel.send(text.current.ban.unban.unknown)

    let reason = args.slice(1).join(" ")
    if (!reason) reason = "[redacted]"

    message.delete()    
    try {
        console.log(bannedMember)
        message.guild.members.unban(bannedMember, {reason: reason})
        message.channel.send(`**${bannedMember.tag}**` + text.current.ban.unban.unbanned)
    } catch(e) {
        console.error(e)
        message.channel.send('(｡•́︿•̀｡)	I\'m so sowwy, iwt seems thawt the pwotogen cwashed...')
    }*/
}