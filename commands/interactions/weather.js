const weather = require("weather-js");
module.exports = {
	name: "weather",
	run: async (client, message, args) => {
		try{
			if (message.mentions.members.first()) return message.reply("You wrote a mention, please use the command like this: `weather <city>`");
			if (!args.join(" ")) return message.reply("Please enter a city like this: `San Francisco, CA`");
			weather.find({search: args.join(" ")}, (err, result) => {if (err) return console.log(err);
			else return message.channel.send(`**${result[0].location.name}**\n\n**Temperature:** ${result[0].current.temperature}°C\n**Feels Like:** ${result[0].current.feelslike}°C\n**Wind:** ${result[0].current.winddisplay}`);
			});
		}catch (e){
			message.reply("You wrote something wrong, please try again");
			console.log(e);
		}
	}
};