const fs = require("fs");
module.exports.config = {
name: "😹",
version: "1.0.1",
hasPermssion: 0,
credits: "VanHung - Fixed by LTD",
description: "hihihihi",
commandCategory: "no prefix",
usages: "simanto",
cooldowns: 5,
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
var { threadID, messageID } = event;
if (event.body.indexOf("😆")==0 || event.body.indexOf("🤣")==0 || event.body.indexOf("😂")==0 ||
event.body.indexOf("😸")==0 ||
event.body.indexOf("😁")==0 ||
event.body.indexOf("😃")==0 ||
event.body.indexOf("😄")==0 ||
event.body.indexOf("😹")==0) {
var msg = {
body: "ও্ঁরে্ঁ কি্ঁ সু্ঁন্দ্ঁর্ঁ হা্ঁসি্ঁ রে্ঁ আ্ঁমি্ঁতো্ঁ প্রে্ঁমে্ঁ প্ঁড়ে্ঁ যা্ঁবো্ঁ-!!😹",
attachment: fs.createReadStream(__dirname + `/noprefix/Op12.mp3`)
}
api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("😹", event.messageID, (err) => {}, true)
}
}
module.exports.run = function({ api, event, client, __GLOBAL }) {

}