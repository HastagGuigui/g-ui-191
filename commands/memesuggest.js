const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);

exports.run = (bot, message, args, text) => {
    var value = message.content.substr(14);
    var authorid = message.author.id;
    var authorusername = message.author.username;
    var number = db.cache.get('memes_suggestions').map('id').value();
    console.log(`${message.author.username} a proposé le meme ${value}`)
    message.reply(text.current.memessugg.ok)

    db.cache.get('memes_suggestions')
        .push({ id: number + 1, meme_value: value, meme_poster: authorusername, meme_poster_id: authorid})
        .write();
}