const Discord = require('discord.js');
var request = require('request');

exports.run = (bot, message, args, text) => {
    request({url: `https://gdbrowser.com/api/level/${args[0]}`, json: true}, function (error, response, body) {
        
    if (!error && response.statusCode == 200) {
        var simplified = JSON.stringify(body)
        if (simplified == "-1") {
            //message.channel.send(text.current.gdlevel.minusone);
            if (args[0]) {
            request({url: `https://gdbrowser.com/api/search/${args[0]}?count=1`, json: true}, function (error, response, bodyWBrackets) {
                if (!error && response.statusCode == 200) {
                    var simplifiedButWithBrackets = JSON.stringify(body)
                    if (simplifiedButWithBrackets == "-1") {
                        message.channel.send(text.current.gdlevel.minusone);
                    }else{
                        var body = bodyWBrackets[0]
                        var embed = new Discord.MessageEmbed()
                            .setTitle(body.name)
                            .setDescription(body.description)
                            .setColor("0x0166B7")
                            .addField(text.current.gdlevel.author + "**" + body.author + "** (" + body.authorID + ")", text.current.gdlevel.difficulty + "**" + body.difficulty + "** (" + body.stars + "⭐)")
                            .addField("⤵ " + text.current.gdlevel.downloads , body.downloads + text.current.gdlevel.downloads2)
                            .addField("👍 " + text.current.gdlevel.likes, body.likes + text.current.gdlevel.likes2)
                            .addField("↔ " + text.current.gdlevel.length, body.length)
                            .setFooter(text.current.gdlevel.madewith)
                        message.channel.send(embed)
                    }
                }
            } 
            )}else return message.channel.send(text.current.gdlevel.minusone);
        } else {
        var embed = new Discord.MessageEmbed()
            .setTitle(body.name)
            .setDescription(body.description)
            .setColor("0x0166B7")
            .addField(text.current.gdlevel.author + "**" + body.author + "** (" + body.authorID + ")", text.current.gdlevel.difficulty + "**" + body.difficulty + "** (" + body.stars + "⭐)")
            .addField(text.current.gdlevel.downloads, body.downloads + text.current.gdlevel.downloads2)
            .addField(text.current.gdlevel.likes, body.likes + text.current.gdlevel.likes2)
            .addField(text.current.gdlevel.length, body.length)
            .setFooter(text.current.gdlevel.madewith)
        message.channel.send(embed)}
        // message.channel.send(`${JSON.stringify(body)}`)
    } else {
        console.log(error)
    }})
}