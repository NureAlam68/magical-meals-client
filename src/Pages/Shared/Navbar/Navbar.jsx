import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
  }
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Order Food</NavLink>
      </li>
      <li>
        <Link>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
      </div>
        </Link>
      </li>
      {
        user ? (
          <li>
            <button onClick={handleLogOut}>LOGOUT</button>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        )
      }
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white py-1 md:py-3 lg:py-5 items-center">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-inter font-extrabold uppercase bg-slate-400"
            >
              {navOptions}
            </ul>
          </div>
          <div className="btn btn-ghost flex flex-col">
            <h1 className="text-[20px] md:text-[24px] lg:text-[32px] font-black font-cinzel">
              Magical Meals
            </h1>
            <p className="text-[18px] lg:text-[24px] font-bold mt-2 font-cinzel">
              Restaurant
            </p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-4 uppercase px-1 font-inter font-extrabold items-center">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
      {
        user ? <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border">
          <img
            alt="Tailwind CSS Navbar component"
            src={user?.photoURL} />
        </div>
      </div> : <CgProfile size={40} />
      }
    </div>
      </div>
    </>
  );
};

export default Navbar;
