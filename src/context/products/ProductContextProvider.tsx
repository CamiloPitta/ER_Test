import { FC, PropsWithChildren, useMemo, useState } from "react"
import { ProductContext } from "."
import { ProductWithCount } from "./ProductContext"
import { APIResponse } from "../../interfaces/products"

const ProductContextProvider: FC<PropsWithChildren> = ({ children }) => {

  const [products, setProducts] = useState<ProductWithCount[]>([])
  const [isCartProductsOpen, setIsCartProductsOpen] = useState(false)
  const [isCheckoutClicked, setIsCheckoutClicked] = useState(false)
  const [isContinuePurchasing, setIsContinePuchasing] = useState(true)
  
  const totalProducts = useMemo(() => {
    const sum = products.reduce((previous, current) => {
      return previous + current.count
    }, 0)
    return sum
  }, [products])

  const totalPrice = useMemo(() => {
    const sum = products.reduce((previous, current) => {
      return previous + (current.count * current.price)
    }, 0)
    return sum
  }, [products])


  const addProduct = (product: APIResponse, quantity: number) => {
    isContinuePurchasing == true ? (
    setProducts(currentProducts => {
      
      
      const isProductInProducts = currentProducts.some(prod => prod.id === product.id)
      
      if (isProductInProducts) {
        const updatedProducts = currentProducts.map(prod => {
          if (prod.id === product.id) return { ...prod, count: prod.count + quantity }
          return prod
        })
        return updatedProducts
      }
      return [
        ...currentProducts,
        {
          ...product,
          count: quantity
        }
      ]
    })
  ) : ''
  }

  const substractProduct = (id: number, quantity: number) => {
    setProducts(currentProducts => {
      const updatedProducts = currentProducts.map(prod => {
        if (prod.id === id) {
          const differenceCounts = prod.count - quantity
          return {
            ...prod,
            count: differenceCounts < 1 ? 1 : differenceCounts
          }
        }
        return prod
      })
      return updatedProducts
    })
  }
  const removeProduct = (id: number) => {
    setProducts(currentProducts => currentProducts.filter(product => product.id !== id))
  }

  const onOpenCartProducts = () => {
    console.log('open')
    setIsCartProductsOpen(true)
  }

  // const onCloseCartProducts = () => {
  //   setIsCartProductsOpen(false)
  // }

  const closeCart = () => {
    setIsCartProductsOpen(false);
  };

  const successfulPurchase = () => {
    setProducts([]) 
    setIsCheckoutClicked(true)
    setIsContinePuchasing(false)
  }

const continuePurchasing = () => {
  setIsCheckoutClicked(false)
  setIsContinePuchasing(true)
  setIsCartProductsOpen(false)
}

  return (
    <ProductContext.Provider
      value={{
        isCartProductsOpen,
        products,
        totalPrice,
        totalProducts,
        isCheckoutClicked,
        isContinuePurchasing,
        addProduct,
        // onCloseCartProducts,
        onOpenCartProducts,
        removeProduct,
        substractProduct,
        closeCart,
        successfulPurchase,
        continuePurchasing

      }}
    >
      {children}

    </ProductContext.Provider>
  )
}

export default ProductContextProvider
