const Discord = require('discord.js')
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyCx7tSe-nVQxMtQogL4ieGW5-Rf7dPKP04')

exports.run = (bot, message, args, text, serverQueue) => {
    if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
    if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
    serverQueue.connection.dispatcher.end('Skip command has been used!');
    return undefined;
}