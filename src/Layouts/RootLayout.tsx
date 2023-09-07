import { ReactNode, FC, PropsWithChildren } from "react"
import { Navbar, Footer } from '../Components';


const RootLayout: FC<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default RootLayout
