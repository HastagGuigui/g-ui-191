const Discord = require('discord.js');

exports.run = (no) => {
    /*
    if(!db.cache.get("money").find({user: msgauthor}).value()) {
            db.cache.get("money").push({user: msgauthor, username: msgauthorpseudo, money: 1}).write();
    }else{
        var addmoney = (Math.floor (Math.random() * moneypermsg) + 1)
        var usermoneydb = db.cache.get("money").filter({user: msgauthor}).find('money').value();
        console.log(usermoneydb);
        var usermoney = Object.values(usermoneydb)
        console.log(usermoney);
        db.cache.get("money").find({user: msgauthor}).assign({user: msgauthor, username: msgauthorpseudo, money: usermoney[2] + addmoney}).write();
        console.log(`Nombre de money : ${usermoney[2]}`)
    }
    if(!guilddb.cache.get("servers").find({id: message.guild.id}).value()) {
        guilddb.cache.get("servers").push({id: message.guild.id, servername: message.guild.name, owner: message.guild.owner.id, guildmoney: 1, boosts: []}).write();
    }else{
        var addmoney = (Math.floor (Math.random() * moneypermsg) + 1)
        var guildmoneydb = guilddb.cache.get("servers").filter({id: message.guild.id}).find('guildmoney').value();
        console.log(guildmoneydb);
        var guildmoney2 = Object.values(guildmoneydb);
        console.log(guildmoney2);
        guilddb.cache.get("servers").find({id: message.guild.id}).assign({id: message.guild.id, servername: message.guild.name, owner: message.guild.owner.id, guildmoney: guildmoney2[3] + addmoney, boosts: []}).write();
    }
    if(!db.cache.get("xp").find({id: message.author.id}).value()) {
        db.cache.get("xp").push({id: message.author.id, username: message.author.username, level: 1, xp: 1}).write();
    }else{
        var addxp = (Math.floor (Math.random() * moneypermsg) + 1)
        var userxpdb = db.cache.get("xp").filter({id: message.author.id}).find('xp').value();
        console.log(userxpdb);
        var userxp = Object.values(userxpdb);
        console.log(userxp);
        db.cache.get("xp").find({id: message.author.id}).assign({id: message.author.id, username: message.author.username, level: userxp[2], xp: userxp[3] + addxp}).write();
        if(userxp[3] >= userxp[2]*1000) {
            message.channel.send(`Bravo **${message.author.username}**, tu es passé au level **${userxp[2] + 1}**!`)
            db.cache.get("xp").find({id: message.author.id}).assign({id: message.author.id, username: message.author.username, level: userxp[2] + 1,  xp: userxp[3] - (userxp[2]*1000)}).write();
        }
    }
    try {
        delete require.cache[require.resolve(`./database.json`)];
        delete require.cache[require.resolve(`./servers.json`)];
    }catch(e){
        console.error(e)
    }*/
}