const Discord = require ('discord.js');

module.exports.run = async (bot, message, args) => {
    let azunyan = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle('Nakano Azusa')
        .setDescription('Description')
        .addField('Nom en Japonais', '中野梓')
        .addField('Anniversaire', '11 novembre')
        .addField('Signe astro', 'Scorpion')
        .addField('Taille/poids', '1,50m / 46kgs')
        .addField('Style de musique préféré', "La musique occidentale, mais elle s'intéresse à tous les genres")
        .addField('Style vestimentaire', 'Azusa préfère porter son T-shirt par dessus sa jupe. Elle adore les pentalons courts également')
        .addField('Style de chambre', "Très bien rangée. Pas excessivement mignon. La chambre d'Azusa est typique d'une fille de son âge.")
        .addField('Nourriture préférée', "En fait, elle aime les gâteaux et cache ce fait pour éviter de tomber dans l'habitude de boire du thé du Light Music Club, mais son secret est révélé.")
        .addField('Sa passion', 'Jouer de la guitare (surtout électrique)')
        .setImage('https://media1.tenor.com/images/0babcc3bec04ca546c7bcf407e148cd1/tenor.gif')
        .setThumbnail(bot.user.displayAvatarURL())
        .setTimestamp()
        .setFooter('azunyan')
    message.channel.send(azunyan);
}

module.exports.help = {
    name : "azunyan"
}