const Discord = require('discord.js');
var request = require('request');

exports.run = (bot, message, args, text) => {
    //AIzaSyCx7tSe-nVQxMtQogL4ieGW5-Rf7dPKP04
    //$api_response = file_get_contents('https://www.googleapis.com/youtube/v3/channels?part=statistics&id='.$channel_id.'&fields=items/statistics/subscriberCount&key='.$api_key);
    /*"https://www.googleapis.com/youtube/v3/channels/", { 
    'part': 'snippet, id',                              
    'forUsername': youTubeUserName,                         
    'key': localStorage.cache.getItem("storedApiKey") }*/
    request({url: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${args[0]}&fields=items/statistics/subscriberCount&key=AIzaSyA0P4yaEZibwrdxSmNM_MifqTnOE8X5b1Y`, json: true}, function (error, response, body) {  
    if (!error && response.statusCode == 200) {
        /*var numbers = [
            `0️⃣`,
            `1️⃣`,
            `2️⃣`,
            `3️⃣`,
            `4️⃣`,
            `5️⃣`,
            `6️⃣`,
            `7️⃣`,
            `8️⃣`,
            `9️⃣`,
        ]*/
        let embed = new Discord.MessageEmbed()
            .setTitle(text.current.subcount.title + args[0] + ":")
            .setDescription(body.items[0].statistics.subscriberCount + text.current.subcount.subs)
        message.channel.send(embed)
    } else {
        console.log(error)
    }
})};