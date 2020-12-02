const Discord = require("discord.js");
const monnaie = require('../monnaie.json');

module.exports.run = async (bot, message, args) => {
    if (!monnaie[message.author.id]) {
        monnaie[message.author.id] = {
            monnaie : 0
        };
    }
    let user_monnaie = monnaie[message.author.id].monnaie;

    let usermoney_embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setColor('e410d3')
        .addField('💰', user_monnaie)
    
    message.channel.send(usermoney_embed);
}

module.exports.help = {
    name: "monnaie"
}