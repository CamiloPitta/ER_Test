import { RootLayout } from "../Layouts"
import { useQuery } from '@tanstack/react-query';
import GeneralProducts from "../Components/products/GeneralProducts";
import { fetchProducts } from "../API";

const Home = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", "home"],
    queryFn: () => fetchProducts(4)
  })

  console.log(data, isLoading, isError)

  if (isError) throw new Error('Fetching error')

  return (
    <RootLayout>
      <figure
        className="h-96 bg-cover w-full"
        style={{ backgroundImage: 'url(//www.novoo-online.com/cdn/shop/files/1102_x_568-about_us.png?v=1673252682)' }}>
      </figure>


      <section
        className="flex justify-evenly"
      >
        {
          isLoading 
          ? <span className="animate-pulse">Is Loading...</span>
          : data.map((product) => {
            return (

              <GeneralProducts
                product={product}
                key={product.id}
              />

            )
          })
        }
      </section>



    </RootLayout>
  )
}

export default Home


