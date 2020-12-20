const Discord = require ('discord.js');

module.exports.run = async (bot, message, args) => {
    message.channel.send(`Voici l'avatar de : ${message.author.username}`)
    return message.channel.send(message.author.displayAvatarURL());
}

module.exports.help = {
    name : "pp"
}