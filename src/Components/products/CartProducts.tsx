import { useContext, useState } from "react"
import { ProductContext } from "../../context/products"
import ProductInCart from "./ProductInCart"

const CartProducts = () => {

  const { products, totalPrice, closeCart, successfulPurchase } = useContext(ProductContext)
  const [isPurchaseSuccessful, setIsPurchaseSuccessful] = useState(false);

  const handleCheckout = () => {
    successfulPurchase();
    setIsPurchaseSuccessful(true);
  };

  return (
    <aside className="w-64 fixed h-screen top-0 right-0 bg-secondary-light p-2 flex flex-col gap-2 overflow-y-auto">
      <section>
        <div>

          <button
            onClick={closeCart}
            className="text-lg flex justify-end hover:underline py-2 ps-40 font-custom font-thin"
          >
           Close x
          </button>
        </div>
        {products.length === 0 ? (
          <p className="text-2xl text-primary-dark font-extrabold text-center">
            Your cart is empty.
          </p>
        ) : (
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
        )}

      </section>
      
      {products.length === 0 && isPurchaseSuccessful == true ? (
        <p className="text-2xl text-primary-dark font-extrabold text-center">
          Purchase successful!
        </p>
      ) : (
        <>
          <button 
          className="bg-secondary-dark text-primary-light h-10 rounded-md hover:bg-secondary-base transition-colors ease-in duration-100"
            onClick={handleCheckout}
          >Checkout</button>
        </>

        
      )}

    </aside>
  )
}

export default CartProducts


