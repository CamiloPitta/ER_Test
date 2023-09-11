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
        className="w-full mobile:h-52 tablet:h-96 bg-cover"
        // style={{ backgroundImage: 'url(//www.novoo-online.com/cdn/shop/files/1102_x_568-about_us.png?v=1673252682)' }}>
        // style={{ backgroundImage: 'url(https://cdn.media.amplience.net/i/truworths/Elements_Desktop_PLP_Makeup?fmt=auto)' }}>
        style={{ backgroundImage: 'url(https://utd-theme-7.myshopify.com/cdn/shop/files/THE_LACE_FW_21_22_Campaign_Video_-_YouTube_2023-07-05_21-32-19_1920x.png?v=1688585647)' }}>


      </figure>

      <h3 className="text-3xl font-custom text-secondary-dark uppercase mt-6 mb-4 mobile:self-center tablet:self-start tablet:ps-14">New arrivals:</h3>
      <section
        className="flex justify-evenly flex-wrap gap-4"
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
      <section className="w-full mobile:p-8 tablet:p-20 flex flex-col gap-4">
        <h3 className="text-3xl font-custom text-secondary-dark uppercase">About us...</h3>
        <p className="text-lg font-custom justify-normal text-justify font-thin">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus repudiandae minus cupiditate veritatis neque voluptatem iusto nesciunt exercitationem eos
          harum voluptates unde, culpa velit aliquam. At in eaque illum iure. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Ratione harum beatae cupiditate odio voluptatibus doloribus voluptas magnam tenetur nisi
          sit consequatur magni atque, ipsum impedit accusamus. Unde temporibus porro nihil.
        </p>
      </section>



    </RootLayout>
  )
}

export default Home


