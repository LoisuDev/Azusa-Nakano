const Discord = require ('discord.js');

module.exports.run = async (bot, message, args) => {
    let dm = args.join(" ");
    const members =  message.channel.guild.members.cache;

    members.forEach(member => {
        if (member.user.bot) return;
        member.send(dm);
    })
}

module.exports.help = {
    name : "dm"
}