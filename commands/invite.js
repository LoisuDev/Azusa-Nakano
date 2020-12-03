const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.channel.send("Senpai, voici le lien pour m'inviter sur ton serveur ! >.< ♥");
    message.channel.send("https://discord.com/oauth2/authorize?client_id=783376806509805568&scope=bot&permissions=2147483647")
}

module.exports.help = {
    name: "invite"
}