"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Radio {
    constructor(json) {
        this.slug = json.slug;
        this.broadcasts = this.parseBroadcasts(json.broadcasts);
    }
    parseBroadcasts(json) {
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
}
exports.Radio = Radio;
//# sourceMappingURL=radio.js.map