const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {
    if (message.author.id !== "448560475987509268") return;
    else {
        var pingedUser = args[0]
        console.log(pingedUser)
        var amount = parseInt(args[1])
        console.log(amount)
        db.read()
        var usermoneydb = db.cache.get("money").filter({user: pingedUser}).find('money').value();
        var usermoney = Object.values(usermoneydb);
        console.log(usermoney)
        if(!db.cache.get("money").find({user: pingedUser}).value()) {
            db.cache.get("money").push({user: pingedUser, username: "By #Guigui", money: amount}).write();
            message.channel.send("Voilà, j'ai mis l'argent de <@" + pingedUser + "> à " + `${amount}` + "₿.")
        }else{
            db.cache.get("money").remove({user: pingedUser}).write()
            db.cache.get("money").push({user: pingedUser, username: "By #Guigui", money: amount}).write();
            message.channel.send("Voilà, j'ai mis l'argent de <@" + pingedUser + "> à " + `${amount}` + "₿.")
        }
    }
};