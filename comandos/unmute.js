const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let perm = new Discord.RichEmbed()
        .setDescription("❎ **|** Você não tem permissão para usar esse comando.")
        .setColor("#ff0000")
    if (!message.member.hasPermissions ('KICK_MEMBERS')) return message.channel.send(perm)
    const mod = message.author;
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let infocmd = new Discord.RichEmbed()
        .setTitle("🔇 Comando: n!unmute")
        .addField("✅ Uso:", "**n!unmute** `<@user>` `<motivo>`")
        .addField("📄 Exemplo:", "n!nunmute @User#1234 comeu muito doci 🍭")
        .setColor("#ff0000")
        .setFooter("Informações do comando: \"unmute\"")
    if (!user) return message.channel.send(infocmd)
    let reason = message.content.split(" ").slice(2).join(" ");
    let msgdeexi = new Discord.RichEmbed()
        .setDescription("Não existe o cargo \"⭐ | Nicolly Mute 🔇\"")
        .setColor("#ff0000")
    if (!user.roles.find(`name`, "⭐ | Nicolly Mute 🔇")) return message.channel.send(msgdeexi)
    let msgreason = new Discord.RichEmbed()
        .setDescription("Coloque algum motivo.")
        .setColor("#ff0000")
    if (!reason) return message.channel.send(msgreason)
    let muterole = message.guild.roles.find(`name`, "⭐ | Nicolly Mute 🔇");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "⭐ | Nicolly Mute 🔇",
                color: "#000000",
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

    await (user.removeRole(muterole.id));
    const muteembed = new Discord.RichEmbed()
            .setAuthor(' Ação | UnMute', `https://images-ext-2.discordapp.net/external/wKCsnOcnlBoNk-__BXsd6BrO6YddfUB-MtmaoaMxeHc/https/lh3.googleusercontent.com/Z5yhBQBJTSJVe5veJgaK-9p29hXm7Kv8LKF2oN0hDnsToj4wTcQbirR94XVpH4Lt5a5d%3Dw300`)
            .addField('Usuário', `<@${user.id}>`)
            .addField('Motivo', `${reason}`)
            .addField('Moderador', `${mod}`)
            .setColor('#000000')
        message.channel.send(muteembed)
  
  
}