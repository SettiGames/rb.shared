import { User } from './user'
import { config } from './../configs'

export class Vessel {

    slug?: string
    name: string
    type: string
    rating?: number
    location?: string
    colors?: string[]
    username?: string
    owner?: string | User

    constructor(json?: any) {
        if (!json) {
            return
        }

        this.parse(json)
    }



    // Computed

    get color() {
        return this.colors[0]
    }

    get typeName() {
        return config.vessels[this.type].name
    }

    get effect() {
        return config.vessels[this.type].effect
    }

    get shapes() {
        return config.vessels[this.type].shapes
    }



    // Parsing

    parse(json: any) {
        if (json.name) this.name = json.name
        if (json.slug) this.slug = json.slug
        if (json.rating !== undefined) this.rating = json.rating
        if (json.type) this.type = json.type
        if (json.location) this.location = json.location
        if (json.colors) this.colors = json.colors
        if (json.username) this.username = json.username
        if (json.owner) this.parseOwner(json.owner)
    }

    private parseOwner(input: any) {
        if (typeof input === "string") {
            this.owner = input
        }

        this.owner = new User(input)
    }

}
