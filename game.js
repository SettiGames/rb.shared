"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const configuration_1 = require("./configuration");
class Game {
    constructor(json) {
        this.parse(json);
    }
    get fish() {
        return configuration_1.config.locations[this.location].fish;
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
    parse(json) {
        if (json.slug)
            this.slug = json.slug;
        if (json.name)
            this.name = json.name;
        if (json.status)
            this.status = json.status;
        if (json.host)
            this.host = json.host;
        if (json.winner)
            this.winner = json.winner;
        if (json.startDate)
            this.startDate = new Date(json.startDate);
        if (json.numOfPlayers)
            this.numOfPlayers = json.numOfPlayers;
        if (json.isPrivate !== undefined)
            this.isPrivate = json.isPrivate;
        if (json.isRadioEnabled !== undefined)
            this.isRadioEnabled = json.isRadioEnabled;
        if (json.invitees)
            this.invitees = json.invitees;
        if (json.turnLength)
            this.turnLength = json.turnLength;
        if (json.turnTimer)
            this.turnTimer = new Date(json.turnTimer);
        if (json.gameDate)
            this.gameDate = new Date(json.gameDate);
        if (json.turnOrder)
            this.turnOrder = json.turnOrder;
        if (json.resigned)
            this.resigned = json.resigned;
        if (json.location)
            this.location = json.location;
        if (json.fog !== undefined)
            this.fog = json.fog;
        if (json.tsunamiWarning !== undefined)
            this.tsunamiWarning = json.tsunamiWarning;
        if (json.turn)
            this.turn = json.turn;
        if (json.players)
            this.players = json.players;
        if (json.market)
            this.market = json.market;
        if (json.weather)
            this.weather = json.weather;
        if (json.board)
            this.board = json.board;
        if (json.news)
            this.news = this.parseNews(json.news);
        if (json.stats)
            this.stats = json.stats;
        if (json.comm)
            this.comm = json.comm;
        if (json.adjacents)
            this.adjacents = json.adjacents;
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