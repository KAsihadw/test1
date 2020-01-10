const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("665074934858514432")
setInterval(function() {
channel.send(`Azoz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);