import React from "react";
import Header from "../../components/UI/Header/Header";
import Footer from "../../components/UI/Footer/Footer";
import "./MainLayout.css";

function MainLayout({ children }) {
  return (
    <div className="account">
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
