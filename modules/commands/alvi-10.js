const fs = require("fs");
module.exports.config = {
	name: "npxlove1099",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "🥰",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("👨‍👨‍👧‍👧")==0 || event.body.indexOf("👩‍⚕️")==0 || event.body.indexOf("🧑‍🦳")==0 || event.body.indexOf("👨‍🚒")==0 || event.body.indexOf("🤕")==0 || event.body.indexOf("🤐")==0 || event.body.indexOf("👄")==0 ||
event.body.indexOf("🤲")==0 || event.body.indexOf("🫶")==0) {
		var msg = {
				body:"আমি মানুষ হিসেবে এতোটাই ফ্লেক্সিবল যে ধরুন আপনার মনে হলো যে আপনি আমার সাথে একটা দূরত্ব তৈরি করতে চান। তাহলে আপনাকে বেশি কিছু করতে হবে না জাস্ট আপনার  আচরণের মাধ্যমে একটা ইংগিত দিন। একবার জাস্ট আমার মনে হোক যে আপনি আমাকে ইগনোর করলেন সম্ভবত। এরপর দেখবেন আপনি নিজেও লাগাতার চেষ্টা করে আমাকে মনে করাতে পারবে না যে আমি আপনাকে কখনো চিনতাম। আসলেই আমার আর আপনার নাম পরিচয় সম্পর্ক  কিছুই মনে থাকবে না। আমার মন থেকে একবার উঠে যাওয়ার যে ব্যাপারটা আসলেই ভয়ংকর 🌸🤍",
				attachment: fs.createReadStream(__dirname + `/noprefix/music8.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🧜‍♂️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }