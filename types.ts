import * as express from 'express'
import * as mongoose from 'mongoose'
import * as SocketIO from 'socket.io'
import { User } from './models/user'
import { Player } from './models/player'
import { Game } from './models/game'
import { Vessel } from './models/vessel'
import { Radio } from './models/radio'

export namespace Setti {
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Data Types
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface StringMap<T> {
        [ key: string ]: T
    }

    export interface NumberMap<T> {
        [ key: number ]: T
    }

    export interface ConnectionData {
        userSlug: string
        gameSlug?: string
        client: string
    }
    
    export interface ActionData {
        action: string
        data: { [ key: string ]: any }
    }

    export interface RadioData {
        offset: number
        limit: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Functions
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export type ErrorCallback = (error: any) => void



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Express Extentions
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Request extends express.Request {
        routerName?: string
        user?: MongooseUser
    }

    export interface Response extends express.Response { }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Socket.IO Extentions
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Socket extends SocketIO.Socket {
        userSlug: string
        gameSlug?: string
    }

    export type Acknowledgment = (...args: any[]) => void



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * User
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface MongooseUser extends User, mongoose.Document {
        class: User
    }

}



export namespace RB {

    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Actions
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum ActionType {
        abandon = 'abandon',
        boot = 'boot',
        bribe = 'bribe',
        endTurn = 'endTurn',
        fishFind = 'fishFind',
        fish = 'fish',
        getBroadcasts = 'getBroadcasts',
        getNews = 'getNews',
        move = 'move',
        newBoat = 'newBoat',
        pirate = 'pirate',
        radio = 'radio',
        repair = 'repair',
        resign = 'resign',
        skip = 'skip',
        turnIn = 'turnIn',
        upgrade = 'upgrade'
    }

    export interface Action {
        (game: Game, userSlug: string, input: any): void
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Hub Actions
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum HubActionType {
        doubloons = 'doubloons',
        newTurn = 'newTurn',
        removePlayer = 'removePlayer',
        processGame = 'processGame',
        soloProcessGame = 'soloProcessGame'
    }

