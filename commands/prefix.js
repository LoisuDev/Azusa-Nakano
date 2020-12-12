const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_GUILD")) 
        return message.channel.send("Senpai, vous n'avez pas le droit de faire ça >.< ♥")
    if (!args[0] || args[0 == "help"])
        return message.channel.send(`Senpai, voici comment on change le préfix >.< ♥ : <prefix>prefix <préfix désiré>`);
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    prefixes[message.guild.id] = {
        prefixes: args[0]
    }

    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), err => {
        if (err) console.log(err);
    })
    message.channel.send(`Senpai, j'ai changé le préfix en "${args[0]}" >.< ♥"`)
}
module.exports.help = {
    name: "prefix"
}