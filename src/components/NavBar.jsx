import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ tabStyling }) => {
  return (
    <div className="position-relative w-100 top-0 " style={{ zIndex: "99" }}>
      <nav className="my_container py-md-5 py-4">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <button
              className={`fs_sm fw-medium text-black lh_150 border-0 bg-transparent ${tabStyling}`}
            >
              Site name
            </button>
          </div>
          <div>
            <ul className="d-none align-items-center justify-content-between gap-md-5 gap-4 d-md-flex">
              <li>
                <Link
                  to="/"
                  className={` link_btn text-black fs_sm fw-medium lh_150 ${tabStyling}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/Article"
                  className={` link_btn text-black fs_sm fw-medium lh_150 ${tabStyling}`}
                >
                  Article
                </Link>
              </li>
              <li>
                <Link
                  to="/Shop"
                  className={` link_btn text-black fs_sm fw-medium lh_150 ${tabStyling}`}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  to="/Product"
                  className={` link_btn text-black fs_sm fw-medium lh_150 ${tabStyling}`}
                >
                  Product
                </Link>
              </li>
              <li className={`fs_xsm fw-medium lh_150 ${tabStyling}`}>
                <Link to="/About" className="btn_1">
                  Button
                </Link>
              </li>
            </ul>

            <div className="hamburger d-md-none">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
