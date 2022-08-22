
export interface Coordinates {
    lat: string
    lng: string
}

export interface Venue {
    description: string
    address: string
    map_link: string
    coordinates: Coordinates
}

export interface Event {
    description: string
    date: Date
}

export interface Conference {
    id: string
    tags: string[]
    title: string
    next_events: Event[]
    location: string
    venues: Venue[]
    website: string
    description: string
    media: string[]
}
