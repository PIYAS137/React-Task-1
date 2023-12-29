import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../Pages/HomePage/HomePage';
import RootPage from '../Pages/RootPage/RootPage';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import CartPage from '../Pages/CartPage/CartPage';

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