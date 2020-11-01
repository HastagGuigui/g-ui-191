//Déjà, pour information, tous les dossiers se situant ici sont ceux d'un BOT DISCORD.

//Les constantes et variables importantes (ligne 4 à 54)
const Discord = require('discord.js');
const google = require('google')
const bot = new Discord.Client();
const { get } = require ("snekfetch");
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const math = require('mathjs')
const Jimp = require('jimp');
const request = require('request');
const DBL = require("dblapi.js");
const dbl = new DBL('put your own goddamn top.gg token here you idiot', bot);
const adapter = new FileSync('database.json');
const shopadapter = new FileSync('shop.json');
const modadapter = new FileSync('moderators.json');
const bgadapter = new FileSync('background.json');
const settingsadapter = new FileSync('settings.json');
const rpgadapter = new FileSync('rpg.json');
const descadapter = new FileSync('desc.json');
const globaladapter = new FileSync('globalchannels.json');
const welcomeadapter = new FileSync('welcome.json');
const announceadapter = new FileSync('interesting_channels.json')
const announce = low(announceadapter);
const welcome = low(welcomeadapter);
const db = low(adapter);
const shopdb = low(shopadapter);
const moddb = low(modadapter);
const bgdb = low (bgadapter);
const settingsdb = low(settingsadapter);
const rpg = low(rpgadapter);
const desc = low(descadapter);
const global = low(globaladapter);
const ownerID = "448560475987509268"
const streamOptions = { seek: 0, volume: 1 };
const queue = new Map();
const botstats  = {
    //guildid: '602104832941228052',
    userid: '602104590296678411',
    //channelid: '602104976289955855',
}
const MusicClient = require("yet-another-discord.js-musicbot-addon");


bot.music = new MusicClient(bot, {
    apiKey: "AIzaSyA0P4yaEZibwrdxSmNM_MifqTnOE8X5b1Y",
    defVolume: 50,
    bitRate: 12000,
    maxHistory: 50,
    maxQueue: 100,
    searchFilters: ['cover', 'live', 'remix', 'mix', 'parody', 'hour', 'extended', 'trailer'],
    color: 13632027,
});
var emojithink = [
    "569848999742406663",
    "571648069255561217",
    "571648679715274774",
    "571648972641533952",
    "571668927738937347",
    "571669773658750977",
    "571669908484784148",
    "571669923181625354",
    "571669840939450388",
]

var joinmsg = [

]
/*
var joue_à = [
    'des choses qui ne devraient jamais exister',
    "essayer d'expulser MEE6 !",
    'vivre sa vie',
    'rien. ça se voit, non ?',
    'répondre à toutes vos suggestions',
    "comprendre comment marche l'algorithme de YouTube (ILLOGIQUE selon lui)",
    "streamer (peut-être)",
    "faire le flop (blague de asdfmovie)",
    "trouver ce qui me fait crash (jsp)",
    "94% The Nightmare sur Geometry Dash",
    "trouver des concepts pour mes prochaines vidéos",
    "défoncer la matrix"
]
*/
bot.on('message', message => {})
// En dessous, pour les databases
db.defaults({ 
    memes_suggestions : [], 
    money: [],
    bot_suggeestions : [], 
    inventory: [], 
    xp: [], 
    description : [], 
    guildxp : [], 
    rolexp : [], 
    daily : [],
    badges : []}).write();
moddb.defaults({ moderators: []}).write();
bgdb.defaults({profiles: []}).write();
settingsdb.defaults({global: [], canEarnMoney: [], lang: []}).write();
rpg.defaults({profile: []}).write();
desc.defaults({description: []}).write();
shopdb.defaults({shop_items: []}).write();
global.defaults({channels: []}).write();
welcome.defaults({welcome: []}).write();
announce.defaults({senders: [], receivers: []})
const prefix = "g/"

bot.on('ready', async () => { /* ça se lance direct après qu'on l'à démarré 
    var stats = await dbl.getStats()
    var votes = await dbl.getVotes()*/
    request({url: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLgu-4-oMqRZVbgwbgzIo7A&fields=items/statistics/subscriberCount&key=AIzaSyA0P4yaEZibwrdxSmNM_MifqTnOE8X5b1Y`, json: true}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var subs = body.items[0].statistics.subscriberCount
            var setGame = `g/help | Joyeux 5e anniversaire discord!`
            bot.user.setActivity(setGame);
            console.log(`#Guigui has ${subs}/200 subscribers on youtube`)
        }else if (error) {
            var setGame = `g/help | Joyeux 5e anniversaire discord!`
            bot.user.setActivity(setGame);
            console.log(error)
        }
    })
    //var setGame = `${joue_à[Math.floor(Math.random() * joue_à.length)]} | g/help | ${bot.guilds.reduce((a, g) => a + g.memberCount, 0)} utilisateurs | Version 1.6 (English Update)`
    //bot.guilds.cache.get('514168154688061464').channels.cache.get(botstats.userid).setName(`Online: ${bot.guilds.cache.get('514168154688061464').members.filter(m => m.presence.status === 'online')}/${bot.guilds.cache.get('514168154688061464').memberCount}`); // set les channels
    console.clear();
    console.log("Starting the different modules...")
    console.log("Connecting to Discord API")
    console.log("Almost done...")
    console.log("Uncorrupting the protogen")
    console.log("Preparing the failed machine learning code...")
    console.log(`
=================[#GuiguiBot]=================
Le protogen #GuiguiBot version 1.9.1 (preview 1) lancé avec succès.
    
Stats:
    -${bot.guilds.cache.size} serveurs
    -${bot.users.cache.size} utilisateurs ('fin j'crois)
`) // la console :D
});

bot.login("nice try");

