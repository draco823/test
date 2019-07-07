const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('./index.json');
const token = process.env.token;
const prefix = ("/");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('/help | elementhall.craft.gg').catch(console.error)
});

bot.on('message', msg => {
    if (msg.content === prefix + "ip"){
        msg.channel.send("Voici l'adresse IP du serveur Minecraft d'Element Hall : **elementhall.craft.gg**")
    }
    if (msg.content === prefix + "help"){
        msg.reply("voici ce que je peux faire: **/help** : voir cet liste | **/ip** : avoir l'adresse IP du serveur Minecraft de Element Hall | **/site** : avoir le lien du site de Element Hall | **/link** : avoir le lien du serveur Discord de Element Hall | **/invite** : avoir le lien pour m'inviter sur un serveur | **/partenaires** : voir les partenaires de __Element Hall__")
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("Voici le site d'Element Hall : **https://elementhall.000webhostapp.com/**")
    }
    if (msg.content === prefix + "boutique"){
        msg.channel.send("Voici la boutique  d'Element Hall : **https://elementhall.buycraft.net/**")
    }
    if (msg.content === prefix + "link"){
        msg.channel.send("Voici mon serveur Discord : **https://discord.gg/**")
    }
    if (msg.content === prefix + "invite"){
        msg.reply("tu veux m'inviter ? Pas de problème, voici le lien : **https://discordapp.com/oauth2/authorize?client_id=597081662517411859&permissions=8&scope=bot**")
    }
    if (msg.content === prefix + "partenaires"){
        msg.reply("voici les partenaires d'**__Element Hall__** : **Factrio** : https://discord.gg/GhPm74m")
    }
});

bot.login(token);
