import { Vessel } from './vessel'
import { RB } from './../types'

export class User {

    username?: string
    slug?: string
    currency?: number
    email?: string
    isAdmin?: boolean
    firebaseId?: string
    firebaseToken?: string
    games?: string[]
    vessels?: Vessel[]
    stats?: RB.PlayerStats
    rankings?: RB.UserRankings
    achievements: RB.Achievement[]

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
        if (json.slug) this.slug = json.slug
        if (json.currency !== undefined) this.currency = json.currency
        if (json.email) this.email = json.email
        if (json.isAdmin !== undefined) this.isAdmin = json.isAdmin
        if (json.firebaseId) this.firebaseId = json.firebaseId
        if (json.firebaseToken) this.firebaseToken = json.firebaseToken
        if (json.games) this.games = json.games
        if (json.vessels) this.vessels = this.parseVessels(json.vessels)
        if (json.stats) this.stats = json.stats
        if (json.rankings) this.rankings = json.rankings
        if (json.achievements) this.achievements = json.achievements
        
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

    get rank(): string {
        if (!this.isRanked) return 'Ordinary Seaman'
        if (this.stats.rating >= 2000) return 'Fishing Admiral'
        if (this.stats.rating >= 1800) return 'Captain'
        if (this.stats.rating >= 1600) return 'Chief Mate'
        if (this.stats.rating >= 1500) return 'Second Mate'
        if (this.stats.rating >= 1400) return 'Third Mate'
        if (this.stats.rating >= 1200) return 'Boatswain'
        if (this.stats.rating >= 1100) return 'Coxswain' 
        if (this.stats.rating >= 1000) return 'Able Seaman'
        return 'Yeoman'
    }

}