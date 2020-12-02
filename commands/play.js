const ytdl = require('ytdl-core')

module.exports.run = async (bot, message, args) => {
    if(!message.author.voiceChannel) return message.channel.send("Senpai, connectez-vous à un salon vocal ♥")
    if(message.guild.me.voiceChannel) return message.channel.send("Senpai, Je suis déjà en vocal >.< ♥")
    if(!args[0]) return message.channel.send("Senpai, vous devez indiquer un lien youtube pour que je chante pour vous >.< ♥")

    const validate = await ytdl.validateURL(args[0]);
    if (!validate) return message.channel.send("Senpai, ton lien n'est pas valide ;-; ♥")

    const info = await ytdl.getInfo(args[0]);
    const connexion = await message.member.voiceChannel.join();
    const dispatcher = await connexion.playStream(ytdl(args[0], { filter: 'audioonly'}))
    message.channel.send(`Senpai, je chante ${info.title}`)

}
module.exports.help = {
    name: "play"
}