const { Client, RichEmbed } = require("discord.js");
const client = new Client();

client.on("ready", () => {
    console.log(`El bot está corriendo como: ${client.user.tag}`);
});

client.on("message", async message => {
    const userMessage = message.content;
    const allMessagesChannelName = "all-messages";
    
    if (message.channel.name != allMessagesChannelName) {
        
        const allMessagesChannels = await client.channels.find(channel => channel.name == allMessagesChannelName);

        if (allMessagesChannels == null) {
            //No hay canal para mandar los mensajes
            message.channel.send(`¡El canal para todos los mensajes no existe! Por favor crea un canal llamado "${allMessagesChannelName}" para mandar todos los mensajes.`);
        }
        else {
            //Se hay canal, procedemos a meter los mensajes
            const avatar = message.author.avatarURL;
            const author = message.author.username;
        
            const embed = new RichEmbed()
            .setColor("BLUE")
            .setAuthor(`${author} [${message.channel.name}]:`, avatar)
            .setDescription(message.content);
            allMessagesChannels.send(embed);
        }
        
    }
});

client.login("NjA2NTE5MTI2NTM3NTM1NDkw.XUMR8A.a0JBrGELgLbkURiZw9QQ1q7bQlc");