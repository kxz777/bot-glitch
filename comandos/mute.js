const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let perm = new Discord.RichEmbed()
        .setDescription("❎ | Você não tem permissão para usar esse comando.")
        .setColor("0xe80005")
    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send(perm)
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let infocmd = new Discord.RichEmbed()
        .setTitle(":white_check_mark: Comando: n!mute")
        .addField(":no_entry_sign: Uso:", "**n!mute** `<@user>` `<motivo>`")
        .addField(":page_facing_up:  Exemplo:", "n!mute @User#1234 Spawn")
        .setColor("0xe80005")
        .setFooter("Informações do comando: \"mute\"")
    if (!user) return message.channel.send(infocmd)
    let reason = message.content.split(" ").slice(2).join(" ");
    let msgreason = new Discord.RichEmbed()
        .setDescription("Especifique um motivo para poder mutar.")
        .setColor("0xe80005")
    if (!reason) return message.channel.send(msgreason)
    let muterole = message.guild.roles.find(`name`, "⭐ | Nicolly Mute 🔇");
  if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "⭐ | Nicolly Mute 🔇",
                color: "#ff0000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false 
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];

    await (user.addRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Ação | Mute', `https://images-ext-2.discordapp.net/external/Wms63jAyNOxNHtfUpS1EpRAQer2UT0nOsFaWlnDdR3M/https/image.flaticon.com/icons/png/128/148/148757.png`)
            .addField('Usuário Mutado', `<@${user.id}>`)
            .addField('Motivo', `${reason}`)
            .addField('Administrador', `${mod}`)
            .setColor('#ff0000')
        message.channel.send(muteembed)
  
  
}


exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    category: "MODERATION",
}