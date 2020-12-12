const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const monnaie = require('./monnaie.json');
let prefix = process.env.PREFIX;


bot.commands = new Discord.Collection();

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split('.').pop() === 'js');
    if (jsfile.length <= 0) {
        console.log('Je ne trouve pas la commande');
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.help.name, props);
    })
})

bot.login(process.env.BOT_TOKEN);

bot.on('ready', async () => {
    console.log(`${bot.user.username} est en ligne`);
    bot.user.setActivity('s*help | Staring at you, Senpai~');
});

bot.on ('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    

    //Système de monnaie

    if (!monnaie[message.author.id]) {
        monnaie[message.author.id] = {
            monnaie : 0
        };
    }

    let base_monnaie = Math.floor(Math.random() * 5) + 1;
    let ajout_monnaie = Math.floor(Math.random() * 3) + 1;

    if (ajout_monnaie === base_monnaie) {
        monnaie[message.author.id] = {
            monnaie: monnaie[message.author.id].monnaie + ajout_monnaie
        }
    }
    fs.writeFile('./monnaie.json', JSON.stringify(monnaie), err => {
        if(err) console.log(err);
    });

    //Variables


    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(command.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
    if (message.content === "Ta gueule" || message.content === "tg") {
        message.channel.send("...")
        message.author.send("Senpai, t'es méchant(e)... :pleading_face: Je te boude >.>")
    }
    if (message.content === "OwO" || message.content === "owo") {
        return message.channel.send("What's this ?")
    }
}) 

