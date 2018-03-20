export const modes = {

    // RANKED
    'r-4p-5m': {
        name: 'Ranked 4 Player 5 Minutes',
        type: 'ranked',
        isEnabled: false,
        isRanked: true,
        isSolo: false,
        turnLength: 'minutes',
        numOfPlayers: 4,
        attributes: [[ 4, 'Players' ], [ 5, 'Minutes' ]]
    },

    // UNRANKED

    'u-2p-5m': {
        name: 'Casual Quick 2 Players',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'minutes',
        numOfPlayers: 2,
        attributes: [[ 2, 'Players' ], [ 5, 'Minutes' ]]
    },

    'u-2p-25h': {
        name: 'Casual 2 Players',
        type: 'unranked',
        isEnabled: false,
        turnLength: 'day',
        numOfPlayers: 2,
        attributes: [[ 2, 'Players' ], [ 25, 'Hours' ]]
    },
    
    'u-4p-5m': {
        name: 'Casual Quick 4 Players',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'minutes',
        numOfPlayers: 4,
        attributes: [[ 4, 'Players' ], [ 5, 'Minutes' ]]
    },

    'u-4p-25h': {
        name: 'Casual 4 Players',
        type: 'unranked',
        isEnabled: false,
        turnLength: 'day',
        numOfPlayers: 4,
        attributes: [[ 4, 'Players' ], [ 25, 'Hours' ]]
    },

    'u-6p-5m': {
        name: 'Casual Quick 6 Players',
        type: 'unranked',
        isEnabled: true,
        turnLength: 'minutes',
        numOfPlayers: 6,
        attributes: [[ 6, 'Players' ], [ 5, 'Minutes' ]]
    },

    'u-6p-25h': {
        name: 'Casual 6 Players',
        type: 'unranked',
        isEnabled: false,
        turnLength: 'day',
        numOfPlayers: 6,
        attributes: [[ 6, 'Players' ], [ 25, 'Hours' ]]
    },

    // SOLO

    's-14d': {
        name: 'A Fortnight At Sea',
        type: 'solo',
        isEnabled: true,
        turnLength: 'day',
        numOfPlayers: 1,
        attributes: [[ 14, 'Days' ]]
    },

    's-14d-1m': {
        name: 'The Kraken',
        type: 'solo',
        isEnabled: false,
        turnLength: 'day',
        numOfPlayers: 1,
        attributes: [[ 14, 'Turns' ], [ 1, 'Monster' ]]
    }

}