import { RootLayout } from "../Layouts"
import GeneralProducts from '../Components/products/GeneralProducts';
import { fetchProducts } from "../API";
import { useQuery } from '@tanstack/react-query';


const Products = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(20)
  })
  console.log(data, isLoading, isError)

  return (
    <RootLayout>
      <h1 className="font-custom uppercase text-3xl p-10 text-secondary-dark w-4/5 ps-20">These are just for you:</h1>
      {
        data && (
          <section
            className="flex flex-wrap justify-evenly gap-4 w-4/5"
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
