export const config = {

    initialFunds: 50,           // Amount of funds a players starts with
    bribeCost: 1000,            // Amount needed to purchase a trophy
    upgradeMax: 5,              // Maximum number of increments for upgrades
    broadcastMaxLength: 280,    // Character limit for each chat message
    bootableScore: 2,           // Number of times a user must be skipped before they can be booted
    commandeerThreshold: 6,     // Dice difference required to commandeer a boat

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
        min: 5,
        max: 75,
        initial: [ 0, 0, 21, 22, 23, 24, 25, 26, 27, 28 ]
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

    hurricaneNames: [
        'Arthur', 'Bertha', 'Cesar', 'Diana', 'Edouard', 'Fran', 'Gustav', 'Hortense', 'Isidore', 'Josephine',
        'Klaus', 'Lili', 'Marco', 'Nana', 'Omar', 'Paloma', 'Rene', 'Sally', 'Teddy', 'Vicky', 'Wilfred'
    ],

    gameNames: [
        'Clash at Raider Bay', 'Battle in Raider Bay', 'The Raider Bay Dispute', 'A Difference of Opinion',
        'Disharmony', 'The Giant Swordfish', 'Savage Anglers', 'Dangerous and Eutrophic', 'Fish Eat Fish',
        'Don\'t Want No Grubs', 'Fight for the Fishery', 'Starboard Skirmish', 'Waters of Raider Bay',
        'Not Penny\'s Boat', 'Rock The Boat', 'Gonna Need A Bigger Boat', 'For Glory'
    ],

    locations: {

        alaska: {
            label: 'Alaska',
            isEnabled: true,
            tsunami: 'in the Berring Sea',
            fish: [ 'Char', 'Cod', 'Halibut', 'Pike', 'Trout', 'Salmon' ]
        },

        china: {
            label: 'China',
            isEnabled: true,
            tsunami: 'in the Berring Sea',
            fish: [ 'Char', 'Cod', 'Halibut', 'Pike', 'Trout', 'Salmon' ]
        },

        india: {
            label: 'India',
            isEnabled: true,
            tsunami: 'in the Berring Sea',
            fish: [ 'Char', 'Cod', 'Halibut', 'Pike', 'Trout', 'Salmon' ]
        },

        japan: {
            label: 'Japan',
            isEnabled: true,
            tsunami: 'in the Berring Sea',
            fish: [ 'Char', 'Cod', 'Halibut', 'Pike', 'Trout', 'Salmon' ]
        },

        unitedKingdom: {
            label: 'UK',
            isEnabled: true,
            tsunami: 'in the Berring Sea',
            fish: [ 'Char', 'Cod', 'Halibut', 'Pike', 'Trout', 'Salmon' ]
        },

        // crete: {
        //     label: 'Crete',
        //     isEnabled: true,
        //     tsunami: 'near Malta',
        //     fish : [ 'Alabacore', 'Cod', 'Flounder', 'Mullet', 'Sea Bass', 'Swordfish' ]
        // },

        // cuba: {
        //     label: 'Cuba',
        //     isEnabled: false,
        //     tsunami: 'off the coast of Trinidad',
        //     fish : [ 'Eel', 'Grouper', 'Mahi-Mahi', 'Snapper', 'Tuna', 'Yellowtail' ]
        // },

        // fiji: {
        //     label: 'Fiji',
        //     isEnabled: false,
        //     tsunami: 'off the coast of Chile',
        //     fish : [ 'Marlin', 'Sailfish', 'Tanguige', 'Trevally', 'Tuna', 'Wahoo' ]
        // },

        // greenland: {
        //     label: 'Greenland',
        //     isEnabled: false,
        //     tsunami: 'in the Atlantic',
        //     fish : [ 'Catfish', 'Char', 'Cod', 'Halibut', 'Salmon', 'Swordfish' ]
        // },

        // lakeSuperior: {
        //     label: 'Lake Superior',
        //     isEnabled: false,
        //     tsunami: 'near Green Bay',
        //     fish : [ 'Bass', 'Carp', 'Perch', 'Salmon', 'Trout', 'White Fish' ]
        // },

        // madagascar: {
        //     label: 'Madagascar',
        //     isEnabled: false,
        //     tsunami: 'in the Mid-Indian Basin',
        //     fish : [ 'Bass', 'Dorado', 'Kob', 'Swordfish', 'Tigerfish', 'Tilapia' ]
        // },

        // sovietUnion: {
        //     label: 'Soviet Union',
        //     isEnabled: false,
        //     tsunami: 'off the coast of Alaska',
        //     fish : [ 'Bream', 'Char', 'Flounder', 'Navaga', 'Salmon', 'Sturgeon' ]
        // }

    },

    vessels: [
        {
            name: 'Admiral, SS',
            description: 'SS Admiral was an excursion steamboat operating on the Mississippi River from the Port of St. Louis, Missouri. The vessel had a 1930s streamlined, Art Deco style in contrast to the "gingerbread" ornamentation of more traditional Mississippi passenger and pleasure steamers. At 374 feet long and 92 feet wide, the Admiral was longer than a city block, and the first all-steel inland steamer.',
            url: 'https://en.wikipedia.org/wiki/SS_Admiral'
        },
        {
            name: 'Adventure Galley',
            description: 'Adventure Galley was an English sailing ship captained by William Kidd, the notorious privateer. Between April 1696 and April 1698, she travelled thousands of miles across the Atlantic and Indian Oceans in search of pirates but failed to find any. Instead, Kidd himself turned pirate in desperation at not having obtained any prizes.',
            url: 'http://en.wikipedia.org/wiki/Adventure_Galley'
        },
        {
            name: 'Alligator',
            description: 'The USS Alligator, the fourth United States Navy ship of that name, is the first known U.S. Navy submarine, and was active during the American Civil War. The first American submarine, built in the Revolutionary War era, was the Turtle; however, the U.S. Navy did not exist when this craft was operational.',
            url: 'http://http://en.wikipedia.org/wiki/American_submarine_Alligator_(1862)'
        },
        {
            name: 'America',
            description: 'America was a 19th-century racing yacht and first winner of the America\'s Cup international sailing trophy. Originally known variously as the Royal Yacht Squadron\'s "One Hundred Guinea Cup", "One Hundred Sovereign Cup", or "£100 Cup", the trophy was later renamed after the original winning yacht.',
            url: 'https://en.wikipedia.org/wiki/America_(yacht)'
        },
        {
            name: 'Andrea Gail',
            description: 'The F/V Andrea Gail was a commercial fishing vessel that was lost at sea with all hands during the "Perfect Storm" of 1991. The story of Andrea Gail and her crew inspired Sebastian Junger\'s 1997 book, The Perfect Storm, and a 2000 film of the same name',
            url: 'http://http://en.wikipedia.org/wiki/Andrea_Gail'
        },
        {
            name: 'Arthur Foss',
            description: 'Arthur Foss, built in 1889,  is one of the oldest wooden-hulled tugboats afloat in the United States. In 1898, in response to the Alaskan gold rush, she transported barges full of gold-seeking miners and supplies up the Inside Passage. There are no other Alaskan Gold Rush vessels still operating today. Arthur Foss has a six-cylinder, 700 horsepower diesel engine and her top speed is 13 knots',
            url: 'https://en.wikipedia.org/wiki/Arthur_Foss'
        },
        {
            name: 'Belafonte',
            description: 'R/V Belafonte is the research vessel captianed by oceanographer and documentarian Steve Zissou in "The Life Aquatic". On it\'s mission to find the Jaguar shark, the Belafonte crew has to deal with an attack by pirates. Zissou finally tracks down the shark but decides not to kill it, both because of its beauty and not having any dynamite. At the premiere of the finished documentary, Zissou receives a grand ovation.',
            url: 'http://en.wikipedia.org/wiki/The_Life_Aquatic_with_Steve_Zissou'
        },
        {
            name: 'Black Pearl',
            description: 'In the Pirates of the Caribbean, The Black Pearl is easily recognized by her distinctive black hull and sails. She is said to be "nigh uncatchable". Her speed is derived from the large amount of sails she carries. She is noted in At World\'s End as being "The only ship that can outrun the Flying Dutchman."',
            url: 'http://en.wikipedia.org/wiki/Black_Pearl'
        },
        {
            name: 'The Black Rock',
            description: 'In the TV show Lost, The Black Rock was a fully-rigged 19th century British trading ship that was found shipwrecked on the Island. The ship carried a cargo of slaves, dynamite, and other equipment intended for mining.',
            url: 'http://lostpedia.wikia.com/wiki/Black_Rock'
        },
        {
            name: 'Bluenose',
            description: 'Winner of the Sir Thomas Lipton International Fishing Challenge Cup 1931-1948, the Blusenose has been immortalized on the Canadian dime. The fishing schooner was also a race boat and the pride of Nova Scotia.',
            url: 'http://en.wikipedia.org/wiki/Bluenose'
        },
        {
            name: 'Caledonia II',
            description: 'The Caledonia was a double masted British naval warship who sailed the Great Lakes during the War of 1812. After the Siege of Fort Mackinac, she was commandeered by the American navy. Post war times she was refitted as a commercial ship.',
            url: 'http://en.wikipedia.org/wiki/HMS_Caledonia_(1807)'
        },
        {
            name: 'Calypso',
            description: 'RV Calypso is a former British Royal Navy minesweeper converted into a research vessel for the oceanographic researcher Jacques-Yves Cousteau, equipped with a mobile laboratory for underwater field research. The ship is named after the Greek mythological figure Calypso.',
            url: 'http://http://en.wikipedia.org/wiki/RV_Calypso'
        },
        {
            name: 'Clipper',
            description: 'A clipper was a very fast sailing ship of the middle third of the 19th century. They were fast, yachtlike vessels, with three masts and a square rig. While the first application of the term "clipper" in a nautical sense is by no means certain, it seems to have had an American origin when applied to the Baltimore clippers of the late 18th century.',
            url: 'http://en.wikipedia.org/wiki/Clipper'
        },
        {
            name: 'Discovery',
            description: 'RRS Discovery was the last traditional wooden three-masted ship to be built in Britain. Her first mission was the British National Antarctic Expedition, carrying Robert Falcon Scott and Ernest Shackleton on their first, successful journey to the Antarctic, known as the Discovery Expedition.',
            url: 'http://http://en.wikipedia.org/wiki/RRS_Discovery'
        },
        {
            name: 'Disco Volante',
            description: 'A luxurious and high tech hydrofoil ship equipt with submarine craft owned by Emilio Largo, villan in the James Bond novel and film, "Thunderball."',
            url: 'http://jamesbond.wikia.com/wiki/Disco_Volante'
        },
        {
            name: 'Downeaster Alexa',
            description: 'The Downeaster Alexa is the fishing vessel in Billy Joel\'s song of the same name. The song is sung in the persona of an impoverished fisherman off Long Island and the surrounding waters who, like many of his fellow men, is finding it increasingly hard to make ends meet and keep ownership of his boat. Alexa is the name of Billy Joel\'s daughter, Alexa Ray Joel.',
            url: 'http://en.wikipedia.org/wiki/The_Downeaster_Alexa'
        },
        {
            name: 'Dreadnought',
            description: 'HMS Dreadnought was a battleship of the Royal Navy that revolutionised naval power. Her entry into service in 1906 represented such a marked advance in naval technology that her name came to be associated with an entire generation of battleships, the "dreadnoughts".',
            url: 'http://http://en.wikipedia.org/wiki/HMS_Dreadnought_(1906)'
        },
        {
            name: 'Elizabeth',
            description: 'RMS Queen Elizabeth was an ocean liner operated by the Cunard Line. She provided luxury liner service between Southampton, UK and New York City, USA via Cherbourg, France. She was also contracted for over twenty years to carry the Royal Mail as the second half of the ships\' weekly express service.',
            url: 'http://en.wikipedia.org/wiki/RMS_Queen_Elizabeth'
        },
        {
            name: 'Exxon Valdez',
            description: 'Exxon Valdez was an oil tanker that gained notoriety after running aground in Prince William Sound spilling hundreds of thousands of barrels of crude oil in Alaska resulting in the second largest oil spill in United States history.',
            url: 'http://http://en.wikipedia.org/wiki/Exxon_Valdez'
        },
        {
            name: 'Honey Fitz',
            description: 'Honey Fitz is a Presidential Yacht built for John F. Kennedy. She served her country dutifully, from transporting Secret Service agents to entertaining heads of state and cruising the Potomac with wounded American Veterans.',
            url: 'http://www.myhoneyfitz.com/'
        },
        {
            name: 'Jenny',
            description: 'Named after Forest Gump\'s true love, Jenny is the first boat in the Bubba Gump\'s shimping empire. After Hurricane Carmen devatates Bayou La Batre, Jenny is the only surviving shrimper.',
            url: 'http://forrestgump.wikia.com/wiki/Jenny_%28boat%29'
        },
        {
            name: 'King of Red Lions',
            description: 'The King of Red Lions is a character from The Legend of Zelda: The Wind Waker. He is a talking boat whom Link befriends and uses to travel the Great Sea. The King of Red Lions appears after Link is cast away from the Forsaken Fortress, he acts as Link\'s mentor throughout the game, but eventually becomes insentient at the end. He gives advice to Link and proclaims him the "Hero of the Winds".',
            url: 'http://zelda.wikia.com/wiki/King_of_Red_Lions'
        },
        {
            name: 'Mayflower',
            description: 'The Mayflower was the ship that transported mostly English Puritans and Separatists, collectively known today as the Pilgrims, from Plymouth England to the New World. There were 102 passengers and the crew is estimated to be approximately 30 but the exact number is unknown.',
            url: 'http://http://en.wikipedia.org/wiki/Mayflower'
        },
        {
            name: 'The Minnow',
            description: 'The S.S. Minnow is a fictional charter boat on the 1960s television sitcom Gilligan\'s Island. The ship ran aground on the shore of "an uncharted desert isle" (in the south Pacific Ocean), setting the stage for the popular situation comedy.',
            url: 'http://en.wikipedia.org/wiki/S._S._Minnow'
        },
        {
            name: 'Miss America',
            description: 'American inventor, entrepreneur, motorboat builder and racer Garfield Wood set a new world record speed for a boat, (74.870 mph) in 1920 on the Detroit River, using a new boat called Miss America.',
            url: 'http://http://en.wikipedia.org/wiki/Garfield_Wood'
        },
        {
            name: 'Nautilus',
            description: 'The Nautilus is the fictional submarine captained by Nemo featured in Jules Verne\'s novels Twenty Thousand Leagues Under the Sea and The Mysterious Island. Verne named the Nautilus after Robert Fulton\'s real-life submarine Nautilus',
            url: 'http://http://en.wikipedia.org/wiki/Nautilus_(Verne)'
        },
        {
            name: 'Ningpo',
            description: 'Laying under a few feet of water in Catalina Harbor is the wreck of the Ningpo. Built in 1753, the Ningpo spent 159 years in the Yellow Seas engaging in crimes such as smuggling, slave trading, mutiny, and piracy. While the number of people that have been killed aboard the vessel will never be known, it is said that 158 heads have rolled on the decks of the Ningpo.',
            url: 'http://www.cawreckdivers.org/Wrecks/Ningpo.htm'
        },
        {
            name: 'Orca',
            description: 'Captian Bartholomew M. Quint and his crew were terrorized aboard the fishing vessel \'Orca\' by a giant killer shark in the Steven Spielberg\'s Jaws.',
            url: 'http://en.wikipedia.org/wiki/Jaws_(film)'
        },
        {
            name: 'Pequod',
            description: 'The Pequod is a century Nantucket whaleship that appears in the 1851 novel Moby-Dick. The Pequod and her crew, commanded by Captain Ahab, are central to the story, which, after the initial chapters, takes place almost entirely aboard the ship. Most of the characters in the novel are part of the Pequod\'s crew, including the narrator Ishmael.',
            url: 'http://en.wikipedia.org/wiki/Pequod_%28Moby-Dick%29'
        },
        {
            name: 'Pilar',
            description: 'Ernest Hemingway owned a 38-foot fishing boat named Pilar. She was a nickname for the American novelist\'s second wife, Pauline, and the heroine in For Whom the Bell Tolls.',
            url: 'http://en.wikipedia.org/wiki/Pilar_%28boat%29'
        },
        {
            name: 'Pinta',
            description: 'La Pinta (Spanish for The Pint (liquid measure), The Look, or The Spotted One ) was the fastest of the three ships used by Christopher Columbus in his first transatlantic voyage in 1492. The New World was first sighted by Rodrigo de Triana on the Pinta on October 12, 1492.',
            url: 'http://en.wikipedia.org/wiki/Pinta_(ship)'
        },
        {
            name: 'Saluda',
            description: 'Saluda was a steamer that exploded near Lexington, Missouri in March 1852. Saluda left St. Louis for Council Bluffs, Iowa, carrying many Mormon immigrants from England and Wales. After being stuck for two days, the captian ordered an increase in steam pressure. Saluda pushed off, but before the paddlewheel got through its second rotation, the boilers exploded.',
            url: 'http://en.wikipedia.org/wiki/Saluda_%28steamship%29'
        },
        {
            name: 'Santa Maria',
            description: 'La Santa María de la Inmaculada Concepción (Spanish for The Holy Mary of the Immaculate Conception), or La Santa María, was the largest of the three ships used by Christopher Columbus in his first voyage. Her master and owner was Juan de la Cosa.',
            url: 'http://en.wikipedia.org/wiki/Santa_Mar%C3%ADa_%28ship%29'
        },
        {
            name: 'Savannah',
            description: 'SS Savannah was an American hybrid sailing ship/sidewheel steamer built in 1818. It is notable for being the first steamship in the world to cross the Atlantic Ocean, a risk that was accomplished from May to June 1819. Savannah was wrecked off Long Island in 1821. No other American-owned steamship would cross the Atlantic for almost thirty years.',
            url: 'http://en.wikipedia.org/wiki/SS_Savannah'
        },
        {
            name: 'Sloop John B',
            description: 'The Sloop John B is the sail boat subject of the Beach Boys song by the same name. It was originally a traditional West Indies folk song, "The John B. Sails", taken from Carl Sandburg\'s 1927 collection of folk songs, The American Songbag.',
            url: 'http://en.wikipedia.org/wiki/Sloop_John_B'
        },
        {
            name: 'Spirit of Australia',
            description: 'Spirit of Australia is a wooden speed boat built in a Sydney backyard, by Ken Warby, that broke and set the world water speed record on October 8th, 1978. It\'s record of 317 MPH still stands today.',
            url: 'http://en.wikipedia.org/wiki/Spirit_of_Australia'
        },
        {
            name: 'Sultana',
            description: 'Sultana was a Mississippi River side-wheel steamboat that exploded in April 1865 in the greatest maritime disaster in United States history. An estimated 1,800 of her 2,427 passengers died when three of the boat\'s four boilers exploded and she burned to the waterline and sank near Memphis. The disaster was overshadowed by another event. John Wilkes Booth, President Lincoln\'s assassin, was killed the day before.',
            url: 'http://en.wikipedia.org/wiki/SS_Sultana'
        },
        {
            name: 'Terra Nova',
            description: 'Terra Nova was a whaler and polar expedition ship best known for carrying the 1910 British Antarctic Expedition, Robert Falcon Scott\'s last expedition to the South Pole. Scott and his crew were successful in reaching to South Pole but none of them would ever make it back to England.',
            url: 'http://en.wikipedia.org/wiki/Terra_Nova_%28ship%29'
        },
        {
            name: 'Victoria',
            description: 'Victoria was a Spanish carrack and the first ship to successfully circumnavigate the world. The voyage started with a crew of about 265 men aboard five ships. Of all these, only 18 men returned alive on the Victoria. Many of the men died of malnutrition.',
            url: 'http://en.wikipedia.org/wiki/Victoria_(ship)'
        }
    ],

    modes: {

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

    },

    images: {
        hero: {
            small: [ 0, 0 ],
            medium: [ 312, 203 ],
            large: [ 800, 520 ]
        },
        icon: {
            small: [ 116, 100 ],
            medium: [ 180, 155 ],
            large: [ 250, 216 ]
        },
        front: {
            small: [ 0, 0 ],
            medium: [ 0, 0 ],
            large: [ 300, 250 ]
        },
        sink: {
            small: [ 0, 0 ],
            medium: [ 0, 0 ],
            large: [ 0, 0 ]
        },
        action: {
            small: [ 0, 0 ],
            medium: [ 0, 0 ],
            large: [ 330, 225 ]
        }
    }

}
