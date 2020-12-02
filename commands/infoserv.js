const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    const servicon = message.guild.iconURL();
    let infoserv_embed = new Discord.MessageEmbed()
        .setTitle('Informations sur le serveur ♥')
        .setColor('e410d3')
        .setThumbnail(servicon)
        .setTimestamp()
        .addField('Nom du serveur :', message.guild.name)
        .addField('Nombre de membres :', message.guild.memberCount)
        .addField('Serveur créé le :', message.guild.createdAt)
        .addField('Vous avez rejoint le serveur le :', message.member.joinedAt);
    return message.channel.send(infoserv_embed);
}

module.exports.help = {
    name: "infoserv"
}