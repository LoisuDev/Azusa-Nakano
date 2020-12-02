const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if (!args[1]) return message.reply("Entrez une question !")

    let replies = ["Oui.", "Non.", "Peut-être."];
    let question = args.slice(0).join(" ");
    let res = Math.floor((Math.random() * replies.length));

    let ball8_embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setAuthor(message.author.tag)
        .setTitle('8 Ball ♥')
        .setTimestamp()
        .setThumbnail(message.author.avatarURL())
        .addField('Question :', question)
        .addField("Réponse :", replies[res]);
    
    message.channel.send(ball8_embed);
}
module.exports.help = {
    name: "8ball"
}