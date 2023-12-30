import { createContext, useState } from "react"


const AuthContext = createContext(null);



const FirebaseContext = ({ children }) => {
    const [user,setUser]=useState()
    const [loader,setLoader]= useState(true)


    const authInfo = {
        user,
        loader,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default FirebaseContext