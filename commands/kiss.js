const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();
    if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
    let membre = member.displayName;
    var kiss_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle(`${message.author.username} fait un bisou à ${membre}`)
    .setImage("https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif")
    message.channel.send(kiss_embed);
}

module.exports.help = {
    name: "kiss"
}