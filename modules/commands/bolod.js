const fs = require("fs");
module.exports.config = {
	name: "কই",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "কই",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Koi")==0 || event.body.indexOf("koi")==0 || event.body.indexOf("কই")==0 || 
event.body.indexOf("Sobai")==0 ||    event.body.indexOf("@Everyone")==0 ||  event.body.indexOf("sobai")==0 ||    event.body.indexOf("সবাই")==0 ||  event.body.indexOf("@everyone")==0) {
		var msg = {
				body: "বলদ সবাইকে ডাকার কি আছে আমি কি তোমাকে পাট খেতে নিয়ে যাচ্ছি নাকি-🙄😏",
				attachment: fs.createReadStream(__dirname + `/noprefix/bolod.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😦", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

      }