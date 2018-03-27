import * as moment from 'moment'
import { config } from './../configs'
import { Setti, RB } from './../types'

export class Game {
    
    slug: string = null
    name: string = null
    status: RB.GameStatus = null
    rating: number = null
    winner?: string = null
    startDate: Date = null
    startTimer?: Date = null
    numOfPlayers: number = null
    isRanked: boolean = null
    isPrivate: boolean = null
    isCustom: boolean = null
    isSolo: boolean = null
    allowUpgrades: boolean = null
    spectatorMode: RB.SpectatorMode = null
    turnLength: RB.TurnLength = null
    turnTimer?: Date = null
    gameDate: Date = null
    turnOrder: string[] = null
    resigned: string[] = null
    location: string = null
    fog: boolean = null
    tsunamiWarning: boolean = null
    turn: RB.Turn = null
    players: Setti.StringMap<RB.Player> = null
    market: number[] = null
    weather: RB.Forecast[] = null
    board: Setti.StringMap<RB.Space> = null
    stats: {
        game?: RB.GameStats,
        players?: Setti.StringMap<RB.PlayerStats>,
        vessels?: Setti.StringMap<RB.VesselStats>,
        sorted?: RB.SortedStats
    } = null

    warning: RB.Warning = null
    newsBroadcasts: RB.Broadcast[] = null
    comm: Setti.StringMap<RB.CommItem[]> = null
    adjacents: RB.Adjacents = null
    hubActions: Setti.ActionData[] = null

    constructor(json?: any) {
        if (!json) {
            return
        }

        this.parse(json)
    }



    // Computed

    get fish(): string[] {
        return config.locations[this.location].fish
    }

    get displayStartDate(): string {
        return moment(this.startDate).format('MM/DD/YYYY')
    }

    get displayGameDate(): string {
        return moment(this.gameDate).format('MM/DD/YYYY')
    }

    get displayLocation(): string {
        const location = config.locations[this.location]
        return location.label
    }

    get locationData(): RB.Location {
        return config.locations[this.location]
    }

    get vesselNames(): string[] {
        let names: string[] = []

        for (var username in this.players) {
            names.push(this.players[username].vessel.name)
        }

        return names
    }

    get isSkippable(): boolean {
        const threshold = moment().subtract(this.turnDuration)
        return moment(this.turnTimer).isBefore(threshold)
    }

    get isBootable(): boolean {
        const bootscoreIsHigh = this.players[this.turn.username].skipScore >= config.game.bootableScore
        return this.isSkippable && (bootscoreIsHigh || this.isFirstTurn)
    }

    get startGameDate(): Date {
        return new Date(1984, 8, 1)
    }

    get isFirstTurn(): boolean {
        return this.gameDate.getTime() === this.startGameDate.getTime()
    }

    get dayCount(): number {
        return moment(this.gameDate).diff(this.startGameDate, 'days') + 1
    }

    get displayTurnDuration(): [ number, string ] {
        switch(this.turnLength) {
            case RB.TurnLength.minutes:
                return [ 3, 'minutes' ]
            case RB.TurnLength.day:
                return [ 1, 'day' ]
            default:
                break
        }
    }
    
    get turnDuration(): moment.Duration {
        switch(this.turnLength) {
            case RB.TurnLength.minutes:
                return moment.duration(3, 'minutes')
            case RB.TurnLength.day:
                return moment.duration(1, 'days')
            default:
                break
        }
    }



    // Parse

    parse(json: any) {
        if (json.slug) this.slug = json.slug
        if (json.name) this.name = json.name
        if (json.status) this.status = json.status
        if (json.rating) this.rating = json.rating
        if (json.winner) this.winner = json.winner
        if (json.startDate) this.startDate = new Date(json.startDate)
        if (json.startTimer) this.startTimer = new Date(json.startTimer)
        if (json.numOfPlayers) this.numOfPlayers = json.numOfPlayers
        if (json.isRanked !== undefined) this.isRanked = json.isRanked
        if (json.isPrivate !== undefined) this.isPrivate = json.isPrivate
        if (json.isCustom !== undefined) this.isCustom = json.isCustom
        if (json.isSolo !== undefined) this.isSolo = json.isSolo
        if (json.allowUpgrades !== undefined) this.allowUpgrades = json.allowUpgrades
        if (json.spectatorMode) this.spectatorMode = json.spectatorMode
        if (json.turnLength) this.turnLength = json.turnLength
        if (json.turnTimer) this.turnTimer = new Date(json.turnTimer)
        if (json.gameDate) this.gameDate = new Date(json.gameDate)
        if (json.turnOrder) this.turnOrder = json.turnOrder
        if (json.resigned) this.resigned = json.resigned
        if (json.location) this.location = json.location
        if (json.fog !== undefined) this.fog = json.fog
        if (json.tsunamiWarning !== undefined) this.tsunamiWarning = json.tsunamiWarning
        if (json.turn) this.turn = json.turn
        if (json.players) this.players = json.players
        if (json.market) this.market = json.market
        if (json.weather) this.weather = json.weather
        if (json.board) this.board = json.board
        if (json.stats) this.stats = json.stats

        if (json.warning !== undefined) this.warning = json.warning
        if (json.newsBroadcasts) this.newsBroadcasts = json.newsBroadcasts
        if (json.comm) this.comm = json.comm
        if (json.adjacents) this.adjacents = json.adjacents
        if (json.hubActions) this.hubActions = json.hubActions
    }



    // Methods

    isInGame(player: string): boolean
    isInGame(player: RB.Player): boolean
    isInGame(player): boolean {
        let username = player

        if (typeof player === "object") {
            username = player.username
        }
        
        return this.players[username] !== undefined
    }

    availableColors(player?: string): { [ key: string ]: string }
    availableColors(player: RB.Player): { [ key: string ]: string }
    availableColors(player): { [ key: string ]: string } {
        let username = player

        if (typeof player === "object") {
            username = player.username
        }
        
        let taken: string[] = []
        let available: { [ key: string ]: string } = {}


        for (let u in this.players) {
            if (u === username) {
                continue
            }

            taken.push(this.players[u].color)
        }

        for (let hex in config.game.colors) {
            if (taken.indexOf(hex) !== -1) {
                continue
            }

            available[hex] = config.game.colors[hex]
        }

        return available
    }

}