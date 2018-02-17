"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var configs_1 = require("./../configs");
var Game = (function () {
    function Game(json) {
        if (!json) {
            return;
        }
        this.parse(json);
    }
    Object.defineProperty(Game.prototype, "fish", {
        get: function () {
            return configs_1.config.locations[this.location].fish;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "displayStartDate", {
        get: function () {
            return moment(this.startDate).format('MM/DD/YYYY');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "displayGameDate", {
        get: function () {
            return moment(this.gameDate).format('MM/DD/YYYY');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "displayLocation", {
        get: function () {
            var location = configs_1.config.locations[this.location];
            return location.label || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "vesselNames", {
        get: function () {
            var names = [];
            for (var username in this.players) {
                names.push(this.players[username].vessel.name);
            }
            return names;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.parse = function (json) {
        if (json.slug)
            this.slug = json.slug;
        if (json.name)
            this.name = json.name;
        if (json.status)
            this.status = json.status;
        if (json.winner)
            this.winner = json.winner;
        if (json.rating)
            this.rating = json.rating;
        if (json.startDate)
            this.startDate = new Date(json.startDate);
        if (json.numOfPlayers)
            this.numOfPlayers = json.numOfPlayers;
        if (json.isRanked !== undefined)
            this.isRanked = json.isRanked;
        if (json.isPrivate !== undefined)
            this.isPrivate = json.isPrivate;
        if (json.isSolo !== undefined)
            this.isSolo = json.isSolo;
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
    };
    Game.prototype.parseNews = function (json) {
        if (!json) {
            return [];
        }
        return json.map(function (item) {
            return {
                for: item.for,
                message: item.message,
                date: new Date(item.date)
            };
        });
    };
    Game.prototype.isInGame = function (player) {
        var username = player;
        if (typeof player === "object") {
            username = player.username;
        }
        return this.players[username] !== undefined;
    };
    Game.prototype.availableColors = function (player) {
        var username = player;
        if (typeof player === "object") {
            username = player.username;
        }
        var taken = [];
        var available = {};
        for (var u in this.players) {
            if (u === username) {
                continue;
            }
            taken.push(this.players[u].color);
        }
        for (var hex in configs_1.config.game.colors) {
            if (taken.indexOf(hex) !== -1) {
                continue;
            }
            available[hex] = configs_1.config.game.colors[hex];
        }
        return available;
    };
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map