


export interface APIResponse{
    id: number,
    tile: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: Rating
}

interface Rating{
    rate: number,
    count: number
}