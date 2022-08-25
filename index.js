const { Client, Intents, Collection, MessageAttachment} = require("discord.js");
const mongoose = require("mongoose");
const {createCanvas, loadImage} = require("canvas");
//const WordRestricted = require("./model/model1.js"); this is for mongodb
mongoose.connect("mongodb+srv://DeveloperBot:Mailo100@cluster0.agzvi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => console.log("Connected to mongodb")).catch(err => console.log(err));
const client = new Client({ intents: [Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});
const prefix = ",";
const {readdirSync} = require("fs");
client.commands = new Collection();
readdirSync("./commands/").forEach(dir => {
	const commands = readdirSync(`./commands/${dir}/`).filter(file => file.endsWith(".js"));
	for (let file of commands) {
		let pull = require(`./commands/${dir}/${file}`);
		if (pull.name){
			client.commands.set(pull.name, pull);
			console.log("Loaded command: " + pull.name);
		} else {
			console.log(`${file} not defined`);
			continue;
		}
	}
});
client.on("ready", () => {console.log("Bot has connected to Discord!");});

client.on("messageCreate", async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return; 
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const comando = args.shift().toLowerCase();
	const cmd = client.commands.get(comando) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(comando));
	if (!cmd) return;
	try {
		await cmd.run(client, message, args);
	}catch(e){
		console.log(e);
	}
});

client.on("guildMemberAdd", async member => {
	if(member.guild.id === "687396618688790533"){
		const canvas = createCanvas(1300, 500);
		const ctx = canvas.getContext("2d");
		const background = await loadImage("https://cdn.wallpapersafari.com/24/96/eGcZK5.jpg");
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "white";
		ctx.font = "70px Times New Roman";
		ctx.fillText(member.user.username + "\nWelcome to the server!" , 460, 260);
		ctx.beginPath();
		ctx.arc(247, 238, 175, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();
		const avatar = await loadImage(member.user.displayAvatarURL({size: 1024, dynamic: false, format: "png"}));
		ctx.drawImage(avatar, 72, 63, 350, 350);
		const attachment = new MessageAttachment(canvas.toBuffer(), "welcome.png");
		client.channels.cache.get("754140212484898917").send({content: "Welcome to " + member.guild.name + "! " + member.toString() + " I hope you enjoy your stay!", files: [attachment]});
	}
});

client.on ("guildMemberRemove", async member =>{
	if(member.guild.id === "687396618688790533"){
		const canvas = createCanvas(1300, 500);
		const ctx = canvas.getContext("2d");
		const background = await loadImage("https://cdn.wallpapersafari.com/24/96/eGcZK5.jpg");
		ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		ctx.fillStyle = "white";
		ctx.font = "70px Times New Roman";
		ctx.fillText(member.user.username + "\nGoodbye!" , 460, 260);
		ctx.beginPath();
		ctx.arc(247, 238, 175, 0, Math.PI * 2, true);
		ctx.closePath();
		ctx.clip();
		const avatar = await loadImage(member.user.displayAvatarURL({size: 1024, dynamic: false, format: "png"}));
		ctx.drawImage(avatar, 72, 63, 350, 350);
		const attachment = new MessageAttachment(canvas.toBuffer(), "goodbye.png");
		client.channels.cache.get("744131520318537899").send({content: "Goodbye " + member.user.username + "! I hope you enjoyed your stay!", files: [attachment]});
	}
});

client.on ("messageCreate", async message => {
	if (message.content.startsWith("hola"))return message.channel.send("Hola");
	if (message.content.startsWith("Buenos dias"))return message.channel.send("Buen dia");
	if (message.channel) return console.log(message.guild.name + ": " + message.author.username + ": " + message.content); 
}); 


/*
async function upWord(word, description){
	const data = new WordRestricted({
		word: word,
		description: description
	});
	const nuevo = await data.save();
	console.log(nuevo);
	console.log("Word added");
	return nuevo;
}

async function searchWord (word, message){
	const data = await WordRestricted;
}

async function showWord(){
	const data = await WordRestricted.find().sort({word: 1});
	return data;
}

async function update(word, description){
	const data = await WordRestricted.updateOne({word: word}, {$set: {description: description}});
	if (!data){
		console.log("Word not found");
		return "Word not found";
	}else {
		return "Word updated";
	}
}

async function deleteWord(word){
	const data = await WordRestricted.findOne({word: word});
	if(!data){
		console.log("Word not found");
		return "Word not found";
	} else {
		await WordRestricted.deleteOne({word: word}).then(() => console.log("User deleted"));
		return "User deleted";
	} 
}
*/


client.login("Nzk2NTQ4NjY0MDA4MTE0MjA2.X_ZhwA.xwdMOz1S4UuUVcy0FAzosx07j5o");