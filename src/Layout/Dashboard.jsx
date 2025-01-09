import { FaCalendar, FaHome, FaList, FaMoneyBill, FaShoppingCart, FaStar } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-[280px] min-h-screen bg-[#D1A054] pt-[50px]">
        <div className="btn btn-ghost flex flex-col">
          <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-black font-cinzel">
            Magical Meals
          </h1>
          <p className="text-[18px] lg:text-[24px] font-bold mt-2 font-cinzel">
            Restaurant
          </p>
        </div>
        <ul className="menu mt-[60px] px-6 space-y-5 uppercase font-semibold">
          <li>
            <NavLink to="/dashboard/userHome">
            <FaHome></FaHome>
            User Home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
            <FaCalendar></FaCalendar>
            reservation</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
            <FaMoneyBill></FaMoneyBill>
            payment history</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
            <FaShoppingCart></FaShoppingCart>
            My Cart</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
            <FaStar></FaStar>
            add review</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
            <FaList></FaList>
            my booking</NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
            <FaHome></FaHome>
            home</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/menu">
            <FaList></FaList>
            menu</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shop">
            <FaBagShopping />
            Shop</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
            <MdContactMail />
            Contact</NavLink>
          </li>
        </ul>
      </div>
      {/*  dashboard content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
