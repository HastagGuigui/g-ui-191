const Discord = require('discord.js');
var request = require('request');
const Reddit = require('reddit')

const reddit = new Reddit({
  username: 'G-UI-REDDIT',
  password: 'Guillaume21',
  appId: 'U7c0Elk4wmVuHw',
  appSecret: 'Pfdh37GGHune7Api-Kti5EFMGGI',
  userAgent: 'MyApp/1.0.0 (http://example.com)'
})

exports.run = async (bot, message, args, text) => {
  var subreddit = args[0] || "memes"
  var limit = args[1] || "1"

  var bruhmoment = await reddit.get(`/r/${subreddit}/new.json?sort=new&limit=1`, {})
  var jsonyes = JSON.parse(bruhmoment.toString())
  var memeembed = new Discord.MessageEmbed()
    .setTitle(`${text.current.meme.memetitle}`)
    .setDescription(`${text.current.meme.author}: [u/${jsonyes.data.children[0].data.author}](https://www.reddit.com/user/${jsonyes.data.children[0].data.author}/) [[Original Post](https://www.reddit.com/r/memes/comments/${jsonyes.data.children[0].data.id})]`)
    .setImage(jsonyes.data.children[0].data.preview.images[0].source.url.replace("&amp;", "&"))
  message.channel.send(memeembed)
}