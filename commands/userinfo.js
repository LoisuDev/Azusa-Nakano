const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first();
    if (!member) {
        let hb1_embed = new Discord.MessageEmbed()
            .setAuthor(message.author.username)
            .setTitle("Informations sur l'utilisateur")
            .setDescription(`Serveur : ${message.guild.name}`)
            .addField('Client ID', message.author.id)
            .addField('Compte créé le', message.author.createdAt)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter('hb')
            .setTimestamp()
        return message.channel.send(hb1_embed);
    };
    let member_name = member.displayName;
    let hb2_embed = new Discord.MessageEmbed()
        .setAuthor(member_name)
        .setTitle("Informations sur l'utilisateur")
        .setDescription(`Serveur : ${message.guild.name}`)
        .addField('Client ID', member.id)
        .addField('A rejoint le serveur le', member.joinedAt)
        .setFooter('hb')
        .setTimestamp()
    return message.channel.send(hb2_embed);
    
}

module.exports.help = {
    name: "userinfo"
}