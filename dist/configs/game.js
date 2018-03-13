"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = {
    initialFunds: 50,
    upgradeMax: 5,
    broadcastMaxLength: 280,
    bootableScore: 2,
    commandeerThreshold: 50,
    board: {
        width: 7,
        height: 8,
        alpha: 'abcdefgh',
        minCatch: 1,
        maxCatch: 5
    },
    treasure: {
        min: 25,
        max: 300
    },
    prices: {
        bribe: 1000,
        upgrade: 50,
        repair: 10
    },
    tsunami: {
        eventThreshold: 15,
        warningThreshold: 25,
        chance: 0.5
    },
    damage: {
        collision: {
            min: 1,
            max: 6
        },
        storm: {
            min: 1,
            max: 3
        },
        hurricane: {
            min: 1,
            max: 6
        },
        tsunami: {
            min: 1,
            max: 3
        },
        attack: {
            min: 1,
            max: 3
        }
    },
    market: {
        low: 20,
        min: 5,
        max: 75,
        initial: [0, 21, 21, 22, 23, 24, 25, 26, 27, 28]
    },
    radio: {
        max: 280
    },
    colors: {
        'EEF4D7': 'White Whale',
        '667A84': 'Battle Gray',
        '1A1A1A': 'Abyss Black',
        '492A15': 'Barnicle Brown',
        'F4A2A2': 'Salmon Pink',
        'B21D1D': 'Red Tide',
        'D8743D': 'Rusty Hull',
        'E9F225': 'Yellow Snapper',
        '44D8B3': 'Sea Foam',
        '067215': 'Seaweed Green',
        '199EE0': 'Big Sky Blue',
        '6E2C89': 'Purple Dusk'
    },
    gameNames: [
        'Clash at Raider Bay', 'Battle in Raider Bay', 'The Raider Bay Dispute', 'A Difference of Opinion',
        'Disharmony', 'The Giant Swordfish', 'Savage Anglers', 'Dangerous and Eutrophic', 'Fish Eat Fish',
        'Don\'t Want No Grubs', 'Fight for the Fishery', 'Starboard Skirmish', 'Waters of Raider Bay',
        'Not Penny\'s Boat', 'Rock The Boat', 'Gonna Need A Bigger Boat', 'For Glory'
    ]
};
//# sourceMappingURL=game.js.map