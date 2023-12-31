import { Link, NavLink } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/FirebaseContext";

const AppNavbar = () => {

    const { user, FirebaseLogOutUser } = useContext(AuthContext);

    const handleClickLogOut = () => {
        FirebaseLogOutUser()
            .then().catch()
    }

    const navLinkes = <>
        <li><NavLink to={'/'}>Homepage</NavLink></li>
        <li><NavLink to={'/cart'} className="relative">Cart <small className=" absolute right-0 -top-1 bg-yellow-500 text-black w-5 h-5 rounded-full flex justify-center items-center font-bold"><FaShoppingCart /> </small></NavLink></li>
    </>

    return (
        <div className="navbar bg-gray-800 rounded-b-lg text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-600 rounded-box w-52">
                        {navLinkes}
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl">LOGO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinkes}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ?
                    <button onClick={handleClickLogOut} className="btn bg-red-700 hover:bg-red-600 text-white border-none">Logout</button>
                    :
                    <NavLink to={'/login'}><button className="btn bg-gray-700 hover:bg-gray-600 text-white border-none">Login</button></NavLink>
                }
                {
                    user?.photoURL && <div className="w-12 aspect-square rounded-full ml-2 overflow-hidden">
                        <img src={user?.photoURL} />
                    </div>
                }
            </div>
        </div>
    )
}

export default AppNavbar