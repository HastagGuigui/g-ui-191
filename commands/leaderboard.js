const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {/*
    if (args[0] === "money") {
        let leaderboarddata2 = db.get("money").value();
        let leaderboarddata = Object.values(leaderboarddata2)
        if (args[1] && !isNaN(args[1])) {
            var page = parseInt(args[1])
        }else{
            var page = 1
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(text.current.leaderboard.money.title)
            .setFooter(`Page ${page}/${leaderboarddata.length + 1}`)
        leaderboarddata.sort(function (a, b) {
            return b.money - a.money
        })
        /*leaderboarddata.forEach(data => {
            embed.addField(data.username, data.money)
        })
        for (var i = page * 10; i < (page*10)+10; i++) {
            if (leaderboarddata[i]) {
                embed.addField(i + 1 + ": " + leaderboarddata[i].username, leaderboarddata[i].money + "₿")
            }
        }
        message.channel.send(embed)
    }else 
    */
    if (!args[0] || args[0] === "level"|| args[0] === "xp"){
        let leaderboarddata2 = db.get("xp").value();
        let leaderboarddata = Object.values(leaderboarddata2)
        if (args[1] && !isNaN(args[1])) {
            var page = parseInt(args[1]) - 1
        }else{
            var page = 0
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(text.current.leaderboard.level.title)
            .setFooter(`Page ${page + 1}/${Math.floor((leaderboarddata.length + 1) / 10)}`)
        leaderboarddata.sort(function (a, b) {
            return ((b.level - 1) * 1000000 + b.xp) - ((a.level - 1) * 1000000 + a.xp)
        })
        /*leaderboarddata.forEach(data => {
            embed.addField(data.username, data.money)
        })*/
        var pos = 0
        for (var i = page * 10; pos < 10; i++) {
            if (leaderboarddata[i]) {
                let guild = message.guild,
                USER_ID = leaderboarddata[i].id;
          
                if (guild.member(USER_ID)) {
                    pos++
                    embed.addField(pos + ": " + leaderboarddata[i].username, text.current.leaderboard.level.level + leaderboarddata[i].level + "\n" + leaderboarddata[i].xp + " XP")
                    console.log(pos + "\n" + leaderboarddata[i])
                    // there is a GuildMember with that ID
                }
            }
        }
        message.channel.send(embed)
    }
}