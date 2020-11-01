const Discord = require("discord.js");

exports.run = async (client, message, args) => {

	if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply('Você não possui permissões para usar este comando.')
	if (!args[0]) return message.reply("Use: `n!enquete [texto]`")
	
	let receber = args.join(" ");
	
	const embed = new Discord.RichEmbed()
	.setTitle(":bar_chart: **Enquete:**")
	.setDescription(receber)
	.setFooter(`Enviado por: ${message.author.username}`, message.author.avatarURL)
	.setThumbnail(`https://cdn.discordapp.com/icons/688387730874433565/a_5c197903730b0e6ae69eb388825f6aae.gif?size=2048`)
	.setTimestamp()
	.setColor("#ffa500")
	
	message.delete()
	message.channel.send(embed).then(async msg => {
		
		await msg.react("✅")
		await msg.react("❎")

	})
	
}

module.exports.config = {

	name: "enquete",
	aliases: ["votar", "votação", "vote"]

}