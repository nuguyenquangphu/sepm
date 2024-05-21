import React, { useState } from "react";
import "./Header.css";
import { FaTree } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [navActive, setNavActive] = useState(false);

  const handleNavActive = () => {
    setNavActive(!navActive);
  };

  return (
    <header className="header">
      <Link to="/" className=" logo">
        <i className="fas fa-tree">
          <FaTree />
        </i>
        BloomBuddy
      </Link>
      <nav className={`navbar ${navActive ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/plant-info">Plant Information</Link>
        <Link to="/"> Review </Link>
        <Link to="/">Market</Link>
      </nav>
      <div className="icons">
        <div className="fas fa-bars" id="menu-btn">
          <i onClick={handleNavActive}>
            <FaBars />
          </i>
        </div>
        <div className="fas fa-search" id="search-btn">
          <i>
            <FaSearch />
          </i>
        </div>
        <div className="fas fa-user" id="login-btn">
          <i>
            <FaRegUser />
          </i>
        </div>
      </div>

      <div className="blur"></div>
      <div className="form-popup">
        <span className="close-btn material-symbols-rounded">close</span>
        <div className="form-box login">
          <div className="form-details">
            <h2>Welcome Back</h2>
            <p>
              {" "}
              Please log in using your personal information to connect with us{" "}
            </p>
          </div>
          <div className="form-content">
            <h2>LOGIN</h2>
            <form action="#">
              <div className="input-field">
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Password</label>
              </div>
              <Link href="" className="forgot-password">
                Forgot password?
              </Link>
              <button type="submit">Log in</button>
            </form>
            <div className="bottom-link">
              Don't have an account?
              <Link href="#" id="signup-link">
                SignUp
              </Link>
            </div>
          </div>
        </div>
        <div className="form-box signup">
          <div className="form-details">
            <h2>Create account</h2>
            <p> To become a part of our company, please join us </p>
          </div>
          <div className="form-content">
            <h2>SINGUP</h2>
            <form action="#">
              <div className="input-field">
                <input type="email" />
                <label>Enter Your Email</label>
              </div>
              <div className="input-field">
                <input type="password" />
                <label>Create Password</label>
              </div>
              <div className="policy-text">
                <input type="checkbox" className="policy" />
                <label for="policy">
                  I agree the
                  <Link href="#">Terms & Conditions</Link>
                </label>
              </div>
              <button type="submit">Sign Up</button>
            </form>
            <div className="bottom-link">
              Already have an account?
              <Link href="#" id="login-link">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
