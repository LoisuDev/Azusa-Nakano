const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    var ping = Date.now() - message.createdTimestamp + " ms";
    message.channel.send("Votre ping est de `" + `${Date.now() - message.createdTimestamp}` + " ms`");
}
module.exports.help = {
    name: "ping"
}