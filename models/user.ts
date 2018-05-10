import { Vessel } from './vessel'
import { RB } from './../types'

export class User {

    username?: string
    slug?: string
    currency?: number
    rating?: number
    email?: string
    isAdmin?: boolean
    firebaseId?: string
    firebaseToken?: string
    games?: string[]
    wins?: string[]
    loses?: string[]
    resigned?: string[]
    vessels?: Vessel[]

    yourTurn?: {
        slug: string,
        name: string
    }[]

    constructor(json?: any) {
        if (!json) {
            return
        }

        this.parse(json)
    }



    // Parsing

    parse(json: any) {
        if (json.username) this.username = json.username
        if (json.currency !== undefined) this.currency = json.currency
        if (json.rating) this.rating = json.rating
        if (json.email) this.email = json.email
        if (json.isAdmin !== undefined) this.isAdmin = json.isAdmin
        if (json.firebaseId) this.firebaseId = json.firebaseId
        if (json.firebaseToken) this.firebaseToken = json.firebaseToken
        if (json.games) this.games = json.games
        if (json.wins) this.wins = json.wins
        if (json.loses) this.loses = json.loses
        if (json.resigned) this.resigned = json.resigned
        if (json.vessels) this.vessels = this.parseVessels(json.vessels)
        
        if (json.yourTurn) this.yourTurn = json.yourTurn
    }

    private parseVessels(json: any): Vessel[] {
        if (!json || !json.length) {
            return []
        }

        return json.map((item) => {
            return new Vessel(item)
        })
    }



    // Methods

    get isRanked(): boolean {        
        return this.vessels && this.vessels.length > 0
    }

}
