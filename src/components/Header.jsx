import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="py-3 px-2 z-30 absolute top-4 w-full flex justify-center">
      <nav className="w-999 m-auto">
        <div className="header flex justify-between">
          <div className="logo w-2/6">
            <h2 className="text-3xl text-green-500 font-semibold">Foodie</h2>
          </div>
          <div className="navigation w-4/6">
            <ul className="flex justify-between">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-bold"
                      : "hover:text-green-500 cursor-pointer"
                  }
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-bold"
                      : "hover:text-green-500 cursor-pointer"
                  }
                  to={"/about"}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-bold"
                      : "hover:text-green-500 cursor-pointer"
                  }
                  to={"/services"}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-bold"
                      : "hover:text-green-500 cursor-pointer"
                  }
                  to={"/company"}
                >
                  Our Company
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-green-500 font-bold"
                      : "hover:text-green-500 cursor-pointer"
                  }
                  to={"/pages"}
                >
                  Pages
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
