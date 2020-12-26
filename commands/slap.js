const Discord = require("discord.js")
const superagent = require ('superagent');

module.exports.run = async (bot, message, args) => {
    let { body } = await superagent.get(`https://nekos.life/api/v2/img/slap`)
    const member = message.mentions.members.first();
    if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
    if (!member) return message.channel.send("Senpai, vous devez mentionner, pas écrire le nom de la personne >.>")
    let membre = member.displayName;
    var slap_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle(`${message.author.username} donne une gifle à ${membre}`)
    .setImage(body.url)
    message.channel.send(slap_embed);
}

module.exports.help = {
    name: "slap"
}