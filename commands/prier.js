const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    var prier_embed = new Discord.MessageEmbed()
    .setColor("e410d3")
    .setTimestamp()
    .setTitle("Voici comment prier pour Flav : ♥")
    .setDescription("Bonne prière ! ♥")
    .addField("``1 - Lave toi les mains.``", "Il faut rester propre")
    .addField("``2 - Allonge toi sur ton lit``", "Mets toi à l'aise")
    .addField("``3 - Masturbe toi``", "Et prends-y du plaisir")
    .addField("``4 - Essuie les semences``", "Oui parce que ta mère arrive. Alors dépêche-toi.")
    .addField("``5 - Lave toi les mains``", "Toujours rester propre")
    .setThumbnail("https://cdn.discordapp.com/attachments/768482870489645097/782624848072671242/image_2020-11-29_005312-removebg-preview.png")
    .setFooter("Bot créé par ♥ Azusa-Chan. ♥#1909")
    .setImage("https://cdn.discordapp.com/attachments/768482870489645097/782625604432429116/telechargement.jpg")
    message.author.send(prier_embed)
    message.channel.send(`${message.author.username}, Je t'ai envoyé le protocole de prière de Flaviant3, coquin ! :smirk: :heart:`)
}

module.exports.help = {
    name: "prier"
}