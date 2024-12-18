import Lottie from "lottie-react";
import animation from '../assets/login.json'
import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import SocialLogin from "./shared/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {

    const {signinUser} = useContext(AuthContext) ;
    const navigate = useNavigate() ;
    const location = useLocation() ;
    // console.log(location);
    const from = location.state || "/" ;

    const handleSignin = e => {
        e.preventDefault() ;
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.pass.value ;
        // console.log(email, pass) ;

        signinUser(email, pass)
        .then(res => {
          // console.log(res.user)
          navigate(from) ;

          const user = {email} ;
axios.post('http://localhost:3000/jwt', user, {withCredentials: true})
.then(res => {
  console.log(res.data);
})


// axios.post("http://localhost:3000/jwt", user, {
//   withCredentials: true
// })
// .then(res => {
//   // console.log("axios inside");
//   console.log("data from sign in",res.data);
// })

        })
.catch(er => {
  console.error(er)
})

    }

    return (
        <div className="hero min-h-[90vh]">
        <div className="hero-content flex-col lg:flex-row justify-between">
          <div className="">
          <Lottie animationData={animation} loop={true} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="text-5xl text-center font-bold">Sign In now!</h1>
            <form onSubmit={handleSignin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='pass' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>

                <div>
                  <SocialLogin></SocialLogin>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignIn;