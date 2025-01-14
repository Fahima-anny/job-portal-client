import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../context/AuthContext/AuthContext";
import logo from '../../assets/job-logo.png'

const Navbar = () => {

const {user, signout} = useContext(AuthContext)

const handleSignout = () => {
  signout()
  .then(() => {
    alert("User Signed Out")
  })
  .catch(er => {
    console.log(er)
  })
}

const links = <>
 <li><NavLink to='/'>Home</NavLink></li>
 <li><NavLink to='/myApplications'>My Applications</NavLink></li>
 <li><NavLink to='/allJobs'>All Jobs</NavLink></li>
 <li><NavLink to='/addJob'>Add Job</NavLink></li>
 <li><NavLink to='/myPostedJobs'>My Posted Jobs</NavLink></li>
</>

    return (
        <div className="navbar py-3 max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {links}
            </ul>
          </div>
          <a className=" text-xl flex items-center gap-2">
            <img className="w-12" src={logo} alt="" />
            <h3 className="font-bold text-3xl">Job <span className="text-primary">Portal</span></h3>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
           {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
           {
            user 
            ? <>
                         <button onClick={handleSignout} className="btn btn-primary">Sign Out</button>
            </>
            : <>
             <Link to='/register' className="underline text-primary font-semibold">Register</Link>
             <Link to='/signIn' className="btn btn-primary">Sign In</Link>
            </>
           }
        </div>
      </div>
    );
};

export default Navbar;