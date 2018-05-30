"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modes = {
    'r-2p-3m': {
        name: '2 Player Multiplayer',
        type: 'multiplayer',
        isEnabled: true,
        isRanked: true,
        isSolo: false,
        turnLength: 'minutes',
        numOfPlayers: 2,
        attributes: [[2, 'Players'], [3, 'Minutes']]
    },
    'r-4p-3m': {
        name: '4 Player Multiplayer',
        type: 'multiplayer',
        isEnabled: true,
        isRanked: true,
        isSolo: false,
        turnLength: 'minutes',
        numOfPlayers: 4,
        attributes: [[4, 'Players'], [3, 'Minutes']]
    },
    'r-6p-3m': {
        name: '6 Player Multiplayer',
        type: 'multiplayer',
        isEnabled: false,
        isRanked: true,
        isSolo: false,
        turnLength: 'minutes',
        numOfPlayers: 6,
        attributes: [[6, 'Players'], [3, 'Minutes']]
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