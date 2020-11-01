const Discord = require ("discord.js");

exports.run = (bot, message, args, text) => { // ça prend des infos de index.js et les envoie dans çe fichier. Du genre bot, message, et tout ce qui suit. Et à ce que je vois ça va marcher.
  {
      let user = message.mentions.users.first() || message.author;
      let userinfo = {};
      userinfo.avatar = user.displayAvatarURL();
      userinfo.name = user.username;
      userinfo.discrim = `#${user.discriminator}`
      userinfo.id = user.id;
      userinfo.status = user.presence.status;
      userinfo.registered = message.guild.members.cache.get(user.id).user.createdAt
      userinfo.joined = message.guild.members.cache.get(user.id).joinedAt
      const userinfoembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .addField("Username:", userinfo.name, true)
        .addField("Tag:", userinfo.discrim, true)
        .addField("ID", userinfo.id, true)
        .addField("Status", userinfo.status, true)
        .addField("Account created:", userinfo.registered)
        .addField("Joined at:", userinfo.joined)
        .setColor("RANDOM")
        .setFooter(`Crée par <@518113582110605326> et <@448560475987509268>`)
    message.channel.send(userinfoembed);
  }
}
//ne fais plus rien j'ai copié collé tout ailleurs pour créer NOTRE bot
//OK
