const Discord = require('discord.js')
const math = require('mathjs')

exports.run = (bot, message, args, text) => {
    var args = message.content.substring(6).split(" ");
    console.log(args.join(''))
    if (!args) return message.channel.sendMessage(text.current.calc.noargs);
    let resp;
    try {
        resp = math.eval(args.join(''));
    } catch (e) {
        return;
    }
    var calcembed = new Discord.MessageEmbed()
        .setColor("0x00FF00")
        .setTitle(text.current.calc.calc)
        .addField(text.current.calc.input, `\`\`\`js\n${args.join('')}\`\`\``)
        .addField(text.current.calc.output, `\`\`\`yaml\n${resp}\`\`\``)
    message.channel.sendEmbed(calcembed);
}