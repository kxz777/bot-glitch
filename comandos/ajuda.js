const Discord = require('discord.js');
const c = require('../config.json')

module.exports.run = async (client, message, args) => {
    message.delete()

    const erros = new Discord.RichEmbed()
        .setAuthor(message.author.tag, client.user.avatarURL)
        .setDescription(`${message.author}, não consigo enviar mensagem para você, ative suas mensagens diretas!`)
        .setTimestamp()
        .setThumbnail(client.user.avatarURL)
        .setFooter(message.author.tag, message.author.avatarURL)
        .setColor('RANDOM')

    const yes = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name} - Ajuda`)
        .setDescription(` ${message.author}, enviei meus comandos em seu privado!`)
        .setTimestamp()
        .setColor("RANDOM")
        .setFooter(message.author.tag, message.author.avatarURL)
    message.channel.send(yes).then(msg => msg.delete(12000))

    const embed = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name}`)
        .setDescription(`Clique no emoji de acordo com a categoria desejada!

 ⭐ Informações

 🤖 Suporte

 😀 Diversão

 🔧 Staff`)

        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
        .setColor('RANDOM')
    message.author.send(embed).catch(err => message.channel.send(erros)).then(async msg => {
        await msg.react('⭐')
        await msg.react('🤖')
        await msg.react('😀')
        await msg.react('🔧')
        await msg.react("↩")


        const informacao = (reaction, user) => reaction.emoji.name === '⭐' && user.id === message.author.id;
        const pedidos = (reaction, user) => reaction.emoji.name === '😀' && user.id === message.author.id;
        const usuario = (reaction, user) => reaction.emoji.name === '🤖' && user.id === message.author.id;
        const diversao = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
        const musica = (reaction, user) => reaction.emoji.name === '' && user.id === message.author.id;
        const staff = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;
        
        const back = (reaction, user) => reaction.emoji.name === "↩" && user.id === message.author.id;

        const informacaoL = msg.createReactionCollector(informacao)
        const usuarioL = msg.createReactionCollector(usuario)
        const pedidosL = msg.createReactionCollector(pedidos)
        const diversaoL = msg.createReactionCollector(diversao)
        const musicaL = msg.createReactionCollector(musica)
        const staffL = msg.createReactionCollector(staff)
        
        const backL = msg.createReactionCollector(back)


        backL.on('collect', r => {
            const embedd = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`Clique no emoji de acordo com a categoria desejada!

 ⭐ Informações

 🤖 Suporte

 😀 Diversão

 🔧 Staff`)
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setColor("RANDOM")
            msg.edit(embedd)
        })

        informacaoL.on('collect', r => {

            const embedinformacao = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`⭐ **UTEIS**
                **n!ajuda** - Exibe o menu de ajuda.
                **n!serverinfo **- Mostra status do servidor.
                **n!userinfo** - Mostra o perfil do usuário.
                **n!botinfo** - Mostra informações sobre mim.
                **n!ping** - Mostra O delay Do Bot-Servidor.
                **n!avatar** - Mostra o avatar de um usuário ou do próprio usuário que usou o comando.
                **n!div** - Mostra o total de convidados.
                **n!invite** \`<BOT>\` - Convite Do BOT.
                **n!suporte** - Meu Servidor De Suporte.
                **n!ticket** - Cria um canal de suporte.
         `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embedinformacao)
        })

        pedidosL.on('collect', r => {

            const embedpedidos = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`😀 **Diversão**
                **n!jokempo** \`<Pedra>\` \`<Papel>\` \`<Tesoura>\` - Eu Ireu Jogar Jokempo Com Você.
                **n!dados** - Eu Irei Jogar Um Dado Aleatório.
                **n!8ball** \`<Pergunta\` - Você Faz Uma Pergunta eu Respondo.
                **n!say** \`<mensagem>\` - Faça Que Eu Repita A frase Que Você Escreveu.
                **n!biscoito** \`<Usuário\` - Você Oferece um Biscoito Ao Usuário Mencionado.
                **n!facebook** \`<Nome Do Perfil>\` - Encontrar Um Usuário Do Facebook.
                **n!instagram** \`<Nome Do Perfil>\` - Encontrar Perfil Do Usuário Do Instagram.
                **n!meme** - Irei Mandar Memes No Chat.
                **n!tapa** \`<Usuário>\` - Da Um Tapa No Usuário Mencionado.
                **n!botinfo** - Informações Do Bot.
                **n!avatar** - avatar do usuário mencionado.
                **n!userinfo** - informações do usuário.
                **n!fake** \`<Usuário>\` \`<Digite Algo>\` - Trollar Um Amigo.



               

         `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embedpedidos)
        })

        usuarioL.on('collect', r => {
            const embedusuario = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`
               Está com dúvidas ou dificuldades na hora de utilizar meus comandos? Vá em meu servidor de suporte clicando em: **[CLIQUE AQUI](https://discord.gg/scXqWJ3)**

        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embedusuario)
        })

        diversaoL.on('collect', r => {
            const embeddiversao = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`📌 **CREDITOS** 

                        
                **__Créditos Ao:𝙔𝙆 ραι נαε.js#0001__**
                
                `)
                
                
                
              
           
                
        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embeddiversao)
        })

        musicaL.on('collect', r => {
            const embeddiversao = new Discord.RichEmbed()
                
                
                        
                !play \`<nome da música/url>\` - Escolhe uma música para tocar.
                !stop - Para a música.
                !skip - Pula uma música.
                !playlist - Mostra aleatoriamente um número.
                !pause - Pausa a música.
                !resume - Retoma a música.
                !tocando - Mostra a música que esta tocando no momento.
                !volume \`<altura>\` - Define o volume da música.
        
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embeddiversao
        
    `})
        staffL.on('collect', r => {
            const embeddiversao = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name} - Ajuda`)
                .setDescription(`🔧 **Staff**
                        
                **n!ban** \`<usuário>\` \`<razão>\` - Bane um usuário.
                **n!unban** \`<usuário>\` - Desbane um usuário.
                **n!slowmode** \`<tempo>\` - Você Coloca/Altera O Slowmode Do Canal.
                **n!clear** \`<quantidade>\` - Limpa uma certa quantia de mensagens. (2 a 100)
                **n!kick** \`<usuário>\` \`<razão\` - Expulsa O Usuário Mencionado.
                **n!listban** - Envia no privado uma lista dos usuários banidos do servidor.
                **n!mute** \`<Usuário>\` \`<Razão≥\` - Irei Mutar O Usuário Mencionado.
                **n!unmute** \`<Usuário\` - Irei Desmutar O Usuário Mutado.
                **n!afk on/off** - Ativa O Modo AFK.
                **n!enquete** - Iniciar Uma Enquete No Chat Onde o Comando Foi Executado.
                
 
        `)
                .setColor("RANDOM")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
            msg.edit(embeddiversao)
        })

    })


}

exports.help = {
    name: "ajuda",
    aliases: ['help']
}