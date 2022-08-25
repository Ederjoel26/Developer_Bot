const ts = require ("translate-google");
module.exports = {
	name: "ts",
	run: async (client, message, args) => {
		ts(args.join(" "), {from: "es", to: "en"}).then(res => {message.reply(res);}).catch(err => {console.log(err.red);});
	}
};