bot.on('guildMemberAdd', member => { // si la guild n'est pas celle marquée (ici mon discord) eh bien rien ne se passe.
    console.log(`${member.user.tag} a rejoint ${member.guild.name}`);
    if(!welcome.get("welcome").find({server: member.guild.id}).value()) {
        var channel = 'bruh'
        var JoinMessage = 'deactivate'
    }else{
        var userbgdb = welcome.get("welcome").find({server: member.guild.id}).value();
        var userbg2 = Object.values(userbgdb)
        var channel = userbg2[2]
        var JoinMessage = userbg2[3].replace('{username}', `<@${member.user.id}>`).replace('{memberCount}', `${member.guild.memberCount}`)
    }
    if (channel == 'bruh' || JoinMessage == 'deactivate') return;
    let JoinChannel = member.guild.channels.cache.find('id', channel); // channel selected
    let logEmbed = new Discord.MessageEmbed() // ici, un embed :shrug:
        .setTitle(`${member.guild.name}`) 
        .setDescription(JoinMessage)
        .setColor('0x0000FF')
        .setThumbnail(member.user.displayAvatarURL)
    JoinChannel.send(logEmbed); // et c'est envoyé.
})

bot.on('guildMemberRemove', member => { // Bon je pense que c'est la même chose :D
    console.log(`${member.user.tag} a rejoint ${member.guild.name}`);
    if(!welcome.get("welcome").find({server: member.guild.id}).value()) {
        var channel = 'bruh'
        var JoinMessage = 'deactivate'
    }else{
        var userbgdb = welcome.get("welcome").find({server: member.author.id}).value();
        var userbg2 = Object.values(userbgdb)
        var channel = userbg2[2]
        var JoinMessage = userbg2[4].replace('{username}', `<@${member.user.id}>`).replace('{memberCount}', `${member.guild.memberCount}`)
    }
    if (channel == 'bruh' || JoinMessage == 'deactivate') return;
    let JoinChannel = member.guild.channels.cache.find('id', channel); // channel selected
    let logEmbed = new Discord.MessageEmbed() // ici, un embed :shrug:
        .setTitle(`${member.guild.name}`) 
        .setDescription(JoinMessage)
        .setColor('0x0000FF')
        .setThumbnail(member.user.displayAvatarURL)
    JoinChannel.send(logEmbed); // et c'est envoyé.
})

