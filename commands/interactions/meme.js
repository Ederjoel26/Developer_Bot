const meme = require("discord-meme-feed");
module.exports = {
	name: "meme",
	run: async (client, message) => {
		meme.meme((url) => message.channel.send(url));
	}
};