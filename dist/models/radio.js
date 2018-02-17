"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Radio = (function () {
    function Radio(json) {
        if (!json) {
            return;
        }
        this.parse(json);
    }
    Radio.prototype.parse = function (json) {
        if (json.slug)
            this.slug = json.slug;
        if (json.broadcasts)
            this.broadcasts = this.parseBroadcasts(json.broadcasts);
    };
    Radio.prototype.parseBroadcasts = function (json) {
        if (!json) {
            return [];
        }
        return json.map(function (item) {
            return {
                from: item.from,
                message: item.message,
                date: new Date(item.date)
            };
        });
    };
    return Radio;
}());
exports.Radio = Radio;
//# sourceMappingURL=radio.js.map