// Ici, c'est pour envoyer des infos aux autrs fichiers.
bot.on('message', async message => {
    let text = { // trucs de texte
        french : { // en français
            music : {
                notConnected : "Il faut que tu te connectes dans un salon vocal que je puisse rejoindre pour que je drop le son.",
                connectedElsewhere : "Tu peux me move stp?",
                needURL : "Je peux pour le moment fonctionner qu'avec une URL.",
                URLNotValid : "J'ai besoin d'une URL YouTube VALIDE.",
                nowPlaying : "Son en diffusion :"
            },
            avatar : {
                you : "Voici votre avatar: ",
                ping1 : "Voici l'avatar de ",
                ping2 : ": ",
            },
            work : {
                workTexts1 : [
                    'Vous venez de trouver un petit job qui vous donne ',
                    'Vous devenez influenceur et obtenez ',
                ],
                workTexts2 : [
                    ' direct. Sympa!',
                    ' après avoir posté 2-3 vidéos.'
                ],
                workCredits1 : [
                    'Écrit par #Guigui',
                    'Écrit par #Guigui',
                ],
                workTexts3 : [
                    'Vous avez cassé la vaiselle d\'un restaurant classé 3 étoiles et payez ',
                ],
                workTexts4 : [
                    ' en dédommagement',
                ],
                workCredits2 : [
                    'Écrit par #Guigui',
                ],
                workTitle : "Le résultat de vos efforts:",
                coolDown : "Désolé, mais vous devez vous reposer pour au moins 1 minute."
            },
            addmoney : {
                gotmoney1 : "Bravo ! Tu viens d'obtenir ",
                gotmoney2 : " de la part d'un développeur (#Guigui par exemple) !",
                confirmed : "Vous venez d'envoyer ",
                confirmed2 : " à ",
            },
            settings : {
                noperm : "Désolé, tu ne sembles pas avoir assez de permissions pour pouvoir exécuter cette commande. (Il te faut la permission de gérer le serveur ou juste admin bruh)",
                noargs : "On dirait qu'il n'y a pas d'arguments... Voici de quoi vous aider: \n g/settings **welcome** permet de configurer les messages de bienvenue: \n g/settings welcome **message** <message> mettra en place un message de bienvenue \n g/settings welcome **channel** <mention du channel (optionnel)> mettra les messages de bienvenue/ d'au revoir dans le salon mentionné, ou le salon dans lequel ce message est posté \n g/settings welcome **leavemessage** permet de configurer les messages d'au revoir. \n \n Aussi, vous pouvez insérer {username} et {memberCount} pour avoir le pseudo du nouveau et le nombre d'utilisateurs du serveur, directement dans le message",
                upchannel : "Le salon dans lesquels seront envoyés les messages de bienvenue est désormais",
                newmsgJ : "Voici une preview du message de bienvenue :",
                newmsgL : "Voici une preview du message de départ du serveur :"
            },
            weather : {
                title : "Météo de la ville de ",
                current : "La température y est de ",
                noArgs : "J'ai besoin d'un nom de ville pour pouvoir la trouver, je ne peux pas lire dans tes pensées!"
            },
            stuff : {
                lang : 1,
                langFull : "fr-FR",
                newlanguage : "Vous avez modifié la langue que j'utilise dans ce serveur sur :",
                emoji : "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/233/flag-for-france_1f1eb-1f1f7.png"
            },
            subcount : {
                title : "Nombre d'abonnés de ",
                subs: " abonnés"
            },
            global : {
                noGlobalDefined : "Le channel relié aux autres serveurs n'est pas défini ici",
                notCorrectChannel : {
                    first: "Cette commande doit être faite dans le channel #",
                    second: " du serveur."
                },
                noargs : "Il faut un message pour que la commande marche",
                set : "le channel de global a été mis en place.",
                updated : "le channel de global a été mis à jour.",
                from: "depuis le #"
            },
            specialthanks : {
                title : "Ceux que #Guigui remercie",
                nitroBooster : "Le premier Nitro Boost du serveur de #Guigui :",
                firstEnglishServer : "Le premier serveur anglais qui m'a acceuilli :",
                firstInLeaderboard : "Le top 1 d'après mes donnés (avant un reset) :",
            },
            help : { // pour la commande help
            category : {
                mod : "Les commandes de modération vues et revues...",
                server : "Ces commandes sont faites pour montrer des infos à propos d'une guild, d'un utilisateur...",
                gd : "[**EN DEVELOPPEMENT**] Ces commandes sont reliées aux serveurs du célèbre jeu intitulé \"Geometry Dash\"",
                imageManipulation : "Les commandes ci-dessous prennent en charge la manipulation d'images.",
                random : "Tout ce qui rentre pas dans les autres catégories =)"
            },
            helptitle : "Aide:",
            commands : "Commandes:",
            help : "Montre ce menu (#mercicaptainobvious).",
            guiguibot : "Donne des informations à propos du bot.",
            eightball : "Pose une question à la boule magique et tu verras ce qu'elle te répond :8ball:.",
            memes : "Vous présente un meme choisi parmi ceux que le bot connaît. (update tous les 26 du mois)",
            memessugg : "Permet de suggérer un meme en envoyant le lien de l'image (au pire si ça marche pas contactez le créateur du bot :wink:).",
            server : `Donne des informations à propos du serveur actuel qui est **${message.guild}**.`,
            serverlist : `Montre les **${bot.guilds.size}** serveurs sur lequel le bot est.`,
            money : "Affiche votre nombre de money.",
            qod : "Vous permet de jouer au Quitte Ou Double et peut-être doubler vos paris :wink:",
            userinfo : "Donne les infos d'un utilisateur",
            ban : "Pour bannir un membre, c'est logique?",
            mute : "Pour faire taire un bavard",
            unmute : "Pour annuler le g/mute",
            sondage : "Pour créer un sondage. [Vous aurez besoin d'un rôle appellé \"Permission Sondage\"]",
            invite : "Obtenir des liens (pas si) utiles à propos du bot.",
            calc : "N'essayez pas de diviser par 0.",
            clear : "Pour nettoyer les messages inutiles.",
            level : "Permet de voir votre niveau d'expérience. Me remerciez pas.",
            creatememe : "Permet de créer un meme rapidement (Syntaxe: \"g/creatememe <texte>\" avec une image envoyée dans le message.)",
            profile : "Vous donne des infos sur ce que le bot a dans la database sur vous (oui bon, c'est pas grand chose mais bon. Il faut bien commencer par quelque chose.)",
            gdlevel : "Pour rechercher des donnés à propos d'un niveau de GEOMETRY DASH. C'est plutôt cool, non?"
            
            },
            leaderboard : {
            money : {
                title : "Top 10 des membres les plus riches tous serveurs confondus"
            },
            level : {
                title : "Top 10 des joueurs les plus haut niveau tous serveurs confondus",
                level : "Niveau "
            },
            guild : {
                title : "Top 10 des joueurs les plus haut niveau dans ce serveur",
                level : "Niveau "
            }
            },
            eightball : {
            noargs : "Désolé mais il faut poser une question. :8ball:",
            replys : {
                one : "Oui.",
                two : "Non.",
                three : "Je sais pas moi!",
                four : "Ben j'en sais rien",
                five : "Mais bien entendu mec !",
                six : "Absolument pas !",
                seven : "P'têt bin qu'oui, p'têt bin qu'non !",
                eight : "Je pense...",
                nine : "Je pense pas",
            },
            title : ":8ball: Ce que dit la boule magique :",
            question : "Ce que vous avez posé comme question :",
            answer : "Ce que dit la boule magique :"
            },
            ban : {
            unban : {
                unknown : "Il faut un ID d'utilisateur correct pour que je puisse le déban !",
                notEnoughPermissions : "Je sais que tu veux déban ton pote mais un de nous deux n'a pas la permission :/",
                unbanned : " a été débanni."
            },
            permerror : "Désolé de te l'annoncer mais tu n'as pas été autorisé à bannir.",
            notarget : "Il me faut la personne que tu souhaite bannir ! Syntaxe: [g/ban @quelqu_un#1337]",
            banned : "Banni par ",
            confirm : " a été banni.",
            },
            calc : {
            noargs : "Il faut rentrer un calcul pour que ça fonctionne, non ?",
            calc : "Calculatrice:",
            input : "Calcul",
            output : "Résultat",
            },
            clear : {
            permerror : "Vous n'avez pas la permission d'utiliser cette commande.",
            noargs : "Veuillez indiquer un nombre de messages à supprimer.",
            nan : "Veuillez indiquer un nombre valide.",
            not100 : "Veuillez indiquer un nombre entre 1 et 100",
            success : " messages ont été supprimés !",
            },
            invite : {
            links : "Liens utiles :",
            server : "Discord officiel du bot",
            invite : "Ajouter le bot sur votre Discord :",
            requested : "Requête par ",
            clickhere : "Cliquez ici",
            },
            level : {
            title : "Votre niveau d'expérience",
            desc1 : "** est au niveau **",
            desc2 : "** avec **",
            desc3 : "** points d'expérience avant le niveau "
            },
            guildlevel : {
            title : "Votre niveau d'expérience dans le serveur : **",
            desc1 : "** est au niveau **",
            desc2 : "** avec **",
            desc3 : "** points d'expérience avant le niveau "
            },
            meme : {
            memetitle : "Voila votre meme !",
            memedesc : "#Guigui les a choisi via le subreddit /r/memes",
            author : "Auteur : ",
            sugg : "Pour en proposer, faites g/memesuggest avec le lien du meme :)",
            },
            memessugg : {
            ok : "Votre meme a bien été envoyé."
            },
            profile : {
            title : `Profil de `,
            title2 : ":",
            xp : "Nombre d'XP",
            description : "Description:",
            nodesc : "Cette personne ne possède aucune description. \n Étrange..."
            },
            mute : {
            permerror : "Désolé, t'as pas le droit d'utiliser cette commande.",
            permerror2 : "Vous ne pouvez pas mute ce membre, soit il est trop haut, soit j'ai pas la perm.",
            noping : "Il faut mentionner le membre apres la commande (g/mute @MEMBER)",
            no : "Je ne peux pas mute ce membre",
            yes : ' a été mute :white_check_mark:'
            },
            ping : {
            pong : "Temps de latence :"
            },
            qod : {
            nomoney : "il faut mettre une valeur entre 1 et",
            toomuch : ", c'est pas bien de parier plus que ce que t'as !",
            won : "vient de gagner",
            lose : "vient de perdre",
            valuenow : ", son argent est à",
            },
            server : {
            title1 : "Infos du serveur",
            title2 : "Information du Discord",
            guild : "Nom du Discord",
            owner : "Owner du serveur",
            created : "Date de création",
            joined : "Tu as rejoint le serv le",
            users : "Nombre de joueurs",
            },
            sondage : {
            nopermrole : "Pour utiliser cette commande, il faut le role \"Permission Sondage\".",
            noargs : "Pour faire un sondage, il faut faire g/sondage <question>",
            title : `Sondage de ${message.author.username}`,
            bottom1 : "Réagis avec ✅ ou ❌",
            bottom2 : "Réagis avec 🅰 ou 🇧",
            },
            suggestions : {
            ok : "La suggestion a bien été posté"
            },
            unmute : {
            youcant : "Vous ne pouvez pas unmute ce membre.",
            icant : "Je ne peux pas unmute ce membre.",
            ok : ' a été unmute :white_check_mark:',
            },
            kick : {
            permerror : "Désolé de te l'annoncer mais tu n'as pas été autorisé à kick.",
            notarget : "Il me faut la personne que tu souhaite expulser ! Syntaxe: [g/kick @quelqu_un#1337]",
            banned : "Kick par ",
            confirm : " a été kick.",
            },
            desc : {
            noargs : "Non, il n'y a aucune description. Voilà à quoi elle ressemble actuellement:",
            ok : "Votre description a été mise à jour! La voici:"
            },
            money : {
            amount : `Porte-monnaie de ${message.author.username}`,
            },
            bg : {
            noargs : "Vous n'avez pas choisi de thème. Pour le moment, le thème de votre carte de profil est ",
            ok : "Voilà a quoi ressemble le nouveau thème. \n Refaites la commande pour le changer",
            tooHighNumber : "Ce nombre est beaucoup trop grand. Sache que le nombre de style actuel est de : ",
            },
            gdlevel : {
            author : "Créé par ",
            difficulty : "Difficulté: ",
            downloads : "Téléchargements :",
            likes : "Nombre de pouces en l'air :",
            downloads2 : " téléchargements",
            likes2 : " pouces en l'air",
            length : "Longueur du niveau :",
            madewith : "Fait avec l'API de GDColon (GDBrowser)",
            minusone : "Ce niveau n'a pas été trouvé. (Code d'erreur: -1)"
            },
            gduser : {
            rank : "Numéro de leaderboard: ",
            stars : "Etoiles récupérées: ",
            diamonds : "Diamants récupérés: ",
            demons : "Niveaux \"Demon\" terminés: ",
            demons2 : " démon(s)",
            cp : "Points créateur :",
            moderator : "MODÉRATEUR",
            moderator2 : "VIEUX MODÉRATEUR",
            },
            rpgstart : {
            noargs : {
                title : "Erreur, il manque des arguments:",
                description : "Voilà comment faire: \"g/rpgstart <nom du perso>\" et attacher à ce message une image (qui fait moins de 1MB de taille)"
            },
            alreadyRegistered : "Ah, non mais tu as déjà un perso qui est appellé:",
            welcome : "Bienvenue ",
            tutorial : "Donc, comme ça tu viens d'arriver? Intéressant. Voilà quelques astuces: \n g/tutorial permet de montrer ce message, oui je sais c'est un peu logique... \n g/map affiche la carte du rpg, enfin de la zone où tu t'es mis \n g/farm permet de farmer, en fonction de la zone, plus ou moins de pognon... \n g/rpgshop vous donne accès à de l'équipement pas dégeu du tout... Quoi encore... J'oubliais... \n Bon, je retrouve pas, mais bonne chance, $$ !",
            },
            tweet : {
            notGui : "Mais, qui êtes vous?! Comment vous avez trouvez cette commande?!",
            ok : "Votre tweet a été posté! Le voici:",
            from : "depuis ",
            reply : "En réponse à ",
            notEnoughArgs : "Petit problème... Le système a besoin de 3 paramètres minimum: \n1- L'ID du message auquel répondre (il se situe à la fin de l'url d'un tweet), le nom d'utilisateur (avec un @) puis enfin le texte."
            }
        },
        english : {
            music : {
                notConnected : "You seem to not be connected anywhere :/",
                connectedElsewhere : "Can you move me to your channel please?",
                needURL : "For now, only Youtube url are allowed. Sorry.",
                URLNotValid : "For now, only **VALID** Youtube url are allowed. Sorry.",
                nowPlaying : "Now playing :"
            },
            avatar : {
                you : "Here's your avatar: ",
                ping1 : "Here's ",
                ping2 : "\'s avatar: ",
            },
            work : {
                workTexts1 : [
                    'You worked as an editor for a popular youtuber and earned ',
                    'You found a job in a pizzeria and earned ',
                    'You made a video on your youtube channel that became so viral that you got '
                ],
                workTexts2 : [
                    ' from him.',
                    '.',
                    ' just with this. Isn\'t it good?'
                ],
                workCredits1 : [
                    'Written by #Guigui',
                    'Written by #Guigui',
                    'Written by #Guigui',
                ],
                workTexts3 : [
                    'You broke something very expensive and had to pay ',
                ],
                workTexts4 : [
                    ' to fix it. Yeah, it wasn\'t your fault.'
                ],
                workCredits2 : [
                    'Written by #Guigui',
                ],
                workTitle : "What you did:",
                coolDown : "Sorry, but you need to rest for at least 1 minute."
            },
            addmoney : {
                gotmoney1 : "Good job! You just got ",
                gotmoney2 : " from a dev! (#Guigui for example) !",
                confirmed : "You sent ",
                confirmed2 : " to ",
            },
            stuff : {
                lang : 2,
                langFull : 'en-US',
                newlanguage : "You setted up _GuiguiBot's language to :",
                emoji : "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/233/flag-for-united-states_1f1fa-1f1f8.png"
            },
            settings : {
                noperm : "Sorry, It looks like you don't have the permission to manage the server or the administrator permissions",
                noargs : "It looks like there's no args... Here's some help: \n g/settings **welcome** helps you configure the welcome messages: \n g/settings welcome **message** <message> will set up the join message \n g/settings welcome **channel** <channel mention (optionnal)> will send the welcome/goodbye messages in the targeted channel \n g/settings welcome **leavemessage** <message> sets up the goodbye message \n \n Also, you can insert {username} and {memberCount} to have directly the username and the member count, directly into the message.",
                upchannel : "Le salon dans lesquels seront envoyés les messages de bienvenue est désormais",
                newmsgJ : "Here's what the welcome message looks like now :",
                newmsgL : "Here's what the goodbye message looks like now :"
            },
            weather : {
                title : "The weather of ",
                current : "Current temperature : ",
                noArgs : "Hey! I need the city's name! I can't read your mind, you know?"
            },
            level : {
                title : "Your XP level in the guild called : **",
                desc1 : "** is level **",
                desc2 : "** with almost **",
                desc3 : "** XP points till level "
            },
            subcount : {
                title : "Subscriber count of ",
                subs: " subscribers"
            },
            global : {
                noGlobalDefined : "The global channel is undefined.",
                notCorrectChannel : {
                    first: "This command should be done in the #",
                    second: " of this server."
                },
                noargs : "You need to send a message.",
                set : "the global channel has been configured.",
                updated : "the global channel has been updated.",
                from: "from the #"
            },
            shop : {
                title : "G-UI-170's shop",
                description : "Hey there! How's your day been? I sell here multiple cool badges to show on your g/profile card",
            },
            specialthanks : {
                title : "Those that #Guigui thanks :",
                nitroBooster : "First nitro boost of #Guigui's discord server :",
                firstEnglishServer : "First english server that I joined :",
                firstInLeaderboard : "The number one (before the resets) :",
            },
            tweet : {
                notGui : "Wait, how did you find that command?!",
                ok : "Your tweet has been sent, here it is!",
                from : "from ",
                reply : "Replying to ",
            },
            help : { // pour la commande help
                category : {
                    mod : "Yep, moderation commands...",
                    server : "Those commands are about the current server, a user...",
                    gd : "[**NOT COMPLETE**] Those commands are linked to the game called \"Geometry Dash\"",
                    imageManipulation : "The commands below uses image manipulation",
                    random : "Anything else =)"
                },
                helptitle : "Help:",
                commands : "Commands:",
                help : "Shows this embed (#thankscaptainobvious).",
                guiguibot : "Tells you a bit of information from the creator of the bot.",
                eightball : "Ask something and the eight_ball will answer... :8ball:.",
                memes : "Shows a recent reddit meme and these memes are updated every 26 of the month cuz yea bruh",
                memessugg : "If you want you favourite meme image (link) in the g/meme",
                server : `You can see a bit of information coming from the server called **${message.guild}**.`,
                serverlist : `You can see the **${bot.guilds.size}** servers the bot is in`,
                money : "Shows a bit of the money you have in the bot.",
                qod : "Allows you to double money you set in the args (but you can lose) :wink:",
                userinfo : "Shows information about a specific user",
                ban : "Admin used Banhammer! It's super effective!",
                mute : "To make someone stop talking",
                unmute : "To undo what the g/mute did",
                sondage : "To make a poll. [You need a role called \"Permission sondage\" to use it. (it means poll permission)]",
                invite : "Get useful (really?) links about the bot",
                calc : "What's 9+10? He will never say 21.",
                clear : "To delete ~~sh#tposts~~ messages",
                level : "Shows your XP level. I mean, that's obvious!",
                creatememe : "To create a meme as easy as 9+10 (~~21?~~), to use it put an image and text after the command.",
                profile : "Allows you to see all the data about you on a good formatted **image**.",
                gdlevel : "Searches the data about a GEOMETRY DASH level. Pretty cool huh?"
            },
            leaderboard : {
                money: {
                    title : "Top 10 richest players from all servers the bot is in"
                },
                level: {
                    title : "Top 10 most powerful players from all servers the bot is in",
                    level : "Level "
                },
                guild: {
                    title : "Top 10 most powerful players from this server",
                    level : "Level "
                }
            },
            eightball : {
                noargs : "Sorry, you need to ask something. :8ball:",
                replys : {
                    one : "Yes.",
                    two : "No.",
                    three : "I don't even know!",
                    four : "Well... I don't know !",
                    five : "Of course !",
                    six : "Hell nah!",
                    seven : "Well yes or no...",
                    eight : "Maybe...",
                    nine : "Maybe not",
                },
                title : ":8ball: What says the magic 8-ball :",
                question : "Your question:",
                answer : "The 8-ball answers:",
            },
            ban : {
                permerror : "Sorry, but you don't have the permission to use that banhammer.",
                notarget : "Who do you want to ban? Syntax: [g/ban @_someone#1337]",
                banned : "Banned by ",
                confirm : " has been banned."
            },
            calc : {
                noargs : "Well, what's the point if there's nothing on the calculator screen?",
                calc : "Calculator:",
                input : "Input",
                output : "Result",
            },
            clear : {
                permerror : "You don't have the required permission to use this command.",
                noargs : "Tell how much messages you want to delete to execute the command.",
                nan : "Please add a valid number.",
                not100 : "Please add a number between 1 and 100",
                success : " messages have been deleted!"
            },
            invite : {
                links : "Useful links :",
                server : "The french discord where I could help you if there's any bug in the bot :",
                invite : "Add the bot :",
                requested : "Requested by ",
                clickhere : "Click here",
            },
            level : {
                title : "Your XP level",
                desc1 : "** is level **",
                desc2 : "** with almost **",
                desc3 : "** XP points till level "
            },
            meme : {
                memetitle : "Sir, here's your ***m e m e***.",
                memedesc : "It has been tasted by the chief, #Guigui himself.",
                author : "Author : ",
                sugg : "If you have any ***m e n m e*** you know and want to add, just let the chief know by g/memesuggest",
            },
            memesugg : {
                ok : "Your ***m e n m e*** has ben ***s e n t t***",
            },
            profile : {
                title : `Here's `,
                title2 : "'s profile :",
                xp : "XP stats",
                description : "Description:",
                nodesc : "This person seems to have no description. \n Weird..."
            },
            mute : {
                permerror : "Sorry, you don't have the required permissions to use this command",
                permerror2 : "You/I don't have the required permissions to use this or he is too HIGH.",
                noping : "No one is chosen.",
                no : "I am not able to mute that user because no.",
                yes : ' has been muted :white_check_mark:'
            },
            ping : {
                pong : "Latency :"
            },
            qod : {
                nomoney : "you need a value between 1 and",
                toomuch : ", having negative money makes the bot crash...",
                won : "won",
                lose : "lost",
                valuenow : ", his money is now equal to"
            },
            server : {
                title1 : "Server infos",
                title2 : "This is the server informations",
                guild : "The name of the guild",
                owner : "The owner",
                created : "It has been created the",
                joined : "You joined the",
                users : "The number of users here is",
            },
            sondage : {
                nopermrole : "To use this command, you need a role called \"Permission Sondage\".",
                noargs : "To create a poll, you have to use g/sondage <poll>",
                title : `${message.author.username}'s poll`,
                bottom1 : "React with ✅ or ❌",
                bottom2 : "React with 🅰 or 🇧"
            },
            suggestions : {
                ok : "The suggestion has been sent"
            },
            unmute : {
                youcant : "You can't unmute this user.",
                icant : "I can't unmute this user.",
                ok : ' has been unmuted :white_check_mark:',
            },
            ban : {
                unban : {
                    unknown : "You need a correct user ID in the args.",
                    notEnoughPermissions : "I know you have friends that are banned for no valable reason but one of us don't have the permission.",
                    unbanned : " has been unbanned."
                },
                permerror : "Sorry, but you don't have the permission to kick someone.",
                notarget : "Who do you want to kick? Syntax: [g/kick @_someone#1337]",
                banned : "Kicked by ",
                confirm : " has been kicked."
            },
            desc : {
                noargs : "No, There's no description. Here's your current description:",
                ok : "You have updated your description! Here is it:"
            },
            money : {
                amount : `${message.author.username}'s money`,
            },
            bg : {
                noargs : "There's no style set. Your current one is ",
                ok : "Here's your new style! \n Re-execute the command to change",
                tooHighNumber : "This number is too high. : ",
            },
            gdlevel : {
                author : "Created by ",
                difficulty : "Difficulty: ",
                downloads : "Total downloads :",
                downloads2 : " downloads",
                likes : "Likes count :",
                likes2 : " likes",
                length : "Length of the level :",
                madewith : "Made with GDColon's API (GDBrowser)",
                minusone : "This level seems to have never existed, is it the right one? (Error code: -1)"
            },
            gduser : {
                rank : "Leaderboard place: ",
                stars : "Total of stars: ",
                diamonds : "Total of diamonds: ",
                demons : "\"Demon\" level finished: ",
                demons2 : " demon(s)",
                cp : "Creator points :",
                moderator : "MODERATOR",
                moderator2 : "ELDER MODERATOR",
            },
            rpgstart : {
                noargs : {
                    title : "Error, some arguments are missing:",
                    description : "Here's what it should look like: \"g/rpgstart <player name>\" and add an image (upload it, no link) that does less than 1MB"
                },
                alreadyRegistered : "Hey! You already have a character! Here's his name:",
                welcome : "Hey "
            },
        },
        current : {
            test1 : "This text should not appear"
        }}
    if(!settingsdb.get("lang").find({id: message.guild.id}).value()) {
        settingsdb.get("lang").push({id: message.guild.id, servername: message.guild.name, value: 1}).write();
        text.current = text.french
    }else{
        settingsdb.read()
        var langfromdb = settingsdb.get("lang").filter({id: message.guild.id}).find('value').value();
        var lang = Object.values(langfromdb);
        if(lang[2] === 1) {
            text.current = text.french
        }else{
            text.current = text.english
        }
    }
    
    if (!message.guild) return;
    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();
    const queue = new Map();
	const serverQueue = queue.get(message.guild.id);
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    console.log(message.author.username + " dans " + message.guild.name + " (" + message.channel.name + ") a écrit: \"" + message.content + "\"")

    //if (message.author.id == '589172591592210460' || message.guild.id == '542464198161072139') return message.channel.send('Désolé, tu n\'es pas mon maître.');
    try {
        delete require.cache[require.resolve(`./commands/${cmd}.js`)];
        let commandFile = require(`./commands/${cmd}.js`)
        commandFile.run(bot, message, args, text, serverQueue, queue)
    }catch(e){
        console.error(e)
        message.channel.send(`Il n'existe aucune commande appellée g/${cmd} ou elle a planté. \n There is no command called g/${cmd} or it has crashed.`)
    }
})

