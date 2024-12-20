import axios from "axios";
import { useContext, useEffect } from "react";
import AuthContext from "./AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";


const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-lime-six.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {

    const { signout } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {

        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            console.log("error caught in interceptor", error);

            if (error.status === 401 || error.status === 403) {
                console.log("need to logout the user");
                signout()
                    .then(() => {
                        console.log("user Logged out");
                        navigate("/signIn");
                    })
            }

            return Promise.reject(error)
        })

    }, [])

    return axiosInstance;
};

export default useAxiosSecure;