import { useParams } from "react-router-dom";
import { fetchProductById } from "../API";
import { RootLayout } from "../Layouts"
import { useQuery } from '@tanstack/react-query';

const ProductDetail = () => {

const {id} = useParams<{id: string}>()


  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", id],
    queryFn: () => fetchProductById(id!)
  })

  console.log(data, isLoading, isError)
  return (
    <RootLayout>
        <img src={data?.image} alt="" />
    </RootLayout>
   
  )
}

export default ProductDetail
