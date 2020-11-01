const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//PortGitEmCima^//
const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
const fetch = require('node-fetch')
const config = require("./config.json");

///////////////////////Status////////////////////////
client.on("ready", () => {
console.log("Estou Online!")
});
client.on("ready", () => {
let activities = [
  `meu prefixo é: n!`,
  `Esta com duvidas? Entre no servidor de suporte n!suporte`,
  `Use n!ajuda para mais informações`,
  `Como foi seu dia? [❤️]`,
  `Meus criadores são: kxz#0666 e $. Chris#1999`
],
i = 0;
setInterval(() => client.user.setActivity(`${activities[i++% 
activities.length]}`,{
  type: "WATCHING"
}), 600000); //WATCHING, LISTENING, PLAYING, STREAMING
client.user
  .setStatus("online") //idle, dnd, online, invisible
  .catch(console.log);
console.log("Estou Online")
});
///////////////////////separar///////////////////////


setInterval(async () => {
  await fetch('https://paper-daffy-koala.glitch.me').then(console.log('Pinged!'))
}, 180000)





//////////////////////////log message//////////////

///////////////////////Comandos////////////////////////

client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    message.delete();
    message.reply(
      "Não encontrei este comando em minha rede de dados, tente o ``n!ajuda``"
    );
  }
});

///////////////////////StartBotToken////////////////////////
client.login(config.Token);