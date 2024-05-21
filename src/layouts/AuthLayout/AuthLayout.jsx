import React from "react";
import "./AuthLayout.css";

function AuthLayout({ children }) {
  return (
    <div className="auth">
      <div className="auth-wrapper">
        <main>{children}</main>
      </div>
    </div>
  );
}

export default AuthLayout;
