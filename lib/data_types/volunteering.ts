
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

export interface Volunteering {
    id: string
    tags: string[]
    title: string
    location: string
    website: string
    description: string
}
