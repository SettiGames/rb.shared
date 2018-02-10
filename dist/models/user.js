"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vessel_1 = require("./vessel");
class User {
    constructor(json) {
        if (json) {
            return;
        }
        this.parse(json);
    }
    parse(json) {
        if (json.username)
            this.username = json.username;
        if (json.email)
            this.email = json.email;
        if (json.currency !== undefined)
            this.currency = json.currency;
        if (json.rating)
            this.rating = json.rating;
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
            this.parseVessels(json.vessels);
    }
    parseVessels(json) {
        if (!json || !json.length) {
            return;
        }
        if (typeof json[0] === "string") {
            this.vessels = json;
        }
        return json.map((item) => {
            return new vessel_1.Vessel(item);
        });
    }
    get isRanked() {
        return this.vessels && this.vessels.length > 0;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map