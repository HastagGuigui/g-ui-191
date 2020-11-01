const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    let tte = args.join(" ")
    if (!tte){
        return message.reply(text.current.eightball.noargs)};
        
        var replys = [
            text.current.eightball.replys.one,
            text.current.eightball.replys.two,
            text.current.eightball.replys.three,
            text.current.eightball.replys.four,
            text.current.eightball.replys.five,
            text.current.eightball.replys.six,
            text.current.eightball.replys.seven,
            text.current.eightball.replys.eight,
            text.current.eightball.replys.nine,
        ];
        let r = (replys[Math.floor(Math.random() * replys.length)]);
        var embed2 = new Discord.MessageEmbed()
            .setDescription(text.current.eightball.title)
            .addField(text.current.eightball.question, tte)
            .addField(text.current.eightball.answer, r)
            .setColor("0x0000FF")
        message.channel.send(embed2)
}