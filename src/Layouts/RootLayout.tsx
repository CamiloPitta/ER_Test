import { FC, PropsWithChildren } from "react"
import { Navbar, Footer } from '../Components/mainComponents';


const RootLayout: FC<PropsWithChildren> = ({ children }) => {

    return (
        <>
            <Navbar />
            <main
            className="min-h-[calc(100vh-144px)] pt-14"
            >
                {children}
            </main>

            <Footer />
        </>
    )
}

export default RootLayout
