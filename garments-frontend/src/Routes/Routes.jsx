import { createBrowserRouter } from "react-router";
import Root from "../Layouts/RootLayout/Root";
import AllProducts from "../Pages/Products/AllProducts";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path : "/",
        Component : Root,
        children : [
            {
                index : true,
                Component : Home
            },
            {
                path : "/all-products",
                Component: AllProducts
            },
            {
                path : "/about-us",
                Component : AboutUs
            },
            {
                path : "/login",
                Component : Login
            },
            {
                path : "/register",
                Component : Register
            }
        ]
    }
])

export default router;