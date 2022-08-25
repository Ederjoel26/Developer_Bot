const {MessageEmbed} = require("discord.js");
module.exports = {
	name: "woofdes",
	run: async (client, message) => {
		const embed = new MessageEmbed();
		embed.setColor("Black");
		embed.setAuthor({name: message.author.username, iconURL: message.author.avatarURL()});
		embed.setTitle("Help Woof");
		embed.setDescription(" 'woof' command is used to send a image of a cute dog.\n\n**Use:** ```,dog```\n**Category:** Anime Commands");
		embed.setThumbnail("https://i.pinimg.com/originals/fb/07/d1/fb07d1cc693f78c3d3f3718b991e4412.png");
		embed.setFooter({text: "Made by @Kuroro_owo#4709"});
		embed.setTimestamp();
		message.channel.send({embeds: [embed]});
	}
};