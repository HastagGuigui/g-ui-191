const Discord = require('discord.js');
const Jimp = require('jimp');

exports.run = (bot, message, args, text) => {
    var Attachment = (message.attachments).array();
    Attachment.forEach(function(attachment) {
        Jimp.read(attachment.url).then(function(resized){
            resized
                .resize(args[0], Jimp.RESIZE_BEZIER)
                .write(`./images/output/${message.author.id}resize.png`)
        }).catch(err => {
            console.error(err);
            message.reply(`Petite erreur du code, voici des détails: \n \`\`\`\n ${err.stack} \`\`\``)
    })
})
function function2() {
    message.channel.send({files: [{attachment: `./images/output/${message.author.id}resize.png`, name: 'resized.png'}]}) //this will send the picture that u just made in chat!
    console.log('C\'est envoyé !');
}
setTimeout(function2, 2000);
}