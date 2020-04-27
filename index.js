require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const embedColor = config.embedColor;
function isBetween(hour, minute, targetHour, targetMinuteX, targetMinuteY) {
	return (hour == targetHour && minute >= targetMinuteX && minute < targetMinuteY);
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
		.addField("Myslisz ze to bug w bocie?", "Otworz nowy Problem na githubie z informacjami!")
		.setFooter("https://github.com/inxaneninja/inxanebot");
	channel.send(errorEmbed);
}
client.on("message", async message => {
	if (message.author.bot) return;
	if (message.content.indexOf(config.prefix) != 0) return;
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
	} else if (command == "help") {
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
				+ "\`+poke @osoba\` - :anime_poke:\n"
				+ "\`+smug\` - :anime_smug:\n"
				+ "\`+hug @osoba\` - :anime_hug:\n"
				+ "\`+kiss @osoba\` - :anime_kiss:\n"
				+ "\`+kick @osoba\` - :anime_kick:\n"
				+ "\`+avatar @osoba\` - link do avataru osoby\n"
				+ "\`+penis @osoba\` - pokazuje wielkosc penisa @osoby\n"
				+ "\`+deathnote @osoba\` - zapisuje @osobe do death nota\n"
			 	+ "\`+kill @osoba\` - zabija @osobe")
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.author.send(commandsEmbed);
		return;
	} else if (command == "roll") {
		if (args.length < 1) {
			sendError(message.channel, "Hmm, musisz podac maksymalna liczbe!");
			return;
		}
		if (parseInt(args[0]) > 0 && parseInt(args[0]) > 1000000) {
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
	} else if (command == "8ball") {
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
	} else if (command == "pat") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		var gifs = ["https://thumbs.gfycat.com/SaltySpitefulIrishdraughthorse-small.gif",
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
		var randomGif = gifs[Math.round(Math.random() * (gifs.length-1))];
		const gifEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} pats ${message.mentions.members.first().user.tag}`)
			.setImage(randomGif)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(gifEmbed);
		return;
	} else if (command == "avatar") {
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
	} else if (command == "penis") {
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
	} else if (command == "restart") {
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
	} else if (command == "kiss") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		var gifs = ["https://media1.tenor.com/images/c263375bf2b35ed931edf05c8694910d/tenor.gif?itemid=15111557",
						"https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",
						"https://i.imgur.com/sGVgr74.gif",
						"https://media.giphy.com/media/bm2O3nXTcKJeU/giphy.gif",
						"https://media1.tenor.com/images/f03f245e14fdfcacaf06318cdc667a03/tenor.gif?itemid=15111568",
						"https://cutewallpaper.org/21/yuri-anime-kiss/Yuri-kiss-GIFs-Get-the-best-GIF-on-GIPHY.gif",
						"https://66.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif",
						"https://thumbs.gfycat.com/FailingGrimyGar-size_restricted.gif",
						"https://cutewallpaper.org/21/anime-kiss-girl/Top-20-Most-Passionate-Anime-Kiss-Scenes-MyAnimeList.net.gif"];
		var randomGif = gifs[Math.round(Math.random() * (gifs.length-1))];
		const gifEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} kisses ${message.mentions.members.first().user.tag}`)
			.setImage(randomGif)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(gifEmbed);
		return;
	} else if (command == "hug") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		var gifs = [ "https://i.pinimg.com/originals/85/dc/ef/85dcef131af84b515106955e142df54e.gif",
						"https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif",
						"https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif",
						"https://i.imgur.com/r9aU2xv.gif",
						"https://66.media.tumblr.com/680b69563aceba3df48b4483d007bce3/tumblr_mxre7hEX4h1sc1kfto1_500.gif",
						"https://media.giphy.com/media/wnsgren9NtITS/giphy.gif",
						"https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
						"https://66.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif",
						"https://gifimage.net/wp-content/uploads/2018/10/anime-hug-gif-love-2.gif",
						"https://i.imgur.com/XEs1SWQ.gif"];
		var randomGif = gifs[Math.round(Math.random() * (gifs.length-1))];
		const gifEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} hugs ${message.mentions.members.first().user.tag}`)
			.setImage(randomGif)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(gifEmbed);
		return;
	} else if (command == "kick") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		var gifs = ["https://i.pinimg.com/originals/03/f2/1c/03f21c53485d52c1f2f6401a6189f479.gif",
						"https://media.giphy.com/media/wOly8pa4s4W88/giphy.gif",
						"https://media.giphy.com/media/u2LJ0n4lx6jF6/giphy.gif",
						"https://media1.tenor.com/images/d4bd24c980e46c66f67077aff59f0565/tenor.gif?itemid=13098645",
						"https://thumbs.gfycat.com/DistantKindlyEarwig-size_restricted.gif",
						"https://i.gifer.com/C6Of.gif",
						"https://data.whicdn.com/images/318687183/original.gif",
						"https://2.bp.blogspot.com/-58a9DDQ9bfc/WIZzChNFw0I/AAAAAAAAt5s/yIHCOiaFWngmaV7Uw27XeHdApdxVaz4jwCPcB/s1600/Omake%2BGif%2BAnime%2B-%2BGabriel%2BDropOut%2B-%2BEpisode%2B3%2B-%2BGab%2BKicks%2BSatania.gif",
						"https://66.media.tumblr.com/ceb700b9939c52a73a4566791811d1be/tumblr_n8ietuNUQq1tg3a8ao1_500.gif"];
		var randomGif = gifs[Math.round(Math.random() * (gifs.length-1))];
		const gifEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} kicks ${message.mentions.members.first().user.tag}`)
			.setImage(randomGif)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(gifEmbed);
		return;
	} else if (command == "poke") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		var gifs = ["https://media1.tenor.com/images/1a64ac660387543c5b779ba1d7da2c9e/tenor.gif?itemid=12396068",
						"https://i.gifer.com/SKql.gif",
						"https://i.imgur.com/It4Mk9z.gif",
						"https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-4.gif",
						"https://gifimage.net/wp-content/uploads/2017/09/anime-poke-gif-9.gif",
						"https://media1.tenor.com/images/3b9cffb5b30236f678fdccf442006a43/tenor.gif?itemid=7739077",
						"https://thumbs.gfycat.com/EnlightenedInferiorAfricanaugurbuzzard-size_restricted.gif",
						"https://media.giphy.com/media/pWd3gD577gOqs/giphy.gif",
						"https://66.media.tumblr.com/0809478d6759a0a4b431755026f677a0/tumblr_ntpfvoxeoz1u03j02o1_500.gif",
						"https://i.imgur.com/0NiK25x.gif"];
		var randomGif = gifs[Math.round(Math.random() * (gifs.length-1))];
		const gifEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} pokes ${message.mentions.members.first().user.tag}`)
			.setImage(randomGif)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(gifEmbed);
		return;
	} else if (command == "smug") {
		var gifs = ["https://media1.tenor.com/images/ca9adeb8e53c5fa7e3c705ea60df2f14/tenor.gif?itemid=15157933",
						"https://thumbs.gfycat.com/TalkativePortlyEel-size_restricted.gif",
						"https://i.pinimg.com/originals/70/cc/98/70cc98296034768f8eee9ad124827ba2.gif",
						"https://media1.tenor.com/images/5067364ff9525612c0e6bbfc4233b2ba/tenor.gif?itemid=9780001",
						"https://thumbs.gfycat.com/FirsthandShabbyLeopardseal-size_restricted.gif",
						"https://thumbs.gfycat.com/GlaringSimplisticFinch-size_restricted.gif",
						"https://pa1.narvii.com/6816/e097d58381f6f3dcc6eaf3326a132e3f339f17d9_hq.gif",
						"https://i.kym-cdn.com/photos/images/newsfeed/000/522/656/3c7.gif",
						"https://pa1.narvii.com/6292/ace0c38d8a5afaddacc024e229db2210ec93b5d6_00.gif"];
		var randomGif = gifs[Math.round(Math.random() * (gifs.length-1))];
		const gifEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} smugs uwu`)
			.setImage(randomGif)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(gifEmbed);
		return;
	} else if (command == "deathnote") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		const gifEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} writes ${message.mentions.members.first().user.tag}'s name in the death note!`)
			.setImage("https://thumbs.gfycat.com/HarmlessClumsyJohndory-size_restricted.gif")
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(gifEmbed);
		return;
	} else if (command == "kill") {
		if (message.mentions.members.first() == undefined) {
			sendError(message.channel, "Musisz zapingować osobę!");
			return;
		}
		var gifs = ["https://media1.tenor.com/images/46051e203deaefc5642916c1eafa54a7/tenor.gif?itemid=3660367",
						"https://media1.tenor.com/images/f84b0d69cf0a5adee4f2a261f4fb4dee/tenor.gif?itemid=8662749",
						"https://thumbs.gfycat.com/ClassicSpectacularDoe-small.gif",
						"https://i.pinimg.com/originals/fc/94/d2/fc94d27983c256f2d77e4b9f7bf4c857.gif",
						"https://24.media.tumblr.com/8d7c4830a9b756340dd8cd6ce6f010a7/tumblr_mqz1brT26S1sv9dq6o1_500.gif",
						"https://pa1.narvii.com/5698/2a90fee66370cb5b5fd7cd9e11c68bc3214059fd_hq.gif",
						"https://i.gifer.com/Ni7m.gif"];
		var randomGif = gifs[Math.round(Math.random() * (gifs.length-1))];
		const gifEmbed = new Discord.RichEmbed()
			.setColor(embedColor)
			.setTitle(`${message.author.tag} kills ${message.mentions.members.first().user.tag}`)
			.setImage(randomGif)
			.setFooter("https://github.com/inxaneninja/inxanebot");
		message.channel.send(gifEmbed);
		return;
	}

	const badCommand = new Discord.RichEmbed()
		.setColor(embedColor)
		.setTitle("Senpai... Sumimasen~!!!!!")
		.addField("Nieznana komenda", "Przperaszam cię senpai, ale nie mam takiej komendy! :sad_face:")
		.addField("Myslisz ze to bug w bocie?", "Otworz nowy Problem na githubie z informacjami!")
		.setFooter("https://github.com/inxaneninja/inxanebot");
	message.channel.send(badCommand);
	return;
});
client.login(process.env.BOT_TOKEN);
