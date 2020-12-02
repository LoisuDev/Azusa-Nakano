const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let boticon = bot.user.avatarURL();
    let info_embed = new Discord.MessageEmbed()
        .setTitle('Informations sur le bot ♥')
        .setColor('e410d3')
        .setThumbnail(boticon)
        .setTimestamp()
        .addField('Nom du bot :', bot.user.username);
    return message.channel.send(info_embed);
}

module.exports.help = {
    name: "info"
}