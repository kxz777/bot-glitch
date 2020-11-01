const prefix = "n!";
exports.run = async (client, message, args) => {
  if (!message.content.startsWith(prefix)) return;
    message.delete().catch(O_o=>{})

  message.reply("você acendeu um cigarro.").then(async msg => {
    setTimeout(() => {
      msg.edit(":smoking:");
    }, 500);
    setTimeout(() => {
      msg.edit(":smoking: :cloud: ");
    }, 1000);
    setTimeout(() => {
      msg.edit(":smoking: :cloud::cloud: ");
    }, 1500);
    setTimeout(() => {
      msg.edit(":smoking: :cloud::cloud::cloud: ");
    }, 2000);
    setTimeout(() => {
      msg.edit(":smoking: :cloud::cloud:");
    }, 2500);
    setTimeout(() => {
      msg.edit(":smoking: :cloud:");
    }, 3000);
    setTimeout(() => {
      msg.edit(":smoking: ");
    }, 3500);
    setTimeout(() => {
      msg.edit(`Seu baseado acabou, use: **n!fumar** para tragar mais um.`);
    }, 4000);
  });
};
