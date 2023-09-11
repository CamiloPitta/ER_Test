import { FC, PropsWithChildren, useContext } from "react"
import { Navbar, Footer } from '../Components/mainComponents';
import { CartProducts } from '../Components/products';
import { ProductContext } from '../context/products';

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
    const {totalProducts, isCartProductsOpen} = useContext(ProductContext)
    return (
        <>
            <Navbar />
            <main
                className="min-h-[calc(100vh-144px)] pt-14 flex flex-col items-center justify-center animate-fade"
            >
                {children}
            </main>
            {
                totalProducts >= 0 && isCartProductsOpen && (
                    <CartProducts />
                )
            }
            <Footer />
        </>
    )
}

export default RootLayout
