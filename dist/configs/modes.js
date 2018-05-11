"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modes = {
    'r-4p-5m': {
        name: 'Ranked 4 Player 5 Minutes',
        type: 'ranked',
        isEnabled: false,
        isRanked: true,
        isSolo: false,
        turnLength: 'minutes',
        numOfPlayers: 4,
        attributes: [[4, 'Players'], [3, 'Minutes']]
    },
    'u-2p-5m': {
        name: 'Speedy 2 Players',
        type: 'unranked',
        isEnabled: true,
        isRanked: false,
        isSolo: false,
        turnLength: 'minutes',
        numOfPlayers: 2,
        attributes: [[2, 'Players'], [3, 'Minutes']]
    },
    'u-2p-25h': {
        name: 'Slow 2 Players',
        type: 'unranked',
        isEnabled: false,
        isRanked: false,
        isSolo: false,
        turnLength: 'day',
        numOfPlayers: 2,
        attributes: [[2, 'Players'], [25, 'Hours']]
    },
    'u-4p-5m': {
        name: 'Speedy 4 Players',
        type: 'unranked',
        isEnabled: true,
        isRanked: false,
        isSolo: false,
        turnLength: 'minutes',
        numOfPlayers: 4,
        attributes: [[4, 'Players'], [3, 'Minutes']]
    },
    'u-4p-25h': {
        name: 'Slow 4 Players',
        type: 'unranked',
        isEnabled: false,
        isRanked: false,
        isSolo: false,
        turnLength: 'day',
        numOfPlayers: 4,
        attributes: [[4, 'Players'], [25, 'Hours']]
    },
    's-14d': {
        name: 'A Fortnight At Sea',
        type: 'solo',
        isEnabled: true,
        isRanked: false,
        isSolo: true,
        turnLength: 'day',
        numOfPlayers: 1,
        attributes: [[14, 'Days']]
    },
    's-14d-1m': {
        name: 'The Kraken',
        type: 'solo',
        isEnabled: false,
        isRanked: false,
        isSolo: true,
        turnLength: 'day',
        numOfPlayers: 1,
        attributes: [[14, 'Turns'], [1, 'Monster']]
    }
};
//# sourceMappingURL=modes.js.map