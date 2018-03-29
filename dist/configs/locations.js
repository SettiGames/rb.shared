"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fogConstant = 0.1;
var stormConstant = 0.3;
var hurricaneConstant = 0.1;
exports.locations = {
    solo: {
        label: 'Easter Island',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['None', 'Average', 'Average', 'Average'],
        isEnabled: false,
        fish: ['Flounder', 'Flying Fish', 'Morwong', 'Snapper', 'Trevally'],
        fog: {
            chance: 0,
        },
        storms: {
            chance: stormConstant,
        },
        hurricanes: {
            chance: hurricaneConstant,
            label: 'Hurricane',
            service: 'Dirección Meteorológica',
            allowClusters: false,
            names: [
                'Alma', 'Boris', 'Cristina', 'Douglas', 'Elida', 'Fausto', 'Genevieve',
                'Hernan', 'Iselle', 'Julio', 'Kenna', 'Lowell', 'Marie', 'Norbert',
                'Odile', 'Polo', 'Rachel', 'Simon', 'Trudy', 'Vance', 'Wallis'
            ]
        },
        tsunami: {
            location: 'in the South Pacific',
            service: 'PTWC Miami'
        },
        depths: [[3, 7], [3, 13], [2, 10]]
    },
    alaska: {
        label: 'Alaska',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['Heavy', 'Average', 'Average', 'Average'],
        isEnabled: true,
        fish: ['Crab', 'Herring', 'Pollock', 'Salmon', 'Trout'],
        fog: {
            chance: fogConstant * 2,
        },
        storms: {
            chance: stormConstant,
        },
        hurricanes: {
            chance: hurricaneConstant * 0.8,
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
        depths: [[3, 7], [3, 13], [2, 10]]
    },
    cuba: {
        label: 'Cuba',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['Average', 'Average', 'Heavy', 'Average'],
        isEnabled: true,
        fish: ['Amberjack', 'Grouper', 'Mackerel', 'Marlin', 'Snapper'],
        fog: {
            chance: fogConstant,
        },
        storms: {
            chance: stormConstant,
        },
        hurricanes: {
            chance: hurricaneConstant * 3,
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
        depths: [[3, 7], [3, 13], [2, 10]]
    },
    chile: {
        label: 'Chile',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['Heavy', 'Average', 'None', 'Average'],
        isEnabled: true,
        fish: ['Abalone', 'Anchovy', 'Hake', 'Salmon', 'Trout'],
        fog: {
            chance: fogConstant * 3,
        },
        storms: {
            chance: stormConstant,
        },
        hurricanes: {
            chance: 0,
            label: '',
            service: 'Dirección Meteorológica',
            allowClusters: false,
            names: []
        },
        tsunami: {
            location: 'near Isla de Pascua',
            service: 'PTWC Santiago'
        },
        depths: [[3, 7], [3, 13], [2, 10]]
    },
    uk: {
        label: 'UK',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['Heavy', 'Average', 'Light', 'Average'],
        isEnabled: true,
        fish: ['Cod', 'Haddock', 'Herring', 'Mackerel', 'Salmon'],
        fog: {
            chance: fogConstant * 2,
        },
        storms: {
            chance: stormConstant * 1.2,
        },
        hurricanes: {
            chance: hurricaneConstant * 0.3,
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
        depths: [[3, 7], [3, 13], [2, 10]]
    },
    india: {
        label: 'India',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['Average', 'Average', 'Rare', 'Average'],
        isEnabled: true,
        fish: ['Carp', 'Pomfret', 'Seabass', 'Snapper', 'Squid'],
        fog: {
            chance: fogConstant,
        },
        storms: {
            chance: stormConstant,
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
        depths: [[3, 7], [3, 13], [2, 10]]
    },
    china: {
        label: 'China',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['Heavy', 'Average', 'Heavy', 'Average'],
        isEnabled: true,
        fish: ['Carp', 'Eel', 'Flounder', 'Seabass', 'Sturgeon'],
        fog: {
            chance: fogConstant * 1.5,
        },
        storms: {
            chance: stormConstant,
        },
        hurricanes: {
            chance: hurricaneConstant * 2,
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
        depths: [[3, 7], [3, 13], [2, 10]]
    },
    philippines: {
        label: 'Philippines',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['Average', 'Average', 'Heavy', 'Average'],
        isEnabled: true,
        fish: ['Bonito', 'Grouper', 'Mackerel', 'Marlin', 'Tuna'],
        fog: {
            chance: fogConstant,
        },
        storms: {
            chance: stormConstant,
        },
        hurricanes: {
            chance: hurricaneConstant * 3,
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
        depths: [[2, 6], [3, 12], [2, 9], [1, 6]]
    },
    japan: {
        label: 'Japan',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['Average', 'Average', 'Heavy', 'Average'],
        isEnabled: true,
        fish: ['Anchovy', 'Halibut', 'Mackerel', 'Seabream', 'Tuna'],
        fog: {
            chance: fogConstant,
        },
        storms: {
            chance: stormConstant,
        },
        hurricanes: {
            chance: hurricaneConstant * 2,
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
        depths: [[2, 4], [3, 13], [3, 16]]
    },
    easter_island: {
        label: 'Easter Island',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus consequat erat ut interdum molestie. Nam in dictum enim. Nunc aliquam mi at facilisis dictum.',
        levels: ['None', 'Average', 'Average', 'Average'],
        isEnabled: false,
        fish: ['Flounder', 'Flying Fish', 'Morwong', 'Snapper', 'Trevally'],
        fog: {
            chance: 0,
        },
        storms: {
            chance: stormConstant,
        },
        hurricanes: {
            chance: hurricaneConstant,
            label: 'Hurricane',
            service: 'Dirección Meteorológica',
            allowClusters: false,
            names: [
                'Alma', 'Boris', 'Cristina', 'Douglas', 'Elida', 'Fausto', 'Genevieve',
                'Hernan', 'Iselle', 'Julio', 'Kenna', 'Lowell', 'Marie', 'Norbert',
                'Odile', 'Polo', 'Rachel', 'Simon', 'Trudy', 'Vance', 'Wallis'
            ]
        },
        tsunami: {
            location: 'in the South Pacific',
            service: 'PTWC Miami'
        },
        depths: [[3, 7], [3, 13], [2, 10]]
    },
};
//# sourceMappingURL=locations.js.map