const Discord = require('discord.js');
var request = require('request');
var htmlToImage = require('html-to-image');

exports.run = (bot, message, args, text) => {
    if (!args) return;
    request({url: `https://gdbrowser.com/api/profile/${args[0]}`, json: true}, function (error, response, body) {
    //request({url: `https://gdbrowser.com/icon/${args[0]}`, png: true}, function(error2, response2, image) {
    if (!error && response.statusCode == 200 /*&& !error2 && response2.statusCode == 200*/) {
        
        //console.log(image)
        var username;
        if (body.moderator == "1") {
            username = body.username + " [" + text.current.gduser.moderator + "]"
        } else if (body.moderator == "2") {
            username = body.username + " [" + text.current.gduser.moderator2 + "]"
        } else {
            username = body.username
        }
        var embed = new Discord.MessageEmbed()
            .setTitle(username)
            .setDescription("(" + body.playerID + ")")
            .setColor("0x0166B7")
            .addField(text.current.gduser.rank + "**" + body.rank + "**", text.current.gduser.stars + "**" + body.stars + "**⭐")
            .addField(text.current.gduser.diamonds, body.diamonds + "💎")
            .addField(text.current.gduser.demons, body.demons + text.current.gduser.demons2)
            .addField(text.current.gduser.cp, body.cp + "🛠️")
        /*htmlToImage.toPng(image).then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            embed
                .setThumbnail(img)
                .setFooter(text.current.gdlevel.madewith)
        })*/
        if (body.youtube != null) {
            embed.addField("Youtube:", "https://youtube.com/channel/" + body.youtube)
        }if (body.twitter != null) {
            embed.addField("Twitter:", "https://twitter.com/user/" + body.twitter)
        }if (body.twitch != null) {
            embed.addField("Twitch:", "https://twitch.tv/" + body.twitch)
        }
        message.channel.send(embed)
        // message.channel.send(`${JSON.stringify(body)}`)
    } else {
        console.log(error)
    }})//})
}//)}