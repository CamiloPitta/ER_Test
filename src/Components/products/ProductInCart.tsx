import { FC, useContext } from "react"
import { QuantitySelector } from "."
import { ProductContext, ProductWithCount } from "../../context/products/ProductContext"

interface Props {
    product: ProductWithCount
}

const ProductInCart: FC<Props> = ({ product }) => {

    const { addProduct, substractProduct, removeProduct} = useContext(ProductContext)

    const addCount = () => {
        addProduct(product, 1)
    }

    const substractCount = () => {
        substractProduct(product.id, 1)
    }

    const deleteProduct = () => {
        removeProduct(product.id)
    }

    return (
        <div
            className="p-2 flex flex-col items-center gap-2 shadow-sm shadow-secondary-light relative"
        >
            <figure
                className="flex gap-2 items-center justify-center"
            >
                <img
                    src={product.image}
                    alt={`image ${product.title}`}
                    className="h-20 w-20 rounded-lg"
                />
                <div className="">
                    <figcaption
                        className="text-primary-light"
                    >
                        {product.title.substring(0, 15)}...
                    </figcaption>
                    <p 
                        className="text-center text-sm text-primary-light font-bold"
                    >
                        ${(product.price * product.count).toFixed(2)}
                    </p>

                </div>
            </figure>
            <QuantitySelector
                count={product.count}
                addCount={addCount}
                substractCount={substractCount}
            />
            <button
                className="absolute top-2 right-2 h-5 w-5 rounded-full bg-primary-light flex justify-center items-center hover:bg-secondary-light transition-colors ease-in duration-100"
                title={`delete product ${product.title}`}
                onClick={deleteProduct}
            >
                x
            </button>
        </div>
    )
}

export default ProductInCart