"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const configs_1 = require("./../configs");
class Vessel {
    constructor(json) {
        if (json) {
            return;
        }
        this.parse(json);
    }
    get color() {
        return this.colors[0];
    }
    get typeName() {
        return configs_1.config.vessels[this.type].name;
    }
    get effect() {
        return configs_1.config.vessels[this.type].effect;
    }
    get shapes() {
        return configs_1.config.vessels[this.type].shapes;
    }
    parse(json) {
        if (json.owner)
            this.parseOwner(json.owner);
        if (json.ownerUsername)
            this.ownerUsername = json.ownerUsername;
        if (json.name)
            this.name = json.name;
        if (json.rating !== undefined)
            this.rating = json.rating;
        if (json.location)
            this.location = json.location;
        if (json.type)
            this.type = json.type;
        if (json.colors)
            this.colors = json.colors;
    }
    parseOwner(input) {
        if (typeof input === "string") {
            this.owner = input;
        }
        this.owner = new user_1.User(input);
    }
}
exports.Vessel = Vessel;
//# sourceMappingURL=vessel.js.map