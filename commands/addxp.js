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
    var addxp = parseInt(args[2])
    var addlevel = parseInt(args[1])
    var msgauthorpseudo = test.username
    var newmultiplier = parseInt(args[3]) || 1
    var newmultiplierdesc = args.slice(4).join(' ')
    if(!db.get("xp").find({id: msgauthor}).value()) {
        db.get("xp").push({id: msgauthor, username: msgauthorpseudo, level: addlevel, xp: addxp, multiplier: newmultiplier, multipdesc: newmultiplierdesc}).write();
    }else{
        var userxpdb = db.get("xp").filter({id: msgauthor}).find('xp').value();
        var userxp = Object.values(userxpdb);
        db.get("xp").find({id: msgauthor}).assign({id: msgauthor, username: msgauthorpseudo, level: userxp[2] + addlevel, xp: userxp[3] + addxp, multiplier: newmultiplier, multipdesc: newmultiplierdesc}).write();
    }
    test.send(text.current.addxp.gotxp1 + addlevel + text.current.addxp.level + addxp + text.current.addxp.gotxp2)
    message.channel.send(text.current.addxp.confirmed + addlevel + text.current.addxp.level + addxp + text.current.addxp.confirmed2 + test.tag)
}