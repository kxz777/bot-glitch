const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`Você não tem permissão para usar este comando`);
    message.channel.setRateLimitPerUser(args[0])
    message.reply(`o tempo do Slowmode deste canal foi alterado com sucesso para o tempo escolhido!`)
}

exports.help = {
    name: 'slowmode',
    aliases: ['slow']
}