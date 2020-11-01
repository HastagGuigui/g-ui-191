exports.run = (bot, message, args, text, serverQueue, queue) => {
    delete require.cache[require.resolve(`./sondage.js`)];
    let commandFile = require(`./sondage.js`)
    commandFile.run(bot, message, args, text, serverQueue, queue)
}

/*
Ce fichier est une redirection (anglaise) vers g/sondage, car poll == sondage
*/