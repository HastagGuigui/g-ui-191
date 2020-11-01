const Discord = require('discord.js');

exports.run = async (bot, message, args, text) => {
    if (message.author.id != "448560475987509268") return console.error("Ne vous inquiétez pas, ce n'est pas grave lmao")
    function format(seconds){
        function pad(s){
          return (s < 10 ? '0' : '') + s;
        }
        var hours = Math.floor(seconds / (60*60));
        var minutes = Math.floor(seconds % (60*60) / 60);
        var seconds = Math.floor(seconds % 60);
      
        return pad(hours) + ' heures, ' + pad(minutes) + ' minutes et ' + pad(seconds) + ' secondes.';
    }
    
    var uptime = process.uptime();
    console.log(format(uptime));
    message.channel.send("Le bot est en ligne depuis " + format(uptime))
}