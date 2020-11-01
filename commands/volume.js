const Discord = require('discord.js')
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyCx7tSe-nVQxMtQogL4ieGW5-Rf7dPKP04')

exports.run = (bot, message, args, text, serverQueue) => {
    if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
    if (!serverQueue) return message.channel.send('There is nothing playing.');
    if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
    serverQueue.volume = args[1];
    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
    return message.channel.send(`I set the volume to: **${args[1]}**`);
}