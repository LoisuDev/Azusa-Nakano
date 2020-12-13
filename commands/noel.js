const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let noel_user = message.guild.member(message.mentions.members.first());
    if (!noel_user) {
     return message.channel.send("Cet utilisateur n'existe pas !")}
   let boticon = bot.user.displayAvatarURL();
   let noel_embed = new Discord.MessageEmbed()
    .setColor('e410d3')
    .setTitle('Joyeux Noël, Senpai ! ♥')
    .setDescription(`${noel_user.displayName}, ${message.author.username} te souhaite un joyeux Noël !`)
    .setThumbnail(boticon)
    .setImage('https://i.pinimg.com/originals/63/28/8e/63288ec10cedbb9146627535d2711a7a.gif')

    message.channel.send(noel_embed);
}

module.exports.help = {
    name: "noel"
}