const Discord = require ('discord.js');

module.exports.run = async (bot, message, args) => {
    let title = args[0];
    let thumbnail = args[1];
    let image = args[2];
    let color = args[3];
    let description = args.join(' ').slice(30)
    if (!args[0] || !args[1] || !args[2] || !args[3] || !args[4] || args[0] == 'help') {
        return message.channel.send('``<prefix>embed titre thumbnail image couleur description');
    }
    let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.username)
        .setColor(color)
        .setTitle(title)
        .setThumbnail(thumbnail)
        .setImage(image)
        .setDescription(description)
        .setFooter('Embed')
        .setTimestamp()
    message.channel.send(embed)
}

module.exports.help = {
    name : "embed"
}