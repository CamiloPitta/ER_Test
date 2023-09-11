import { useParams } from "react-router-dom";
import { fetchProductById } from "../API";
import { RootLayout } from "../Layouts"
import { useQuery } from '@tanstack/react-query';
import { QuantitySelector } from '../Components/products';
import { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/products";
import { ProductDetailSkeleton } from "../Components/skeletons";
import { ErrorPage } from ".";
import { ChangeDocumentTitle } from "../utils";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { addProduct, onOpenCartProducts } = useContext(ProductContext)

  const [count, setCount] = useState<number>(1)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!)
  })

  useEffect(() => {
    const keyWord = data ? data.title : id
    ChangeDocumentTitle(`ER - Store - Product ${keyWord}`)
  }, [data])

  if (isError) return <ErrorPage />

  const addCount = () => {
    setCount(prev => prev + 1)
  }

  const substractCount = () => {
    setCount(prev => {
      if (prev > 1) return prev - 1
      return prev
    })
  }


  const addProductToCart = () => {
    if (!data) return
    addProduct(data, count)
    onOpenCartProducts()
  }

  return (
    <RootLayout>
      {
        isLoading
          ? (
            <ProductDetailSkeleton />
          )
          : (
            <section
              className="flex flex-wrap gap-4 tablet:border-2 tablet:p-4 justify-evenly items-center mt-4 mb-4 rounded-xl animate-fade"
            >
              <figure>
                <img
                  className="mobile:h-80 w-auto tablet:h-96"
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
                  title={`Add ${data.title} to the cart`}
                >
                  add to cart
                </button>
              </div>
            </section>)}
    </RootLayout>
  )
}

export default ProductDetail