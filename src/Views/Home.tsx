import { APIResponse } from "../Interfaces/products";
import { RootLayout } from "../Layouts"
import { useQuery } from '@tanstack/react-query';



const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=4')
    const products: APIResponse[] = await response.json()
    return products
  } catch (error) {
    console.log(`Error in promise: ${error}`)
  }
}

const Home = () => {

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", "4"],
    queryFn: fetchProducts
  })

  console.log(data, isLoading, isError)



  return (
    <RootLayout>
      <figure
        className="h-96 bg-cover"
        style={{ backgroundImage: 'url(//www.novoo-online.com/cdn/shop/files/1102_x_568-about_us.png?v=1673252682)' }}>
      </figure>

      {
        data && data.map((product) => {
          return (
            <img src={product.image} alt="" key={product.id}/>
          )
          
        })
      }

    </RootLayout>
  )
}

export default Home


