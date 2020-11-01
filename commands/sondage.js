const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    let yes_no = [
        'y/n',
        'o/n',
        '',
        'yes/no'
    ]
    let sondagetruc = args.slice(1).join(" ")
    if (!message.member.roles.find(r => r.name === "Permission Sondage")) return message.reply(text.current.sondage.nopermrole);
    if (!args[0]) return message.channel.sendMessage(text.current.sondage.noargs)
    var embedsondage = new Discord.MessageEmbed()
        .setTitle(text.current.sondage.title)
        .setDescription(`${sondagetruc}`)
        .setColor('0x00FF00')
    if(yes_no.includes(args[0])) {
        embedsondage.setFooter(text.current.sondage.bottom1);
    }else{
        embedsondage.setFooter(text.current.sondage.bottom2);
    }
    message.channel.sendEmbed(embedsondage).then(function (msg) {
        if(yes_no.includes(args[0])) {
            msg.react('✅')
            msg.react('❌')
        }else{
            msg.react('🅰')
            msg.react('🇧')
        }
        
    });
    message.delete();
}
