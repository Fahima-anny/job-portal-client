import Lottie from "lottie-react";
import animation from '../assets/login.json'
import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";

const Register = () => {

  const {createUser} = useContext(AuthContext) ;

    const handleSubmit = e => {
        e.preventDefault() ;
        const form = e.target ;
        const email = form.email.value ;
        const pass = form.pass.value ;

        const regex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
        if(!regex.test(pass)){
            alert("Password must contain 1 Uppercase, 1 digit and at least 6 characters") ;
            return ;
        }
        console.log(email, pass) ;

        createUser(email, pass)
        .then(res => {
          console.log(res.user)
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
          <h1 className="text-5xl text-center font-bold">Register now!</h1>
            <form onSubmit={handleSubmit} className="card-body">
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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;