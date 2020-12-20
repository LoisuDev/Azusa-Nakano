const Discord = require ('discord.js');

module.exports.run = async (bot, message, args) => {
    let flav_embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('Flaviant3 on YouTube ♥')
        .setDescription('Abonnez-vous à la meilleure chaine YouTube du monde, Flaviant3 ! ')
        .setThumbnail('https://yt3.ggpht.com/ytc/AAUvwnhZKeaVP9lUb4EPUfyN6W5ddliCC1-lfGgXjxEFcw=s900-c-k-c0x00ffffff-no-rj')
        .setImage('https://media1.tenor.com/images/1bfbfe7835768e0973a8a3a30d1840da/tenor.gif')
        .setFooter('flaviant3')
        .setTimestamp()
    message.channel.send(flav_embed);
    return message.channel.send('https://www.youtube.com/channel/UCQ47-EV4wnlrUQMkr50GidA')
}

module.exports.help = {
    name : "flaviant3"
}