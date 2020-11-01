const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const descadapter = new FileSync('desc.json');
const desc = low(descadapter);

exports.run = (bot, message, args, text) => {
    var newdescription = args.join(" ")
    if (!newdescription) {
        var userdescdb = desc.get("description").filter({user: message.author.id}).find('description').value();
        if(!desc.get("description").find({user: message.author.id}).value()) {
            var userdesc = ["null", "null", "[redacted]"]
        }else{
            var userdesc = Object.values(userdescdb)
        }
        message.channel.send(text.current.desc.noargs + "\n **" + userdesc[2] + "**")
    } else {
    if(!desc.get("description").find({user: message.author.id}).value()) {
        desc.get("description").push({user: message.author.id, username: message.author.username, description: newdescription}).write();
        message.channel.send(text.current.desc.ok + "\n **" + newdescription + "**")
    }else{
        var userdescdb = desc.get("description").filter({user: message.author.id}).find('description').value();
        var userdesc = Object.values(userdescdb)
        desc.get("description").find({user: message.author.id}).assign({user: message.author.id, username: message.author.username, description: newdescription}).write();
        message.channel.send(text.current.desc.ok + "\n **" + newdescription + "**")
    }}
}