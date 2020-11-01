const Discord = require('discord.js')
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyCx7tSe-nVQxMtQogL4ieGW5-Rf7dPKP04')

exports.run = (bot, message, args, text, serverQueue) => {
    if (serverQueue && !serverQueue.playing) {
        serverQueue.playing = true;
        serverQueue.connection.dispatcher.resume();
        return message.channel.send('▶ Resumed the music for you!');
    }
    return message.channel.send('There is nothing playing.');

}