const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();
    if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
    let membre = member.displayName;
    var spank_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle(`${message.author.username} donne une fessée à ${membre}`)
    .setImage("https://media1.tenor.com/images/1ffbabd05e0be468f035680111da8325/tenor.gif")
    message.channel.send(spank_embed);
}

module.exports.help = {
    name: "spank"
}