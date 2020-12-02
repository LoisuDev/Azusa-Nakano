const ytdl = require('ytdl-core')

module.exports.run = async (bot, message, args) => {
    if(!message.member.voiceChannel) return message.channel.send("Senpai, connectez-vous à un salon vocal ♥")
    if(!message.guild.me.voiceChannel) return message.channel.send("Senpai, Je ne suis pas en vocal >.< ♥")
    if(!message.guild.me.voiceChannelID !== message.member.voiceChannelID) 
        return message.channel.send("Senpai, Tu ne peux pas me déconnecter. Nous ne sommes pas ensemble, malheureusement >.< ♥")
    message.guild.me.voiceChannel.leave();
    message.delete();
}

module.exports.help = {
    name: "stop"
}