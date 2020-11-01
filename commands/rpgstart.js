const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const rpgadapter = new FileSync('rpg.json');
const rpg = low(rpgadapter);
const Jimp = require('jimp');

exports.run = (bot, message, args, text) => {
    if(rpg.cache.get("profiles").find({id: message.author.id}).value()) {
        var pseudo = rpg.cache.get("profiles").find({id: message.author.id}).value()
        var pseudo2 = Object.values(pseudo)
        message.channel.send(text.current.rpgstart.alreadyRegistered + "**" + pseudo2[2] + "**")
    }
    var Attachment = (message.attachments).array();
    if (!args || !Attachment[0].url) {
        var noargs = new Discord.MessageEmbed()
            .setTitle(text.current.rpgstart.noargs.title)
            .setDescription(text.current.rpgstart.noargs.description)
        message.channel.send(noargs)
    }else{
        var charactername = args.join(' ')
        var image = Attachment[0].url
        if (!image.endsWith(".png")) return;
        rpg.cache.get("profiles").push({id: message.author.id, username: message.author.username, playername: charactername, image: image, mapx: "0", mapy: "0", x: 8, y:8}).write();
        var embed = new Discord.MessageEmbed()
            .setTitle(text.current.rpgstart.welcome + charactername + "!")
            .setDescription(text.current.rpgstart.tutorial)
            .setColor("0x00FFFF")
            .setThumbnail(image)
        message.channel.send(embed)

    }
}