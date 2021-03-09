const mysql = require("mysql");
const config = require("./config.json");
const players = require('./players.json');

var con = mysql.createConnection(config.db);

con.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected to database as id ' + con.threadId);

    for(var i = 0; i < players.players.length; i++) {
        console.log(players.players[i].name);
        var player = players.players[i];
        con.query(`INSERT INTO DKCoins_players (ID, uuid, name, color, firstLogin, lastLogin, coins) VALUES (${player.id}, '${player.uuid}', '${player.name}', '${player.color}', '${player.firstLogin}', '${player.lastLogin}', ${player.coins});`);
    }
});

