const Discord = require('discord.js');
const Jimp = require ('jimp')

exports.run = (bot, message, args, text) => {
    var Attachment = (message.attachments).array();
    var meme = args.join(' ')
    try {
    var memetext = meme.replace("|", "\n  ");
    }catch(e){}
    Attachment.forEach(function(attachment) {
        Jimp.read(attachment.url).then(function(imageadd){
        Jimp.loadFont(`./images/font/meirl32.fnt`).then(font8 => {
        Jimp.loadFont(`./images/font/meirl16.fnt`).then(font10 => {
            imageadd
                .contain(500, 600, Jimp.VERTICAL_ALIGN_BOTTOM)
                .print(font8, 5, 0, {text: memetext}, 480)
                .print(font10, 0, 580, {text: `By ${message.author.tag} with G-UI-181`})
                .write(`./images/output/meirlmoment.png`)
        })})}).catch(err => {
            console.error(err);
            message.reply(`Petite erreur du code, voici des détails: \n \`\`\`\n ${err.stack} \`\`\``)})
        function function2() {
            message.channel.send({files: [{attachment: `./images/output/meirlmoment.png`, name: 'sirheresyourmeme.png'}]}) //this will send the picture that u just made in chat!
            console.log('C\'est envoyé !');
        }
        setTimeout(function2, 2500);
    })
}