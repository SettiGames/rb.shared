export const game = {

    initialFunds: 50,               // Amount of funds a players starts with
    upgradeMax: 5,                  // Maximum number of increments for upgrades
    broadcastMaxLength: 280,        // Character limit for each chat message
    bootableScore: 2,               // Number of times a user must be skipped before they can be booted
    commandeerThreshold: 50,        // Dice difference required to commandeer a boat
    startTimerLength: 20,           // Lenght of the start game timer in seconds
    soloLocation: 'easter_island',

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
        eventThreshold: 15,     // Total fish in the bay before a tsunami can happen
        warningThreshold: 25,   // Total fish when tsunami warning is issued
        chance: 0.5             // Chance a tsunami will happen when eventThreshold is met
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
        initial: [ 0, 21, 21, 22, 23, 24, 25, 26, 27, 28 ]
    },

    radio: {
        max: 280
    },

    colors: {
        'EEF4D7': 'White',
        '667A84': 'Gray',
        '1A1A1A': 'Black',
        '693D20': 'Brown',
        'CA8787': 'Pink',
        'C93838': 'Red',
        'D8743D': 'Rust',
        'D8BB32': 'Yellow',
        '3E6F2F': 'Green',
        '52B39B': 'Sea Foam',
        '468FBD': 'Blue',
        '6544A0': 'Purple'
    },

    gameNames: [
        'Clash at Raider Bay', 'Battle in Raider Bay', 'The Raider Bay Dispute', 'A Difference of Opinion',
        'Disharmony', 'The Giant Swordfish', 'Savage Anglers', 'Dangerous and Eutrophic', 'Fish Eat Fish',
        'Don\'t Want No Grubs', 'Fight for the Fishery', 'Starboard Skirmish', 'Waters of Raider Bay',
        'Not Penny\'s Boat', 'Rock The Boat', 'Gonna Need A Bigger Boat', 'For Glory'
    ]

}
