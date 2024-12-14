import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Navbar";
import Footer from "../Pages/shared/Footer";


const MainLayout = () => {
    return (
        <div >
            <Navbar></Navbar>
           <div className="max-w-7xl mx-auto my-16">
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;