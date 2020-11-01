const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  let Invite = await message.guild.channels.find((c) => c.type === 'text').createInvite()

  var hrs = Math.round(client.uptime / (1000 * 60 * 60)) + " hora(s),"

  var mins = " " + Math.round(client.uptime / (1000 * 60)) % 60 + " minuto(s), "

  var sec = Math.round(client.uptime / 1000) % 60 + " segundo(s)"

  if (hrs == "0 hora(s),") hrs = ""

  if (mins == " 0 minuto(s), ") mins = ""

  let uptime = hrs+mins+sec

  //

    message.delete().catch(O_o=>{});

let bicon = client.user.displayAvatarURL;

    let string = ' ';

    client.guilds.forEach(guild => {

    string += `${guild.name} ` + '\n';})

    let bt = client.user.username;

    let botembed = new Discord.RichEmbed()

        .setColor("#AE05BB")

        .addField("**Servidores conectados:**", string)

        .setTitle(`Acordada a exatamente: ${uptime}!`)

        .setDescription(` Estou em (${client.guilds.size})servidores com (${client.users.size})membros:\n`)

        .setTimestamp()

        .setFooter("Comando por: " + message.author.username, message.author.avatarURL);

    message.channel.send(botembed).then(msg => msg.delete(30000))

}

    exports.help = {

    name: "servidores"

    }