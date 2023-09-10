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
    onCloseCartProducts: () => void,
    onOpenCartProducts: () => void,
    removeProduct: (id: number) => void,
    substractProduct: (id: number, quantity: number) => void
    closeCart: () => void;
    successfulPurchase: () => void,
    continuePurchasing: () => void
}


export interface ProductWithCount extends APIResponse {
    count: number,
}


export const ProductContext = createContext<ProductContextValues>({
    isCartProductsOpen: false,
    products: [],
    totalPrice: 0,
    totalProducts: 0,
    isCheckoutClicked: false,
    isContinuePurchasing: false,
    addProduct: () => {},
    onCloseCartProducts: () => {},
    onOpenCartProducts: () => {},
    removeProduct: () => {},
    substractProduct: () => {},
    closeCart: () => {},
    successfulPurchase: () => {},
    continuePurchasing: () => {}
}) 