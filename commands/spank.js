const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first();
    if (!args[0]) return message.channel.send("Senpai, veuillez mentionner un utilisateur ! >.> ♥")
    let membre = member.displayName;
    var spank_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle(`${message.author.username} donne une fessée à ${membre}`)
    .setImage("https://tenor.com/view/bad-beat-spank-punishment-gif-13569259")
    message.channel.send(spank_embed);
}

module.exports.help = {
    name: "spank"
}