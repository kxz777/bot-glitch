const Discord = require('discord.js');


exports.run = async (client, message, args) => {
  
  
try {

let user ; 
      if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if(args[0]) {
        user = client.users.get(args[0]);
    }
    
    
    if (args[0] == null) (`**${message.author.username}**, você deve mencionar um bot!`)
  
  
  
  const embed = new Discord.RichEmbed()
  
  .addField(` __Você quer me adicionar em outros servidores/guilds do Discord?__

Você tem 3 opções de links de convite, sejam eles sem permissões, permissões de administrações e todas as permissões, escolha alguma abaixo!`,

 `[Sem Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=0)
[Permissão Administrador](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=8)
[Todas Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=2146958591)`)
  .setFooter(`Convite peço pelo: ${message.author.tag}`,`${message.author.avatarURL}`)
  .setTimestamp(new Date())
  .setColor('#FE2E64')
  .setThumbnail(user.avatarURL)       
    if (user.bot) return message.channel.send(embed)
    message.channel.send(`${message.author}, Este usuário não é a Nicolly!`)

} catch (err) {
    message.channel.send(`${message.author}, Você precisa mencionar a Nicolly!`)
}
}
exports.config = {
    name: "convidarbot",
    aliases: ["convidarbot","botconvite","botinvite","invitebot","bot","BOT"]
}