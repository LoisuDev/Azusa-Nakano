const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let banned_user = message.guild.member(message.mentions.members.first());
    if (!banned_user) {
        return message.channel.send("Cet utilisateur n'existe pas !")
    }
    let ban_reason = args.join(" ").slice(22);
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("Vous n'avez pas la permission de faire cela !");
    }
    if (banned_user.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous ne pouvez pas ban cette personne !");
    }

    let ban_embed = new Discord.MessageEmbed()
        .setTitle('Utilisateur ban, Senpai ♥')
        .setColor('e410d3')
        .setThumbnail(message.author.avatarURL())
        .addField('Utilisateur ban :', `${banned_user} (ID : ${banned_user.id})`)
        .addField('Utilisateur ayant ban', `${message.author} (ID : ${message.author.id})`)
        .addField("Salon :", `${message.channel}`)
        .addField("Raison :", `${ban_reason}`);

    let ban_channel = message.guild.channels.cache.find(x => x.name === "reports");
    if (!ban_channel) {
        return message.channel.send("Le salon #reports n'existe pas. Veuillez le créer !")
    }
    message.delete();
    message.guild.member(banned_user).ban();
    ban_channel.send(ban_embed);
}

module.exports.help = {
    name: "ban"
}