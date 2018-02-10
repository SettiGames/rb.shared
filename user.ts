import { RB } from './types'

export class User {

    username?: string
    email?: string
    currency?: number
    rating?: number
    isAdmin?: boolean
    firebaseId?: string
    firebaseToken?: string
    games?: string[]
    wins?: string[]
    loses?: string[]
    resigned?: string[]
    vessels?: RB.Vessel[]

    constructor(json?: any) {
        if (json) {
            this.parse(json)
        }
    }



    // Parsing

    parse(json: any) {
        if (json.username) this.username = json.username
        if (json.email) this.email = json.email
        if (json.currency !== undefined) this.currency = json.currency
        if (json.rating) this.rating = json.rating
        if (json.isAdmin !== undefined) this.isAdmin = json.isAdmin
        if (json.firebaseId) this.firebaseId = json.firebaseId
        if (json.firebaseToken) this.firebaseToken = json.firebaseToken
        if (json.games) this.games = json.games
        if (json.wins) this.wins = json.wins
        if (json.loses) this.loses = json.loses
        if (json.resigned) this.resigned = json.resigned
        if (json.vessels) this.vessels = json.vessels
    }



    // Methods

    get isRanked(): boolean {        
        return this.vessels && this.vessels.length > 0
    }

}
