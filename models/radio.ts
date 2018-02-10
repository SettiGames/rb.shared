import { RB } from './../types'

export class Radio {
    
    slug: string
    broadcasts: RB.Broadcast[]

    constructor(json?: any) {
        if (!json) {
            return
        }

        this.parse(json)
    }



    // Parsing

    parse(json: any) {
        if (json.slug) this.slug = json.slug
        if (json.broadcasts) this.parseBroadcasts(json.broadcasts)
    }

    private parseBroadcasts(json: any): RB.Broadcast[] {
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

}
