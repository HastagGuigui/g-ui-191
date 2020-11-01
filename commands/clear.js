const Discord = require('discord.js')
exports.run = (bot, message, args, text) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(text.current.clear.permerror)
    let count = parseInt(args[0])
    if (!count) return message.channel.send(text.current.clear.noargs)
    if (isNaN(count)) return message.channel.send(text.current.clear.nan)
    if (count < 1 || count > 100) return message.channel.send(text.current.clear.not100)
    message.channel.bulkDelete(count + 1, true)
    message.channel.send(count + text.current.clear.success)
    .then(message =>
    {
        message.react("✅");
    });


}

