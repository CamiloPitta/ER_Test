import { useContext } from "react"
import { CustomNavLink } from '../links/';
import { ProductContext } from "../../context/products"

const Navbar = () => {
  const { totalProducts, toggleCartProducts } = useContext(ProductContext)
  const handleOpenCartClick = () => {
    // onOpenCartProducts();
    toggleCartProducts()
  };
  return (
    <header className='fixed w-full z-10'>
      <nav
        className='bg-primary-light h-14 p-2 flex items-center justify-end mobile:pe-20 tablet:pe-80 gap-4'
      >
        <CustomNavLink
          to='/'
          content='home'
        />
        <CustomNavLink
          to='/products'
          content='products'
        />
        {
          // totalProducts > 0 && (
            <button
              className="border-2 p-1 rounded-full flex items-center justify-center relative hover:border-secondary-dark hover:bg-secondary-light transition-colors ease-in"
              onClick={handleOpenCartClick}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/128/4175/4175027.png"
                alt="icon cart"
                className="h-5 w-5"
              />
              <div
                className="h-4 w-4 p-3 rounded-full absolute bg-secondary-dark text-xs text-primary-light flex justify-center items-center -right-4 -top-2"
        
              >
                {totalProducts}
              </div>
            </button>
          // )
        }
      </nav>
    </header>
  )
}

export default Navbar
