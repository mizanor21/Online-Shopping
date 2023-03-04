import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Signup from "../components/Authentication/Signup/Signup";
import Home from "../components/Pages/Home/Home";
import Layouts from "../layouts/Layouts";

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
            }
        ]
    }
])

export default router;