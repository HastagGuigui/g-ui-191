const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const globaladapter = new FileSync('globalchannels.json')
const global = low(globaladapter);
const Jimp = require('jimp');
const fs = require('fs');

exports.run = (bot, message, args, text) => {
    let PurpleColor = [
        "589172591592210460",
        "541291952113451009",
    ]
    var fontLocation;
    if (PurpleColor.includes(message.author.id)) {
        fontLocation = `./images/font/leFontSpecialNitroBoost.fnt`
    }else{
        fontLocation = `./images/font/GD/size2.fnt`
    }
    console.log(message.guild.iconURL)
    if(!args) return message.channel.send(text.current.global.noargs);
    let args01 = args.join(" ")
    let unusedVar = global.cache.get("channels").filter({id: message.guild.id}).find('id').value();
    let args02 = Object.values(unusedVar)
    if(!args02[0]) return message.channel.send(text.current.global.noGlobalDefined)
    if(message.channel.id !== args02[1]) return message.channel.send(text.current.global.notCorrectChannel.first + args02[2] + text.current.global.notCorrectChannel.second)
    new Jimp(4000, 1500, (err, image) => {
    Jimp.read(message.guild.iconURL).then(function(avatar){
    Jimp.read(message.author.displayAvatarURL).then(function(icon){
    Jimp.loadFont(`${fontLocation}`).then(function(pusab){
    Jimp.loadFont(`./images/font/GD/gold.fnt`).then(function(goldpusab){
    Jimp.read(text.current.stuff.emoji).then(function(emoji){
        emoji
            .resize(Jimp.AUTO, 100)
        icon
            .resize(Jimp.AUTO, 1300)
        avatar
            .resize(Jimp.AUTO, 4000)
        image
            .composite(avatar, 0, -1000, Jimp.VERTICAL_ALIGN_MIDDLE | Jimp.HORIZONTAL_ALIGN_LEFT)
            .composite(icon, 100, 100)
            .composite(emoji, 0, 1400, Jimp.VERTICAL_ALIGN_BOTTOM)
            .print(goldpusab, 150, 1400, {text: message.guild.name})
            .print(goldpusab, 1500, 10, {text: text.current.global.from + message.channel.name})
            .print(pusab, 1550, 110, {text: args01}, 2200)
            .write(`./images/output/${message.guild.id}_${message.channel.id}global.png`)
        console.log("Normalement c'est bon")
    })})})})})});
    let unusedVar2 = global.cache.get("channels").value();
    let args03 = Object.values(unusedVar2)
    setTimeout(function(){
        for (var i = 0; i < 1000; i++) {
            if (args03[i]) {
                let shouldBeSentTo = bot.guilds.cache.get(args03[i].id).channels.cache.get(args03[i].channelid)
                shouldBeSentTo.send({files: [{attachment: `./images/output/${message.guild.id}_${message.channel.id}global.png`, name: 'send.png'}]})
            }
        }
    }, 3000)
}