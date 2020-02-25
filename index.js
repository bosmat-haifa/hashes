const fs = require("fs");
const express = require("express");
const app = express();

var request = require('request');
var url ='http://requestbin.net/ip'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname+"/index.html");
});

// app.get("/api/data", (req, res) => {
//     var data = fs.readFileSync("./database.json", "utf-8");
//     var content = JSON.parse(data);
//     var hashes = content["hashes"];
//     var hash = hashes[Math.floor(Math.random() * hashes.length)];
//     var used = content["used"];
//     var innocent = true;
//     res.json(content);
// });

app.get("/favicon.ico", (req, res) => {
    res.end();
});

app.listen(process.env.PORT || 8080, () => {console.log(`running on port ${process.env.PORT || 8080}`)});


/*
{
    "hashes": ["T3chN10nI5oUrFr13nd", "1nT3LW0rk5W1thU5", "W3L0vEcYb3r", "y0uR3LuCkY", "t1M3I5t1ck1ng", "c0mPUt3rI50uR1if3", "W3Als0RUL3", "wEW1lLH3lPy0U", "tH1sI5tH3FUTUR3", "r3M3mBErTH1s"]
}
*/

// every time that someone is joining the site it needs to remove the hash from the database and remember his ip to not let him join a different hash


/* 
{
    "hashes": [
        "tH1sI5tH3FUTUR3",
        "r3M3mBErTH1s",
        "1nT3LW0rk5W1thU5",
        "W3Als0RUL3",
        "wEW1lLH3lPy0U",
        "y0uR3LuCkY",
        "T3chN10nI5oUrFr13nd",
        "t1M3I5t1ck1ng",
        "W3L0vEcYb3r",
        "c0mPUt3rI50uR1if3"
    ],
    "used": []
}
*/