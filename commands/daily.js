const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {
    db.read()
    let timeout = 86400000 // 24 hours in milliseconds
    let amount = Math.floor(Math.random() * 1000) + 1;
    var tempsEnMs = Date.now();
    // random amount: Math.floor(Math.random() * 1000) + 1;
    
    if (!db.get("daily").find({user: message.author.id}).value()){
        db.get("daily").push({user: message.author.id, username: message.author.username, lastUsed: tempsEnMs}).write();
        message.channel.send('+' + amount)
    }
    var daily2 = db.get("daily").filter({user: message.author.id}).value();
    var daily = Object.values(daily2)
    console.log("La dernière utilisation: " + daily[0].lastUsed + ", et maintenant:" + tempsEnMs)
    if (tempsEnMs > daily[0].lastUsed + timeout) {
        if(!db.get("money").find({user: message.author.id}).value()) {
            db.get("money").push({user: message.author.id, username: message.author.username, money: 1}).write();
        }else{
            var addmoney = (Math.floor (Math.random() * 200) + 1)
            var usermoneydb = db.get("money").filter({user: message.author.id}).find('money').value();
            var usermoney = Object.values(usermoneydb);
            db.get("money").find({user: message.author.id}).assign({user: message.author.id, username: message.author.username, money: usermoney[2] + amount}).write();
        }
        message.channel.send('You just earned ' + amount + ' of money by using this command, come back tomorrow!')
        db.get("daily").find({user: message.author.id}).assign({user: message.author.id, username: message.author.username, lastUsed: tempsEnMs}).write();
    }else{
        message.channel.send("Reviens demain")
    }
}