const fs = require("fs");
module.exports.config = {
name: "..",
version: "1.0.1",
hasPermssion: 0,
credits: "VanHung - Fixed by LTD",
description: "hihihihi",
commandCategory: "no prefix",
usages: "ALVI",
cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
if (event.body.indexOf("🧐")==0 ||
event.body.indexOf("🤨")==0 ||
event.body.indexOf("😒")==0) {
var msg = {
body: "কি্ঁ গো্ঁ জা্ৃন্ঁ এ্ঁই্ঁভা্ঁবে্ঁ কি্ঁ দে্ঁখো্ঁ-!😻",
attachment: fs.createReadStream(__dirname + `/noprefix/Op2.mp3`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("😻", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}