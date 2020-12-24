const Discord = require ('discord.js');
    
   module.exports.run = async (bot, message, args) => {
      let boticon = bot.user.displayAvatarURL();
      let lebest_embed = new Discord.MessageEmbed()
        .setColor('e410d3')
        .setTitle("L'amour de ma vie")
        .setDescription("Dans mon kokoro, c'est Hinata-kun ♥ (et aussi Océane rohhh (Nan mais j'écris ça psk sinon elle va encore chialer mdr))")
        .setThumbnail(boticon)
        .setTimestamp()
        .setFooter('Hinata-kun ♥')
      message.channel.send(lebest_embed)
   }

   module.exports.help = {
      name : "lebest"
   }