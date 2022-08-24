
export interface Publisher {
    entity: string
    website: string
}

export interface Link {
    type: string
    address: string
}

export interface Book {
    id: string
    title: string
    authors: string[]
    isbn_13: string
    isbn_10: string
    editions: number
    binding: string
    publishers: Publisher[]
    release_date: string
    publication_date: string
    pages: number
    languages: string[]
    links: Link[]
    tags: string[]
    description: string
}