bot.on('message', message => {
    if (!message.guild) return;
    if (message.content === "<@549294278149668874>"){
        var embed = new Discord.MessageEmbed()
            .setTitle("Petites infos / A bit of information")
            .setDescription("Prefix: g/")
            .addField("Bot version:", "1.7.2")
            .addField("Information:", "If your server is english, tell it to <@448560475987509268>.")
            .setFooter(`${message.author.username}`)
        message.channel.sendEmbed(embed);
        console.log(`${message.author.username} dans "${message.guild}" : @_GuiguiBot`);
    }
    if (message.content === prefix + "guiguibot"){
        message.channel.sendMessage("Bot développé par _Guigui [YT]#0171.\nBot made by _Guigui [YT]#0171.")
    }
});

//monyee
bot.on('message', async message => {
    console.log(userxp[6])
    if (!message.guild) return;
    db.read();
    var msgauthor = message.author.id;
    var moneypermsg = 15
    var msgauthorpseudo = message.author.username
    if (message.author.bot)return;
    if (message.content.startsWith(prefix)) return;
    if(!db.get("xp").find({id: message.author.id}).value()) {
        db.get("xp").push({id: message.author.id, username: message.author.username, level: 1, xp: 1, multiplier: 1, multipdesc: 'x1', vote: false}).write();
    }else{
        var userxpdb = db.get("xp").filter({id: message.author.id}).find('xp').value();
        var userxp = Object.values(userxpdb);
        if (!userxp[4]) {
            userxp[4] = 1
        }
        if (!userxp[5]) {
            userxp[5] = "x1"
        }
        if (!userxp[6]) {
            userxp[6] = false
        }
        db.get("xp").find({id: message.author.id}).assign({id: message.author.id, username: message.author.username, level: userxp[2], xp: Math.round(userxp[3] + (addxp * userxp[4])), multiplier: userxp[4], multipdesc: userxp[5], vote: userxp[6]}).write();
        if(userxp[3] >= userxp[2]*500) {
            let text = {
                french : {
                    winmoney : `Bravo **${message.author.username}**, tu es passé au level `,
                    newIcon : `BRAVO **${message.author.username}**!! TU AS ATTEINT LE NIVEAU `,
                    newIcon2: `ET DÉBLOQUÉ L'ICÔNE DU NIVEAU SUPÉRIEUR !`
                },
                english : {
                    winmoney : `GG **${message.author.username}**, you reached level `,
                    newIcon : `INCREDIBLE JOB **${message.author.username}**!! YOU REACHED LEVEL `,
                    newIcon2 : `AND UNLOCKED A special ICON!`
                }
            }
            if(!settingsdb.get("lang").find({id: message.guild.id}).value()) {
                settingsdb.get("lang").push({id: message.guild.id, servername: message.guild.name, value: 1}).write();
                text.current = text.french
            }else{
                var langfromdb = settingsdb.get("lang").filter({id: message.guild.id}).find('value').value();
                var lang = Object.values(langfromdb);
                if(lang[2] === 1) {
                    text.current = text.french
                }else{
                    text.current = text.english
                }
            }
            if (`${userxp[2] + 1}`.endsWith('0')) {
                if(userxp[4] != 1 || userxp[2] + 1 > 30){
                    message.channel.send(text.current.newIcon + "**" + `${userxp[2] + 1}` + "** " + text.current.newIcon2 + " <a:smugdancing:637685695493701644>")
                }else{
                    message.channel.send(text.current.winmoney + "**" + `${userxp[2] + 1}` + "**! <a:smugdancing:637685695493701644>")
                }
            }else{
                message.channel.send(text.current.winmoney + "**" + `${userxp[2] + 1}` + "**! <a:smugdancing:637685695493701644>")
            }
            console.log(`${message.author.username} est passé level ${userxp[2] + 1} !`)
            db.get("xp").find({id: message.author.id}).assign({id: message.author.id, username: message.author.username, level: userxp[2] + 1,  xp: userxp[3] - ((userxp[2]*500)- 1)}).write();
        }
    }
    try {
        delete require.cache[require.resolve(`./database.json`)];
    }catch(e){
        console.error(e)
    }/*
    if(!db.get("guildxp").find({server: message.guild.id, id: message.author.id}).value()) {
        db.get("guildxp").push({server: message.guild.id, id: message.author.id, username: message.author.username, level: 1, xp: 1}).write();
    }else{
        var addxp = (Math.floor (Math.random() * moneypermsg) + 1)
        var userxpdb = db.get("guildxp").filter({server: message.guild.id, id: message.author.id}).find('xp').value();
        var userxp = Object.values(userxpdb);
        db.get("guildxp").find({server: message.guild.id, id: message.author.id}).assign({server: message.guild.id, id: message.author.id, username: message.author.username, level: userxp[3], xp: userxp[4] + addxp}).write();
        if(userxp[3] >= userxp[2]*400) {
            let text = { // trucs de texte
                french : { // en français
                    winmoney : `Bravo **${message.author.username}**, tu es passé au level `,
                    server : `du serveur ${message.guild.name}!`
                },
                english : {
                    winmoney : `GG **${message.author.username}**, you reached level `,
                    server : `in the server called ${message.guild.name}!`
                }
            }
            if(!settingsdb.get("lang").find({id: message.guild.id}).value()) {
                settingsdb.get("lang").push({id: message.guild.id, servername: message.guild.name, value: 1}).write();
                text.current = text.french
            }else{
                var langfromdb = settingsdb.get("lang").filter({id: message.guild.id}).find('value').value();
                var lang = Object.values(langfromdb);
                if(lang[2] === 1) {
                    text.current = text.french
                }else{
                    text.current = text.english
                }
            }
            message.channel.send(text.current.winmoney + "**" + `${userxp[2] + 1}` + "**" + text.current.server + " <a:smugdancing:637685695493701644>")
            console.log(`${message.author.username} est passé level ${userxp[2] + 1} sur ${message.guild.id} !`)
            db.get("guildxp").find({id: message.author.id}).assign({id: message.author.id, username: message.author.username, level: userxp[2] + 1,  xp: userxp[3] - ((userxp[2]*400)- 1)}).write();
        }
    }
    try {
        delete require.cache[require.resolve(`./database.json`)];
    }catch(e){
        console.error(e)
    }*/
})

