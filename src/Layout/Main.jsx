import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    const location = useLocation();

    const noNavbarFooter = location.pathname.includes('login')
    return (
        <div>
            {noNavbarFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;