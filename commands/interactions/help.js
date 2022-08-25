const {MessageEmbed, MessageSelectMenu, MessageActionRow} = require("discord.js");
module.exports = {
	name: "help",
	run: async (client, message) => {
		const embed = new MessageEmbed();
		embed.setColor("Black");
		embed.setAuthor({name: message.author.username, iconURL: message.author.avatarURL()});
		embed.setTitle("Help");
		embed.setURL("https://www.youtube.com/watch?v=iik25wqIuFo");
		embed.setDescription("Hi, I'm Developer, I have currently four caterogies: \n\n**1.** **Anime commands** \n**2.** **Interaction commands**\n**3.** **Game commands**");
		embed.addFields();
		embed.setThumbnail("https://i.pinimg.com/originals/b4/35/fb/b435fb235c9af8e6b6eadc34f09ebbc0.jpg");
		embed.setImage("https://i.pinimg.com/originals/b4/35/fb/b435fb235c9af8e6b6eadc34f09ebbc0.jpg");
		embed.setFooter({text: "Made by @Kuroro_owo#4709"});
		embed.setTimestamp();
		const mes = await message.reply({embeds: [embed],  components: [new MessageActionRow().addComponents([
			new MessageSelectMenu()
				.setCustomId("options")
				.setPlaceholder("Select an category")
				.addOptions([{
					label: "Anime commands",
					description: "This is a list of Anime commands",
					value: "second_option"
				},{
					label: "Interaction commands",
					description: "This is a list of Interaction commands",
					value: "third_option"
				}, {
					label: "Games commands",
					description: "This is a list of Games commands",
					value: "fourth_option"
				}])
		])]});
		const filter = (interaction) => interaction.customId === "options" && interaction.user.id === message.author.id;
		const collector = mes.createMessageComponentCollector({filter: filter, time: 60e3});	
		collector.on("collect", async (interaction) => {
			if (interaction.values[0] === "second_option"){
				const embedanime = new MessageEmbed();
				embedanime.setColor("Black");
				embedanime.setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()});
				embedanime.setTitle("💫 Anime Commands");
				embedanime.setDescription("If you wanna see a description of a command use this: \n**,<write here your command>des**\nThese are the commands for anime: \n ```feed    slap    hug    pat    kiss    meow    woof    nekogif    cuddle    avatar```");
				embedanime.setFooter({text: "Made by @Kuroro_owo#4709"});
				embedanime.setTimestamp();
				interaction.reply({embeds: [embedanime]});
			}else if (interaction.values[0] === "third_option"){
				const embedinteraction = new MessageEmbed();
				embedinteraction.setColor("Black");
				embedinteraction.setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()});
				embedinteraction.setTitle("📱 Interaction Commands");
				embedinteraction.setDescription("If you wanna see a description of a command use this: \n**,<write here your command>des**\nThese are the commands for interaction: \n```idk    help    ts    epic    shitpost    meme    weather```");
				embedinteraction.setFooter({text: "Made by @Kuroro_owo#4709"});
				embedinteraction.setTimestamp();
				interaction.reply({embeds: [embedinteraction]});
			} else if(interaction.values[0] === "fourth_option"){
				const embedgames = new MessageEmbed();
				embedgames.setColor("Black");
				embedgames.setAuthor({name: interaction.user.username, iconURL: interaction.user.avatarURL()});
				embedgames.setTitle("🎮 Game Commands");
				embedgames.setDescription("If you wanna see a description of a command use this: \n**,<write here your command>des**\nThese are the commands for games: \n```hanged```");
				embedgames.setFooter({text: "Made by @Kuroro_owo#4709"});
				embedgames.setTimestamp();
				interaction.reply({embeds: [embedgames]});
			}
		});
	}
};