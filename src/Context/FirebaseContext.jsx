import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const FirebaseAuth = getAuth(app);

const FirebaseContext = ({ children }) => {
    const [user,setUser]=useState()
    const [loader,setLoader]= useState(true)

    const FirebaseLogin=(email,pass)=>{
        setLoader(true);
        return signInWithEmailAndPassword(FirebaseAuth,email,pass);
    }
    const FirebaseSignup=(email,pass)=>{
        setLoader(true);
        return createUserWithEmailAndPassword(FirebaseAuth,email,pass)
    }
    const FirebaseUpdateUserProfile=(name,photo)=>{
        setLoader(true);
        return updateProfile(FirebaseAuth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }
    const FirebaseLogOutUser=()=>{
        setLoader(true);
        return signOut(FirebaseAuth);
    }
    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(FirebaseAuth,currentUser=>{
            setLoader(false);
            setUser(currentUser);
        })
        return ()=>{
            return unSubscribe()
        }
    },[])



    const authInfo = {
        user,
        loader,
        FirebaseLogin,
        FirebaseSignup,
        FirebaseUpdateUserProfile,
        FirebaseLogOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default FirebaseContext