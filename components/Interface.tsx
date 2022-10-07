export interface Games {
    id: number,
    name: string,
    webbsiteUrl: string,
    releaseDate: Date,
    price: number,
    companyId: number
}

export interface Company {
    id: number,
    name: string,
    websiteUrl: string,
    country: string
}