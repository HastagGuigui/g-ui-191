const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const welcomeadapter = new FileSync('welcome.json');
const welcome = low(welcomeadapter);
var temps = Date.now();

exports.run = (bot, message, args, text) => {
    welcome.read();
    if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) return message.channel.send('no')
    if(!welcome.get("welcome").find({server: message.guild.id}).value()) {
        var userbg2 = [-1, message.guild.id, 'bruh', 'deactivate', 'deactivate']
    }else{
        var userbgdb = welcome.get("welcome")
        .filter({server: message.guild.id})
        .sortBy("id")
        .value();
        var userbg3 = Object.values(userbgdb)
        var userbg2 = userbg3[0]
    }
    console.log(userbg2)
    if (args[0] == "welcome") {
        if (args[1] == "channel") {
            if (args[2]) {
                var newchannel = args[2].substring(2, 20);
            }else{
                var newchannel = message.channel.id
            }
            welcome.get("welcome").push({id: temps, server: message.guild.id, channel: newchannel, message: userbg2[3], leavemessage: userbg2[4]}).write();
            message.channel.send(text.current.settings.upchannel + " <#" + newchannel + ">")
        }
        if (args[1] == "message") {
            var newmessage = args.slice(2).join(" ")
            welcome.get("welcome").push({id: temps, server: message.guild.id, channel: userbg2[2], message: newmessage, leavemessage: userbg2[4]}).write();
            let logEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.guild.name}`) 
                .setDescription(newmessage)
                .setColor('0x0000FF')
                .setThumbnail(message.author.displayAvatarURL)
            message.channel.send(text.current.settings.newmsgJ, logEmbed);
        }
        if (args[1] == "leavemessage") {
            var newLmessage = args.slice(2).join(" ")
            welcome.get("welcome").push({id: temps, server: message.guild.id, channel: userbg2[2], message: userbg2[3], leavemessage: newLmessage}).write();
            let logEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.guild.name}`) 
                .setDescription(newLmessage)
                .setColor('0x0000FF')
                .setThumbnail(message.author.displayAvatarURL)
            message.channel.send(text.current.settings.newmsgL, logEmbed);
        }
    }else if (!args) return message.channel.send(text.current.settings.noargs)
}