const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let arguments = args.join(" ");
    message.delete().catch();
    message.channel.send(arguments);
}
module.exports.help = {
    name: "dis"
}