const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let muted_user = message.guild.member(message.mentions.members.first());
    if (!muted_user) {
        return message.channel.send("Cet utilisateur n'existe pas !")
    }
    if (!message.member.hasPermission("KICK_MEMBERS")) {
        return message.channel.send("Vous n'avez pas la permission de faire cela !");
    }
    if (muted_user.hasPermission("MANAGE_MESSAGES")) {
        return message.channel.send("Vous ne pouvez pas mute cette personne !");
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (!muterole) {
        return message.channel.send("Le rôle 'muted' n'existe pas ! Veuillez le créer. Tapez ``<prefix>muted`` pour savoir les prérequis.")
        };

    

   
    const ms = require('ms')
    let mutetime = args[1];
    if (!mutetime) return message.channel.send('Spécifiez la durée !');

    await muted_user.roles.add(muterole.id);
    message.channel.send(`<@${muted_user.id}> est mute pendant ${ms(ms(mutetime))} !`);

    setTimeout(() => {
        muted_user.roles.remove(muterole.id);
        message.channel.send(`<@${muted_user.id}> n'est plus mute.`)
    }, ms(mutetime));
}

module.exports.help = {
    name: "mute"
}