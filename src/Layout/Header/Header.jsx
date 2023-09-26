import React from "react";
import { NavLink } from "react-router-dom";
import Logo from '../../assets/Logo.png'

const Header = () => {
  return (
    <div >
      <nav className="flex justify-between items-center px-4 py-3 ">
        <div>
            <img className="w-[150px]" src={Logo} alt="Logo" />
        </div>
        <ul className="flex lg:gap-6 gap-3">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "font-bold" : isActive ? "font-bold text-[#FF444A] underline" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/donation"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "font-bold text-[#FF444A] underline" : ""
            }
          >
            Donation
          </NavLink>
          <NavLink
            to="/statistics"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "font-bold text-[#FF444A] underline" : ""
            }
          >
            Statistics
          </NavLink>
        </ul>
      </nav>

    </div>
  );
};

export default Header;
