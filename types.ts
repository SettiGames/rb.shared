import * as express from 'express'
import * as mongoose from 'mongoose'
import * as SocketIO from 'socket.io'
import { User } from './models/user'
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
        slug: string
        username: string
        client: string
    }
    
    export interface ActionData {
        action: string
        data: { [ key: string ]: any }
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

    export interface Response extends express.Response {

    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Socket.IO Extentions
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Socket extends SocketIO.Socket {
        slug: string
        username: string
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
    * Functions
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum ActionType {
        abandon = 'abandon',
        boot = 'boot',
        bribe = 'bribe',
        commandeer = 'commandeer',
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
        (game: Game, username: string, input: any): void
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
    * Vessel
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface MongooseVessel extends Vessel, mongoose.Document {
        class: Vessel
    }
    
    export interface GameVessel {
        slug?: string
        name: string
        type: string
        rating?: number
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Game Options
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum GameStatus {
        open = 'open',
        fresh = 'fresh',
        active = 'active',
        finished = 'finished'
    }

    export enum TurnLength {
        minutes = 'minutes',
        day = 'day'
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Turn
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Turn {
        username: string
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
    * Player
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Player {
        username: string
        color: string
        vessel: GameVessel
        rating: number
        funds?: number
        location?: string
        trophies?: boolean[]
        explored?: string[]
        fished?: string[]
        newBoat?: boolean
        canCommandeer?: string
        damage?: Damage
        upgrades?: Upgrades
        well?: Setti.NumberMap<number>[]
        skipScore?: number
        stats?: PlayerStats
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Damage
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum DamageType {
        collision,
        storm,
        hurricane,
        tsunami,
        attack,
        abandon,
        commandeer
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
    * Radio
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export interface Broadcast {
        from: string
        message: string
        date: Date
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * News
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum NewsKey {
        newGame,
        fog,
        collision,
        storm,
        hurricane,
        hurricaneWarning,
        tsunamiWarning,
        tsunami,
        sinkCollision,
        sinkStorm,
        sinkHurricane,
        sinkTsunami,
        sinkAttack,
        sinkAbandon,
        sinkCommandeer,
        pirateAttack,
        pirateDefend,
        turnIn,
        repair,
        newBoat,
        treasure,
        remove,
        bribe,
        upgrade
    }

    export interface NewsItem {
        for: string[]
        message: string
        date: Date
    }



    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    * Stats
    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    export enum GameStatKey {
        rounds = 'rounds',
        fog = 'fog',
        storm = 'storm',
        hurricane = 'hurricane',
        tsunami = 'tsunami',
        market = 'market'
    }

    export interface GameStats {
        rounds?: number
        fog?: number
        storm?: number
        hurricane?: number
        tsunami?: number
        market?: number[][]
    }

    export enum PlayerStatKey {
        boats = 'boats',
        distance = 'distance',
        biggestCatch = 'biggestCatch',
        fishCaught = 'fishCaught',
        earnings = 'earnings',
        treasure = 'treasure',
        luck = 'luck',
        attackSuccess = 'attackSuccess',
        attackFail = 'attackFail',
        attackRolls = 'attackRolls',
        biggestAttack = 'biggestAttack',
        fishStolen = 'fishStolen',
        moneyStolen = 'moneyStolen',
        commandeer = 'commandeer',
        defenseSuccess = 'defenseSuccess',
        defenseFail = 'defenseFail',
        defenseRolls = 'defenseRolls',
        collisions = 'collisions',
        turnLengths = 'turnLengths'
    }

    export interface PlayerStats {
        boats?: string[]
        distance?: number
        biggestCatch?: Catch
        fishCaught?: number
        earnings?: number
        treasure?: number
        luck?: number
        attackSuccess?: number
        attackFail?: number
        attackRolls?: number[]
        biggestAttack?: Setti.StringMap<string | number>
        fishStolen?: number
        moneyStolen?: number
        commandeer?: number
        defenseSuccess?: number
        defenseFail?: number
        defenseRolls?: number[]
        collisions?: number
        turnLengths?: number[]
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
        attackResult = 'attackResult',
        collision = 'collision',
        commandeer = 'commandeer',
        defenseResult = 'defenseResult',
        fishFind = 'fishFind',
        fishFail = 'fishFail',
        fishSuccess = 'fishSuccess',
        hurricane = 'hurricane',
        move = 'move',
        newTurn = 'newTurn',
        repair = 'repair',
        storm = 'storm',
        treasure = 'treasure',
        trophy = 'trophy',
        tsunami = 'tsunami',
        turnIn = 'turnIn'
    }

    export interface CommItem {
        type: CommKey,
        data: { [ key: string ]: any }
    }

}