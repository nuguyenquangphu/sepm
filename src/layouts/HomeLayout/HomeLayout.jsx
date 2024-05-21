import React from "react";
import HomeHeader from "../../components/UI/HomeHeader/HomeHeader";
import HomeFooter from "../../components/UI/HomeFooter/HomeFooter";
import "./HomeLayout.css";

function HomeLayout({ children }) {
  return (
    <>
      <HomeHeader />
      <div className="page-home">
        <main>{children}</main>
      </div>
      <HomeFooter />
    </>
  );
}

export default HomeLayout;
