const Discord = require('discord.js');
const Config = require('Config.js');

const bot = new Discord.Client();
const config_fs = require('fs').promises;

bot.once('ready', () =>{
  console.log('I like tits');

});
//  have the changing channel commands work in the channel it was sent from like: !channel Plan : which would use the current channel
bot.on('message',async message) =>{
  if (message.author.bot) return;

  //console.log(message.content);
  const configFile = await config_fs.readFile('./config.json','utf8');
  const configObj = JSON.parse(configFile);
  const configBot = configObj['bot'];

  /////// prefix
  if (configBot['customCommandPrefix'] == "true"){
    const comm_prefix = configBot['commandPrefix'];
  } else {
    const comm_prefix = configBot['defaultCommandPrefix'];
  }
  if (configBot['useVictimRole']){
    const victimRole = configBot['victimRole'];
  }
  if (configBot['useUsername']) {
    const victimUsername = configBot['victimUsername'];
  }

bot.on('message', message =>{
    //if(!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.author.bot) {
      return;
    }

    //if(message.author.username !== "BRXathartic" || message.author.bot) return;
    const command = message.content;

    if (configBot['useUsername'] && message.author.username === victimUsername) {
      message.delete();
      var say = message.author.toString() + " says: " + command;
      message.channel.send(say);
    }
    if (configBot['useVictimRole'] && message.member.roles.find(r => r.name === victimRole){
      message.delete();
      var say = message.author.toString() + " says: " + command;
      message.channel.send(say);
    }
});

/*
function planA() {

}
**/

bot.login('');
