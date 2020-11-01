const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {
    var tempsEnMs = Date.now();
    var test = bot.users.cache.get(message.author.id)
    var msgauthor = test.id;
    var doesItWorked = Math.floor(Math.random() * 100)
    if (doesItWorked == 69) {
        var randomizer = Math.floor(Math.random() * text.current.work.workTexts3.length)
        var addmoney = Math.floor(Math.random() * 1000) * -1
        var color = '#FF0000'
    } else {
        var randomizer = Math.floor(Math.random() * text.current.work.workTexts1.length)
        var addmoney = Math.floor(Math.random() * 1000)
        var color = '#00FF00'
    }
    var msgauthorpseudo = test.username
    if(!db.cache.get("money").find({user: msgauthor}).value()) {
        db.cache.get("money").push({user: msgauthor, username: msgauthorpseudo, money: addmoney, lastUsed: tempsEnMs}).write();
    }else{
        var usermoneydb = db.cache.get("money").filter({user: msgauthor}).find('money').value();
        var usermoney = Object.values(usermoneydb);
        if (usermoney[3] + 60000 <= tempsEnMs) {
            if (doesItWorked == 69) {
                var text1 = text.current.work.workTexts3[randomizer]
                var text2 = text.current.work.workTexts4[randomizer]
                var text3 = text.current.work.workCredits1[randomizer]
            } else {
                var text1 = text.current.work.workTexts1[randomizer]
                var text2 = text.current.work.workTexts2[randomizer]
                var text3 = text.current.work.workCredits2[randomizer]
            }
            db.cache.get("money").find({user: msgauthor}).assign({user: msgauthor, username: msgauthorpseudo, money: usermoney[2] + addmoney, lastUsed: tempsEnMs}).write();
            if (addmoney < 0) {
                addmoney = addmoney * -1
            }
            var embed = new Discord.MessageEmbed()
                .setTitle(text.current.work.workTitle)
                .setDescription(text1 + addmoney + '₿' + text2)
                .setColor(color)
                .setFooter(text3)
            message.channel.send(embed)
        }else{
            message.channel.send(text.current.work.coolDown)
        }
    }
}