bot.on('message', message => {
    if (message.content.startsWith("<@")) {
        message.react(`${emojithink[Math.floor(Math.random() * emojithink.length)]}`)
    }
})

bot.on('guildCreate', guild => {
    request({url: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UCLgu-4-oMqRZVbgwbgzIo7A&fields=items/statistics/subscriberCount&key=AIzaSyA0P4yaEZibwrdxSmNM_MifqTnOE8X5b1Y`, json: true}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var subs = body.items[0].statistics.subscriberCount
            var setGame = `g/help | #Guigui has ${subs}/200 subscribers on youtube | Version 1.9.0 | Branché à ${bot.guilds.cache.size}/75 serveurs`
            bot.user.setActivity(setGame);
        }else if (error) {
            var setGame = `g/help | Version 1.9.0 | Branché à ${bot.guilds.cache.size}/75 serveurs`
            bot.user.setActivity(setGame);
            console.log(error)
        }
    })
    console.log('Mouveau serveur rejoint! Je suis maintenant sur ' + bot.guilds.size + "/75!")
    console.log(`\n \n Nom du serveur: ${guild.name} \n Nombre d'utilisateurs: ${guild.memberCount}`)
});

bot.on('guildDelete', guild => {
    console.log('Ah, on m\'a kick d\'un serveur, je ne suis plus que sur ' + bot.guilds.size + "/75 serveurs...")
});

