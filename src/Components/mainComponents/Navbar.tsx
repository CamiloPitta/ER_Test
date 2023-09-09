import {CustomNavLink} from '../links/';


const Navbar = () => {
  return (
   <header className='fixed w-full'>
    <nav
      className='bg-primary-light h-14 p-2 flex items-center justify-end pe-80 gap-4'
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
