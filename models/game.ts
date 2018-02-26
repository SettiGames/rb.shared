import * as moment from 'moment'
import { config } from './../configs'
import { Setti, RB } from './../types'

export class Game {
    
    slug: string
    name: string
    status: RB.GameStatus
    rating: number
    winner?: string
    startDate: Date
    numOfPlayers: number
    isRanked: boolean
    isPrivate: boolean
    isSolo: boolean
    invitees: string[]
    turnLength: RB.TurnLength
    turnTimer?: Date
    gameDate: Date
    turnOrder: string[]
    resigned: string[]
    location: string
    fog: boolean
    tsunamiWarning: boolean
    turn: RB.Turn
    players: Setti.StringMap<RB.Player>
    market: number[]
    weather: RB.Forecast[]
    board: Setti.StringMap<RB.Space>
    stats: {
        game: RB.GameStats,
        players: Setti.StringMap<RB.PlayerStats>,
        vessels: Setti.StringMap<RB.VesselStats>
    }

    warning: RB.Warning
    adjacents: RB.Adjacents
    comm: Setti.StringMap<RB.CommItem[]>
    newsBroadcasts: RB.Broadcast[]
    // actions

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
        return location.label || ''
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
    
    get turnDuration(): moment.Duration {
        switch(this.turnLength) {
            case RB.TurnLength.minutes:
                return moment.duration(10, 'minutes')
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
        if (json.winner) this.winner = json.winner
        if (json.rating) this.rating = json.rating
        if (json.startDate) this.startDate = new Date(json.startDate)
        if (json.numOfPlayers) this.numOfPlayers = json.numOfPlayers
        if (json.isRanked !== undefined) this.isRanked = json.isRanked
        if (json.isPrivate !== undefined) this.isPrivate = json.isPrivate
        if (json.isSolo !== undefined) this.isSolo = json.isSolo
        if (json.invitees) this.invitees = json.invitees
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
        if (json.comm) this.comm = json.comm
        if (json.adjacents) this.adjacents = json.adjacents
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