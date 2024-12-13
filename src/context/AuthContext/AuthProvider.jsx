import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../FIREBASE.INIT.JS";


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null) ;
    const [loading, setLoading] = useState(true) ;
    const googleProvider = new GoogleAuthProvider() ;

const createUser = (email, pass) => {
    setLoading(true) ;
    return createUserWithEmailAndPassword(auth, email, pass) ;
}

const signinUser = (email, pass) => {
    setLoading(true) ;
    return signInWithEmailAndPassword(auth, email, pass) ;
}

const signout = () => {
    setLoading(true) ;
    return signOut(auth) ;
}

const signInWithGoogle = () => {
    setLoading(true) ;
    return signInWithPopup(auth, googleProvider) ;
}

    const authInfo = {
user,
loading,
createUser,
signinUser,
signout,
signInWithGoogle
    }

    useEffect(() => {
const unSubscribe = onAuthStateChanged(auth, currentUser => {
    setLoading(false) ;
    setUser(currentUser) ;
    console.log("Current User : ", currentUser) ;
})

return () => unSubscribe() ;
    } ,[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;