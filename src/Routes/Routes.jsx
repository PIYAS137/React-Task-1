import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import RootPage from '../Pages/RootPage/RootPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import CartPage from '../Pages/CartPage/CartPage';
import SignUpPage from '../Pages/SignUpPage/SignUpPage';

const router = createBrowserRouter([
    {
        path:'/',
        element:<RootPage/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'/signup',
                element:<SignUpPage/>
            },
            {
                path:'/login',
                element:<LoginPage/>
            },
            {
                path:'/cart',
                element:<CartPage/>
            }
        ]
    }
])

export default router;