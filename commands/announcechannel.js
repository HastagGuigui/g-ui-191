const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const announceadapter = new FileSync('interesting_channels.json')
const announce = low(announceadapter);

exports.run = (bot, message, args, text) => {
    if (args[0] == "setup") {
        if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(text.current.announce.permerror)
        else {
            //si quelqu'un veut mettre en place son channel d'annonces
            if (args[1] == "add") {
                if (args[2]) {
                    var splittedWithTheAndSymbol = args.slice(1).join(" ").split("&")
                    if (splittedWithTheAndSymbol[1]) {
                        var Title = splittedWithTheAndSymbol[0]
                        var Description = splittedWithTheAndSymbol[1]
                        announce.get("senders").push({guild: message.guild.id, channel: message.channel.id, title: Title, description: Description}).write();
                        message.channel.send("Ce salon a été mis comme étant un salon d'annonces.")
                    }
                }else{
                    message.channel.send("Bonjour, ceci est un placeholder: Not_Enough_Args")
                }
            }else if (args[1] == "delete") {
                announce.get("senders").remove({guild: message.guild.id, channel: message.channel.id}).write();
                message.channel.send("Les annonces de ce salon ont été désactivés.")
            }
            
            if (!args[1]){
                message.channel.send("Bonjour, ceci est un placeholder: Not_Enough_Args")
            }
        }
    }
    if (args[0] == "addchannel") {
        if (!message.member.permissions.has('MANAGE_CHANNELS')) return message.channel.send(text.current.announce.permerror)
        else {
            //si quelqu'un veut ajouter des annonces d'un autre serveur sur le sien

        }
    }
}