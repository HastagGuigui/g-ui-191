const Discord = require('discord.js')
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('database.json');
const shopadapter = new FileSync('shop.json');
const db = low(adapter);
const shopdb = low(shopadapter);

exports.run = (bot, message, args, text) => {
    var desc;
    var info = shopdb.cache.get("shop_items").value();
    var iteminfo = Object.values(info);
    var usermoneydb = db.cache.get("money").filter({user: message.author.id}).find('money').value();
    var usermoney = Object.values(usermoneydb)
    var shop_embed = new Discord.MessageEmbed()
        .setTitle("Shop du #GuiguiBot")
        .setDescription("Ravi de vous voir ici ! Dans mon shop, vous avez tous les boosters que vous voulez")
        .addField("Votre argent :", `${usermoney[2]}₿`)
        .addField("Badges :", "Voici ce que je propose dans mon shop ! Des badges pas dégeu faits pour mettre sur votre profil dans le g/profil!")
        .setFooter("L'image située en haut à droite provient de Geometry Dash. Pour commander un item, fais g/buyitem <ID de l'item>")
        .setColor("0x009900")
        .setThumbnail('https://vignette.wikia.nocookie.net/geometry-dash/images/e/ef/PotborDialogue04.png/revision/latest?cb=20171203195445')   
    
    iteminfo.forEach(item => {
        if (text.current.stuff.lang = 1) {
            desc = item.descfr
        }else{
            desc = item.descen
        }
        shop_embed.addField(item.name, desc + "[" + item.price + "€][ID: " + item.itemID + "]")
    })
    message.channel.sendEmbed(shop_embed)
}