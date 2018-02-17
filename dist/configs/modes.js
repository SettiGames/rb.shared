"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modes = {
    'r-4p-5m': {
        name: 'Ranked 4 Player 5 Minutes',
        type: 'ranked',
        isEnabled: true,
        isRanked: true,
        isSolo: false,
        turnLength: 'minutes',
        numOfPlayers: 4,
        attributes: [[4, 'Players'], [5, 'Minutes']]
    },
    'u-2p-5m': {
        name: 'Unranked 2 Player 5 Minutes',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'minutes',
        numOfPlayers: 2,
        attributes: [[2, 'Players'], [5, 'Minutes']]
    },
    'u-2p-25h': {
        name: 'Unranked 2 Player 25 Hours',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'day',
        numOfPlayers: 2,
        attributes: [[2, 'Players'], [25, 'Hours']]
    },
    'u-4p-5m': {
        name: 'Unranked 4 Player 5 Minutes',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'minutes',
        numOfPlayers: 4,
        attributes: [[4, 'Players'], [5, 'Minutes']]
    },
    'u-4p-25h': {
        name: 'Unranked 4 Player 25 Hours',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'day',
        numOfPlayers: 4,
        attributes: [[4, 'Players'], [25, 'Hours']]
    },
    'u-6p-5m': {
        name: 'Unranked 6 Player 5 Minutes',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'minutes',
        numOfPlayers: 6,
        attributes: [[6, 'Players'], [5, 'Minutes']]
    },
    'u-6p-25h': {
        name: 'Unranked 6 Player 25 Hours',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'day',
        numOfPlayers: 6,
        attributes: [[6, 'Players'], [25, 'Hours']]
    },
    's-14d': {
        name: 'A Fortnight At Sea',
        type: 'solo',
        isEnabled: true,
        turnLength: 'day',
        numOfPlayers: 1,
        attributes: [[14, 'Days']]
    },
    's-14d-1m': {
        name: 'The Kraken',
        type: 'solo',
        isEnabled: false,
        turnLength: 'day',
        numOfPlayers: 1,
        attributes: [[14, 'Turns'], [1, 'Monster']]
    }
};
//# sourceMappingURL=modes.js.map