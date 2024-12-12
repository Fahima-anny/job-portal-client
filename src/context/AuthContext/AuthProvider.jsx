import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../FIREBASE.INIT.JS";


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null) ;
    const [loading, setLoading] = useState(true) ;

const createUser = (email, pass) => {
    setLoading(true) ;
    return createUserWithEmailAndPassword(auth, email, pass) ;
}

    const authInfo = {
user,
loading,
createUser,

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