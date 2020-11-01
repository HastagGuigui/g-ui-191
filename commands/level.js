const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {
    let leaderboarddata2 = db.get("money").value();
    let leaderboarddata = Object.values(leaderboarddata2)
    leaderboarddata.sort(function (a, b) {
        return b.money - a.money
    })
    var userxpdb = db.get("xp").filter({id: message.author.id}).find('xp').value();
    var userxp = Object.values(userxpdb);
    var position = leaderboarddata.indexOf(userxpdb)
    console.log(userxpdb)
    console.log('Position de ' + message.author.tag + ' : ' + position)
    var embedlevel = new Discord.MessageEmbed()
        .setTitle(text.current.level.title)
        .setDescription(`**${message.author.username}${text.current.level.desc1}${userxp[2]}${text.current.level.desc2}${userxp[2]*500 - userxp[3]}${text.current.level.desc3}${userxp[2] + 1}.`)
        .setColor("0x00FF00")
    message.channel.send(embedlevel)
}