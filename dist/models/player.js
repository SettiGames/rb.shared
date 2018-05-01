"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vessel_1 = require("./vessel");
var Player = (function () {
    function Player(json) {
        this.username = null;
        this.color = null;
        this.vessel = null;
        this.rating = null;
        this.funds = null;
        this.location = null;
        this.trophies = null;
        this.explored = null;
        this.fished = null;
        this.isSunk = null;
        this.damage = null;
        this.upgrades = null;
        this.well = null;
        this.skipScore = null;
        this.emote = null;
        if (!json) {
            return;
        }
        this.parse(json);
    }
    Player.prototype.parse = function (json) {
        if (json.username)
            this.username = json.username;
        if (json.color)
            this.color = json.color;
        if (json.vessel)
            this.vessel = new vessel_1.Vessel(json.vessel);
        if (json.rating !== undefined)
            this.rating = json.rating;
        if (json.funds !== undefined)
            this.funds = json.funds;
        if (json.location)
            this.location = json.location;
        if (json.trophies)
            this.trophies = json.trophies;
        if (json.explored)
            this.explored = json.explored;
        if (json.fished)
            this.fished = json.fished;
        if (json.isSunk)
            this.isSunk = json.isSunk;
        if (json.damage)
            this.damage = json.damage;
        if (json.upgrades)
            this.upgrades = json.upgrades;
        if (json.well)
            this.well = json.well;
        if (json.skipScore !== undefined)
            this.skipScore = json.skipScore;
        if (json.emote)
            this.emote = json.emote;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map