const nekos = require("nekos.life");
const neko = new nekos();
const { MessageEmbed } = require("discord.js");
module.exports = {
	name: "kiss",
	run: async (client, message, args) => {
		if (!args.join(" ")) return message.reply("You need to specify a person to kiss");
		const member = message.mentions.members.first() || message.guild.members.resolve(args.join(" "));
		if (!member) return message.reply("I can't find that person");
		const img = await neko.sfw.kiss();
		const embed = new MessageEmbed();
		embed.setColor("Black");
		embed.setAuthor({name: message.author.username, iconURL:message.author.avatarURL()});
		embed.setDescription(`**${member.user.username}** has been kissed by **${message.author.username}**`);
		embed.setImage(img.url);
		embed.setFooter({text: "Made by @Kuroro_owo#4709"});
		embed.setTimestamp();
		message.channel.send({embeds: [embed]});
	}
};