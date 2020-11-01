const { RichEmbed } = require("discord.js")
module.exports.run = (bot ,message, args, emoji) => {
message.channel.send(new RichEmbed()
.setColor('BLUE') 
.setTitle(``)  
.setDescription(`
Está com dúvidas ou dificuldades na hora de utilizar meus comandos?
Sem problemas, abaixo você encontra algum link para te ajudar!

Meu servidor de Suporte: https://discord.gg/scXqWJ3
`)    
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)    
);
}
exports.config = {
    name: 'suporte',
    aliases: ['suporte','support']
}