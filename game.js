"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const configuration_1 = require("./configuration");
class Game {
    constructor(json) {
        this.id = json._id;
        this.slug = json.slug;
        this.name = json.name;
        this.status = json.status;
        this.host = json.host;
        this.winner = json.winner;
        this.startDate = new Date(json.startDate);
        this.numOfPlayers = json.numOfPlayers;
        this.isPrivate = json.isPrivate;
        this.invitees = json.invitees;
        this.gameMode = json.gameMode;
        this.turnMode = json.turnMode;
        this.turnLength = json.turnLength;
        this.turnTimer = new Date(json.turnTimer);
        this.gameDate = new Date(json.gameDate);
        this.turnOrder = json.turnOrder;
        this.resigned = json.resigned;
        this.location = json.location;
        this.fog = json.fog;
        this.tsunamiWarning = json.tsunamiWarning;
        this.ratings = json.ratings;
        this.turn = json.turn;
        this.players = json.players;
        this.market = json.market;
        this.fish = json.fish;
        this.weather = json.weather;
        this.board = json.board;
        this.news = this.parseNews(json.news);
        this.radio = this.parseRadio(json.radio);
        this.stats = json.stats;
    }
    get displayStartDate() {
        return moment(this.startDate).format('MM/DD/YYYY');
    }
    get displayGameDate() {
        return moment(this.gameDate).format('MM/DD/YYYY');
    }
    get displayLocation() {
        const location = configuration_1.config.locations[this.location];
        return location.label || '';
    }
    get vesselNames() {
        let names = [];
        for (var username in this.players) {
            names.push(this.players[username].vessel);
        }
        return names;
    }
    parseNews(json) {
        if (!json) {
            return [];
        }
        return json.map((item) => {
            return {
                for: item.for,
                message: item.message,
                date: new Date(item.date)
            };
        });
    }
    parseRadio(json) {
        if (!json) {
            return [];
        }
        return json.map((item) => {
            return {
                from: item.from,
                message: item.message,
                date: new Date(item.date)
            };
        });
    }
    isHost(player) {
        let username = player;
        if (typeof player === "object") {
            username = player.username;
        }
        return username === this.host;
    }
    isInGame(player) {
        let username = player;
        if (typeof player === "object") {
            username = player.username;
        }
        return this.players[username] !== undefined;
    }
    availableColors(player) {
        let username = player;
        if (typeof player === "object") {
            username = player.username;
        }
        let taken = [];
        let available = {};
        for (let u in this.players) {
            if (u === username) {
                continue;
            }
            taken.push(this.players[u].color);
        }
        for (let hex in configuration_1.config.colors) {
            if (taken.indexOf(hex) !== -1) {
                continue;
            }
            available[hex] = configuration_1.config.colors[hex];
        }
        return available;
    }
}
exports.Game = Game;
//# sourceMappingURL=game.js.map