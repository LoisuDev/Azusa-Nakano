const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first();
    let hb_embed = new Discord.MessageEmbed()
        .setTitle(`${member.displayName}, ${message.author.username} te souhaite un joyeux anniversaire !`)
        .setTimestamp()
        .setFooter('hb')
        .setColor('e410d3')
        .setImage('https://ekladata.com/2AQ7wmsEevjyjV071YNdrJFDpP0.gif')

    return message.channel.send(hb_embed);
}

module.exports.help = {
    name : "hb"
}