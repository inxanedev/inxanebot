require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const embedColor = "#0099ff";
function isBetween(hour, minute, targetHour, targetMinuteX, targetMinuteY) {
	if (hour == targetHour && minute >= targetMinuteX && minute < targetMinuteY) {
		return true;
	} else {
		return false;
	}
}
function getLesson(day, hour, minute) {
	switch (day) {
		case 0:
		case 6:
			return "Weekend :)";
			break;
		case 1:
			if (isBetween(hour, minute, 9, 0, 25))        return "Bazy danych";
			else if (isBetween(hour, minute, 9, 26, 29))  return "Przerwe! Nastepna lekcja: Bazy danych";
			else if (isBetween(hour, minute, 9, 30, 55))  return "Bazy danych";
			else if (isBetween(hour, minute, 9, 56, 59))  return "Przerwe! Nastepna lekcja: Angielski zawodowy";
			else if (isBetween(hour, minute, 10, 0, 25))  return "Angielski zawodowy";
			else if (isBetween(hour, minute, 10, 26, 29)) return "Przerwe! Nastepna lekcja: Algorytmika";
			else if (isBetween(hour, minute, 10, 30, 55)) return "Algorytmike";
			else if (isBetween(hour, minute, 10, 56, 59)) return "Przerwe! Nastepna lekcja: BHP";
			else if (isBetween(hour, minute, 11, 0, 25))  return "BHP";
			else if (isBetween(hour, minute, 11, 26, 29)) return "Przerwe! Nastepna lekcja: Matematyka";
			else if (isBetween(hour, minute, 11, 30, 55)) return "Matematyke";
			return "Skonczyly sie juz dzisiaj lekcje!";
			break;
		case 2:
			if (isBetween(hour, minute, 8, 30, 55))       return "J. Polski";
			else if (isBetween(hour, minute, 8, 56, 59))  return "Przerwe! Nastepna lekcja: Geografia";
			else if (isBetween(hour, minute, 9, 0, 25))   return "Geografie";
			else if (isBetween(hour, minute, 9, 26, 29))  return "Przerwe! Nastepna lekcja: Plastyka";
			else if (isBetween(hour, minute, 9, 30, 55))  return "Plastyke";
			else if (isBetween(hour, minute, 9, 56, 59))  return "Przerwe! Nastepna lekcja: WF";
			else if (isBetween(hour, minute, 10, 0, 25))  return "WF";
			else if (isBetween(hour, minute, 10, 26, 29)) return "Przerwe! Nastepna lekcja: Fizyka";
			else if (isBetween(hour, minute, 10, 30, 55)) return "Fizyke";
			else if (isBetween(hour, minute, 10, 56, 59)) return "Przerwe! Nastepna lekcja: Wychowawcza";
			else if (isBetween(hour, minute, 11, 0, 25))  return "Wychowawcza";
			else if (isBetween(hour, minute, 11, 26, 29)) return "Przerwe! Nastepna lekcja: Chemia";
			else if (isBetween(hour, minute, 11, 30, 55)) return "Chemie";
			else if (isBetween(hour, minute, 11, 56, 59)) return "Przerwe! Nastepna lekcja: Religia";
			else if (isBetween(hour, minute, 12, 0, 25))  return "Religie";
			return "Skonczyly sie juz dzisiaj lekcje!";
			break;
		case 3:
			if (isBetween(hour, minute, 8, 30, 55))       return "Informatyke";
			else if (isBetween(hour, minute, 8, 56, 59))  return "Przerwe! Nastepna lekcja: Matematyka";
			else if (isBetween(hour, minute, 9, 0, 25))   return "Matematyke";
			else if (isBetween(hour, minute, 9, 26, 29))  return "Przerwe! Nastepna lekcja: Matematyka";
			else if (isBetween(hour, minute, 9, 30, 55))  return "Matematyke";
			else if (isBetween(hour, minute, 9, 56, 59))  return "Przerwe! Nastepna lekcja: J. Angielski z Moronem";
			else if (isBetween(hour, minute, 10, 0, 25))  return "J. Angielski z Moronem";
			else if (isBetween(hour, minute, 10, 26, 29)) return "Przerwe! Nastepna lekcja: EDB";
			else if (isBetween(hour, minute, 10, 30, 55)) return "EDB";
			else if (isBetween(hour, minute, 10, 56, 59)) return "Przerwe! Nastepna lekcja: J. Polski";
			else if (isBetween(hour, minute, 11, 0, 25))  return "J. Polski";
			else if (isBetween(hour, minute, 11, 26, 29)) return "Przerwe! Nastepna lekcja: J. Polski";
			else if (isBetween(hour, minute, 11, 30, 55)) return "J. Polski";
			else if (isBetween(hour, minute, 11, 56, 59)) return "Przerwe! Nastepna lekcja: Biologia";
			else if (isBetween(hour, minute, 12, 0, 25))  return "Biologie";
			return "Skonczyly sie juz dzisiaj lekcje!";
			break;
		case 4:
			if (isBetween(hour, minute, 8, 30, 55))       return "Bazy danych";
			else if (isBetween(hour, minute, 8, 56, 59))  return "Przerwe! Nastepna lekcja: Bazy danych";
			else if (isBetween(hour, minute, 9, 0, 25))   return "Bazy danych";
			else if (isBetween(hour, minute, 9, 26, 29))  return "Przerwe! Nastepna lekcja: Bazy danych";
			else if (isBetween(hour, minute, 9, 30, 55))  return "Bazy danych";
			else if (isBetween(hour, minute, 9, 56, 59))  return "Przerwe! Nastepna lekcja: J. Niemiecki";
			else if (isBetween(hour, minute, 10, 0, 25))  return "J. Niemiecki";
			else if (isBetween(hour, minute, 10, 26, 29)) return "Przerwe! Nastepna lekcja: J. Niemiecki";
			else if (isBetween(hour, minute, 10, 30, 55)) return "J. Niemiecki";
			else if (isBetween(hour, minute, 11, 56, 59)) return "Przerwe! Nastepna lekcja: Historia";
			else if (isBetween(hour, minute, 11, 0, 25))  return "Historie";
			else if (isBetween(hour, minute, 11, 26, 29)) return "Przerwe! Nastepna lekcja: basen xDD";
			else if (isBetween(hour, minute, 11, 30, 55)) return "WF (basen) (XD)";
			else if (isBetween(hour, minute, 11, 56, 59)) return "Przerwe! Nastepna lekcja: basen XDD";
			else if (isBetween(hour, minute, 12, 0, 25))  return "WF (basen) (XD)";
			return "Skonczyly sie juz dzisiaj lekcje!";
			break;
		case 5:
			if (isBetween(hour, minute, 8, 30, 55)) 	  return "HTML";
			else if (isBetween(hour, minute, 8, 56, 59))  return "Przerwe! Nastepna lekcja: HTML";
			else if (isBetween(hour, minute, 9, 0, 25))   return "HTML";
			else if (isBetween(hour, minute, 9, 26, 29))  return "Przerwe! Nastepna lekcja: HTML";
			else if (isBetween(hour, minute, 9, 30, 55))  return "HTML";
			else if (isBetween(hour, minute, 9, 56, 59))  return "Przerwe! Nastepna lekcja: Historia";
			else if (isBetween(hour, minute, 10, 0, 25))  return "Historie";
			else if (isBetween(hour, minute, 10, 26, 29)) return "Przerwe! Nastepna lekcja: J. Angielski";
			else if (isBetween(hour, minute, 10, 30, 55)) return "J. Angielski";
			return "Skonczyly sie juz dzisiaj lekcje!";
			break;
	}
}
client.on("ready", () => {
	console.log("Bot has started!");
	client.user.setActivity(config.status);
});
function sendError(channel, errorMessage) {
	const errorEmbed = new Discord.RichEmbed()
		.setColor("#ff0000")
		.setTitle("Hej! Cos tu nie gra!")
		.addField("Error", errorMessage)
		.setTimestamp();
	channel.send(errorEmbed);
}
client.on("message", async message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	// console.log(`${message.author.tag} -> ${message}`); //
	if (command == "lekcja") {
		var date = new Date();
		var content = getLesson(date.getDay(), date.getHours(), date.getMinutes());
		const lekcjaEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle("Jaka jest lekcja?")
			.addField("Mamy teraz:", content, true)
			.setTimestamp();
		message.channel.send(lekcjaEmbed);
		return;
	} else if (command === "help") {
		const helpEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle("Senpai-sama! C-chcesz zobaczyc moje komendy~?")
			.addField("Wiadomosc wyslana!", "Zobacz swoje wiadomosci, wyslalam ci nudesy :hehe:")
			.setTimestamp();
		message.channel.send(helpEmbed);
		const commandsEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle("Ohayoo, senpai-sama desu~!")
			.addField("Oto lista moich komend:", "\`+help\` - wyswietla komendy\n"
				+ "\`+lekcja\` - wyswietla jaka jest teraz lekcja\n"
				+ "\`+roll <liczba>\` - losuje liczbe miedzy 0 a <liczba>\n"
				+ "\`+8ball\` - symulacja kuli 8ball, odpowie na pytanie\n"
				+ "\`+pat @osoba\` - :anime_klep:\n"
				+ "\`+avatar @osoba\` - link do avataru osoby\n"
				+ "\`+penis @osoba\` - pokazuje wielkosc penisa @osoby")
			.setTimestamp();
		message.author.send(commandsEmbed);
		return;
	} else if (command === "roll") {
		if (args.length < 1) {
			sendError(message.channel, "Hmm, musisz podac maksymalna liczbe!");
			return;
		}
		if (!(parseInt(args[0]) > 0 && parseInt(args[0]) <= 1000000)) {
			sendError(message.channel, "Hmm, wpisz poprawna liczbe pomiedzy 1 a milion!");
			return;
		}
		var result = Math.round(Math.random() * parseInt(args[0]));
		const luckEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`Rolluje liczbe miedzy 0 a ${args[0]}...`)
			.addField("Odpowiedź:", `Wyrollowana liczba: ${result}!`)
			.setTimestamp();
		message.channel.send(luckEmbed);
		return;
	} else if (command === "8ball") {
		var num = Math.round(Math.random() * 7);
		var answers = ["Raczej tak!", "Napewno nie!", "Napewno tak!", "Nie mam zielonego pojecia!",
			"Chyba tak, ale nie jestem pewna...", "Chyba nie, ale nie jestem pewna...", "Raczej nie!", "Zalezy..."];
		var result = answers[num];
		const ballEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle("Magiczny 8ball odpowie ci na pytanie...")
			.addField("Odpowiedź:", `Oto odpowiedź kuli: ${result}`)
			.setTimestamp()
		message.channel.send(ballEmbed);
		return;
	} else if (command === "pat") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		var patGifs = ["https://thumbs.gfycat.com/SaltySpitefulIrishdraughthorse-small.gif",
					   "https://thumbs.gfycat.com/LightOilyIraniangroundjay-size_restricted.gif",
					   "https://i.pinimg.com/originals/2e/27/d5/2e27d5d124bc2a62ddeb5dc9e7a73dd8.gif",
					   "https://gifimage.net/wp-content/uploads/2017/09/anime-head-pat-gif-4.gif",
					   "https://i.imgur.com/UWbKpx8.gif",
					   "https://media.giphy.com/media/3o84TQvigRdBFynQWs/giphy.gif",
					   "https://media.giphy.com/media/109ltuoSQT212w/giphy.gif",
					   "https://i.imgur.com/fp9XJZO.gif",
					   "https://media1.tenor.com/images/291ea37382e1d6cd33349c50a398b6b9/tenor.gif?itemid=10204936",
					   "https://i.imgur.com/bDMMk0L.gif",
					   "https://i.imgur.com/sLwoifL.gif"];
		var randomPat = patGifs[Math.round(Math.random() * (patGifs.length-1))];
		const patEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} pats ${message.mentions.members.first().user.tag}`)
			.setImage(randomPat)
			.setTimestamp();
		message.channel.send(patEmbed);
		return;
	} else if (command === "avatar") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		const avatarEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`Prosze, senpai! Oto avatar uzytkownika ${message.mentions.members.first().user.tag}`)
			.setImage(message.mentions.members.first().user.avatarURL)
			.addField("Link", message.mentions.members.first().user.avatarURL)
			.setTimestamp()
		message.channel.send(avatarEmbed);
		return;
	} else if (command === "penis") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		if (message.mentions.members.first().user.id == config.ownerID) {
			var result = "70km";
		} else if (message.mentions.members.first().user.id == "449612006811762689") {
			var result = "Wait a second...";
		} else {
			var result = Math.floor(Math.random()*20) + "cm!";
		}
		const penisEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle("Skanowanie wielkości penisa zakończone!")
			.addField(`Wielkość penisa użytkownika ${message.mentions.members.first().user.tag}:`, `${result}`)
			.setTimestamp();
		message.channel.send(penisEmbed);
		return;
	} else if (command === "restart") {
		if (message.author.id == config.ownerID) {
			const restartEmbed = new Discord.RichEmbed()
				.setColor(embedColor)
				.setTitle("Bravo six, going dark...")
				.addField("Restartowanie w toku...", "Zrobie drzemke i wracam, ok? Prosze nie idzcie sobie~! :(")
				.setTimestamp();
			message.channel.send(restartEmbed);
			setTimeout(() => {
				process.exit(0);
			}, 3000);
			return;
		} else {
			sendError(message.channel, "Co ty probujesz zrobic co!? Co ty sobie myslisz!");
			return;
		}
	}
	const badCommand = new Discord.RichEmbed()
		.setColor(embedColor)
		.setTitle("Senpai... Sumimasen~!!!!!")
		.addField("Nieznana komenda", "Przperaszam cię senpai, ale nie mam takiej komendy! :sad_face:");
	message.channel.send(badCommand);
	return;
});
client.login(process.env.BOT_TOKEN);
