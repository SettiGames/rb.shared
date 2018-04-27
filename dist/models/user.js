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
        if (json.rating)
            this.rating = json.rating;
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
        if (json.wins)
            this.wins = json.wins;
        if (json.loses)
            this.loses = json.loses;
        if (json.resigned)
            this.resigned = json.resigned;
        if (json.vessels)
            this.vessels = this.parseVessels(json.vessels);
        if (json.yourTurn)
            this.yourTurn = json.yourTurn;
    };
    User.prototype.parseVessels = function (json) {
        if (!json || !json.length) {
            return;
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
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map