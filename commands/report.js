const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let reported_user = message.guild.member(message.mentions.members.first());
    if (!reported_user) {
        return message.channel.send("Cet utilisateur n'existe pas !")
    }
    let reported_reason = args.join(" ").slice(22);

    let report_embed = new Discord.MessageEmbed()
        .setTitle('Utilisateur reporté, Senpai ♥')
        .setColor('e410d3')
        .setThumbnail(message.author.avatarURL())
        .addField('Utilisateur reporté :', `${reported_user} (ID : ${reported_user.id})`)
        .addField('Utilisateur ayant reporté', `${message.author} (ID : ${message.author.id})`)
        .addField("Salon :", `${message.channel}`)
        .addField("Raison :", `${reported_reason}`);

    let report_channel = message.guild.channels.cache.find(x => x.name === "reports");
    if (!report_channel) {
        return message.channel.send("Le salon #reports n'existe pas. Veuillez le créer !")
    }
    message.delete();
    report_channel.send(report_embed);
}

module.exports.help = {
    name: "report"
}