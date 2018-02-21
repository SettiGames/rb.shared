"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RB;
(function (RB) {
    var ActionType;
    (function (ActionType) {
        ActionType["abandon"] = "abandon";
        ActionType["boot"] = "boot";
        ActionType["bribe"] = "bribe";
        ActionType["commandeer"] = "commandeer";
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
    var GameStatus;
    (function (GameStatus) {
        GameStatus["open"] = "open";
        GameStatus["fresh"] = "fresh";
        GameStatus["active"] = "active";
        GameStatus["finished"] = "finished";
    })(GameStatus = RB.GameStatus || (RB.GameStatus = {}));
    var TurnLength;
    (function (TurnLength) {
        TurnLength["minutes"] = "minutes";
        TurnLength["day"] = "day";
    })(TurnLength = RB.TurnLength || (RB.TurnLength = {}));
    var WeatherType;
    (function (WeatherType) {
        WeatherType["clear"] = "clear";
        WeatherType["storm"] = "storm";
        WeatherType["fog"] = "fog";
        WeatherType["hurricane"] = "hurricane";
    })(WeatherType = RB.WeatherType || (RB.WeatherType = {}));
    var DamageType;
    (function (DamageType) {
        DamageType[DamageType["collision"] = 0] = "collision";
        DamageType[DamageType["storm"] = 1] = "storm";
        DamageType[DamageType["hurricane"] = 2] = "hurricane";
        DamageType[DamageType["tsunami"] = 3] = "tsunami";
        DamageType[DamageType["attack"] = 4] = "attack";
        DamageType[DamageType["abandon"] = 5] = "abandon";
        DamageType[DamageType["commandeer"] = 6] = "commandeer";
    })(DamageType = RB.DamageType || (RB.DamageType = {}));
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
        NewsKey[NewsKey["fog"] = 1] = "fog";
        NewsKey[NewsKey["collision"] = 2] = "collision";
        NewsKey[NewsKey["storm"] = 3] = "storm";
        NewsKey[NewsKey["hurricane"] = 4] = "hurricane";
        NewsKey[NewsKey["tsunami"] = 5] = "tsunami";
        NewsKey[NewsKey["sinkCollision"] = 6] = "sinkCollision";
        NewsKey[NewsKey["sinkStorm"] = 7] = "sinkStorm";
        NewsKey[NewsKey["sinkHurricane"] = 8] = "sinkHurricane";
        NewsKey[NewsKey["sinkTsunami"] = 9] = "sinkTsunami";
        NewsKey[NewsKey["sinkAttack"] = 10] = "sinkAttack";
        NewsKey[NewsKey["sinkAbandon"] = 11] = "sinkAbandon";
        NewsKey[NewsKey["sinkCommandeer"] = 12] = "sinkCommandeer";
        NewsKey[NewsKey["pirateAttack"] = 13] = "pirateAttack";
        NewsKey[NewsKey["pirateDefend"] = 14] = "pirateDefend";
        NewsKey[NewsKey["turnIn"] = 15] = "turnIn";
        NewsKey[NewsKey["repair"] = 16] = "repair";
        NewsKey[NewsKey["newBoat"] = 17] = "newBoat";
        NewsKey[NewsKey["treasure"] = 18] = "treasure";
        NewsKey[NewsKey["remove"] = 19] = "remove";
        NewsKey[NewsKey["bribe"] = 20] = "bribe";
        NewsKey[NewsKey["upgrade"] = 21] = "upgrade";
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
        PlayerStatKey["boats"] = "boats";
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
        PlayerStatKey["moneyStolen"] = "moneyStolen";
        PlayerStatKey["commandeer"] = "commandeer";
        PlayerStatKey["defenseSuccess"] = "defenseSuccess";
        PlayerStatKey["defenseFail"] = "defenseFail";
        PlayerStatKey["defenseRolls"] = "defenseRolls";
        PlayerStatKey["collisions"] = "collisions";
        PlayerStatKey["turnLengths"] = "turnLengths";
    })(PlayerStatKey = RB.PlayerStatKey || (RB.PlayerStatKey = {}));
    var SpaceAction;
    (function (SpaceAction) {
        SpaceAction["move"] = "M";
        SpaceAction["inspect"] = "I";
        SpaceAction["attack"] = "A";
    })(SpaceAction = RB.SpaceAction || (RB.SpaceAction = {}));
    var CommKey;
    (function (CommKey) {
        CommKey["attackResult"] = "attackResult";
        CommKey["collision"] = "collision";
        CommKey["commandeer"] = "commandeer";
        CommKey["defenseResult"] = "defenseResult";
        CommKey["fishFind"] = "fishFind";
        CommKey["fishFail"] = "fishFail";
        CommKey["fishSuccess"] = "fishSuccess";
        CommKey["hurricane"] = "hurricane";
        CommKey["move"] = "move";
        CommKey["newTurn"] = "newTurn";
        CommKey["repair"] = "repair";
        CommKey["storm"] = "storm";
        CommKey["treasure"] = "treasure";
        CommKey["trophy"] = "trophy";
        CommKey["tsunami"] = "tsunami";
        CommKey["turnIn"] = "turnIn";
    })(CommKey = RB.CommKey || (RB.CommKey = {}));
})(RB = exports.RB || (exports.RB = {}));
//# sourceMappingURL=types.js.map