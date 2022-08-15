const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos
  
client.on('ready',() => {
    console.log(`stats ${client.users.cache.size}Users,${client.channels.cache.size}Channels,${client.guilds.cache.size} Servers!`);
    client.user.setStatus('online');
    client.user.setActivity(`With |${client.users.cache.size} Users| , |${client.channels.cache.size} Channels| , |${client.guilds.cache.size} Servers!| , type !hpscoronavirus to view confirm case`);
})

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (!message.content.startsWith(config.prefix)) return;
  if (message.content.startsWith(`<@!${client.user.id}>`)||
  message.content.startsWith(`<@${client.user.id}>`)) return;
  let args = message.content.split(" ").slice(1);
  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);
  try {
    let commandFile = require(`./commands/${command}.js`);
    delete require.cache[require.resolve(`./commands/${command}.js`)];
    return commandFile.run(client, message, args);
  } catch (err) {
    console.error("Erro:" + err);
  }
});

client.on("ready", () => {
  let activities = [
      `Hackeando sua conta kkkkkkkkkkkkkkk`,
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60);  // WATCHING, LISTENING, PLAYING, STREAMING

  client.user
      .setStatus("dnd") // idle, dnd, online, invisible
      .catch(console.error);
      console.log("Estou Online!")
});

client.login(config.token);//Ligando o Bot caso ele consiga acessar o token