import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../FIREBASE.INIT.JS";
import axios from "axios";


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
    setUser(currentUser) ;
    console.log("Current User : ", currentUser?.email) ;
 if(currentUser?.email){
    const user = {email : currentUser?.email} ;
    axios.post("https://job-portal-server-lime-six.vercel.app/jwt",user,{withCredentials: true})
    .then(res => {
        console.log("login token",res.data);
        setLoading(false) ;
    })
 }
 else{
axios.post("https://job-portal-server-lime-six.vercel.app/logout", {} , {withCredentials: true})
.then(res => {
    console.log("Logout theke :",res.data)
    setLoading(false) ;
 })
 }

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