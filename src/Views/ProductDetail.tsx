import { useParams } from "react-router-dom";
import { fetchProductById } from "../API";
import { RootLayout } from "../Layouts"
import { useQuery } from '@tanstack/react-query';
import { CircularButton } from "../Components/buttons";
import QuantitySelector from '../Components/products/QuantitySelector';

const ProductDetail = () => {

  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProductById(id!)
  })

  console.log(data, isLoading, isError)
  return (
    <RootLayout>
      <section
        className="flex flex-wrap w-3/4 border-2 p-4 justify-evenly items-center"
      >

        <figure className=" bg-primary-base items-center">
          <img
            src={data?.image}
            alt=""
            className="h-96 w-96"
          />
        </figure>
        <div className="w-96 flex flex-col items-center gap-4">
          <h1
            className='text-center text-4xl font-bold text-secondary-dark'
          >{data?.title}</h1>
          <hr className="w-full" />
          <p
            className='text-center text-2xl'
          >${data?.price}</p>

          <QuantitySelector />

          <p className='text-center text-sm text-justify'>{data?.description}</p>

          <button className="bg-secondary-dark text-primary-light p-2 rounded-md hover:bg-secondary-base transition ease-in duration-100">
            Add To Cart
          </button>
        </div>
      </section>


    </RootLayout>

  )
}

export default ProductDetail
