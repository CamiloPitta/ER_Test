import { createContext } from 'react'
import { APIResponse } from '../../interfaces/products'

interface ProductContextValues {
    isCartProductsOpen: boolean,
    products: ProductWithCount[],
    totalPrice: number,
    totalProducts: number,
    isCheckoutClicked: boolean,
    isContinuePurchasing: boolean,
    addProduct: (product: APIResponse, quantity: number) => void,
    onOpenCartProducts: () => void,
    removeProduct: (id: number) => void,
    substractProduct: (id: number, quantity: number) => void
    closeCart: () => void;
    successfulPurchase: () => void,
    continuePurchasing: () => void
    toggleCartProducts: () => void
}


export interface ProductWithCount extends APIResponse {
    count: number,
}


export const ProductContext = createContext<ProductContextValues>({} as ProductContextValues) 

