import { Vessel } from './vessel'
import { config } from './../configs'
import { RB, Setti } from './../types'

export class Player {

    username: string = null
    color: string = null
    vessel: Vessel = null
    rating: number = null
    funds?: number = null
    location?: string = null
    trophies?: boolean[] = null
    explored?: string[] = null
    fished?: string[] = null
    isSunk?: RB.DamageType = null
    damage?: RB.Damage = null
    upgrades?: RB.Upgrades = null
    well?: Setti.NumberMap<number>[] = null
    skipScore?: number = null
    emote: RB.Emote = null

    constructor(json?: any) {
        if (!json) {
            return
        }

        this.parse(json)
    }



    // Parsing

    parse(json: any) {
        if (json.username) this.username = json.username
        if (json.color) this.color = json.color
        if (json.vessel) this.vessel = new Vessel(json.vessel)
        if (json.rating !== undefined) this.rating = json.rating
        if (json.funds !== undefined) this.funds = json.funds
        if (json.location) this.location = json.location
        if (json.trophies) this.trophies = json.trophies
        if (json.explored) this.explored = json.explored
        if (json.fished) this.fished = json.fished
        if (json.isSunk) this.isSunk = json.isSunk
        if (json.damage) this.damage = json.damage
        if (json.upgrades) this.upgrades = json.upgrades
        if (json.well) this.well = json.well
        if (json.skipScore !== undefined) this.skipScore = json.skipScore
        if (json.emote) this.emote = json.emote
    }

}
