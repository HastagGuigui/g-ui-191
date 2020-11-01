const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {
    var money = db.get("money").filter({user: message.author.id}).find('money').value();
    var money2 = Object.values(money);
    var embed = new Discord.MessageEmbed()
        .setTitle(text.current.money.amount + ":")
        .setDescription(`${money2[2]}₿`)
        .setColor("0x00FF00")
        .setFooter("By #Guigui ;)")
    message.channel.send(embed)
}