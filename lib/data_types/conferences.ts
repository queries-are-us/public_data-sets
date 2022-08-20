
export type ConferenceVenue = {
    description: string,
    address: string,
    map_link: string,
    coordinates: { lat: string, lng: string }
}

export type ConferenceData = {
    id: string
    tags: string[]
    title: string
    next_events: {
        description: string,
        date: Date
    }[]
    location: string
    venues: ConferenceVenue
    website: string
    description: string
    media: string[]
}
