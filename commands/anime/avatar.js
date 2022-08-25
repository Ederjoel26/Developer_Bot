const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "avatar",
	aliases: ["av"],
	run: async (client, message) => {
		const img = message.author.avatarURL();
		const embed = new MessageEmbed();
		embed.setColor("Black");
		embed.setAuthor({name: message.author.username, iconURL:message.author.avatarURL()});
		embed.setDescription("Here is your avatar");
		embed.setImage(img);
		embed.setFooter({text: "Made by @Kuroro_owo#4709"});
		embed.setTimestamp();
		message.channel.send({embeds: [embed]});
	}
};
