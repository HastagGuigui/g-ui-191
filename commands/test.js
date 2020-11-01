const Discord = require('discord.js')
const fs = require('fs')
const DBL = require("dblapi.js");

exports.run = async (bot, message, args, text) => {
    const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU0OTI5NDI3ODE0OTY2ODg3NCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTg5NTY3NzYxfQ.5BQPacGndtHd1BIbzXla-MUqzg4E4RU9Qdbt0d0U2HA', bot);
    var votes = await dbl.getStats()
    console.log(votes.server_count)
}
    /* Chargé depuis profile.js
    bgdb.read()
    db.read()
    desc.read()
    var msgAuthor;
    if (message.mentions.members.first()) {
        console.log(message.mentions.users.first())
        msgAuthor = message.mentions.members.first() || message.author
    } else {
        msgAuthor = message.author
    }
    console.log(msgAuthor)
    if (!bgdb.cache.get("profiles").filter({user: msgAuthor.id}).find('background').value()) {
        bgdb.cache.get("profiles").push({id: Date.now(), user: msgAuthor.id, background: "GD"}).write();
    }
    var bg00 = bgdb.cache.get("profiles")
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
    var money = db.cache.get("money").filter({id: msgAuthor.id}).find('money').value();
    if (!money) {
        var money2 = ["null", "redacted", 0]
    }else{
        var money2 = Object.values(money);
    }


    var xp = db.cache.get("xp").find({id: msgAuthor.id}).value();
    var xp2 = Object.values(xp);
    var userdescdb = desc.cache.get("description").filter({user: msgAuthor.id}).find('description').value();
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


    /* Chargé depuis https://discordjs.guide/popular-topics/canvas.html#adding-in-text 
	const canvas = Canvas.createCanvas(1000, 1000);
	const ctx = canvas.cache.getContext('2d');

	const background = await Canvas.loadImage(`./images/bg/${fontname}/epicBackground.png`);
	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

	ctx.strokeStyle = '#74037b';
	ctx.strokeRect(0, 0, canvas.width, canvas.height);

	// Slightly smaller text placed above the member's display name
	ctx.font = '28px Pusab';
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${text.current.profile.title}${msgAuthor.username}${text.current.profile.title2}`, canvas.width + 110, canvas.height + 72);

	// Add an exclamation point here and below
	ctx.font = '50px Pusab'
	ctx.fillStyle = '#ffffff';
	ctx.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	ctx.beginPath();
	ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
	ctx.closePath();
	ctx.clip();

	const avatar = await Canvas.loadImage(message.user.displayAvatarURL);
	ctx.drawImage(avatar, 5, 5, 100, 100);

	const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-image.png');

	message.channel.send(attachment);*/