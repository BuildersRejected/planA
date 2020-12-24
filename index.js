const Discord = require('discord.js');

const bot = new Discord.Client();

const prefix = '!';

bot.once('ready', () =>{
  console.log('I like tits');
});

bot.on('message', message =>{
    //if(!message.content.startsWith(prefix) || message.author.bot) return;
    if(message.author.username !== "BRXathartic" || message.author.bot) return;
    const command = message.content;

    if (message.author.username === "BRXathartic") {
      //message.channel.send("sup BRX?");
      message.delete();
      //var say = "@" + message.author.username.toString() + message.author.discriminator.toString() + " says: " + command;
      var say = message.author.toString() + " says: " + command;
      //message.channel.send('${message.author} says: ');
      message.channel.send(say);
    }
});

bot.login('');
