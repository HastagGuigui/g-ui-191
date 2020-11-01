let request = require(`request`);
let fs = require(`fs`);

function download(url, filename){
    request.cache.get(url)
        .on('error', console.error)
        .pipe(fs.createWriteStream(filename + '.txt'));
}

exports.run = async (bot, message, args, text) => {
    if(message.attachments.first()){//checks if an attachment is sent
        download(message.attachments.first().url, './inputtedFiles/' + args.join(' '));//Function I will show later
        message.channel.send("Fichier enregistré.")
    }
}