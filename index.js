const Discord = require('discord.js');
require("dotenv").config()

const TOKEN = "MTA5MTczNDY5ODA5NjU5MDg1OA.Gs-uOW.enMTfrnL-Nrxih-lZYpdbb0fZzvcwZ3K0qmMrQ"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("no")
    }
})

client.login(process.env.TOKEN)