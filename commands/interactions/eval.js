const util = require("util");
module.exports = {
	name: "eval",
	run: async (client, message, args) => {
		try{
			let res = await eval(args.join(" "));
			res = util.inspect(res, {depth: 0});
			message.reply({content: "```js\n"  + res + "```" });
		}catch (e){
			message.reply({content: "This is the problem of your code: " + e});
			console.log(e);
		}
	}
};