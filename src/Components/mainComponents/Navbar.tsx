import {CustomNavLink} from '../links/';


const Navbar = () => {
  return (
   <header className='fixed w-full'>
    <nav
      className='bg-secondary-base h-14 p-2 flex items-center justify-center gap-4'
    >
      <CustomNavLink
      to='/'
      content='home'
      />
      <CustomNavLink
      to='/products'
      content='products'
      />
    </nav>
   </header>
  )
}

export default Navbar
