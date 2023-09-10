import { useParams } from "react-router-dom";
import { fetchProductById } from "../API";
import { RootLayout } from "../Layouts"
import { useQuery } from '@tanstack/react-query';
import {QuantitySelector} from '../Components/products';
import { useContext, useState } from "react";
import { ProductContext } from "../context/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { addProduct, onOpenCartProducts } = useContext(ProductContext)

  const [count, setCount] = useState<number>(1)
  const addCount = () => {
    setCount(prev => prev + 1)
  }

  const substractCount = () => {
    setCount(prev => {
      if (prev > 1) return prev - 1
      return prev
    })
  }


  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!)
  })

  if (isLoading) return <h1>cargando</h1>
  if (isError) return <h1>Error</h1>


  const addProductToCart = () => {
    if (!data) return
    addProduct(data, count)
    onOpenCartProducts()
  }

  return (
    <RootLayout>
      <section
        className="flex flex-wrap w-8/12 border-2 p-4 justify-evenly items-center"
      >
        <figure>
          <img
            className="h-96 w-96"
            src={data.image}
            alt=""
          />
        </figure>
        <div
          className="w-80 flex flex-col items-center gap-2"
        >
          <h1
            className="text-4xl text-center text-secondary-dark font-bold"
          >
            {data.title}
          </h1>

          <hr className="w-full" />
          <p
            className="text-center text-2xl"
          >
            ${data.price}
          </p>
          <QuantitySelector
            count={count}
            addCount={addCount}
            substractCount={substractCount}
          />
          <p
            className="text-sm text-justify"
          >
            {data.description}
          </p>
          <button
            className="capitalize rounded-lg p-2 bg-secondary-dark text-primary-light text-lg hover:bg-secondary-base transition-colors ease-in duration-100 w-48 m-6 h-12"
            onClick={addProductToCart}
          >
            add to cart
          </button>
        </div>
      </section>
    </RootLayout>
  )
}

export default ProductDetail