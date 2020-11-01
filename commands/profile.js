const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const db = low(adapter);
const bgadapter = new FileSync('background.json');
const bgdb = low (bgadapter);
const descadapter = new FileSync('desc.json');
const desc = low(descadapter);
const Jimp = require('jimp');

exports.run = (bot, message, args, text) => {
    bgdb.read()
    db.read()
    desc.read()
    var msgAuthor;
    if (message.mentions.members.first()) {
        msgAuthor = message.mentions.members.first().lastMessage.author || message.author
    } else {
        msgAuthor = message.author
    }
    console.log(msgAuthor.id)
    if (!bgdb.get("profiles").filter({user: msgAuthor.id}).find('background').value()) {
        bgdb.get("profiles").push({id: Date.now(), user: msgAuthor.id, background: "GD"}).write();
    }
    var bg00 = bgdb.get("profiles")
    .filter({user: msgAuthor.id})
    .sortBy("id")
    .value();
    var bg01 = Object.values(bg00)
    bg01.sort(function (a, b) {
        return b.id - a.id
    })
    console.log(JSON.stringify(bg00))


    var fontname = bg01[0].background || "GD"
    console.log(bg01[0].background)
    var money = db.get("money").filter({user: msgAuthor.id}).find('money').value();
    if (!money) {
        var money2 = ["null", "redacted", 0]
    }else{
        var money2 = Object.values(money);
    }


    var xp = db.get("xp").find({id: msgAuthor.id}).value();
    var xp2 = Object.values(xp);
    var userdescdb = desc.get("description").filter({user: msgAuthor.id}).find('description').value();
    if (userdescdb) {
        var userdesc = Object.values(userdescdb)
    }else{
        var userdesc = ["null", "null", text.current.profile.nodesc]
    };

    var emblemsymbol = Math.trunc(xp2[2]/10)
    console.log("Emblem" + emblemsymbol)
    if (emblemsymbol > 5) {
        emblemsymbol = 5
    }

    Jimp.read(`./images/bg/${fontname}/epicBackground.png`).then(function(image){
    Jimp.read(`./images/bg/square.png`).then(function(square){
    Jimp.read(msgAuthor.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 })).then(function(avatar){
    Jimp.read(`./images/bg/square2.png`).then(function(descsquare){
    Jimp.read(`./images/bg/square3.png`).then(function(badgesquare){
    Jimp.read(`./images/bg/${fontname}/arrowDescription.png`).then(function(arrowDescription){
    Jimp.loadFont(`./images/font/${fontname}/size1.fnt`).then(function(littlepusab){
    Jimp.loadFont(`./images/font/${fontname}/size2.fnt`).then(function(pusab){
    Jimp.loadFont(`./images/font/${fontname}/gold.fnt`).then(function(goldpusab){
    Jimp.loadFont(`./images/font/MultiplierFonts.fnt`).then(function(multiplierPusab){
    Jimp.read(`./images/rpg_tiles/${xp2[4]}/Emblem${emblemsymbol}.png`).then(function(emblem){
    avatar.resize(245, Jimp.AUTO)
    emblem.resize(200, Jimp.AUTO)
    image   
        .print(goldpusab, 265, 100, {text: `${text.current.profile.title}${msgAuthor.username}${text.current.profile.title2}`})
        .composite(square, 15, 250)
        .print(pusab, 50, 290, {text: `Money:`})
        .print(pusab, 50, 400, {text: `${money2[2]}`})
        .composite(avatar, 15, 15)
        .print(goldpusab, 265, 624, {text: `${text.current.profile.xp}`})
        .composite(square, 15, 775)
        .print(multiplierPusab, 550, 1024, {text: `Multiplier: x${xp2[4]}`})
        .print(pusab, 50, 824, {text: `XP: ${xp2[3]} / ${xp2[2] * 500} (${Math.round((xp2[3] / (xp2[2] * 500)) * 1000) / 10}%)`})
        .print(pusab, 50, 924, {text: `Level: ${xp2[2]}`})
        .composite(descsquare, 329, 1156)
        .composite(arrowDescription, 329, 1156)
        .print(pusab, 354, 1176, {text: `${text.current.profile.description}`})
        .print(littlepusab, 354, 1366, {text: `${userdesc[2]}`}, 1684)
        .composite(badgesquare, 0, 1150)
        .composite(emblem, 2, 1260)
        .write(`./images/output/${msgAuthor.id}send.png`)
        

    }).catch(err => {
        console.error(err);
        message.reply(`Petite erreur du code, voici des détails: \n \`\`\`\n ${err.stack} \`\`\``)
    }).then(() => {
        function function2() {
            var profileEmbed = new Discord.MessageEmbed()
                .setColor("0x00FF00")
                .attachFiles([`./images/output/${msgAuthor.id}send.png`])
                .setTitle(`${text.current.profile.title}**${msgAuthor.username}**${text.current.profile.title2}`)
                .setImage(`attachment://${msgAuthor.id}send.png`)
            message.channel.send(profileEmbed)
            console.log('C\'est envoyé !');
        }
        setTimeout(function2, 3000);
    })})})})})})})})})})})
}