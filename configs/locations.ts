/* Location Weather:
    Alaska: More fog (2x), Average Storms (x), Less Hurricanes(0.8x)
    Cuba: Average Fog (x), Average Storms (x), Lots of Hurricanes (3x)
    Chile: Lots of Fog (3x), Average Storms (x), No Hurricanes (x)
    UK: More Fog (2x), Higher Storms (1.2x), Low Hurricanes (0.3x)
    India: Average Fog (x), Average Storms (x), Average Hurricanes (x)
    China: More Fog (1.5x), Average Storms(x), More Hurricanes (2x)
    Phillppines: Less Fog (.5x), Average Storms (x), Lots of Hurricanes (3x)
    Japan: Average Fog (x), Average Storms (x), More Hurricanes (2x)
*/

const fogAvg = 0.1;
const stormAvg = 0.3;
const hurAvg = 0.1;
export const locations = {

    alaska: {
        label: 'Alaska',
        isEnabled: true,
        fish: [ 'Crab', 'Herring', 'Pollock', 'Salmon', 'Trout' ],
        fog: {
            chance: (2 * fogAvg),
        },
        storms: {
            chance: stormAvg,
        },
        hurricanes: {
            chance: (0.8 * hurAvg),
            label: 'Hurricane',
            service: 'NWS Anchorage',
            allowClusters: false,
            names: [
                'Alma', 'Boris', 'Cristina', 'Douglas', 'Elida', 'Fausto', 'Genevieve',
                'Hernan', 'Iselle', 'Julio', 'Kenna', 'Lowell', 'Marie', 'Norbert',
                'Odile', 'Polo', 'Rachel', 'Simon', 'Trudy', 'Vance', 'Wallis'
            ]
        },
        tsunami: {
            location: 'in the Gulf of Alaska',
            service: 'PTWC Palmer'
        },
        depths: [[ 3, 7 ], [ 3, 13 ], [ 2, 10 ]]
    },

    cuba: {
        label: 'Cuba',
        isEnabled: true,
        fish: [ 'Amberjack', 'Grouper', 'Mackerel', 'Marlin', 'Snapper' ],
        fog: {
            chance: fogAvg,
        },
        storms: {
            chance: stormAvg,
        },
        hurricanes: {
            chance: (3 * hurAvg),
            label: 'Hurricane',
            service: 'Instituto de Meteorología',
            allowClusters: false,
            names: [
                'Arthur', 'Bertha', 'Cesar', 'Diana', 'Edouard', 'Fran', 'Gustav',
                'Hortense', 'Isidore', 'Josephine', 'Klaus', 'Lili', 'Marco', 'Nana',
                'Omar', 'Paloma', 'Rene', 'Sally', 'Teddy', 'Vicky', 'Wilfred'
            ]
        },
        tsunami: {
            location: 'off the northern coast of Honduras',
            service: 'PTWC Miami'
        },
        depths: [[ 3, 7 ], [ 3, 13 ], [ 2, 10 ]]
    },

    chile: {
        label: 'Chile',
        isEnabled: true,
        fish: [ 'Abalone', 'Anchovy', 'Hake', 'Salmon', 'Trout' ],
        fog: {
            chance: (3 * fogAvg),
        },
        storms: {
            chance: stormAvg,
        },
        hurricanes: {
            chance: 0,
            label: '',
            service: 'Dirección Meteorológica',
            allowClusters: false,
            names: [ ]
        },
        tsunami: {
            location: 'near Isla de Pascua',
            service: 'PTWC Santiago'
        },
        depths: [[ 3, 7 ], [ 3, 13 ], [ 2, 10 ]]
    },

    uk: {
        label: 'UK',
        isEnabled: true,
        fish: [ 'Cod', 'Haddock', 'Herring', 'Mackerel', 'Salmon' ],
        fog: {
            chance: (2 * fogAvg),
        },
        storms: {
            chance: (1.2 * stormAvg),
        },
        hurricanes: {
            chance: (0.3 * hurAvg),
            label: 'Hurricane',
            service: 'Met Office',
            allowClusters: false,
            names: [
                'Arthur', 'Bertha', 'Cesar', 'Diana', 'Edouard', 'Fran', 'Gustav',
                'Hortense', 'Isidore', 'Josephine', 'Klaus', 'Lili', 'Marco', 'Nana',
                'Omar', 'Paloma', 'Rene', 'Sally', 'Teddy', 'Vicky', 'Wilfred'
            ]
        },
        tsunami: {
            location: 'in the North Atlantic',
            service: 'ICG/NEAMTWS'
        },
        depths: [[ 3, 7 ], [ 3, 13 ], [ 2, 10 ]]
    },

    india: {
        label: 'India',
        isEnabled: true,
        fish: [ 'Carp', 'Pomfret', 'Seabass', 'Snapper', 'Squid' ],
        fog: {
            chance: fogAvg,
        },
        storms: {
            chance: stormAvg,
        },
        hurricanes: {
            chance: 0.1,
            label: 'Cyclone',
            service: 'Met Department',
            allowClusters: false,
            names: [
                'Andry', 'Anety', 'Bakoly', 'Bobalahy', 'Caboto', 'Celestina',
                'Domoina', 'Ditra', 'Edoara', 'Esitera', 'Fanja', 'Feliksa', 'Galy',
                'Gerimena', 'Haja', 'Helisaonina', 'Imboa', 'Jaminy', 'Kamisy'
            ]
        },
        tsunami: {
            location: 'in the Indian Ocean',
            service: 'IOTWS'
        },
        depths: [[ 3, 7 ], [ 3, 13 ], [ 2, 10 ]]
    },

    china: {
        label: 'China',
        isEnabled: true,
        fish: [ 'Carp', 'Eel', 'Flounder', 'Seabass', 'Sturgeon' ],
        fog: {
            chance: (1.5 * fogAvg),
        },
        storms: {
            chance: stormAvg,
        },
        hurricanes: {
            chance: (2 * hurAvg),
            label: 'Typhoon',
            service: 'CMA Beijing',
            allowClusters: false,
            names: [
                'Vernon', 'Wynn', 'Alex', 'Betty', 'Cary', 'Dinah', 'Ed',
                'Freda', 'Gerald', 'Holly', 'Ike', 'June', 'Kelly', 'Lynn',
                'Maury', 'Nina', 'Ogden', 'Phyllis', 'Roy', 'Susan', 'Thad',
                'Vanessa', 'Warren', 'Agnes', 'Bill', 'Clara', 'Doyle'
            ]
        },
        tsunami: {
            location: 'in the Philippine Sea',
            service: 'SOA Guangzhou'
        },
        depths: [[ 3, 7 ], [ 3, 13 ], [ 2, 10 ]]
    },

    philippines: {
        label: 'Philippines',
        isEnabled: true,
        fish: [ 'Bonito', 'Grouper', 'Mackerel', 'Marlin', 'Tuna' ],
        fog: {
            chance: fogAvg,
        },
        storms: {
            chance: stormAvg,
        },
        hurricanes: {
            chance: (3 * hurAvg),
            label: 'Cyclone',
            service: 'PAGASA',
            allowClusters: false,
            names: [
                'Aring', 'Asiang', 'Biring', 'Konsing', 'Ditang', 'Edeng',
                'Gloring', 'Huaning', 'Isang', 'Lusing', 'Maring', 'Nitang',
                'Osang', 'Paring', 'Reming', 'Seniang', 'Toyang', 'Undang',
                'Welpring', 'Yoning', 'Basiang', 'Kayang', 'Dorang', 'Enang', 'Grasing'
            ]
        },
        tsunami: {
            location: 'near Guam',
            service: 'PHIVOLCS Quezon City'
        },
        depths: [[ 3, 6 ], [ 3, 12 ], [ 2, 9 ], [ 1, 6 ]]
    },

    japan: {
        label: 'Japan',
        isEnabled: true,
        fish: [ 'Anchovy', 'Halibut', 'Mackerel', 'Seabream', 'Tuna' ],
        fog: {
            chance: fogAvg,
        },
        storms: {
            chance: stormAvg,
        },
        hurricanes: {
            chance: (2 * hurAvg),
            label: 'Cyclone',
            service: 'Japan Meteorological Agency',
            allowClusters: false,
            names: [
                'Vernon', 'Wynn', 'Alex', 'Betty', 'Cary', 'Dinah', 'Ed',
                'Freda', 'Gerald', 'Holly', 'Ike', 'June', 'Kelly', 'Lynn',
                'Maury', 'Nina', 'Ogden', 'Phyllis', 'Roy', 'Susan', 'Thad',
                'Vanessa', 'Warren', 'Agnes', 'Bill', 'Clara', 'Doyle'
            ]
        },
        tsunami: {
            location: 'near Wake Island',
            service: 'JMA TW'
        },
        depths: [[ 2, 4 ], [ 3, 13 ], [ 3, 16 ]]
    }
}
