import { RB } from './types'

export class Radio {
    
    slug: string
    broadcasts: RB.Broadcast[]

    constructor(json: any) {
        this.slug = json.slug
        this.broadcasts = this.parseBroadcasts(json.broadcasts)
    }



    // Parsing

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
