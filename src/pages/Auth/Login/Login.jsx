import React, { useState } from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firebase";
import { RiLock2Line, RiMailFill } from "react-icons/ri";
import { setAuthenticated } from "../../../services/auth";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      console.log(userCredential);
      setAuthenticated(userData.email);
      navigate("/");
    } catch (error) {
      alert("Login failed. Please try again");
    }
  };

  return (
    <AuthLayout>
      <Link href="homepage.html" className="logo">
        <h2>BloomBuddy</h2>
      </Link>
      <div className="login">
        <form className="login__form" onSubmit={handleSubmit}>
          <h1 className="login__title">Login</h1>
          <div className="login__inputs">
            <div className="login__box">
              <input
                placeholder="Email ID"
                required
                className="login__input"
                name="email"
                type="text"
                value={userData.email}
                onChange={handleInputChange}
              />
              <i>
                <RiMailFill />
              </i>
            </div>

            <div className="login__box">
              <input
                placeholder="Password"
                required
                className="login__input"
                name="password"
                type="password"
                value={userData.password}
                onChange={handleInputChange}
              />
              <i>
                <RiLock2Line />
              </i>
            </div>
          </div>

          <div className="login__check">
            <div className="login__check-box">
              <input
                type="checkbox"
                className="login__check-input"
                id="user-check"
              />
              <label for="user-check" className="login__check-label">
                Remember me
              </label>
            </div>

            <Link href="#" className="login__forgot">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="login__button">
            Login
          </button>

          <div className="login__register">
            Don't have an account? <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;
