import * as moment from 'moment'
import { config } from './configuration'
import { Setti, RB } from './types'

export class Game {
    
    slug: string
    name: string
    status: RB.GameStatus
    host: string
    winner?: string
    startDate: Date
    numOfPlayers: number
    isPrivate: boolean
    isRadioEnabled: boolean
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
    news: RB.NewsItem[]
    stats: RB.GameStats

    adjacents: RB.Adjacents
    comm: Setti.StringMap<RB.CommItem[]>
    // actions

    constructor(json: any) {
        this.parse(json)
    }

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
            names.push(this.players[username].vessel)
        }

        return names
    }


    // Parse

    parse(json: any) {
        if (json.slug) this.slug = json.slug
        if (json.name) this.name = json.name
        if (json.status) this.status = json.status
        if (json.host) this.host = json.host
        if (json.winner) this.winner = json.winner
        if (json.startDate) this.startDate = new Date(json.startDate)
        if (json.numOfPlayers) this.numOfPlayers = json.numOfPlayers
        if (json.isPrivate !== undefined) this.isPrivate = json.isPrivate
        if (json.isRadioEnabled !== undefined) this.isRadioEnabled = json.isRadioEnabled
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
        if (json.news) this.news = this.parseNews(json.news)
        if (json.stats) this.stats = json.stats

        if (json.comm) this.comm = json.comm
        if (json.adjacents) this.adjacents = json.adjacents
    }

    private parseNews(json: any): RB.NewsItem[] {
        if (!json) {
            return []
        }

        return json.map((item) => {
            return {
                for: item.for,
                message: item.message,
                date: new Date(item.date)
            }
        })
    }



    // Methods

    isHost(player: string): boolean
    isHost(player: RB.Player): boolean
    isHost(player): boolean {
        let username = player

        if (typeof player === "object") {
            username = player.username
        }
        
        return username === this.host
    }

    isInGame(player: string): boolean
    isInGame(player: RB.Player): boolean
    isInGame(player): boolean {
        let username = player

        if (typeof player === "object") {
            username = player.username
        }
        
        return this.players[username] !== undefined
    }

    availableColors(player: string): { [ key: string ]: string }
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

        for (let hex in config.colors) {
            if (taken.indexOf(hex) !== -1) {
                continue
            }

            available[hex] = config.colors[hex]
        }

        return available
    }

}
