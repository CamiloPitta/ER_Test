import { RootLayout } from "../Layouts"
import GeneralProducts from '../Components/products/GeneralProducts';
import { fetchProducts } from "../API";
import { useQuery } from '@tanstack/react-query';
import { useEffect } from "react";


const Products = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(20)
  })
  console.log(data, isLoading, isError)

  useEffect(() => {
    console.log('test')
    // ChangeDocumentTitle('ER - Shop - Products')
  }, [])

  return (
    <RootLayout>
      <h1 className="font-custom uppercase text-3xl p-10 text-secondary-dark text-center tablet:self-start tablet:ps-40">These are just for you:</h1>
      {
        data && (
          <section
            className="flex flex-wrap justify-center gap-4"
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
