const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Senpai, vous n'avez pas le droit de faire ça >.>");
    }
    if (!args[0]) return message.channel.send ("Senpai, veuillez entrer la question du sondage ! >.> ♥")

    let sondage_embed = new Discord.MessageEmbed()
        .setTitle(`Sondage créé par : ${message.author.username} ♥`)
        .setColor('e410d3')
        .setThumbnail(message.author.avatarURL())
        .setFooter('Répondez en appuyant sur les réactions ci-dessous')
        .setDescription(args.join(' '));
    
    let msg = await message.channel.send(sondage_embed);
    await msg.react('✅');
    await msg.react('❌');
}

module.exports.help = {
    name: "sondage"
}