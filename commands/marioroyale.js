const Discord = require('discord.js');
const request = require('request');

exports.run = (bot, message, args, text) => {
    
    var urlAccount = `https://mroyale.cyuubi.xyz/api/account?username=${args[0]}`
    request({url: urlAccount}, function (error, response, body) {
        if (response.statusCode == 200 && !error){
            var content = JSON.parse(body)
            var imgLink = `https://raw.githubusercontent.com/mroyale/assets/master/img/game/smb_skin${content.skin}.png`
            console.log(content)
            if (content.isBanned != 0) return message.channel.send("This user is banned.")
            let embed = new Discord.MessageEmbed()
                .setTitle("Profil de " + content.nickname)
                .addField("💰 Pièces récoltés :", coins + " pièces.")
                .addField("🥇 Victoires :", wins)
                .addField("💀 Morts :", deaths)
                .addField("💥 K.O.:", kills)
                .setThumbnail(`${imgLink}`)
            if (content.squad != '') {
                embed.addField("Code de team:", content.squad)
            }
            message.channel.send(embed)
}})}
