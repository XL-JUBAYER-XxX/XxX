const fs = require("fs");
module.exports.config = {
	name: "npxs41",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "borsha", 
	description: "hihihihihi",
	commandCategory: "no prefix",
	usages: "npxs41",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Borsha")==0 || 
event.body.indexOf("borsha")==0) {
		var msg = {
				body: "🌼⊱༊ 𝐌𝐘 𝐃𝐞𝐚𝐫 𝐁𝐞𝐬𝐭༅༎ ❥𝐁𝐨𝐫𝐬𝐡𝐚ᰔᩚ༊𝐁𝐞𝐬𝐭༅༎𝐟𝐫𝐢𝐞𝐧𝐝🌼⊱༊𝐁𝐞𝐬𝐭༅༎𝐟𝐫𝐢𝐞𝐧𝐝༅༎তো༅༎সেই༅༎যে༅༎আপন༅༎ভেবে༅༎আদর༅༎করবে༅༎༊⊰😁🥀🌼⊱༊𝐁𝐞𝐬𝐭༅༎𝐟𝐫𝐢𝐞𝐧𝐝༅༎তো༅༎সেই༅༎যে༅༎সবসময়༅༎শাসন༅༎করবে༅༎༊⊰😊🥀🌼⊱༊𝐁𝐞𝐬𝐭༅༎𝐟𝐫𝐢𝐞𝐧𝐝༅༎তো༅༎সেই༅༎যে༅༎আমার༅༎একটু༅༎কষ্টতেই༅༎ব্যাথা༅༎অনুভব ༅༎করবে༅༎༊⊰😞🥀🌼⊱༊𝐁𝐞𝐬𝐭༅༎𝐟𝐫𝐢𝐞𝐧𝐝༅༎তো༅༎সেই༅༎যে༅༎শুধু༅༎আমাকেই༅༎𝐁𝐞𝐬𝐭༅༎𝐟𝐫𝐢𝐞𝐧𝐝༅༎বানিয়ে༅༎ রাখবে༅༎༊⊰😏🥀🌼⊱༊༅𝐁𝐞𝐬𝐭༎𝐟𝐫𝐢𝐞𝐧𝐝༅༎তো༅༎সেই༅༎যার༅༎কাছে༅༎আমি༅༎তার༅༎কলিজা༅༎༊⊰🥰🥀🌼⊱༊𝐁𝐞𝐬𝐭༅༎𝐟𝐫𝐢𝐞𝐧𝐝༅༎তো༅༎সেই༅༎যাকে༅༎ছাড়া༅༎এক༅༎মূহূর্ত༅༎ভালো༅༎লাগে༅༎নাহ্༅༎༊⊰😞🥀🌼⊱༊𝐁𝐞𝐬𝐭༅༎𝐟𝐫𝐢𝐞𝐧𝐝༅༎তো༅༎সেই༅༎যার༅༎কাছে༅༎সবকিছু༅༎𝐒𝐡𝐚𝐫𝐞༅༎করা༅༎যায়༅༎༊⊰😚🥀🌼⊱༊একটাই༅༎অনুরোধ༅༎সারা༅༎জীবন༅༎বন্ধুত্বটাকে༅༎বাঁচিয়ে༅༎রাখিস༅༎༊⊰🤗🥀🌼⊱༊খুব༅༎ভালোবাসি༅༎তোকে༅༎কলিজা༅༎❥𝐁𝐨𝐫𝐬𝐡𝐚ᰔᩚ༊⊰❤️😽🥀...!!😔💔🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/npxs10.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }