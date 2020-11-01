const Discord = require('discord.js')
        module.exports.run = async (client, message, args) => {
            if (message.channel.type != 'text') return;
            if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply("Você não tem permissão para usar esse comando!");
            const staff = message.guild.member(message.author).nickname || message.author.username
        message.channel.overwritePermissions(message.guild.defaultRole.id, {
                        VIEW_CHANNEL: true,
                        SEND_MESSAGES: false
                    })
                    message.channel.send(`${message.author}, Canal bloqueado com sucesso! Use **+unlock** para destravar!`)
                }
                module.exports.help = {
                    name: "lock"
                }