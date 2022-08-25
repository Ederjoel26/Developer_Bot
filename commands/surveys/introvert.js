const {MessageEmbed, MessageActionRow, MessageButton} = require("discord.js");
var embed = new MessageEmbed();
var count = 0;
module.exports = {
	name: "inextrovert",
	run: async (client, message) => {
		class Inextrovert {
			async rules() {
				this.embedd("Bienvenido al test para saber si eres introvertido o extrovertido, ojalá sea de tu agrado. \nLas reglas del test son las siguientes: \n1. Solo puedes escoger una opción.\n2. Solo debes de escribir un letra segun la opción que desees. \n3. Debes escribir la letra en el chat.\n4. Solo tienes un minuto para contestar cada pregunta.","https://i.ytimg.com/vi/mhSUoCbY59c/maxresdefault.jpg");
			}
			async start() {
				let bandera = 0;
				while(bandera){
					this.embedd("¿Cúal de estas palabras crees que escogerían tus amigo/as para definirte?\na) Amigable.\nb) Tranquilo.\nc) Despreocupado/a.\nd) Confiable.", "https://static2.abc.es/media/bienestar/2022/03/13/amigos-test-ksHE--620x349@abc.jpg");
					let ev = this.evento(30, 10, 40, 20);
					if(ev === 1){
						break;	
					}
				}
			}
			async embedd(a, b) {
				embed.setTitle("¿Introvertido/a o Extrovertido/a?");
				embed.setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()});
				embed.setDescription(a);
				embed.setImage(b);
				embed.setColor("Black");
				embed.setFooter({text: "Made by @Kuroro_owo#4709"});
				embed.setTimestamp();
				message.channel.send({embeds: [embed]});
			}
			evento(a, b, c, d){
				const collector = message.channel.createMessageCollector({ filter: (m) => m.author.id === message.author.id , time: 60e3 });
				collector.once("collect", async m => {
					let mes = m.content[0].toLowerCase();
					const abc = ["a", "b", "c", "d"];
					if(!abc.includes(mes)) return message.channel.send("Esa letra no es válida.");
					switch(mes){
					case "a":
						count += a;
						break;
					case "b":
						count += b;
						break;
					case "c":
						count += c;
						break;
					case "d":
						count += d;
						break;
					}
					let ev = await this.repetir();
					if(ev === 1) return 1;
					message.channe.send("Respuesta registrada");
					console.log("This is the count: " + count);
				});
			}
			async repetir(){
				message.channel.send("¿Estas seguro de tu respuesta? si/no");
				const res = await message.channel.awaitMessages({filter: (m) => m.author.id === message.author.id && ["si", "no"].includes(m.content), time: 60e3, max: 1}).catch(() => null);
				if(!res)return message.channel.send("No hubo respuesta");
				if(res.first().content === "no") return 1;
				else return 0;
			}
		}
		const inextrovert = new Inextrovert();
		inextrovert.rules();
		const mes = await message.channel.send({components: [new MessageActionRow().addComponents([
			new MessageButton().setCustomId("button")
				.setLabel("Start")
				.setStyle("PRIMARY")])]});
		const res = await mes.awaitMessageComponent ({filter: interaction => interaction.customId === "button" && interaction.user.id === message.author.id, time: 12e4, max: 1}).catch(() => null);
		if(!res)return mes.edit({components: []});
		res.deferUpdate(inextrovert.start());
	}
};

