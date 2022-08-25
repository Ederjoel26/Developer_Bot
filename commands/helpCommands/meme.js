const {MessageEmbed} = require("discord.js");
module.exports = {
	name: "memedes",
	run: async (client, message) => {
		const embed = new MessageEmbed();
		embed.setColor("Black");
		embed.setAuthor({name: message.author.username, iconURL: message.author.avatarURL()});
		embed.setTitle("Help Meme");
		embed.setDescription(" 'meme' command is used to send a image or video of a meme.\n\n**Use:** ```,meme```\n**Category:** Interaction Commands");
		embed.setThumbnail("https://i.pinimg.com/originals/fb/07/d1/fb07d1cc693f78c3d3f3718b991e4412.png");
		embed.setFooter({text: "Made by @Kuroro_owo#4709"});
		embed.setTimestamp();
		message.channel.send({embeds: [embed]});
	}
};