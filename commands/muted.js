const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let boticon = bot.user.displayAvatarURL();
    var muted_embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('Créer le rôle "muted" ♥')
        .setThumbnail(boticon)
        .setDescription('Créez un rôle muted, Et dans les permissions de tous vos salons, vous ajoutez ce rôle et retirez les permissions pour écrire et intéragir.')
        .setTimestamp()
    message.channel.send(muted_embed);
}

module.exports.help = {
    name: "muted"
}