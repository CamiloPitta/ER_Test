import { createBrowserRouter } from "react-router-dom";
import { Home, ProductDetail, Products } from "../Views";
import ErrorPage from "../Views/ErrorPage";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Home/>,
        errorElement: <ErrorPage />
    },
    {
        path: '/products', 
        element: <Products/>
        
    },
    {
        path: '/products/:id', 
        element: <ProductDetail/>
    },

])