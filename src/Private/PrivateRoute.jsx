import { useContext } from "react"
import { AuthContext } from "../Context/FirebaseContext"
import { Navigate } from "react-router-dom";





const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return <div className=" w-full h-screen flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to={'/login'} />

}

export default PrivateRoute