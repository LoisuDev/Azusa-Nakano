const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client();
const monnaie = require('./monnaie.json');




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

const activities_list = [
    "s*help | Joue avec moi, Senpai >.< ♥", 
    "s*help | Nanami, c'est la plus kawaii >///<",
    "s*help | Abonnez-vous à flaviant3 ♥", 
    "s*help | Bientôt Noël *^*"
    ]; // creates an arraylist containing phrases you want your bot to switch through.

bot.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        bot.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});

bot.on ('message', async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    

    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

    

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
    if (!prefixes[message.guild.id]) {
        prefixes[message.guild.id] = {
            prefixes: process.env.PREFIX
        };
    }

    let prefix = prefixes[message.guild.id].prefixes;
    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(command.slice(prefix.length));
    if (commandfile) commandfile.run(bot, message, args);
    
}) 

//command.slice(prefix.length)