const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const globaladapter = new FileSync('globalchannels.json')
const global = low(globaladapter);

exports.run = (bot, message, args, text) => {
    if (message.member.hasPermission('MANAGE_CHANNELS') || message.author.id === "448560475987509268"){
        if(!global.cache.get("channels").find({id: message.guild.id}).value()) {
            let cid = message.channel.id
            let cname = message.channel.name
            global.cache.get("channels").push({id: message.guild.id, channelid: cid, channelname: cname}).write();
            message.reply("👍")
        }else{
            let cid = message.channel.id
            let cname = message.channel.name
            global.cache.get("channels").find({id: message.guild.id}).assign({id: message.guild.id, channelid: cid, channelname: cname}).write();
            message.reply("👍")
        }
    }else{
        message.reply('No.')
    }
}