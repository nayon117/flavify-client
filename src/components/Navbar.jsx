import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import logo from "../assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  // handle scroll function
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <Link to="/menu">All</Link>
            </li>
            <li>
              <a>Salad</a>
            </li>
            <li>
              <a>Services</a>
            </li>
          </ul>
        </details>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Services</summary>
          <ul className="p-2">
            <li>
              <a>Order Online</a>
            </li>
            <li>
              <a>Table Booking</a>
            </li>
            <li>
              <a>Order Tracking</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Offers</a>
      </li>
    </>
  );
  return (
    <header className="max-w-screen-xl mx-auto fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out">
      <div
        className={`navbar px-4 md:px-8 lg:px-16 ${
          isSticky
            ? "shadow-md bg-base-100 transition-all duration-300 ease-in-out"
            : ""
        } `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <IoIosMenu className="text-2xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link href="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* search icons */}
          <button className="btn btn-ghost btn-circle hidden lg:flex">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* cartbtn */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle mr-3 hidden lg:flex items-center justify-center"
          >
            <div className="indicator">
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
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          {/* contact btn */}
          <button
            onClick={() => document.getElementById("my_modal_5").showModal()}
            className="btn bg-green flex items-center gap-2 text-white rounded-full px-6"
          >
            <FaRegUser /> Login
          </button>
         <Modal/>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
