module.exports.config = {
  name: "goiadmin",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "ZyrosGenZ-fixbyDungUwU",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61550121814016","61550121814016","100090087850647") {
    var aid = ["100090087850647","100090087850647","61550121814016"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["বস, 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 সিংগেল পোলা তাকে একটা গফ দেও-🙊🙆‍♂️🥱","আমার বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে আর একবার মেনশন দিলে তোমার নাকের মধ্যে ঘুষি মারমু-👊😡😈","বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে আর একবার মেনশন দিলে খবর আছে তোমার-👿,তোমাকে কিন্তু ঘুষি মারমু 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 কে মেনশন দিবা না-🤛🤛😈👿","বস 𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এখন অনেক বিজি তাকে মেনশন দিয়ে ডিস্টার্ব কইরো না-🥰😍😏","বস,𝐑𝐉 𝐅𝐀𝐑𝐇𝐀𝐍 এখন অনেক বিজি আমার বস'রে কিছু বলার থাকলে আমারে বলো-😍😇🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }