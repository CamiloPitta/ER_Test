import { RootLayout } from "../Layouts"
import GeneralProducts from '../Components/products/GeneralProducts';
import { fetchProducts } from "../API";
import { useQuery } from '@tanstack/react-query';
import { ProductSkeleton } from "../Components/skeletons";
import { ErrorPage } from ".";
import { useEffect } from "react";
import { ChangeDocumentTitle } from "../utils";


const Products = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(20)
  })

  useEffect(() => {
    console.log('test')
    ChangeDocumentTitle('ER - Shop - Products')
  }, [])

  if (isError) return <ErrorPage />

  return (
    <RootLayout>
      <h1 className="font-custom uppercase text-3xl p-10 text-secondary-dark text-center tablet:self-start tablet:ps-40">These are just for you</h1>
      {
        isLoading && (
          <div className="flex flex-wrap gap-4 justify-center">
            {
              Array.from([1, 2, 3, 4]).map(elem => (
                <ProductSkeleton key={elem} />
              ))
            }
          </div>
        )
      }

      {
        data && (
          <section
            className="flex flex-wrap justify-evenly gap-4 w-4/5 mb-6"
          >
            {
              data.map((product) => {
                return (

                  <GeneralProducts
                    key={product.id}
                    product={product}
                  />

                )
              })
            }
          </section>
        )
      }
    </RootLayout>


  )
}

export default Products
