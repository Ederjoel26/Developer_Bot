const {model, Schema} = require("mongoose");

const entryExit = new Schema({
	guildId: String,
	channelEntry: String,
	channelExit: String,
});

module.exports = model("model1", entryExit);