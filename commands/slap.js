const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();
    if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
    let membre = member.displayName;
    var slap_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle(`${message.author.username} donne une gifle à ${membre}`)
    .setImage("https://imgur.com/Agwwaj6")
    message.channel.send(slap_embed);
}

module.exports.help = {
    name: "slap"
}