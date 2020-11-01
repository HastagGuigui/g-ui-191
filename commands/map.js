const Discord = require('discord.js');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const rpgadapter = new FileSync('rpg.json');
const rpg = low(rpgadapter);
const Jimp = require('jimp');
var positions = [null, 0, 17, 33, 49, 65, 81, 97, 113, 129, 145, 161, 177, 193, 209, 225, 241,]

exports.run = (bot, message, args, text) => {
    new Jimp(256, 256, 0xff0000ff, (err, image) => {
        
    });
}