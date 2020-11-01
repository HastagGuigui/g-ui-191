const Discord = require('discord.js')
let request = require(`request`);
let fs = require(`fs`);
var files = fs.readdirSync('./inputtedFiles/');

/*
var pages = str.match(/[\s\S]{1,3}/g) || [];
console.log(pages); */
exports.run = async (bot, message, args, text) => {
    if (args[0]){
        var textByLine = fs.readFileSync('./inputtedFiles/' + args.join(' ') + '.txt').toString()
        var pages = textByLine.match(/[\s\S]{1,1024}/g) || [];
        console.log(pages);
        var page = 0
        var BookPage = new Discord.MessageEmbed()
            .setTitle("G-UI Book Reader")
            .addField(args.join(' '), pages[page])
            .setFooter(`Page ${page + 1}/${pages.length}`)
        message.channel.send(BookPage).then(message => {
            message.react('▶').then(() => message.react('◀'));

            const filter = (reaction, user) => {
                if (!user.bot){
                return ['▶', '◀'].includes(reaction.emoji.name) && user.id === message.author.id;
            }};

            message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
                .then(collected => {
                    const reaction = collected.first();
                
                    if (reaction.emoji.name === '▶') {
                        message.reply('right');
                    } else if (reaction.emoji.name === '◀') {
                        message.reply('left');
                    }
                })
                .catch(collected => {
                    message.reply('not');
                });
    })}else{
        console.log(files)
        message.channel.send(files.join("\n"))
}}