    export interface HubAction {
        (game: MongooseGame, input: any): void
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Game
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface MongooseGame extends Game, mongoose.Document {
        class: Game
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Radio
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface MongooseRadio extends Radio, mongoose.Document {
        class: Radio
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Commands
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum CommandType {
        fact = 'fact',
        joke = 'joke',
        luck = 'luck',
        time = 'time',
        ratings = 'rating'
    }

    export interface Command {
        (game: Game, type: CommandType): { delay: number, broadcast: RB.Broadcast }[]
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Vessel
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface MongooseVessel extends Vessel, mongoose.Document {
        class: Vessel
    }

    export enum VesselFlag {
        motorMax1Up = 'motorMax1Up',
        motorStart1Up = 'motorStart1Up',
        finderMax1Up = 'finderMax1Up',
        finderStart1Up = 'finderStart1Up',
        netsMax1Up = 'netsMax1Up',
        netsStart1Up = 'netsStart1Up',
        wellMax1Up = 'wellMax1Up',
        wellStart1Up = 'wellStart1Up',
        cannonsMax1Up = 'cannonsMax1Up',
        cannonsStart1Up = 'cannonsStart1Up',
        defenseMax1Up = 'defenseMax1Up',
        defenseStart1Up = 'defenseStart1Up'
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Game Options
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum GameStatus {
        open = 'open',
        active = 'active',
        finished = 'finished'
    }

    export enum TurnLength {
        minutes = 'minutes',
        day = 'day'
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Spectators
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum SpectatorMode {
        none = 'none',
        public = 'public',
        player = 'player'
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Turn
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Turn {
        userSlug: string
        casts: number
        finds: number
        moves: number
        attacks?: number
        isSkippable?: boolean
        isBootable?: boolean
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Board
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Space {
        quantity: number
        type: number | string
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Weather
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum WeatherType {
        clear = 'clear',
        storm = 'storm',
        fog = 'fog',
        hurricane = 'hurricane'
    }

    export interface Forecast {
        type: WeatherType
        chance: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Damage
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum DamageType {
        collision = 'collision',
        storm = 'storm',
        hurricane = 'hurricane',
        tsunami = 'tsunami',
        attack = 'attack',
        abandon = 'abandon'
    }

    export interface Damage {
        hull: number
        nets: number
        propeller: number
        rudder: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Upgrades
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Upgrades {
        motor: number
        finder: number
        nets: number
        well: number
        cannons: number
        defense: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Well
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Catch {
        type: number
        count: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Emote
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum EmoteKey {
        battle = 'battle',
        cast = 'cast',
        castEmpty = 'castEmpty',
        castSuccess = 'castSuccess',
        castTreasure = 'castTreasure',
        castDoubloons = 'castDoubloons',
        damage = 'damage',
        deadFish = 'deadFish',
        find = 'find',
        repair = 'repair',
        trophy = 'trophy',
        turnIn = 'turnIn',
        upgrade = 'upgrade'
    }

    export enum EmoteTarget {
        public,
        adjacents,
        player
    }

    export interface Emote {
        key: EmoteKey,
        data: Setti.StringMap<any>
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Radio
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Broadcast {
        from: string
        type: BroadcastType
        message: string
        date: Date,
        gameDate: Date
    }

    export enum BroadcastType {
        chat = 'chat',
        news = 'news',
        treasure = 'treasure',
        important = 'important'
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Warning
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Warning {
        from: string
        type: WarningType
        message: string
    }

    export enum WarningType {
        warning = 'warning',
        urgent = 'urgent'
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Location
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Location {
        label: string
        description: string
        levels: string[],
        isEnabled: boolean
        fish: string[]
        fog: {
            chance: number
        }
        storms: {
            chance: number
        }
        hurricanes: {
            chance: number
            label: string
            service: string
            allowClusters: boolean
            names: string[]
        }
        tsunami: {
            location: string
            service: string
        }
        depths: [ number, number ][]
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * News
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum NewsKey {
        newGame,
        startGame,
        fog,
        collision,
        storm,
        hurricane,
        noHurricane,
        tsunami,
        sinkCollision,
        sinkStorm,
        sinkHurricane,
        sinkTsunami,
        sinkAttack,
        sinkAbandon,
        pirateAttack,
        pirateDefend,
        turnIn,
        newBoat,
        newPlayer,
        treasure,
        remove,
        bribe,
        upgrade
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Game Stats
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum GameStatKey {
        score = 'score',
        rounds = 'rounds',
        fog = 'fog',
        storm = 'storm',
        hurricane = 'hurricane',
        tsunami = 'tsunami',
        market = 'market'
    }

    export interface GameStats {
        score?: number
        rounds?: number
        fog?: number
        storm?: number
        hurricane?: number
        tsunami?: number
        market?: number[][]
    }

    export enum GameRankingKey {
        score = 'rankings:games:a-fortnight-at-sea'
    }

    export interface GameRankings {
        score?: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Player Stats
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum PlayerStatKey {
        rating = 'rating',
        ratingsDelta = 'ratingsDelta',
        games = 'games',
        wins = 'wins',
        loses = 'loses',
        trophies = 'trophies',
        fivers = 'fivers',
        vessels = 'vessels',
        distance = 'distance',
        honeyHoleCasts = 'honeyHoleCasts',
        biggestCatch = 'biggestCatch',
        fishCaught = 'fishCaught',
        earnings = 'earnings',
        treasure = 'treasure',
        treasureCount = 'treasureCount',
        doubloons = 'doubloons',
        luck = 'luck',
        attackSuccess = 'attackSuccess',
        attackFail = 'attackFail',
        attacks = 'attacks',
        biggestAttack = 'biggestAttack',
        fishStolen = 'fishStolen',
        moneyStolen = 'moneyStolen',
        bribe = 'bribe',
        defenseSuccess = 'defenseSuccess',
        defenseFail = 'defenseFail',
        defends = 'defends',
        collisions = 'collisions',
        turnLengths = 'turnLengths'
    }

    export interface PlayerStats {
        rating?: number
        ratingsDelta?: number
        games?: number
        wins?: number
        loses?: number
        fivers?: number
        trophies?: number
        vessels?: string[]
        distance?: number
        honeyHoleCasts?: number
        biggestCatch?: Catch
        fishCaught?: number
        earnings?: number
        treasure?: number
        treasureCount?: number
        doubloons?: number
        luck?: number
        luckRolls?: number
        attackSuccess?: number
        attackFail?: number
        attacks?: number
        biggestAttack?: Setti.StringMap<string | number>
        fishStolen?: number
        moneyStolen?: number
        bribe?: number
        defenseSuccess?: number
        defenseFail?: number
        defends?: number
        collisions?: number
        turnLengths?: number[]
    }

    export enum UserRankingKey {
        rating = 'rankings:users:rating',
        games = 'rankings:users:games',
        wins = 'rankings:users:wins',
        loses = 'rankings:users:loses',
        fivers = 'rankings:users:fivers',
        trophies = 'rankings:users:trophies',
        distance = 'rankings:users:distance',
        fishCaught = 'rankings:users:fishCaught',
        earnings = 'rankings:users:earnings',
        treasure = 'rankings:users:treasure',
        doubloons = 'rankings:users:doubloons',
        attackSuccess = 'rankings:users:attackSuccess',
        attacks = 'rankings:users:attacks',
        fishStolen = 'rankings:users:fishStolen',
        moneyStolen = 'rankings:users:moneyStolen',
        defenseSuccess = 'rankings:users:defenseSuccess',
        defends = 'rankings:users:defends',
        collisions = 'rankings:users:collisions'
    }

    export interface UserRankings {
        rating?: number
        games?: number
        wins?: number
        loses?: number
        fivers?: number
        trophies?: number
        distance?: number
        fishCaught?: number
        earnings?: number
        treasure?: number
        doubloons?: number
        attackSuccess?: number
        attacks?: number
        fishStolen?: number
        moneyStolen?: number
        defenseSuccess?: number
        defends?: number
        collisions?: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Vessel Stats
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum VesselStatKey {
        experience ='experience',
        trophies = 'trophies',
        distance = 'distance',
        biggestCatch = 'biggestCatch',
        fishCaught = 'fishCaught',
        earnings = 'earnings',
        treasure = 'treasure',
        doubloons = 'doubloons',
        treasureCount = 'treasureCount',
        attackSuccess = 'attackSuccess',
        attackFail = 'attackFail',
        attacks = 'attacks',
        biggestAttack = 'biggestAttack',
        fishStolen = 'fishStolen',
        moneyStolen = 'moneyStolen',
        defenseSuccess = 'defenseSuccess',
        defenseFail = 'defenseFail',
        defends = 'defends',
        collisions = 'collisions'
    }

    export interface VesselStats {
        experience?: number
        trophies?: number
        distance?: number
        biggestCatch?: Catch
        fishCaught?: number
        earnings?: number
        treasure?: number
        doubloons?: number
        treasureCount?: number
        attackSuccess?: number
        attackFail?: number
        attacks?: number
        biggestAttack?: Setti.StringMap<string | number>
        fishStolen?: number
        moneyStolen?: number
        defenseSuccess?: number
        defenseFail?: number
        defends?: number
        collisions?: number
    }

    export enum VesselRankingKey {
        experience = 'rankings:vessels:experience',
        trophies = 'rankings:vessels:trophies',
        distance = 'rankings:vessels:distance',
        fishCaught = 'rankings:vessels:fishCaught',
        earnings = 'rankings:vessels:earnings',
        treasure = 'rankings:vessels:treasure',
        doubloons = 'rankings:vessels:doubloons',
        attackSuccess = 'rankings:vessels:attackSuccess',
        attacks = 'rankings:vessels:attacks',
        fishStolen = 'rankings:vessels:fishStolen',
        moneyStolen = 'rankings:vessels:moneyStolen',
        defenseSuccess = 'rankings:vessels:defenseSuccess',
        defends = 'rankings:vessels:defends',
        collisions = 'rankings:vessels:collisions'
    }

    export interface VesselRankings {
        experience?: number
        trophies?: number
        distance?: number
        fishCaught?: number
        earnings?: number
        treasure?: number
        doubloons?: number
        attackSuccess?: number
        attacks?: number
        fishStolen?: number
        moneyStolen?: number
        defenseSuccess?: number
        defends?: number
        collisions?: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Meta
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum SpaceAction {
        move = 'M',
        inspect = 'I',
        attack = 'A'
    }

    export interface Adjacents {
        spaces: { [ coordinate: string ]: SpaceAction }
        boats: { [ coordinate: string ]: Player }
        dock: Player[]
    }

    export enum CommKey {
        battle = 'battle',
        collision = 'collision',
        doubloons = 'doubloons',
        fishFind = 'fishFind',
        fishFail = 'fishFail',
        fishSuccess = 'fishSuccess',
        hurricane = 'hurricane',
        move = 'move',
        newPlayer = 'newPlayer',
        newTurn = 'newTurn',
        repair = 'repair',
        startGame = 'startGame',
        startStartTimer = 'startStartTimer',
        cancelStartTimer = 'cancelStartTimer',
        storm = 'storm',
        treasure = 'treasure',
        trophy = 'trophy',
        tsunami = 'tsunami',
        turnIn = 'turnIn',
        upgrade = 'upgrade',
    }

    export interface CommItem {
        type: CommKey,
        data: { [ key: string ]: any }
    }

}