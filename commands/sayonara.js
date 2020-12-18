const Discord = require ('discord.js');

module.exports.run = async (bot, message, args) => {
    return message.channel.send(`Mata ashita, <@${message.author.id}> ! Aishiteiru ! >.< ♥`)
}

module.exports.help = {
    name : "sayonara"
}