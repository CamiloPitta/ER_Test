import { APIResponse } from "../interfaces/products"

const baseURL = 'https://fakestoreapi.com/products'

export const fetchProducts = async (limit: number = 10) => {
    try {
        const response = await fetch(`${baseURL}?limit=${limit}`)
        const products: APIResponse[] = await response.json()
        return products
    } catch (error) {
        throw new Error('Fetching error')
    }
}

export const fetchProductById = async (id: string) => {
    try {
        const response = await fetch(`${baseURL}/${id}`)
        const product: APIResponse = await response.json()
        return product
    } catch (error) {
        throw new Error('Fetching error')
    }
}
