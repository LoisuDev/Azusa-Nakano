const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let boticon = bot.user.avatarURL();
    let help_embed = new Discord.MessageEmbed()
        .setTitle('Informations sur les commandes ♥')
        .setColor('e410d3')
        .setThumbnail(boticon)
        .setTimestamp()
        .addField('Commandes sur le bot et la config', 'help, info, infoserv, invite, noel, prefix, userinfo')
        .addField('Commandes fun', '8ball, cheek, dis, flaviant3, hb, hug, kiss, ohayo, poke, pp, sayonara, slap, spank')
        .addField('Commande gestion serveur, modération', 'ban, clear, kick, mute, muted, report, sondage')
        .addField('Commande base de données', 'monnaie, presentation')
        .addField('```Commande <prefix>prier```', 'Commande spéciale pour savoir comment prier pour Flaviant3 ♥')
    return message.channel.send(help_embed);
}

module.exports.help = {
    name: "help"
}