const {MessageEmbed, MessageButton, MessageActionRow} = require("discord.js");
const embed = new MessageEmbed();
module.exports = {
	name: "fastfingers",
	run: async (client, message) => {
		const texts = ["Bienvenidos a la biblioteca", "Que estan haciendo"];
		const randomtext = texts[Math.floor(Math.random() * texts.length)];
		class Fastfingers {
			rules() {
				embed.setTitle("Fastfingers");
				embed.setDescription("'fastfingers' is a game in which you have to write the sentence faster than the other opponents. \nRules: \n1. Do not do copy paste.\n2. Have fun!");
				embed.setColor("Black");
				embed.setFooter({text: "Made by @Kuroro_owo#4709"});
				embed.setTimestamp();
				return message.channel.send({embeds: [embed]});
			}
			async start() {
				let winner = 0;
				embed.setTitle("Fastfingers");
				embed.setDescription("Good luck guys!\nThis is the text to write:\n" + randomtext);
				embed.setColor("Black");
				embed.setFooter({text: "Made by @Kuroro_owo#4709"});
				embed.setTimestamp();
				message.channel.send({embeds: [embed]});
				if(message.content.includes(randomtext) && winner === 0){
					console.log("si");
					winner = 1;
						
				}
			}	
		}
		const fastfingers = new Fastfingers();
		const mes = message.channel.send({components: [new MessageActionRow().add([
			new MessageButton
				.setCustomId("button")])]});
		fastfingers.rules();

	}
};
