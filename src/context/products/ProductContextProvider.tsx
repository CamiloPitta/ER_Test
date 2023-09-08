import { APIResponse } from '../../Interfaces/products';
import { ProductContext } from './ProductContext';
import { FC, PropsWithChildren, useState } from 'react';

const ProductContextProvider:FC <PropsWithChildren> = ({children}) => {

  const [products, setProducts] = useState<APIResponse[]>([])
  const addProduct = (prodcuts: APIResponse) => {

  }
  return (
  <ProductContext.Provider
  value={{products}}
  >
    {children}
  </ProductContext.Provider>
  )
}

export default ProductContextProvider
