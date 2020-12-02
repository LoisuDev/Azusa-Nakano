const Discord = require("discord.js");
const exp = require('../exp.json');

module.exports.run = async (bot, message, args) => {
    let add_exp = Math.floor(Math.random() * 5) + 1;
    if (!exp[message.author.id]) {
        exp[message.author.id] = {
            exp: 0,
            niveau: 1
        };
    }

    let c_exp = exp[message.author.id].exp;
    let c_niv = exp[message.author.id].niveau;
    let next_levelup = c_niv * 100; 
    let xp_f_lv_up = next_levelup - c_exp;

    let niv_embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.displayAvatarURL())
        .setColor('e410d3')
        .addField("Niveau", c_niv, true)
        .addField("EXP", c_exp, true)
        .setFooter(`${xp_f_lv_up} xp requis pour passer de level.`)
    message.channel.send(niv_embed)
}

module.exports.help = {
    name: "niv"
}