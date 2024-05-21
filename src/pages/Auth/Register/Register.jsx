import { useState } from "react";
import AuthLayout from "../../../layouts/AuthLayout/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { RiLock2Fill, RiMailFill, RiUser2Fill } from "react-icons/ri";
import { setAuthenticated } from "../../../services/auth";

function Register() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    passwordCfm: "",
  });

  const navigate = useNavigate();
  const db = getFirestore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password !== userData.passwordCfm) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const uid = userCredential.user.uid;

      const userRef = doc(db, "users", uid);
      const userDataFirestore = {
        username: userData.name,
        name: userData.name,
        email: userData.email,
        bio: "",
        avatar: "",
        birthday: "",
        country: "",
        phone: "",
        website: "",
      };
      await setDoc(userRef, userDataFirestore);

      console.log("User created successfully!");
      setAuthenticated(userData.email);
      navigate("/");
    } catch (error) {
      console.error("Error creating user: ", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <AuthLayout>
      <Link href="homepage.html" className="logo">
        <h2>BloomBuddy</h2>
      </Link>
      <div className="login">
        <form action="" className="login__form" onSubmit={handleSubmit}>
          <h1 className="login__title">Register</h1>

          <div className="login__inputs">
            <div className="login__box">
              <input
                type="text"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                className="login__input"
                placeholder="Full name"
              />
              <i>
                <RiUser2Fill />
              </i>
            </div>
            <div className="login__box">
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                className="login__input"
                placeholder="Full email"
              />
              <i>
                <RiMailFill />
              </i>
            </div>

            <div className="login__box">
              <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleInputChange}
                className="login__input"
                placeholder="Full password"
              />
              <i className="ri-lock-2-fill">
                <RiLock2Fill />
              </i>
            </div>
            <div className="login__box">
              <input
                type="password"
                name="passwordCfm"
                value={userData.passwordCfm}
                onChange={handleInputChange}
                className="login__input"
                placeholder="Confirm password"
              />
              <i className="ri-lock-2-fill">
                <RiLock2Fill />
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
                I agree with the term & policy
              </label>
            </div>
          </div>

          <button type="submit" className="login__button">
            Sign up
          </button>

          <div className="login__register">
            Already have an account <Link href="login.html">Log in</Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Register;
