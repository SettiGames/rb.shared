"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.locations = {
    alaska: {
        label: 'Alaska',
        isEnabled: true,
        fish: ['Crab', 'Herring', 'Pollock', 'Salmon', 'Trout'],
        fog: {
            chance: 0.1,
        },
        storms: {
            chance: 0.3,
        },
        hurricanes: {
            chance: 0.1,
            label: 'Hurricane',
            service: 'NWS Anchorage',
            names: [
                'Alma', 'Boris', 'Cristina', 'Douglas', 'Elida', 'Fausto', 'Genevieve',
                'Hernan', 'Iselle', 'Julio', 'Kenna', 'Lowell', 'Marie', 'Norbert',
                'Odile', 'Polo', 'Rachel', 'Simon', 'Trudy', 'Vance', 'Wallis'
            ]
        },
        tsunami: {
            location: 'in the Gulf of Alaska',
            service: 'PTWC Palmer'
        }
    },
    cuba: {
        label: 'Cuba',
        isEnabled: true,
        fish: ['Amberjack', 'Grouper', 'Mackerel', 'Marlin', 'Snapper'],
        fog: {
            chance: 0.3,
        },
        storms: {
            chance: 0.3,
        },
        hurricanes: {
            chance: 0.3,
            label: 'Hurricane',
            service: 'Instituto de Meteorología',
            names: [
                'Arthur', 'Bertha', 'Cesar', 'Diana', 'Edouard', 'Fran', 'Gustav',
                'Hortense', 'Isidore', 'Josephine', 'Klaus', 'Lili', 'Marco', 'Nana',
                'Omar', 'Paloma', 'Rene', 'Sally', 'Teddy', 'Vicky', 'Wilfred'
            ]
        },
        tsunami: {
            location: 'off the northern coast of Honduras',
            service: 'PTWC Miami'
        }
    },
    chile: {
        label: 'Chile',
        isEnabled: true,
        fish: ['Abalone', 'Anchovy', 'Hake', 'Salmon', 'Trout'],
        fog: {
            chance: 0.1,
        },
        storms: {
            chance: 0.3,
        },
        hurricanes: {
            chance: 0,
            label: '',
            service: 'Dirección Meteorológica',
            names: []
        },
        tsunami: {
            location: 'near Isla de Pascua',
            service: 'PTWC Santiago'
        }
    },
    uk: {
        label: 'UK',
        isEnabled: true,
        fish: ['Cod', 'Haddock', 'Herring', 'Mackerel', 'Salmon'],
        fog: {
            chance: 0.1,
        },
        storms: {
            chance: 0.3,
        },
        hurricanes: {
            chance: 0.1,
            label: 'Hurricane',
            service: 'Met Office',
            names: [
                'Arthur', 'Bertha', 'Cesar', 'Diana', 'Edouard', 'Fran', 'Gustav',
                'Hortense', 'Isidore', 'Josephine', 'Klaus', 'Lili', 'Marco', 'Nana',
                'Omar', 'Paloma', 'Rene', 'Sally', 'Teddy', 'Vicky', 'Wilfred'
            ]
        },
        tsunami: {
            location: 'in the North Atlantic',
            service: 'ICG/NEAMTWS'
        }
    },
    india: {
        label: 'India',
        isEnabled: true,
        fish: ['Carp', 'Pomfret', 'Seabass', 'Snapper', 'Squid'],
        fog: {
            chance: 0.1,
        },
        storms: {
            chance: 0.3,
        },
        hurricanes: {
            chance: 0.1,
            label: 'Cyclone',
            service: 'Met Department',
            names: [
                'Andry', 'Anety', 'Bakoly', 'Bobalahy', 'Caboto', 'Celestina',
                'Domoina', 'Ditra', 'Edoara', 'Esitera', 'Fanja', 'Feliksa', 'Galy',
                'Gerimena', 'Haja', 'Helisaonina', 'Imboa', 'Jaminy', 'Kamisy'
            ]
        },
        tsunami: {
            location: 'in the Indian Ocean',
            service: 'IOTWS'
        }
    },
    china: {
        label: 'China',
        isEnabled: true,
        fish: ['Carp', 'Eel', 'Flounder', 'Seabass', 'Sturgeon'],
        fog: {
            chance: 0.1,
        },
        storms: {
            chance: 0.3,
        },
        hurricanes: {
            chance: 0.1,
            label: 'Typhoon',
            service: 'CMA Beijing',
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
        }
    },
    philippines: {
        label: 'Philippines',
        isEnabled: true,
        fish: ['Bonito', 'Grouper', 'Mackerel', 'Marlin', 'Tuna'],
        fog: {
            chance: 0.1,
        },
        storms: {
            chance: 0.3,
        },
        hurricanes: {
            chance: 0.1,
            label: 'Cyclone',
            service: 'PAGASA',
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
        }
    },
    japan: {
        label: 'Japan',
        isEnabled: true,
        fish: ['Anchovy', 'Halibut', 'Mackerel', 'Seabream', 'Tuna'],
        fog: {
            chance: 0.1,
        },
        storms: {
            chance: 0.3,
        },
        hurricanes: {
            chance: 0.1,
            label: 'Cyclone',
            service: 'Japan Meteorological Agency',
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
        }
    }
};
//# sourceMappingURL=locations.js.map