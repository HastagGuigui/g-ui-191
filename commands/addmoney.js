const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {
    var tempsEnMs = Date.now();
    if (message.author.id != "448560475987509268")
    db.read();
    var test = bot.users.cache.get(args[0])
    var msgauthor = test.id;
    var addmoney = parseInt(args[1])
    var msgauthorpseudo = test.username
    if(!db.cache.get("money").find({user: msgauthor}).value()) {
        db.cache.get("money").push({user: msgauthor, username: msgauthorpseudo, money: addmoney, lastUsed: tempsEnMs}).write();
    }else{
        var usermoneydb = db.cache.get("money").filter({user: msgauthor}).find('money').value();
        var usermoney = Object.values(usermoneydb);
        db.cache.get("money").find({user: msgauthor}).assign({user: msgauthor, username: msgauthorpseudo, money: usermoney[2] + addmoney, lastUsed: tempsEnMs}).write();
    }
    test.send(text.current.addmoney.gotmoney1 + addmoney + text.current.addmoney.gotmoney2)
    message.channel.send(text.current.addmoney.confirmed + addmoney + "₿" + text.current.addmoney.confirmed2 + test.tag)
}