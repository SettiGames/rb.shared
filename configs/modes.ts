export const modes = {

    ranked: [
        {
            name: 'Ranked 4 Player 5 Minutes',
            code: 'r-4p-5m',
            isEnabled: true,
            attributes: [[ 4, 'Players' ], [ 5, 'Minutes' ]]
        }
    ],

    unranked: [
        {
            name: 'Unranked 2 Player 5 Minutes',
            code: 'u-2p-5m',
            isEnabled: true,
            attributes: [[ 2, 'Players' ], [ 5, 'Minutes' ]]
        },
        {
            name: 'Unranked 2 Player 25 Hours',
            code: 'u-2p-25h',
            isEnabled: true,
            attributes: [[ 2, 'Players' ], [ 25, 'Hours' ]]
        },
        {
            name: 'Unranked 4 Player 5 Minutes',
            code: 'u-4p-5m',
            isEnabled: true,
            attributes: [[ 4, 'Players' ], [ 5, 'Minutes' ]]
        },
        {
            name: 'Unranked 4 Player 25 Hours',
            code: 'u-4p-25h',
            isEnabled: true,
            attributes: [[ 4, 'Players' ], [ 25, 'Hours' ]]
        },
        {
            name: 'Unranked 6 Player 5 Minutes',
            code: 'u-6p-5m',
            isEnabled: true,
            attributes: [[ 6, 'Players' ], [ 5, 'Minutes' ]]
        },
        {
            name: 'Unranked 6 Player 25 Hours',
            code: 'u-6p-25h',
            isEnabled: true,
            attributes: [[ 6, 'Players' ], [ 25, 'Hours' ]]
        }
    ],

    solo: [
        {
            name: 'A Fortnight At Sea',
            code: 's-14d',
            isEnabled: true,
            attributes: [[ 14, 'Days' ]]
        },
        {
            name: 'The Kraken',
            code: '',
            isEnabled: false,
            attributes: [[ 14, 'Turns' ], [ 1, 'Monster' ]]
        }
    ],

    private: []

}
