import { User } from './user'
import { config } from './../configs'

export class Vessel {

    owner?: string | User
    ownerUsername?: string
    name: string
    rating: number
    location: string
    type: string
    colors: string[]

    constructor(json?: any) {
        if (json) {
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
        if (json.owner) this.parseOwner(json.owner)
        if (json.ownerUsername) this.ownerUsername = json.ownerUsername
        if (json.name) this.name = json.name
        if (json.rating !== undefined) this.rating = json.rating
        if (json.location) this.location = json.location
        if (json.type) this.type = json.type
        if (json.colors) this.colors = json.colors
    }

    private parseOwner(input: any) {
        if (typeof input === "string") {
            this.owner = input
        }

        this.owner = new User(input)
    }

}
