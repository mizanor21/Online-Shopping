import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Signup from "../components/Authentication/Signup/Signup";
import Dashboard from "../components/Pages/Dashboard/Dashboard/Dashboard";
import Home from "../components/Pages/Home/Home";
import Panjabi from "../components/Pages/MenCollections/Panjabi/Panjabi";
import ProductDetails from "../components/Pages/ProductDetails/ProductDetails";
import Saree from "../components/Pages/WomenCollection/Saree/Saree";
import Layouts from "../layouts/Layouts";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts></Layouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/mtrending/${params.id}`)
            },
            {
                path: '/wt-details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/wtrending/${params.id}`)
            },
            {
                path: '/kt-details/:id',
                element: <ProductDetails></ProductDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/ktrending/${params.id}`)
            },
            {
                path: '/panjabi',
                element: <Panjabi></Panjabi>,
                loader: () => fetch('http://localhost:5000/panjabi')

            },
            {
                path: '/saree',
                element: <Saree></Saree>,
                loader: () => fetch('http://localhost:5000/saree')

            },

        ]

    },
    {
        path: '/dashboard',
        element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>
    }
])

export default router;