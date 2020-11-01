const Discord = require('discord.js')

exports.run = (bot, message, args, text) => {
    var value = message.content.substr(14);
    var authorid = message.author.id;
    var authorusername = message.author.username;
    var number = db.cache.get('bot_suggestions').map('id').value();
    console.log(`${message.author.username} vient de poster la suggestion suivante : "${value}"`)
    message.reply(text.current.suggestions.ok)
    db.cache.get('memes_suggestions')
        .push({sugg_value: value, sugg_poster: authorusername, sugg_poster_id: authorid})
        .write();
}