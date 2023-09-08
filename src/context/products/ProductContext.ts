import { createContext } from 'react';
import { APIResponse } from '../../Interfaces/products';

interface ProductContextValues {
    products: APIResponse[]
}

export const ProductContext = createContext<ProductContextValues>({
    products: []
})