import { NavLink } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order">Order Food</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white py-1 md:py-3 lg:py-5">
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
          <ul className="flex gap-4 uppercase px-1 font-inter font-extrabold">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
