const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus('available');
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("")
});

client.on('message', message => {
  // logMessage(message);

  if(message.content == "ping"){
    message.channel.send("pong");
  }

  if(message.content == ".rullete"){
    if(Math.random() >= 0.5){
      message.channel.send("You lose!");
    }else{
      message.channel.send("You win!");
    }
  }

  if(message.content == "!helpme"){
    message.channel.send(`
> **!helpme** = ta wiadomość (łatwe do zrozumienia potem będzie trudniej...)
> **ping** = pong
> **.rullete** = roletka (50%/50%, 100% legit no scam!)
    `);
  }
  
});

function logMessage(message){
    console.log(message.channel.name+" / "+message.member.user.username+":"+message.member.user.discriminator+' > "'+message.content+'"');
}



client.login("MTEyMDY4NTc0MDQ2OTI1NjI3Mw.GKdizp.NWR07TGc_LN6Uff33GVYNpTPAy_uhyJFxcLjLY");