exports.run = (bot, message, args, text) => {
    var h = [
        "go fuck yourself",
        "why are you here",
        "no",
        "go try other commands instead",
        "My privacy settings prevent me from executing this command...",
        "i swear to god you will stop at anytime.",
        "STOP MAKING FUN OF ME.",
        "No.",
        "Don't you have better things to do?"
    ]
    let r = (h[Math.floor(Math.random() * h.length)]);
    message.channel.send(r)
    console.log(message.author.username + " is completely dumb tho")
}