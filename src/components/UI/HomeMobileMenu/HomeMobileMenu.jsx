import React, { useState } from "react";
import { RiArrowDownSLine, RiCloseLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logoutAuthenticated } from "../../../services/auth";

function HomeMobileMenu({ isOpen, toggleMobileMenu }) {
  const [childOpen, setChildOpen] = useState(false);
  const navigate = useNavigate();

  const isAuth = isAuthenticated();

  const toggleChildOpen = () => {
    setChildOpen(!childOpen);
  };

  const handleLogout = () => {
    logoutAuthenticated();
    navigate("/login");
  };

  return (
    <div id="mobile-menu" className={`mobile-menu ${isOpen ? "active" : ""}`}>
      <div className="wrap">
        <div to="" className="close-trigger" onClick={toggleMobileMenu}>
          <i>
            <RiCloseLine />
          </i>
        </div>
        <div className="main-menu scrollto">
          <nav className="wrapper">
            <ul>
              <li>
                <Link to="/">
                  <span>Home</span>
                </Link>
              </li>
              <li className={`has-child ${childOpen ? "active" : ""}`}>
                <Link to="/category">
                  <span>Plant</span>
                  <span className="child-trigger" onClick={toggleChildOpen}>
                    <i>
                      <RiArrowDownSLine />
                    </i>
                  </span>
                </Link>
                <ul className="sub-menu list-block">
                  <li>
                    <Link to="#">African Daisy</Link>
                  </li>
                  <li>
                    <Link to="#">Aguja</Link>
                  </li>
                  <li>
                    <Link to="#">Amaranth</Link>
                  </li>
                  <li>
                    <Link to="#">Angelica</Link>
                  </li>
                  <li>
                    <Link to="#">Anemone</Link>
                  </li>
                  <li>
                    <Link to="#">Astilbe</Link>
                  </li>
                  <li>
                    <Link to="#">Ballon Flower</Link>
                  </li>
                  <li>
                    <Link to="#">Begonia</Link>
                  </li>
                  <li>
                    <Link to="#">Blueberry</Link>
                  </li>
                  <li>
                    <Link to="#">Basil</Link>
                  </li>
                  <li>
                    <Link to="#">Bacopa</Link>
                  </li>
                  <li>
                    <Link to="#">Beech</Link>
                  </li>
                  <li>
                    <Link to="#">Cotton</Link>
                  </li>
                  <li>
                    <Link to="#">Corn</Link>
                  </li>
                  <li>
                    <Link to="#">Clematis</Link>
                  </li>
                  <li>
                    <Link to="#">Cumin</Link>
                  </li>
                  <li>
                    <Link to="#">Carrot</Link>
                  </li>
                  <li>
                    <Link to="#">Daylily</Link>
                  </li>
                  <li>
                    <Link to="#">Dill</Link>
                  </li>
                  <li>
                    <Link to="#">Dahlia</Link>
                  </li>
                  <li>
                    <Link to="#">Dusty Miller</Link>
                  </li>
                  <li>
                    <Link to="#">Dianthus</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/blog">
                  <span>Blog</span>
                </Link>
              </li>
            </ul>
          </nav>
          {!isAuth ? (
            <div className="button">
              <Link to="/login" className="secondary-btn">
                Login
              </Link>
              <Link to="/register" className="primary-btn">
                Register
              </Link>
            </div>
          ) : (
            <div className="button">
              <button className="primary-btn" onClick={handleLogout}>
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeMobileMenu;
