const {Attachment, MessageEmbed} = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const bgadapter = new FileSync('background.json');
const bg = low(bgadapter);
const Jimp = require('jimp')
var temps = Date.now();

exports.run = (bot, message, args, text) => {
    bg.read();
    var msgAuthor = message.author
    if(!bg.get("profiles").find({user: message.author.id}).value()) {
        var userbg = "Discord"
    }else{
        var bg00 = bg.get("profiles")
        .filter({user: msgAuthor.id})
        .sortBy("id")
        .value();
        var userbg2 = Object.values(bg00)
        userbg2.sort(function (a, b) {
            return b.id - a.id
        })
        var userbg = userbg2[0].background
    }

    //Petite note pour ajouter un thème: 
    //Créer 2 dossiers: Un dans ./images/bg et un autre dans ./images/font (ils )
    var FilesSet = [ //Il faut juste changer cette valeur (plus le chiffre au dessus) pour ajouter un thème prédéfini.
        "Discord",
        "GD",
        "Minecraft",
        "2020",
        "Roblox",
    ]
    var newbackground = parseInt(args[0]) - 1
    if (newbackground < 0 || !args[0]) {
        message.channel.send(text.current.bg.noargs + "**" + userbg + "**")
    }else if (newbackground >= FilesSet.length) return message.channel.send(text.current.bg.tooHighNumber + "**4**")
    
    console.log(userbg + " => " + FilesSet[newbackground] + " (pour " + message.author.username + ")")
    
    //copier-coller de profile.js
    var fontname = FilesSet[newbackground]
    Jimp.read(`./images/bg/${fontname}/epicBackground.png`).then(function(image){
    Jimp.read(`./images/bg/square.png`).then(function(square){
    Jimp.read(bot.users.cache.get("549294278149668874").displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })).then(function(avatar){
    Jimp.read(`./images/bg/square2.png`).then(function(descsquare){
    Jimp.read(`./images/bg/${fontname}/arrowDescription.png`).then(function(arrowDescription){
    Jimp.read(`./images/bg/square3.png`).then(function(badgesquare){
    Jimp.loadFont(`./images/font/${fontname}/size1.fnt`).then(function(littlepusab){
    Jimp.loadFont(`./images/font/${fontname}/size2.fnt`).then(function(pusab){
    Jimp.loadFont(`./images/font/${fontname}/gold.fnt`).then(function(goldpusab){
    avatar.resize(245, Jimp.AUTO)
    image   
        .print(goldpusab, 265, 100, {text: `${text.current.profile.title}#GuiguiBot${text.current.profile.title2}`})
        .composite(square, 15, 250)
        .print(pusab, 50, 290, {text: `Money:`})
        .print(pusab, 50, 400, {text: `69420 (c'est faux)`})
        .composite(avatar, 15, 15)
        .print(goldpusab, 265, 624, {text: `${text.current.profile.xp}`})
        .composite(square, 15, 775)
        .print(pusab, 50, 824, {text: `XP: 666 / 1337 (69%?)`})
        .print(pusab, 50, 924, {text: `Level: -1`})
        .composite(descsquare, 329, 1156)
        .composite(arrowDescription, 329, 1156)
        .print(pusab, 354, 1176, {text: `${text.current.profile.description}`})
        .print(littlepusab, 354, 1366, {text: `Beep boop! Je suis un protogen développé par #Guigui, et j'aime bien rédiger ses placeholders, donc si vous voyez ce message, c'est que vous avez éxecuté le g/changestyle lol`}, 1684)
        .composite(badgesquare, 0, 1150)
        .write(`./images/output/${message.author.id}newThemeSend.png`)
        })}).catch(err => {
        console.error(err);
        message.reply(`Petite erreur du code, voici des détails: \n \`\`\`\n ${err.stack} \`\`\``)
        }).then(() => {
            function function2() {
                bg.read();
                bg.get("profiles").push({id: temps, user: message.author.id, background: FilesSet[newbackground]}).write();
                message.channel.send(text.current.bg.ok, {files: [{attachment: `./images/output/${message.author.id}newThemeSend.png`, name: 'send.png'}]})
            }
            setTimeout(function2, 3800);
})})})})})})})})}