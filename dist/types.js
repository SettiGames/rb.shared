"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RB;
(function (RB) {
    var ActionType;
    (function (ActionType) {
        ActionType["abandon"] = "abandon";
        ActionType["boot"] = "boot";
        ActionType["bribe"] = "bribe";
        ActionType["endTurn"] = "endTurn";
        ActionType["fishFind"] = "fishFind";
        ActionType["fish"] = "fish";
        ActionType["getBroadcasts"] = "getBroadcasts";
        ActionType["getNews"] = "getNews";
        ActionType["move"] = "move";
        ActionType["newBoat"] = "newBoat";
        ActionType["pirate"] = "pirate";
        ActionType["radio"] = "radio";
        ActionType["repair"] = "repair";
        ActionType["resign"] = "resign";
        ActionType["skip"] = "skip";
        ActionType["turnIn"] = "turnIn";
        ActionType["upgrade"] = "upgrade";
    })(ActionType = RB.ActionType || (RB.ActionType = {}));
    var HubActionType;
    (function (HubActionType) {
        HubActionType["processGame"] = "processGame";
        HubActionType["removePlayer"] = "removePlayer";
        HubActionType["soloProcessGame"] = "soloProcessGame";
    })(HubActionType = RB.HubActionType || (RB.HubActionType = {}));
    var GameStatus;
    (function (GameStatus) {
        GameStatus["open"] = "open";
        GameStatus["active"] = "active";
        GameStatus["finished"] = "finished";
    })(GameStatus = RB.GameStatus || (RB.GameStatus = {}));
    var TurnLength;
    (function (TurnLength) {
        TurnLength["minutes"] = "minutes";
        TurnLength["day"] = "day";
    })(TurnLength = RB.TurnLength || (RB.TurnLength = {}));
    var SpectatorMode;
    (function (SpectatorMode) {
        SpectatorMode["none"] = "none";
        SpectatorMode["public"] = "public";
        SpectatorMode["player"] = "player";
    })(SpectatorMode = RB.SpectatorMode || (RB.SpectatorMode = {}));
    var WeatherType;
    (function (WeatherType) {
        WeatherType["clear"] = "clear";
        WeatherType["storm"] = "storm";
        WeatherType["fog"] = "fog";
        WeatherType["hurricane"] = "hurricane";
    })(WeatherType = RB.WeatherType || (RB.WeatherType = {}));
    var DamageType;
    (function (DamageType) {
        DamageType["collision"] = "collision";
        DamageType["storm"] = "storm";
        DamageType["hurricane"] = "hurricane";
        DamageType["tsunami"] = "tsunami";
        DamageType["attack"] = "attack";
        DamageType["abandon"] = "abandon";
    })(DamageType = RB.DamageType || (RB.DamageType = {}));
    var EmoteKey;
    (function (EmoteKey) {
        EmoteKey["battle"] = "battle";
        EmoteKey["cast"] = "cast";
        EmoteKey["castEmpty"] = "castEmpty";
        EmoteKey["castSuccess"] = "castSuccess";
        EmoteKey["castTreasure"] = "castTreasure";
        EmoteKey["damage"] = "damage";
        EmoteKey["deadFish"] = "deadFish";
        EmoteKey["find"] = "find";
        EmoteKey["repair"] = "repair";
        EmoteKey["trophy"] = "trophy";
        EmoteKey["turnIn"] = "turnIn";
        EmoteKey["upgrade"] = "upgrade";
    })(EmoteKey = RB.EmoteKey || (RB.EmoteKey = {}));
    var EmoteTarget;
    (function (EmoteTarget) {
        EmoteTarget[EmoteTarget["public"] = 0] = "public";
        EmoteTarget[EmoteTarget["adjacents"] = 1] = "adjacents";
        EmoteTarget[EmoteTarget["player"] = 2] = "player";
    })(EmoteTarget = RB.EmoteTarget || (RB.EmoteTarget = {}));
    var BroadcastType;
    (function (BroadcastType) {
        BroadcastType["chat"] = "chat";
        BroadcastType["news"] = "news";
        BroadcastType["treasure"] = "treasure";
        BroadcastType["important"] = "important";
    })(BroadcastType = RB.BroadcastType || (RB.BroadcastType = {}));
    var WarningType;
    (function (WarningType) {
        WarningType["warning"] = "warning";
        WarningType["urgent"] = "urgent";
    })(WarningType = RB.WarningType || (RB.WarningType = {}));
    var NewsKey;
    (function (NewsKey) {
        NewsKey[NewsKey["newGame"] = 0] = "newGame";
        NewsKey[NewsKey["startGame"] = 1] = "startGame";
        NewsKey[NewsKey["fog"] = 2] = "fog";
        NewsKey[NewsKey["collision"] = 3] = "collision";
        NewsKey[NewsKey["storm"] = 4] = "storm";
        NewsKey[NewsKey["hurricane"] = 5] = "hurricane";
        NewsKey[NewsKey["noHurricane"] = 6] = "noHurricane";
        NewsKey[NewsKey["tsunami"] = 7] = "tsunami";
        NewsKey[NewsKey["sinkCollision"] = 8] = "sinkCollision";
        NewsKey[NewsKey["sinkStorm"] = 9] = "sinkStorm";
        NewsKey[NewsKey["sinkHurricane"] = 10] = "sinkHurricane";
        NewsKey[NewsKey["sinkTsunami"] = 11] = "sinkTsunami";
        NewsKey[NewsKey["sinkAttack"] = 12] = "sinkAttack";
        NewsKey[NewsKey["sinkAbandon"] = 13] = "sinkAbandon";
        NewsKey[NewsKey["pirateAttack"] = 14] = "pirateAttack";
        NewsKey[NewsKey["pirateDefend"] = 15] = "pirateDefend";
        NewsKey[NewsKey["turnIn"] = 16] = "turnIn";
        NewsKey[NewsKey["newBoat"] = 17] = "newBoat";
        NewsKey[NewsKey["newPlayer"] = 18] = "newPlayer";
        NewsKey[NewsKey["treasure"] = 19] = "treasure";
        NewsKey[NewsKey["remove"] = 20] = "remove";
        NewsKey[NewsKey["bribe"] = 21] = "bribe";
        NewsKey[NewsKey["upgrade"] = 22] = "upgrade";
    })(NewsKey = RB.NewsKey || (RB.NewsKey = {}));
    var GameStatKey;
    (function (GameStatKey) {
        GameStatKey["rounds"] = "rounds";
        GameStatKey["fog"] = "fog";
        GameStatKey["storm"] = "storm";
        GameStatKey["hurricane"] = "hurricane";
        GameStatKey["tsunami"] = "tsunami";
        GameStatKey["market"] = "market";
    })(GameStatKey = RB.GameStatKey || (RB.GameStatKey = {}));
    var PlayerStatKey;
    (function (PlayerStatKey) {
        PlayerStatKey["vessels"] = "vessels";
        PlayerStatKey["distance"] = "distance";
        PlayerStatKey["biggestCatch"] = "biggestCatch";
        PlayerStatKey["fishCaught"] = "fishCaught";
        PlayerStatKey["earnings"] = "earnings";
        PlayerStatKey["treasure"] = "treasure";
        PlayerStatKey["luck"] = "luck";
        PlayerStatKey["attackSuccess"] = "attackSuccess";
        PlayerStatKey["attackFail"] = "attackFail";
        PlayerStatKey["attackRolls"] = "attackRolls";
        PlayerStatKey["biggestAttack"] = "biggestAttack";
        PlayerStatKey["fishStolen"] = "fishStolen";
        PlayerStatKey["bribe"] = "bribe";
        PlayerStatKey["defenseSuccess"] = "defenseSuccess";
        PlayerStatKey["defenseFail"] = "defenseFail";
        PlayerStatKey["defenseRolls"] = "defenseRolls";
        PlayerStatKey["collisions"] = "collisions";
        PlayerStatKey["turnLengths"] = "turnLengths";
        PlayerStatKey["ratingsDelta"] = "ratingsDelta";
    })(PlayerStatKey = RB.PlayerStatKey || (RB.PlayerStatKey = {}));
    var VesselStatKey;
    (function (VesselStatKey) {
        VesselStatKey["distance"] = "distance";
        VesselStatKey["biggestCatch"] = "biggestCatch";
        VesselStatKey["fishCaught"] = "fishCaught";
        VesselStatKey["earnings"] = "earnings";
        VesselStatKey["treasure"] = "treasure";
        VesselStatKey["attackSuccess"] = "attackSuccess";
        VesselStatKey["attackFail"] = "attackFail";
        VesselStatKey["attackRolls"] = "attackRolls";
        VesselStatKey["biggestAttack"] = "biggestAttack";
        VesselStatKey["fishStolen"] = "fishStolen";
        VesselStatKey["moneyStolen"] = "moneyStolen";
        VesselStatKey["defenseSuccess"] = "defenseSuccess";
        VesselStatKey["defenseFail"] = "defenseFail";
        VesselStatKey["defenseRolls"] = "defenseRolls";
        VesselStatKey["collisions"] = "collisions";
    })(VesselStatKey = RB.VesselStatKey || (RB.VesselStatKey = {}));
    var SortedStatKey;
    (function (SortedStatKey) {
        SortedStatKey["rank"] = "rank";
    })(SortedStatKey = RB.SortedStatKey || (RB.SortedStatKey = {}));
    var SpaceAction;
    (function (SpaceAction) {
        SpaceAction["move"] = "M";
        SpaceAction["inspect"] = "I";
        SpaceAction["attack"] = "A";
    })(SpaceAction = RB.SpaceAction || (RB.SpaceAction = {}));
    var CommKey;
    (function (CommKey) {
        CommKey["battle"] = "battle";
        CommKey["collision"] = "collision";
        CommKey["fishFind"] = "fishFind";
        CommKey["fishFail"] = "fishFail";
        CommKey["fishSuccess"] = "fishSuccess";
        CommKey["hurricane"] = "hurricane";
        CommKey["lose"] = "lose";
        CommKey["move"] = "move";
        CommKey["newPlayer"] = "newPlayer";
        CommKey["newTurn"] = "newTurn";
        CommKey["repair"] = "repair";
        CommKey["startGame"] = "startGame";
        CommKey["startStartTimer"] = "startStartTimer";
        CommKey["cancelStartTimer"] = "cancelStartTimer";
        CommKey["storm"] = "storm";
        CommKey["treasure"] = "treasure";
        CommKey["trophy"] = "trophy";
        CommKey["tsunami"] = "tsunami";
        CommKey["turnIn"] = "turnIn";
        CommKey["upgrade"] = "upgrade";
        CommKey["win"] = "win";
    })(CommKey = RB.CommKey || (RB.CommKey = {}));
})(RB = exports.RB || (exports.RB = {}));
//# sourceMappingURL=types.js.map