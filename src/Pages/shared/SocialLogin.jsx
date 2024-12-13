import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import { button } from "motion/react-client";


const SocialLogin = () => {
    const {signInWithGoogle} = useContext(AuthContext) ;

    const handleLogin = () => {
        signInWithGoogle()
        .then(res => {
            console.log(res.user) ;            
        })
        .catch(er => console.log(er))
    }
    return (
        <>
                        <div className="divider text-gray-500">or</div>
                        <button onClick={handleLogin} className="btn btn-outline btn-primary w-full">Login with Google</button>
        </>
    );
};

export default SocialLogin;