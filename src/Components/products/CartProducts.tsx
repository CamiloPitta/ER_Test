import { useContext } from "react"
import { ProductContext } from "../../context/products"
import ProductInCart from "./ProductInCart"

const CartProducts = () => {

  const { products, totalPrice } = useContext(ProductContext)

  return (
    <aside className="w-64 h-screen absolute top-0 right-0 bg-secondary-dark p-2 flex flex-col gap-2 overflow-y-auto">
      {
        products.map(product => (
          <ProductInCart 
            key={product.id}
            product={product}
          />
        ))
      }
      <p
        className="text-2xl text-primary-light font-extrabold text-center"
      >
        Total: {totalPrice.toFixed(2)}
      </p>
    </aside>
  )
}

export default CartProducts