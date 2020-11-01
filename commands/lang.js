const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const settingsadapter = new FileSync('settings.json');
const settingsdb = low(settingsadapter);

exports.run = (bot, message, args, text) => {
    var newlanguage = parseInt(args[0])
    console.log(newlanguage)
    var language;
    if (!newlanguage) return;
    if (newlanguage == 2) {
        language = "English"
    }else{
        language = "Français"
        newlanguage = 1
    }
    if(!settingsdb.get("lang").find({id: message.guild.id}).value()) {
        settingsdb.get("lang").push({id: message.guild.id, servername: message.guild.name, value: newlanguage}).write();
        message.channel.send(text.current.stuff.newlanguage + language + "!")
    }else{
        settingsdb.get("lang").remove({id: message.guild.id}).write();
        settingsdb.get("lang").push({id: message.guild.id, servername: message.guild.name, value: newlanguage}).write();
        //settingsdb.get("lang").filter({id: message.guild.id}).assign({id: message.guild.id, servername: message.guild.name, value: newlanguage}).write();
        message.channel.send(text.current.stuff.newlanguage + " " + language + "!")
    }
}