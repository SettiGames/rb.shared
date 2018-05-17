"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vessel_1 = require("./vessel");
var User = (function () {
    function User(json) {
        if (!json) {
            return;
        }
        this.parse(json);
    }
    User.prototype.parse = function (json) {
        if (json.username)
            this.username = json.username;
        if (json.currency !== undefined)
            this.currency = json.currency;
        if (json.email)
            this.email = json.email;
        if (json.isAdmin !== undefined)
            this.isAdmin = json.isAdmin;
        if (json.firebaseId)
            this.firebaseId = json.firebaseId;
        if (json.firebaseToken)
            this.firebaseToken = json.firebaseToken;
        if (json.games)
            this.games = json.games;
        if (json.vessels)
            this.vessels = this.parseVessels(json.vessels);
        if (json.stats)
            this.stats = json.stats;
        if (json.rankings)
            this.rankings = json.rankings;
        if (json.yourTurn)
            this.yourTurn = json.yourTurn;
    };
    User.prototype.parseVessels = function (json) {
        if (!json || !json.length) {
            return [];
        }
        return json.map(function (item) {
            return new vessel_1.Vessel(item);
        });
    };
    Object.defineProperty(User.prototype, "isRanked", {
        get: function () {
            return this.vessels && this.vessels.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "rank", {
        get: function () {
            if (!this.isRanked)
                return 'Ordinary Seaman';
            if (this.stats.rating >= 2000)
                return 'Fishing Admiral';
            if (this.stats.rating >= 1800)
                return 'Captain';
            if (this.stats.rating >= 1600)
                return 'Chief Mate';
            if (this.stats.rating >= 1500)
                return 'Second Mate';
            if (this.stats.rating >= 1400)
                return 'Third Mate';
            if (this.stats.rating >= 1200)
                return 'Boatswain';
            if (this.stats.rating >= 1100)
                return 'Coxswain';
            if (this.stats.rating >= 1000)
                return 'Able Seaman';
            return 'Yeoman';
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map