const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();
    if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
    if (!member) return message.channel.send("Senpai, vous devez mentionner, pas écrire le nom de la personne >.>")
    let membre = member.displayName;
    var cheek_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle(`${message.author.username} fait un bisou sur la joue de ${membre}`)
    .setImage("https://cutewallpaper.org/21/anime-kiss-on-the-cheek/Anime-Kiss-On-The-Cheek-Gif.gif")
    message.channel.send(cheek_embed);
}

module.exports.help = {
    name: "cheek"
}