const fs = require("fs");
module.exports.config = {
	name: "😵‍💫",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "😵‍💫",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("💞")==0 || event.body.indexOf("💕")==0 || event.body.indexOf("💚")==0 || event.body.indexOf("prem")==0) {
		var msg = {
				body: "🖤🥀\n\nআস্সালামু আলাইকুম❤️‍🔥\n\nভালোবাসা নিয়ে ছটো কথা 🥰\n\n-\n\n🌺༅•─༅𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍༅─•༅🌺",
				attachment: fs.createReadStream(__dirname + `/noprefix/voicearifvau.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }