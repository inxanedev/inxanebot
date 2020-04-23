require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const embedColor = config.embedColor;
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
			if (isBetween(hour, minute, 9, 0, 25))        { return "Bazy danych|Bazy danych"; }
			else if (isBetween(hour, minute, 9, 26, 30))  { return "Przerwe!|Bazy danych"; }
			else if (isBetween(hour, minute, 9, 30, 55))  { return "Bazy danych|Angielski zawodowy"; }
			else if (isBetween(hour, minute, 9, 56, 60))  { return "Przerwe!|Angielski zawodowy"; }
			else if (isBetween(hour, minute, 10, 0, 25))  { return "Angielski zawodowy|Algorytmika"; }
			else if (isBetween(hour, minute, 10, 26, 30)) { return "Przerwe!|Algorytmika"; }
			else if (isBetween(hour, minute, 10, 30, 55)) { return "Algorytmike|BHP"; }
			else if (isBetween(hour, minute, 10, 56, 60)) { return "Przerwe!|BHP"; }
			else if (isBetween(hour, minute, 11, 0, 25))  { return "BHP|Matematyka"; }
			else if (isBetween(hour, minute, 11, 26, 30)) { return "Przerwe!|Matematyka"; }
			else if (isBetween(hour, minute, 11, 30, 55)) { return "Matematyke|Koniec"; }
			return "Skonczyly sie juz dzisiaj lekcje!|Nie ma";
			break;
		case 2:
			if (isBetween(hour, minute, 8, 30, 55))       { return "J. Polski|Geografia"; }
			else if (isBetween(hour, minute, 8, 56, 60))  { return "Przerwe!|Geografia"; }
			else if (isBetween(hour, minute, 9, 0, 25))   { return "Geografie|Plastyka"; }
			else if (isBetween(hour, minute, 9, 26, 30))  { return "Przerwe!|Plastyka"; }
			else if (isBetween(hour, minute, 9, 30, 55))  { return "Plastyke|WF"; }
			else if (isBetween(hour, minute, 9, 56, 60))  { return "Przerwe!|WF"; }
			else if (isBetween(hour, minute, 10, 0, 25))  { return "WF|Fizyka"; }
			else if (isBetween(hour, minute, 10, 26, 30)) { return "Przerwe!|Fizyka"; }
			else if (isBetween(hour, minute, 10, 30, 55)) { return "Fizyke|Wychowawcza"; }
			else if (isBetween(hour, minute, 10, 56, 60)) { return "Przerwe!|Wychowawcza"; }
			else if (isBetween(hour, minute, 11, 0, 25))  { return "Wychowawcza|Chemia"; }
			else if (isBetween(hour, minute, 11, 26, 30)) { return "Przerwe!|Chemia"; }
			else if (isBetween(hour, minute, 11, 30, 55)) { return "Chemie|Religia"; }
			else if (isBetween(hour, minute, 11, 56, 60)) { return "Przerwe!|Religia"; }
			else if (isBetween(hour, minute, 12, 0, 25))  { return "Religie|Koniec"; }
			return "Skonczyly sie juz dzisiaj lekcje!|Nie ma";
			break;
		case 3:
			if (isBetween(hour, minute, 8, 30, 55))       { return "Informatyke|Matematyka"; }
			else if (isBetween(hour, minute, 8, 56, 60))  { return "Przerwe!|Matematyka"; }
			else if (isBetween(hour, minute, 9, 0, 25))   { return "Matematyke|Matematyka"; }
			else if (isBetween(hour, minute, 9, 26, 30))  { return "Przerwe!|Matematyka"; }
			else if (isBetween(hour, minute, 9, 30, 55))  { return "Matematyke|J. Angielski z Moronem"; }
			else if (isBetween(hour, minute, 9, 56, 60))  { return "Przerwe!|J. Angielski z Moronem"; }
			else if (isBetween(hour, minute, 10, 0, 25))  { return "J. Angielski z Moronem|EDB"; }
			else if (isBetween(hour, minute, 10, 26, 30)) { return "Przerwe!|EDB"; }
			else if (isBetween(hour, minute, 10, 30, 55)) { return "EDB|J. Polski"; }
			else if (isBetween(hour, minute, 10, 56, 60)) { return "Przerwe!|J. Polski"; }
			else if (isBetween(hour, minute, 11, 0, 25))  { return "J. Polski|J. Polski"; }
			else if (isBetween(hour, minute, 11, 26, 30)) { return "Przerwe!|J. Polski"; }
			else if (isBetween(hour, minute, 11, 30, 55)) { return "J. Polski|Biologia"; }
			else if (isBetween(hour, minute, 11, 56, 60)) { return "Przerwe!|Biologia"; }
			else if (isBetween(hour, minute, 12, 0, 25))  { return "Biologie|Koniec"; }
			return "Skonczyly sie juz dzisiaj lekcje!|Nie ma";
			break;
		case 4:
			if (isBetween(hour, minute, 8, 30, 55))       { return "Bazy danych|Bazy danych"; }
			else if (isBetween(hour, minute, 8, 56, 60))  { return "Przerwe!|Bazy danych"; }
			else if (isBetween(hour, minute, 9, 0, 25))   { return "Bazy danych|Bazy danych"; }
			else if (isBetween(hour, minute, 9, 26, 30))  { return "Przerwe!|Bazy danych"; }
			else if (isBetween(hour, minute, 9, 30, 55))  { return "Bazy danych|J. Niemiecki"; }
			else if (isBetween(hour, minute, 9, 56, 60))  { return "Przerwe!|J. Niemiecki"; }
			else if (isBetween(hour, minute, 10, 0, 25))  { return "J. Niemiecki|J. Niemiecki"; }
			else if (isBetween(hour, minute, 10, 26, 30)) { return "Przerwe!|J. Niemiecki"; }
			else if (isBetween(hour, minute, 10, 30, 55)) { return "J. Niemiecki|Historia"; }
			else if (isBetween(hour, minute, 11, 56, 60)) { return "Przerwe!|Historia"; }
			else if (isBetween(hour, minute, 11, 0, 25))  { return "Historie|basen xDD"; }
			else if (isBetween(hour, minute, 11, 26, 30)) { return "Przerwe!|basen xDD"; }
			else if (isBetween(hour, minute, 11, 30, 55)) { return "WF (basen) (XD)|basen xDD"; }
			else if (isBetween(hour, minute, 11, 56, 60)) { return "Przerwe!|basen XDD"; }
			else if (isBetween(hour, minute, 12, 0, 25))  { return "WF (basen) (XD)|Koniec"; }
			return "Skonczyly sie juz dzisiaj lekcje!|Nie ma";
			break;
		case 5:
			if (isBetween(hour, minute, 8, 30, 55)) 	  { return "HTML|HTML"; }
			else if (isBetween(hour, minute, 8, 56, 60))  { return "Przerwe!|HTML"; }
			else if (isBetween(hour, minute, 9, 0, 25))   { return "HTML|HTML"; }
			else if (isBetween(hour, minute, 9, 26, 30))  { return "Przerwe!|HTML"; }
			else if (isBetween(hour, minute, 9, 30, 55))  { return "HTML|Historia"; }
			else if (isBetween(hour, minute, 9, 56, 60))  { return "Przerwe!|Historia"; }
			else if (isBetween(hour, minute, 10, 0, 25))  { return "Historie|J. Angielski"; }
			else if (isBetween(hour, minute, 10, 26, 30)) { return "Przerwe!|J. Angielski"; }
			else if (isBetween(hour, minute, 10, 30, 55)) { return "J. Angielski|Koniec"; }
			return "Skonczyly sie juz dzisiaj lekcje!|Nie ma";
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
		.setFooter("https://github.com/inxaneninja/inxanebot");
	channel.send(errorEmbed);
}
client.on("message", async message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) !== 0) return;
	const args = message.content.slice(config.prefix.length).trim().split(' ');
	const command = args.shift().toLowerCase();
	console.log(`${message.author.tag} -> ${message}`); //
	if (command == "lekcja") {
		var date = new Date();
		var result = getLesson(date.getDay(), date.getHours(), date.getMinutes()).split('|');
		const lekcjaEmbed = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle("Jaka jest lekcja?")
			.addField("Mamy teraz:", result[0])
			.addField("Nastepna lekcja:", result[1])
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(lekcjaEmbed);
		return;
	} else if (command === "help") {
		const helpEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle("Senpai-sama! C-chcesz zobaczyc moje komendy~?")
			.addField("Wiadomosc wyslana!", "Zobacz swoje wiadomosci, wyslalam ci je uwu")
			.setFooter("https://github.com/inxaneninja/inxanebot");
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
			.setFooter("https://github.com/inxaneninja/inxanebot");
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
			.setFooter("https://github.com/inxaneninja/inxanebot");
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
			.setFooter("https://github.com/inxaneninja/inxanebot")
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
			.setFooter("https://github.com/inxaneninja/inxanebot");
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
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(avatarEmbed);
		return;
	} else if (command === "penis") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		switch (message.mentions.members.first().user.id) {
			case config.ownerID:
				var result = "70km";
				break;
			case config.people.karolina:
				var result = "Penis nie znaleziony. Spróbuj ponownie!";
				break;
			case config.botID:
				var result = "HEJ! TO JEST NIEPOPRAWNE! ZBOCZENIEC! HENTAI HENTAI! BAKA!";
				break;
			default:
				var result = Math.floor(Math.random()*20) + "cm!";
				break;
		}
		const penisEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle("Skanowanie wielkości penisa zakończone!")
			.addField(`Wielkość penisa użytkownika ${message.mentions.members.first().user.tag}:`, `${result}`)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(penisEmbed);
		return;
	} else if (command === "restart") {
		if (message.author.id == config.ownerID) {
			const restartEmbed = new Discord.RichEmbed()
				.setColor(embedColor)
				.setTitle("Bravo six, going dark...")
				.addField("Restartowanie w toku...", "Zrobie drzemke i wracam, ok? Prosze nie idzcie sobie~! :(")
				.setFooter("https://github.com/inxaneninja/inxanebot");
			message.channel.send(restartEmbed);
			setTimeout(() => {
				process.exit(0);
			}, 3000);
			return;
		} else {
			sendError(message.channel, "Co ty probujesz zrobic co!? Co ty sobie myslisz!");
			return;
		}
	} else if (command === "kiss") {
		if (message.mentions.members.first() == undefined) {
			sendError("Musisz zapingować osobę!");
			return;
		}
		var kissGifs = ["https://giphy.com/gifs/sword-art-online-anime-kiss-nyGFcsP0kAobm",
						"https://giphy.com/gifs/love-kiss-bm2O3nXTcKJeU",
						"https://giphy.com/gifs/anime-couple-11rWoZNpAKw8w",
						"https://giphy.com/gifs/love-kiss-CzCi6itPr3yBa",
						"https://giphy.com/gifs/kiss-guilty-crown-XZYxeRlIEdmKI",
						"https://tenor.com/view/golden-time-anime-kiss-couple-lovers-gif-6155670",
						"https://tenor.com/view/anime-ano-natsu-de-matteru-gif-9670722",
						"https://tenor.com/view/love-anime-kiss-nuzzle-cute-gif-12873196",
						"https://tenor.com/view/anime-zero-kiss-couple-lover-gif-12925177",
						"https://tenor.com/view/cheek-kiss-anime-cute-gif-15150255"];
		var randomKiss = kissGifs[Math.round(Math.random() * (kissGifs.length-1))];
		const kissEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} kisses ${message.mentions.members.first().user.tag}`)
			.setImage(randomKiss)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(kissEmbed);
		return;
	} else if (command === "hug") {
		if (message.mentions.members.first() == undefined) {
			sendError("Musisz zapingować osobę!");
			return;
		}
		var hugGifs = [ "https://tenor.com/view/watashinitenshigamaiorita-anime-hug-wataten-gif-13366388",
						"https://tenor.com/view/anime-hug-its-ok-gif-13041472",
						"https://tenor.com/view/seraph-love-hug-hugging-anime-gif-4900166",
						"https://tenor.com/view/anime-hug-love-hug-gif-13925386",
						"https://tenor.com/view/anime-hug-sweet-love-gif-14246498",
						"https://giphy.com/gifs/animated-girls-C4gbG94zAjyYE",
						"https://giphy.com/gifs/hug-intense-noucome-pXQhWw2oHoPIs",
						"https://giphy.com/gifs/hug-sleep-sleeping-BXrwTdoho6hkQ",
						"https://giphy.com/gifs/love-sad-qscdhWs5o3yb6",
						"https://giphy.com/gifs/PHZ7v9tfQu0o0"];
		var randomHug = hugGifs[Math.round(Math.random() * (hugGifs.length-1))];
		const hugEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} hugs ${message.mentions.members.first().user.tag}`)
			.setImage(randomHug)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(hugEmbed);
		return;
	} else if (command === "kick") {
		if (message.mentions.members.first() == undefined) {
			sendError("Musisz zapingować osobę!");
			return;
		}
		var kickGifs = ["https://tenor.com/view/kick-funny-anime-fly-cartoon-gif-4922649",
						"https://tenor.com/view/gajeel-lucy-fairy-tail-anime-kick-gif-16419384",
						"https://tenor.com/view/anime-kick-fight-gif-15460532",
						"https://tenor.com/view/sasuke-uchiha-kakashi-hatake-fight-anime-kick-gif-16767285",
						"https://tenor.com/view/gintama-anime-kick-gif-10584236https://tenor.com/view/gintama-anime-kick-gif-10584236",
						"https://tenor.com/view/anime-kick-naruto-gif-12822445",
						"https://tenor.com/view/kick-anime-kick-balls-explode-crushed-gif-15974215",
						"https://tenor.com/view/pandora-hearts-anime-kick-mad-angry-gif-5738223",
						"https://tenor.com/view/jormungand-anime-koko-hekmatyar-kick-gif-15958808",
						"https://tenor.com/view/maria-osawa-canaan-428the-animation-428shibuya-scramble-alphard-al-sheya-gif-16939795"];
		var randomKick = kickGifs[Math.round(Math.random() * (kickGifs.length-1))];
		const kickEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} kicks ${message.mentions.members.first().user.tag}`)
			.setImage(randomKick)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(kickEmbed);
		return;
	} else if (command === "poke") {
		if (message.mentions.members.first() == undefined) {
			sendError("Musisz zapingować osobę!");
			return;
		}
		var pokeGifs = ["https://tenor.com/view/anime-poke-wake-up-gif-12396068",
						"https://tenor.com/view/bite-anime-poke-gif-12045584",
						"https://tenor.com/view/anime-poke-kobayashi-dragon-maid-gif-14346763",
						"https://tenor.com/view/anime-poke-poke-face-gif-12011027",
						"https://tenor.com/view/boop-nose-anime-gif-6287077",
						"https://tenor.com/view/fight-anime-poke-ouch-gif-11956062",
						"https://tenor.com/view/testament-of-sister-new-devil-shinmai-maou-no-testament-basara-anime-poke-gif-13054528",
						"https://tenor.com/view/poke-annoying-gif-8488169",
						"https://tenor.com/view/poke-trick-hi-hello-annoy-gif-14134415",
						"https://tenor.com/view/anime-fuko-ibuki-clannad-hey-you-gif-14835795"];
		var randomPoke = pokeGifs[Math.round(Math.random() * (pokeGifs.length-1))];
		const pokeEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} pokes ${message.mentions.members.first().user.tag}`)
			.setImage(randomPoke)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(pokeEmbed);
		return;
	} else if (command === "smug") {
		var smugGifs = ["https://tenor.com/view/smug-nikaido-saki-zombie-land-saga-nikaido-anime-gif-14210719",
						"https://tenor.com/view/wataten-cute-smug-anime-gif-13940350",
						"https://tenor.com/view/satania-anime-gif-10120660",
						"https://tenor.com/view/smug-anime-face-blushing-gif-14495461",
						"https://tenor.com/view/smug-anime-face-gif-13598614",
						"https://tenor.com/view/anime-konosuba-smirk-aqua-gif-13820031",
						"https://tenor.com/view/haikyuu-kei-smug-smirk-huh-gif-4990978",
						"https://tenor.com/view/smug-overlord-anime-sinister-smile-gif-14770509",
						"https://tenor.com/view/shrug-smug-smile-miss-kobayashi-kobayashisan-chi-no-maid-dragon-gif-13119038",
						"https://tenor.com/view/anime-eyebrow-looky-whoa-mama-gif-10358099"];
		var randomSmug = smugGifs[Math.round(Math.random() * (smugGifs.length-1))];
		const smugEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} smugs *-0`)
			.setImage(randomSmug)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(smugEmbed);
		return;
	}
	const badCommand = new Discord.RichEmbed()
		.setColor(embedColor)
		.setTitle("Senpai... Sumimasen~!!!!!")
		.addField("Nieznana komenda", "Przperaszam cię senpai, ale nie mam takiej komendy! :sad_face:");
	message.channel.send(badCommand);
	return;
});
client.login(process.env.BOT_TOKEN);
