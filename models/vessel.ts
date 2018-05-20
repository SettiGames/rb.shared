import { User } from './user'
import { config } from './../configs'
import { RB } from './../types'

export class Vessel {

    slug: string
    name: string
    type: string
    colors?: string[]
    userSlug?: string
    username?: string
    owner?: string | User
    stats?: RB.VesselStats
    rankings?: RB.VesselRankings

    constructor(json?: any) {
        if (!json) {
            return
        }

        this.parse(json)
    }



    // Computed

    get preferredColor(): string {
        return this.colors[0] || null
    }

    get typeName(): string {
        return config.vessels[this.type].name
    }

    get flags(): string[] {
        return config.vessels[this.type].flags
    }

    get shapes() {
        return config.vessels[this.type].shapes
    }



    // Methods

    hasFlag(flag: RB.VesselFlag): boolean {
        if (!this.flags) {
            return false
        }

        return this.flags.indexOf(flag) !== -1
    }



    // Parsing

    parse(json: any) {
        if (json.name) this.name = json.name
        if (json.slug) this.slug = json.slug
        if (json.type) this.type = json.type
        if (json.colors) this.colors = json.colors
        if (json.userSlug) this.userSlug = json.userSlug
        if (json.username) this.username = json.username
        if (json.owner) this.parseOwner(json.owner)
        if (json.stats) this.stats = json.stats
        if (json.rankings) this.rankings = json.rankings
    }

    private parseOwner(input: any) {
        if (typeof input === "string") {
            this.owner = input
        }

        this.owner = new User(input)
    }

}
