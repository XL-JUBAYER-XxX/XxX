const fs = require("fs");
module.exports.config = {
	name: "😏",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Tutul",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("😼")==0 || event.body.indexOf("😏")==0 || event.body.indexOf("😎")==0 || event.body.indexOf("😏")==0) {
		var msg = {
				body: "বাবারে বাবা কি মুখ মচুরায় মুক্ত ভাইঙ্গা যাইবো না ভাঙলে আমি উষ্টা মাইরা ভাইঙ্গা ফালামু-!!😹🤣",
}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤣", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }