import React, { useState } from "react";
import '../Body/Body.css'
import "../../index.css"
// import Logo from "../../Images/attachment_126252018.png";
import { Link } from "react-router-dom";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import {
  FaShoppingCart,
  FaUser,
  FaHome,
  FaEnvelope,
  FaInfoCircle,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const cartItems = useSelector((store)=> store.cart.items)

  return (
    <>
      <div className="flex justify-between box2 mx-auto	bg-[white] items-center py-6 3xl sticky top-0 shadow-black bg-[]
      ">
        <div className="border-solid">
          {/* <img className="logo" src={Logo} width="100px" height="80px" /> */}
          FoodCart
        </div>
        <div className="">
          <ul className="flex justify-between items-center">
            <li className="mx-2 hover:text-[#ffa700]">
              <Link className=" " to="/">
                <div className="flex items-center">
                  <FaHome size={18} className="mr-2" />
                  <span>Home</span>
                </div>
              </Link>
            </li>
            <li className="mx-2  hover:text-[#ffa700]">
              <Link className="link-styling" to="/about">
                <div className="flex items-center">
                  <FaUser size={15} className="mr-2" />
                  <span>About Us</span>
                </div>
              </Link>
            </li>
            <li className="mx-2  hover:text-[#ffa700]">
              <Link className="link-styling custom-pd" to="/contact">
                {" "}
                <div className="flex items-center">
                  <FaEnvelope size={18} className="mr-2 " />
                  <span>Contact Us</span>
                </div>
              </Link>
            </li>
            <li className="mx-2  hover:text-[#ffa700]">
              <Link className="link-styling " to="/cart">
                <div className="flex items-center">
                  <FaShoppingCart size={18} className="mr-2" />
                  <span>Cart({cartItems.length} items)</span>
                </div>
              </Link>
            </li>
            <li className="mx-2 ">
              <button
                className="login custom-pd"
                onClick={() => {
                  btnNameReact === "Login"
                    ? setBtnNameReact("Logout")
                    : setBtnNameReact("Login");
                }}
              >
                {btnNameReact}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
