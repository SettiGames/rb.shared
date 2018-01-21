import * as moment from 'moment'
import { config } from './configuration'
import { Setti, RB } from './types'

export class Game {
    
    id?: any
    slug: string
    name: string
    status: RB.GameStatus
    host: string
    winner?: string
    startDate: Date
    numOfPlayers: number
    isPrivate: boolean
    invitees: string[]
    gameMode: RB.GameMode
    turnMode: RB.TurnMode
    turnLength: RB.TurnLength
    turnTimer?: Date
    gameDate: Date
    turnOrder: string[]
    resigned: string[]
    location: string
    fog: boolean
    tsunamiWarning: boolean
    ratings: Setti.StringMap<number>
    turn: RB.Turn
    players: Setti.StringMap<RB.Player>
    market: number[]
    fish: string[]
    weather: RB.Forecast[]
    board: Setti.StringMap<RB.Space>
    news: RB.NewsItem[]
    radio: RB.Broadcast[]
    stats: RB.GameStats

    comm: Setti.StringMap<RB.CommItem[]>
    // actions

    constructor(json: any) {
        this.id = json._id
        this.slug = json.slug
        this.name = json.name
        this.status = json.status
        this.host = json.host
        this.winner = json.winner
        this.startDate = new Date(json.startDate)
        this.numOfPlayers = json.numOfPlayers
        this.isPrivate = json.isPrivate
        this.invitees = json.invitees
        this.gameMode = json.gameMode
        this.turnMode = json.turnMode
        this.turnLength = json.turnLength
        this.turnTimer = new Date(json.turnTimer)
        this.gameDate = new Date(json.gameDate)
        this.turnOrder = json.turnOrder
        this.resigned = json.resigned
        this.location = json.location
        this.fog = json.fog
        this.tsunamiWarning = json.tsunamiWarning
        this.ratings = json.ratings
        this.turn = json.turn
        this.players = json.players
        this.market = json.market
        this.fish = json.fish
        this.weather = json.weather
        this.board = json.board
        this.news = this.parseNews(json.news)
        this.radio = this.parseRadio(json.radio)
        this.stats = json.stats
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


    // Parsing

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

    private parseRadio(json: any): RB.Broadcast[] {
        if (!json) {
            return []
        }

        return json.map((item) => {
            return {
                from: item.from,
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
