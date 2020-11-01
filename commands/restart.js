const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    if (message.author.id !== "448560475987509268") return;
    message.channel.send('Redémarrage...')
    process.exit(0);
}