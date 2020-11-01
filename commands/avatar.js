exports.run = (bot, message, args, text) => {
    if (!message.mentions.users.size) {
        return message.channel.send(`${text.current.avatar.you}${message.author.displayAvatarURL}`);
    }
    const avatarList = message.mentions.users.map(user => {
        return `${text.current.avatar.ping1}${user.username}${text.current.avatar.ping2}${user.displayAvatarURL}`;
    });
    
    message.channel.send(avatarList);
}