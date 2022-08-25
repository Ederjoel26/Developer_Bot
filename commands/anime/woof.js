const nekos = require("nekos.life");
const neko = new nekos();
const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "woof",
	run: async (client, message) => {
		const img = await neko.sfw.woof();
		const embed = new MessageEmbed();
		embed.setColor("Black");
		embed.setAuthor({name: message.author.username, iconURL:message.author.avatarURL()});
		embed.setDescription("Dogs are so cute >//<");
		embed.setImage(img.url);
		embed.setFooter({text: "Made by @Kuroro_owo#4709"});
		embed.setTimestamp();
		message.channel.send({embeds: [embed]});
	}
};
