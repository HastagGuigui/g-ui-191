const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {
    var quitteoudouble = message.content.substr(6)
    var usermoneydb = db.cache.get("money").filter({user: message.author.id}).find('money').value();
    var usermoney = Object.values(usermoneydb)
    if (!quitteoudouble) {
        message.reply(`${text.current.qod.nomoney} **${usermoney[2]}**.`)
        console.error(`${message.author.username} n'a pas mis de montant à parier.`)
    }else{
        if (quitteoudouble > usermoney[2]) {
            message.reply(text.current.qod.toomuch)
        }else{
            db.cache.get("money").filter({user: message.author.id}).find("money").assign({user: message.author.id, money: usermoney[2] -= quitteoudouble}).write();
            var qod = Math.floor (Math.random() * 100) + 1
            console.log(qod)
            if (qod > 50){
                message.channel.sendMessage(`${message.author.username} ${text.current.qod.won} ${quitteoudouble * 2}${text.current.qod.valuenow} **${usermoney[2] + (quitteoudouble * 2)}**.`)
                db.cache.get("money").filter({user: message.author.id}).find("money").assign({user: message.author.id, money: usermoney[2] += (quitteoudouble * 2)}).write();
            }else{
                message.channel.sendMessage(`${message.author.username} ${text.current.qod.lose} ${quitteoudouble}${text.current.qod.valuenow} **${usermoney[2]}**`).then(function (message) {
                    if (usermoney[2] >= 9223372036854776000) message.react("569848999742406663")
                }).catch(function() {
})}}}};