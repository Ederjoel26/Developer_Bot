const shitpost = require("discord-shitpost");
module.exports = {
	name: "shitpost",
	run: async (client, message) => {
		message.channel.send(shitpost.imgShitpost());
	}
};