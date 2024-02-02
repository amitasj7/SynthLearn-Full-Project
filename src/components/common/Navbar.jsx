import React, { useEffect, useState } from "react";
import logo from "../../assets/Logo/Logo-Full-Light.png";
import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import { useSelector } from "react-redux";

import Button from "../core/HomePage/Button";
import ProfileDropDown from "../core/Auth/ProfileDropDown";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { apiConnector } from "../../services/apiconnector";
import { categories } from "../../services/apis";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const { totalItems } = useSelector((state) => state.cart);

  const location = useLocation();

  const [subLinks, setSubLinks] = useState([]);

  const fetchSublinks = async () => {
    try {
      const result = await apiConnector("GET", categories.CATEGORIES_API);
      console.log("Printing Sublinks result: ", result);
      setSubLinks(result?.data);
      // console.log("your data is : ", subLinks);
      console.log("your data is : ", result?.data);

      console.log("your message: ", result?.data.message);
      console.log("your allcategories: ", result?.data.allcategories[0].name);
    } catch (error) {
      console.log("Could not fetch data Error: ", error);
    }
  };

  useEffect(() => {
    fetchSublinks();
  }, []);

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div className="flex flex-row h-14 items-center justify-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Image */}
        <Link to="/">
          <img
            src={logo}
            alt="SynthLearn logo"
            width={160}
            height={42}
            loading="lazy"
          />
        </Link>

        {/* Nav Links */}
        <nav>
          <ul className="flex flex-row gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                {link.title === "Catalog" ? (
                  <div className="relative flex flex-row items-center gap-2 group">
                    <p>{link.title}</p>
                    <TiArrowSortedDown />

                    <div
                      className="invisible absolute left-[50%] translate-x-[-50%] translate-y-[80%] top-[50%] flex flex-col rounded-md bg-richblack-5 p-4 text-richblue-900 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 lg:w-[300px]
                    "
                    >
                      <div className="absolute left-[50%] top-0 translate-x-[80%] translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5"></div>

                      {subLinks && subLinks.length ? (
                        subLinks.map((data, outerindex) => {
                          <div key={outerindex}>
                            {data.allcategories.map((category, innerIndex) => (
                              <Link to={`/${category.name}`} key={innerIndex}>
                                <p className="text-3xl">{category.name}</p>
                                <div>
                                  {console.log("name is : ", category.name)}
                                </div>
                              </Link>
                            ))}
                          </div>;
                        })
                      ) : (
                        <div></div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      }`}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Login / signup / Dashboard */}
        <div className="flex gap-x-4 items-center">
          {user && user?.accountType != "Instructor" && (
            <Link to="/dashboard/cart" className="relative">
              <AiOutlineShoppingCart />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
          )}
          {token === null && (
            <Link to="/login">
              <button className="border border-richblack-700 bg-richblack-800 px-[12px]py-[8px] text-richblack-100 rounded-md">
                LogIn
              </button>
            </Link>
          )}
          {token === null && (
            <Link to="/signup">
              <button className="border border-richblack-700 bg-richblack-800 px-[12px]py-[8px] text-richblack-100 rounded-md">
                Sign UP
              </button>
            </Link>
          )}
          {token !== null && <ProfileDropDown />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;