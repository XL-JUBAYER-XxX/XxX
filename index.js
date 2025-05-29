const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const express = require('express');
const axios = require("axios");
const logger = require("./utils/log");

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () =>
	logger(`Your app is listening at http://localhost:${port}`, "[ SERVER ]")
);

app.get('/', (req, res) => 
    res.sendFile(__dirname + '/includes/controllers/index.html')
);

function startBot(message) {
    if (message) logger(message, "[ Starting ]");

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    global.countRestart = global.countRestart || 0;

    child.on("close", (codeExit) => {
        if (codeExit != 0 && global.countRestart < 5) {
            global.countRestart += 1;
            startBot("Restarting...");
        }
    });

    child.on("error", (error) => {
        logger("An error occurred: " + JSON.stringify(error), "[ Error ]");
    });
}

axios.get("https://github.com/XL-JUBAYER-XxX/XxX/blob/main/package.json")
  .then((res) => {
    logger("Version: " + res.data.version, "[ VERSION ]");
    logger(res.data.description, "[ DESCRIPTION ]");
  })
  .catch((err) => logger("Could not fetch version info", "[ VERSION ]"));

startBot();
