exports.run = (bot, message, args, text) => {
    if (message.author.id != '448560475987509268') return;
    var emojis = bot.emojis.map(e => e.toString())
    emojis.sort(function(a, b){return 0.5 - Math.random()});
    message.channel.send(emojis.slice(0, 50).join(' '))
}