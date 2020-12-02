const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let kicked_user = message.guild.member(message.mentions.members.first());
    if (!kicked_user) {
        return message.channel.send("Cet utilisateur n'existe pas !")
    }
    let kicked_reason = args.join(" ").slice(22);
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("Vous n'avez pas la permission de faire cela !");
    }
    if (kicked_user.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous ne pouvez pas kick cette personne !");
    }

    let kick_embed = new Discord.MessageEmbed()
        .setTitle('Utilisateur kick, Senpai ♥')
        .setColor('e410d3')
        .setThumbnail(message.author.avatarURL())
        .addField('Utilisateur kick :', `${kicked_user} (ID : ${kicked_user.id})`)
        .addField('Utilisateur ayant kick', `${message.author} (ID : ${message.author.id})`)
        .addField("Salon :", `${message.channel}`)
        .addField("Raison :", `${kicked_reason}`);

    let kick_channel = message.guild.channels.cache.find(x => x.name === "reports");
    if (!kick_channel) {
        return message.channel.send("Le salon #reports n'existe pas. Veuillez le créer !")
    }
    message.delete();
    message.guild.member(kicked_user).kick(kicked_reason);
    kick_channel.send(kick_embed);
}

module.exports.help = {
    name: "kick"
}