bot.on('message', message => {
    if (message.author.id == "607240310288023552" && message.guild.id == "514168154688061464") {
        message.react(`${emojithink[Math.floor(Math.random() * emojithink.length)]}`)
    } 
})

bot.on('message', message => {
    if ((message.author.id == "448560475987509268" || "259926287680798720") && message.content.startsWith("G-UI:")) {
        let guiguibotargs = message.content.slice("G-UI:".length).trim().split('|');
        var GuiguiBotMessage = new Discord.MessageEmbed()
            .setTitle(guiguibotargs[0])
            .setDescription(guiguibotargs[1])
            .setFooter(guiguibotargs[2] || " ", message.author.displayAvatarURL)
            .setThumbnail(bot.user.displayAvatarURL)
            .setColor("0x00FFFF")
        if (guiguibotargs[3]) {
            bot.channels.cache.get(guiguibotargs[3]).send(GuiguiBotMessage)
        }else{
            message.channel.send(GuiguiBotMessage)
        }
    }
})

/*bot.on('message', async message => { 
	if (message.author.bot) return;
	if (!message.content.startsWith("g/")) return;

	const args = message.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.cache.get(message.guild.id);

	let command = message.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

	if (command === 'play') {
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = voiceChannel.permissionsFor(message.bot.user);
		if (!permissions.has('CONNECT')) {
			return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		}
		if (!permissions.has('SPEAK')) {
			return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.cache.getPlaylist(url);
			const videos = await playlist.cache.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.cache.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, message, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return message.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
		} else {
			try {
				var video = await youtube.cache.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					message.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the search results ranging from 1-10.
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await message.channel.awaitMessages(message2 => message2.content > 0 && message2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return message.channel.send('No or invalid value entered, cancelling video selection.');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.cache.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return message.channel.send('🆘 I could not obtain any search results.');
				}
			}
			return handleVideo(video, message, voiceChannel);
		}
	} else if (command === 'skip') {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could skip for you.');
		serverQueue.connection.dispatcher.end('Skip command has been used!');
		return undefined;
	} else if (command === 'stop') {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing that I could stop for you.');
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
		return undefined;
	} else if (command === 'volume') {
		if (!message.member.voiceChannel) return message.channel.send('You are not in a voice channel!');
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		if (!args[1]) return message.channel.send(`The current volume is: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return message.channel.send(`I set the volume to: **${args[1]}**`);
	} else if (command === 'np') {
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
	} else if (command === 'queue') {
		if (!serverQueue) return message.channel.send('There is nothing playing.');
		return message.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'pause') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return message.channel.send('⏸ Paused the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	} else if (command === 'resume') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return message.channel.send('▶ Resumed the music for you!');
		}
		return message.channel.send('There is nothing playing.');
	}

	return undefined;
});

async function handleVideo(video, message, voiceChannel, playlist = false) {
	const serverQueue = queue.cache.get(message.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(message.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(message.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			queue.delete(message.guild.id);
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.cache.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}*/
