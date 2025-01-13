import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaMoneyBill,
  FaShoppingCart,
  FaStar,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { IoBagCheck, IoMenu } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex md:bg-gray-100">
      <div className="w-[280px] min-h-screen bg-[#D1A054] pt-[50px]">
        <div className="flex flex-col text-center">
          <h1 className="text-[20px] md:text-[24px] lg:text-[28px] font-black font-cinzel">
            Magical Meals
          </h1>
          <p className="text-[18px] lg:text-[24px] font-bold mt-2 font-cinzel">
            Restaurant
          </p>
        </div>
        <ul className="menu mt-[60px] px-6 space-y-5 uppercase font-semibold">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                <FaUtensils />
                  add items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList>
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                <FaBook />
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                <FaUsers />
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>
                  reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/payment">
                  <FaMoneyBill></FaMoneyBill>
                  payment history
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>
                  My Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addReview">
                  <FaStar></FaStar>
                  add review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myBooking">
                  <IoBagCheck />
                  my booking
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* shared nav links */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
            <IoMenu />
              menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/shop">
              <FaBagShopping />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/contact">
              <MdEmail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/*  dashboard content */}
      <div className="flex-1 mt-10 max-w-[992px] mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
