
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

export interface UserGroup {
    id: string
    title: string
    links: string[]
    tags: string[]
    description: string
    venues: Venue[]
}
