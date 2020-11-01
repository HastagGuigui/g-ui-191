const { Client, Util } = require('discord.js')
const ytdl = require('ytdl-core');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyA0P4yaEZibwrdxSmNM_MifqTnOE8X5b1Y')
const MusicClient = require("yet-another-discord.js-musicbot-addon");

exports.run = async (bot, message, args, text, serverQueue, queue) => {
    await bot.music.joinFunction(message)
    await bot.music.playFunction(message, args.join(' '))
}