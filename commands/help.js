const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let boticon = bot.user.avatarURL();
    let help_embed = new Discord.MessageEmbed()
        .setTitle('Informations sur les commandes ♥')
        .setColor('e410d3')
        .setThumbnail(boticon)
        .setTimestamp()
        .setDescription("Liste des commandes disponibles : 8ball, ban, clear, dis, help, info, infoserv, kick, monnaie, mute, muted, niv, play, prefix, report, sondage, stop")
    return message.channel.send(help_embed);
}

module.exports.help = {
    name: "info"
}