import { createBrowserRouter } from "react-router-dom";
import { Home, ProductDetail, Products } from "../Views";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Home/>
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