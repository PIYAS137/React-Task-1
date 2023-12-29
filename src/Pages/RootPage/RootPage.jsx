import { Outlet } from "react-router-dom"
import AppNavbar from "../../Shared/AppNavbar/AppNavbar"


const RootPage = () => {
    return (
        <div className="w-full min-h-screen bg-black text-yellow-100">
            <div className=" container mx-auto">
                <AppNavbar />
                <Outlet />
            </div>
        </div>
    )
}

export default RootPage