const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let citations = [
    "DJ Faufau - Loïs 2021",
    "C'est solitaire - Luné 2020",
    "Parce que Steffy - Luné 2020",
    "Interdiction de faire des links, des liens quoi. Pas Link dans Zelda, hein. - Loïs 2021",
    "Tarduction - Loïs 2019",
    "Admister - Luné 2019",
    "winadmijn - Luné 2020",
    "Ah oui merde ! J'ai cru que mai c'était après juin... - Loïs 2021",
    "En 2093 quand on sera sur notre lit d'hôpital, branchés de partout - oui je sais c'est très gai - On dira à nos enfants 'C'est solitaire'. Et on rigolera. Comme des mongols. -- Loïs 2021",
    "Créer grotte. - Luné 2021",
    "Cette voiture a des phares méchants. - Loïs 2021",
    "La blague commence à perdre de son fun. - Loïs 2020",
    "J'ai mal aux cheveux - Loïs 2020"
  ];
  let res = Math.floor((Math.random() * citations.length));
  return message.channel.send(citations[res]);
}
