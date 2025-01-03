import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Toaster } from "react-hot-toast";


const Main = () => {
    const location = useLocation();

    const noNavbarFooter = location.pathname.includes('login') || location.pathname.includes('signup');
    return (
        <div>
            <Toaster />
            {noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;