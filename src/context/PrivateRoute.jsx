import { useContext } from "react";
import AuthContext from "./AuthContext/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { div } from "motion/react-client";


const PrivateRoute = ({children}) => {

const {user, loading} = useContext(AuthContext) ;
const location = useLocation() ;

if(loading){
    return <div className="min-h-[80vh] flex justify-center items-center">
        <span className=" loading loading-lg loading-spinner text-primary"></span>
    </div>
}

if(user){
    return children ;
}

    return <Navigate to='/signIn' state={location?.pathname}></Navigate>
};

export default PrivateRoute;