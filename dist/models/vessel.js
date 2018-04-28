"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
var configs_1 = require("./../configs");
var Vessel = (function () {
    function Vessel(json) {
        if (!json) {
            return;
        }
        this.parse(json);
    }
    Object.defineProperty(Vessel.prototype, "preferredColor", {
        get: function () {
            return this.colors[0] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vessel.prototype, "typeName", {
        get: function () {
            return configs_1.config.vessels[this.type].name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vessel.prototype, "flags", {
        get: function () {
            return configs_1.config.vessels[this.type].flags;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vessel.prototype, "shapes", {
        get: function () {
            return configs_1.config.vessels[this.type].shapes;
        },
        enumerable: true,
        configurable: true
    });
    Vessel.prototype.hasFlag = function (flag) {
        if (!this.flags) {
            return false;
        }
        return this.flags.indexOf(flag) !== -1;
    };
    Vessel.prototype.parse = function (json) {
        if (json.name)
            this.name = json.name;
        if (json.slug)
            this.slug = json.slug;
        if (json.rating !== undefined)
            this.rating = json.rating;
        if (json.type)
            this.type = json.type;
        if (json.location)
            this.location = json.location;
        if (json.colors)
            this.colors = json.colors;
        if (json.username)
            this.username = json.username;
        if (json.owner)
            this.parseOwner(json.owner);
    };
    Vessel.prototype.parseOwner = function (input) {
        if (typeof input === "string") {
            this.owner = input;
        }
        this.owner = new user_1.User(input);
    };
    return Vessel;
}());
exports.Vessel = Vessel;
//# sourceMappingURL=vessel.js.map