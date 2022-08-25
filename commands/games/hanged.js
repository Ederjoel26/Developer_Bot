const {MessageEmbed} = require("discord.js");
module.exports = {
	name: "hanged",
	run: async (client, message) => {
		const words = ["palabras", "centro", "cerebro", "cilindro", "cofre", "cine", "circo", "cuerpo", "colega", "coleccion", "coche", "cocodrilo", "cualidad", "vinculo", "transito", "circulo", "bonito", "agradable", "mostrar", "aprender", "apasionado", "practico", "amor", "paz", "apasionado", "cuenta", "avion", "aguacate", "sonrisas", "felicidad", "parabrisas", "telaraña", "ojo", "reto", "historia", "psicologia", "empleados", "vulnerables", "septiembre", "playera", "expresiones", "japones", "gracias", "pensamientos", "rompehielos", "familia", "estrella", "pesos", "beso", "cariño", "platano", "derivadas", "amarillo", "rojo", "verde", "azul", "morado", "titular", "nube", "pronunciar", "exito", "usadas", "globalmente", "mundo", "conectores", "sabado", "clave"];
		var embed = new MessageEmbed();
		const hand = ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1sDZ4mewD8dDndgAC5rycD8mo7nIa2qs0xowsMw4psNOMwx6TTe_U9VptBLCikR8v2nl6ogmCNIuodCnYvFYaoxEZBnkEUmcs9pA6b5KcM4oZuOWCodgqlG8dapfCPaZpq6fOMKjaht78VKY5AzDjs_EcKeWA23aBmnPpvoLiPbuuSuZLWG9Nfimh/s320/Hanged%20level%201.png", 
			"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtpoyZdR5U4PxCTJw8rCavXCAYhZJ48dUDX3CE0IMUZjecCXDnWvgKa7VYaWb4AnAOVU3HMCln3DiTpLDCNxOGxlzp0o9VyVw3udLs6484jQSAY0uag_qoEFiQVZPwff7mPScQm2AetlCSTxGGEuJgEFFdu987ZEQWvsOvKJ_8bm9WvUviAhg-A8Wp/s320/Hanged%20level%202.png", 
			"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgnySNUWMt78DzUHNBtd5QKBj8OdGmvsV1WRQnT1L3-u4_IkCNSdoChxOjzAt5dOffFmlOGaEnducdQQdo7GF0ebBDQmsGV1GGygPo6RwDKoND1CP2UNGNoUCrrE7rjmDo8QSZkG7YUVjuoime8e07z2wNXqYZl4SVVbIWebU4JbOji8KkP_osHcCOG/s320/Hanged%20level%203.png", 
			"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6bhLLbolF9atVz_oiiFh26SkwMrtQRtrbhUpbK_ffz1j-mg6kMLdKNmJYy_FDrSgcOcy7EdsBtgLmWs10i462a2d0zW_KANdvG6zfY_A3n4u2KIcVIW80Ey8kiHc5f7LNdyUk2QZPM6C1NIjIoFM0lE7vk4KCzicHUwvP1GFtsBLMs7YpyjduROKk/s320/Hanged%20level%204.png", 
			"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9JrMwoULiyWgaTK6eMnJCY3CyQdwDm22EnbwW5FfNPOr3t2pTy78tjovwKgy165pWwGiii2CLsD9e-g03aBlj5-t8HxtNm2_BBrBhjZ5KNb4sJXlk5uu9DzlKc_i-PyruI15wfFCQk3IhrrkUMlRb7Wr8N7j-ijzIfZl2n1FuxKdnlD1ih9xIz78b/s320/Hanged%20level%205.png", 
			"https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2nlbVYCHjf-KeyRoaEvFNuvBO_mYx6vejbem-EHgwwu-4_E-j04a-ARpKbP5b57M16iPJtG9m18h3K-dF7DqEfPoanAqZPGk5YuYqnsb_jXYW83lm-i6a2X_qst_IPMuiJmi451uSjwpsd3-boKQdZaDOk_c59a_pshFkAfiK-jg_ihh9tgdqTz5V/s320/Hanged%20level%206.png"];
		class hanged {
			rules() {
				embed.setTitle("Hanged");
				embed.setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()});
				embed.setDescription("```Rules: \n1. You only have five tries.\n2. You can't choose two words at the same time.\n3. You can't choose the same word twice.\n4.You only have one minute to guess the word. \n5. Have fun!```");
				embed.setColor("Black");
				embed.setImage(hand[0]);
				embed.setFooter({text: "Made by @Kuroro_owo#4709"});
				embed.setTimestamp();
				message.channel.send({embeds: [embed]});
			}
			start() {
				const word = words[Math.floor(Math.random() * words.length)];
				let secretword = [];
				let count = 0;
				for (let i = 0; i < word.length; i++){
					secretword[i] = " - ";
				}
				embed.setTitle("Hanged");
				embed.setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()});
				embed.setDescription("The word to try is: " + secretword.join(" ") + "\nPlease write down a letter that you think that is in the secret word.");
				embed.setColor("Black");
				embed.setImage(hand[0]);
				embed.setFooter({text: "Made by @Kuroro_owo#4709"});
				embed.setTimestamp();
				message.channel.send({embeds: [embed]});
				const collector = message.channel.createMessageCollector({ filter: (m) => m.author.id === message.author.id , time: 60e3 });
				collector.on("collect", m => {
					let mes = m.content[0].toLowerCase();
					const abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
					if(!abc.includes(mes)) return;
					if(!Array.from(word).includes(mes)){ 
						if(count === 4){	
							embed.setTitle("Hanged");
							embed.setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()});
							embed.setDescription("You lost! The word was: " + word);
							embed.setColor("Black");
							embed.setImage(hand[5]);
							embed.setFooter({text: "Made by @Kuroro_owo#4709"});
							embed.setTimestamp();
							collector.stop();
							return message.channel.send({embeds: [embed]});
						}else {
							count++;
							embed.setTitle("Hanged");
							embed.setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()});
							embed.setDescription("The word to try is: " + secretword.join(" ") + "\nPlease write down a letter that you think that is in the secret word.");
							embed.setColor("Black");
							embed.setImage(hand[count]);
							embed.setFooter({text: "Made by @Kuroro_owo#4709"});
							embed.setTimestamp();
							return message.channel.send({embeds: [embed]});
						}
					} else {
						for (let i = 0; i < word.length; i++){
							if(word[i] === mes){
								secretword[i] = mes;
							}
						}
						if (!secretword.includes(" - ")){
							embed.setTitle("Hanged");
							embed.setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()});
							embed.setDescription("You won! The word was: " + word);
							embed.setColor("Black");
							embed.setImage(hand[count]);
							embed.setFooter({text: "Made by @Kuroro_owo#4709"});
							embed.setTimestamp();
							collector.stop();
							return message.channel.send({embeds: [embed]});
						} else {	
							embed.setTitle("Hanged");
							embed.setAuthor({name: message.author.username, iconURL: message.author.displayAvatarURL()});
							embed.setDescription("The word to try is: " + secretword.join(" ") + "\nPlease write down a letter that you think that is in the secret word.");
							embed.setColor("Black");
							embed.setImage(hand[count]);
							embed.setFooter({text: "Made by @Kuroro_owo#4709"});
							embed.setTimestamp();
							return message.channel.send({embeds: [embed]});
						}
					}
				});
			}
		}
		const game = new hanged();
		game.rules();
		game.start();
	}
};
