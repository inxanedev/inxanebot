const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
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
			if (isBetween(hour, minute, 9, 0, 25)) {
				return "Bazy danych";
			} else if (isBetween(hour, minute, 9, 30, 55)) {
				return "Bazy danych";
			} else if (isBetween(hour, minute, 10, 0, 25)) {
				return "Angielski zawodowy";
			} else if (isBetween(hour, minute, 10, 30, 55)) {
				return "Algorytmike";
			} else if (isBetween(hour, minute, 11, 0, 25)) {
				return "BHP";
			} else if (isBetween(hour, minute, 11, 30, 55)) {
				return "Matematyke";
			}
			return "Przerwe lub skonczyly sie lekcje!";
			break;
		case 2:
			if (isBetween(hour, minute, 8, 0, 25)) {
				return "J. Polski";
			} else if (isBetween(hour, minute, 8, 30, 55)) {
				return "Geografie";
			} else if (isBetween(hour, minute, 9, 0, 25)) {
				return "Plastyke";
			} else if (isBetween(hour, minute, 9, 30, 55)) {
				return "WF";
			} else if (isBetween(hour, minute, 10, 0, 25)) {
				return "Fizyke";
			} else if (isBetween(hour, minute, 10, 30, 55)) {
				return "Wychowawcza";
			} else if (isBetween(hour, minute, 11, 0, 25)) {
				return "Chemie";
			} else if (isBetween(hour, minute, 11, 30, 55)) {
				return "Religie";
			}
			return "Przerwe lub skonczyly sie lekcje!";
			break;
		case 3:
			if (isBetween(hour, minute, 8, 0, 25)) {
				return "Informatyke";
			} else if (isBetween(hour, minute, 8, 30, 55)) {
				return "Matematyke";
			} else if (isBetween(hour, minute, 9, 0, 25)) {
				return "Matematyke";
			} else if (isBetween(hour, minute, 9, 30, 55)) {
				return "J. Angielski z Moronem";
			} else if (isBetween(hour, minute, 10, 0, 25)) {
				return "EDB";
			} else if (isBetween(hour, minute, 10, 30, 55)) {
				return "J. Polski";
			} else if (isBetween(hour, minute, 11, 0, 25)) {
				return "J. Polski";
			} else if (isBetween(hour, minute, 11, 30, 55)) {
				return "Biologie";
			}
			return "Przerwe lub skonczyly sie lekcje!";
			break;
		case 4:
			if (isBetween(hour, minute, 8, 0, 25)) {
				return "Bazy danych";
			} else if (isBetween(hour, minute, 8, 30, 55)) {
				return "Bazy danych";
			} else if (isBetween(hour, minute, 9, 0, 25)) {
				return "Bazy danych";
			} else if (isBetween(hour, minute, 9, 30, 55)) {
				return "J. Niemiecki";
			} else if (isBetween(hour, minute, 10, 0, 25)) {
				return "J. Niemiecki";
			} else if (isBetween(hour, minute, 10, 30, 55)) {
				return "Historie";
			} else if (isBetween(hour, minute, 11, 0, 25)) {
				return "WF (basen) (XD)";
			} else if (isBetween(hour, minute, 11, 30, 55)) {
				return "WF (basen) (XD)";
			}
			return "Przerwe lub skonczyly sie lekcje!";
			break;
		case 5:
			if (isBetween(hour, minute, 8, 0, 25)) {
				return "HTML";
			} else if (isBetween(hour, minute, 8, 30, 55)) {
				return "HTML";
			} else if (isBetween(hour, minute, 9, 0, 25)) {
				return "HTML";
			} else if (isBetween(hour, minute, 9, 30, 55)) {
				return "Historie";
			} else if (isBetween(hour, minute, 10, 0, 25)) {
				return "J. Angielski";
			}
			return "Przerwe lub skonczyly sie lekcje!";
			break;
	}
}
client.on("ready", () => {
	console.log("Bot has started!");
	client.user.setActivity(`GURZEJA PENIS (PREFIX +)`);
});
client.on("message", async message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();
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
			.setColor("#0099ff")
			.setTitle("Senpai-sama! C-chcesz zobaczyc moje komendy~?")
			.addField("Wiadomosc wyslana!", "Zobacz swoje wiadomosci, wyslalem ci nudesy :hehe:")
			.setTimestamp();
		message.channel.send(helpEmbed);
		const commandsEmbed = new Discord.RichEmbed()
			.setColor("#0099ff")
			.setTitle("Ohayoo, senpai-sama desu~!")
			.addField("Oto lista moich komend:", "\`+help\` - wyswietla komendy\n"
				+ "\`+lekcja\` - wyswietla jaka jest teraz lekcja\n"
				+ "\`+roll <liczba>\` - losuje liczbe miedzy 0 a <liczba>\n"
				+ "\`+8ball\` - symulacja kuli 8ball, odpowie na pytanie")
			.setTimestamp();
		message.author.send(commandsEmbed);
		return;
	} else if (command === "roll") {
		if (args.length < 1) {
			const errorEmbed = new Discord.RichEmbed()
				.setColor("#ff0000")
				.setTitle("Hej! Cos tu nie gra!")
				.addField("Error", "Hmm, musisz podac maksymalna liczbe!")
				.setTimestamp();
			message.channel.send(errorEmbed);
			return;
		}
		if (!(parseInt(args[0]) > 0 && parseInt(args[0]) <= 1000000)) {
			const errorEmbed = new Discord.RichEmbed()
				.setColor("#ff0000")
				.setTitle("Hej! Cos tu nie gra!")
				.addField("Error", "Hmm, wpisz poprawna liczbe pomiedzy 1 a milion!")
				.setTimestamp();
			message.channel.send(errorEmbed);
			return;
		}
		var result = Math.round(Math.random() * parseInt(args[0]));
		const luckEmbed = new Discord.RichEmbed()
			.setColor("#0099ff")
			.setTitle(`Rolluje liczbe miedzy 0 a ${args[0]}...`)
			.addField("Odpowiedź:", `Wyrollowana liczba: ${result}!`)
			.setTimestamp();
		message.channel.send(luckEmbed);
		return;
	} else if (command === "8ball") {
		var num = Math.round(Math.random() * 7);
		var answers = ["Raczej tak!", "Napewno nie!", "Napewno tak!", "Nie mam zielonego pojecia!",
			"Chyba tak, ale nie jestem pewien...", "Chyba nie, ale nie jestem pewien...", "Raczej nie!", "Zalezy..."];
		var result = answers[num];
		const ballEmbed = new Discord.RichEmbed()
			.setColor("#0099ff")
			.setTitle("Magiczny 8ball odpowie ci na pytanie...")
			.addField("Odpowiedź:", `Oto odpowiedź kuli: ${result}`)
			.setTimestamp()
		message.channel.send(ballEmbed);
		return;
	}
	const badCommand = new Discord.RichEmbed()
		.setColor("#0099ff")
		.setTitle("Senpai... Sumimasen~!!!!!")
		.addField("Nieznana komenda", "Przperaszam cię senpai, ale nie mam takiej komendy! :sad_face:");
	message.channel.send(badCommand);
	return;
});
client.login(config.token);