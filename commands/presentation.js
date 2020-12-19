const Discord = require ('discord.js');

module.exports.run = async (bot, message, args) => {
    let prénom = args[0];
    let âge = args[1];
    let genre = args[2];
    let orientation = args[3];
    let anniversaire = args[4];
    let situation = args[5];
    let usericon = message.author.displayAvatarURL();

    if(!args[0] || !args[1] || !args[2] || !args[3] || !args[4] || !args[5] || args[0] == "help") {
        message.channel.send("Voici comment fonctionne la commande 'présentation' : ``<prefix>presentation prénom âge genre orientation_sexuelle date_anniversaire situation_amoureuse``");
        return message.channel.send("*Pour les arguments qui font plusieurs mots, comme la situation amoureuse ou le genre, Veuillez utiliser le tiret du 8 : '_'. Pour la date d'anniversaire, rentrez la sous ce format : ``JJ/MM/AAAA``.");
    }
    let presentation_embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setAuthor(message.author.username)
        .setDescription("Présentation ♥")
        .addField('Prénom', prénom)
        .addField('Genre', genre)
        .addField('Âge', âge)
        .addField('Orientation sexuelle', orientation)
        .addField('Anniversaire', anniversaire)
        .addField('Situation amoureuse', situation)
        .setThumbnail(usericon)
        .setTimestamp()
        .setFooter("presentation")
    message.channel.send(presentation_embed);
}

module.exports.help = {
    name : "presentation"
}