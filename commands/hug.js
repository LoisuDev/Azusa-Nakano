const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();
    if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
    let membre = member.displayName;
    var hug_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle(`${message.author.username} fait un câlin à ${membre}`)
    .setImage("https://acegif.com/wp-content/uploads/anime-hug.gif")
    message.channel.send(hug_embed);
}

module.exports.help = {
    name: "hug"
}