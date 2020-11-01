const Discord = require('discord.js')
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyCx7tSe-nVQxMtQogL4ieGW5-Rf7dPKP04')

exports.run = (bot, message, args, text, serverQueue, queue) => {
    if (!serverQueue) return message.channel.send('There is nothing playing.');
    return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
    `);
}