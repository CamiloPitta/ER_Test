import { useContext} from "react"
import { ProductContext } from "../../context/products"
import ProductInCart from "./ProductInCart"
import { Link } from "react-router-dom"

const CartProducts = () => {

  const { products, totalPrice, isCheckoutClicked, closeCart, successfulPurchase, continuePurchasing } = useContext(ProductContext)

  return (
    <aside className="z-20 w-64 fixed h-full top-0 right-0 bg-secondary-light p-2 flex flex-col gap-2 overflow-y-auto animate-fade">
      <section>
        <div className="flex justify-end p-2">

          <button
            onClick={closeCart}
            className="text-lg hover:underline font-custom font-thin"
            title = 'Close cart'
          >
            Close x
          </button>
        </div>
        {products.length !== 0 ?  (
          <>

            {products.map((product) => (
              <ProductInCart key={product.id} product={product} />
            ))}
            {products.length > 0 && (
              <p className="text-2xl text-primary-dark font-extrabold text-center">
                Total: {totalPrice.toFixed(2)}
              </p>
            )}
          </>
        ) : ''}

      </section>

      {products.length !== 0 ?
        <button
        className="bg-secondary-dark my-4 text-primary-light h-10 w-full rounded-md hover:bg-secondary-base transition-colors ease-in duration-100"
          onClick={successfulPurchase}
        >Checkout</button> : ''

      }

      {products.length === 0 && isCheckoutClicked == false ?
        <p className="text-2xl text-primary-dark font-bold text-center"
        >Your cart is empty</p> : ''

      }

      {isCheckoutClicked == true && products.length === 0 ?
        <div>
          <p className="text-2xl text-primary-dark font-bold text-center"
          >Congratulations! Purchase successful</p>
          <Link
          to={'/products'}
          >
          <button
          className="bg-secondary-dark my-4 text-primary-light h-10 w-full rounded-md hover:bg-secondary-base transition-colors ease-in duration-100"
            onClick={continuePurchasing}
          >Continue purchasing</button>
          </Link>
        </div>
        : ''}

    </aside>
  )
}

export default CartProducts