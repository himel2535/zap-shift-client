import React from "react";
import Logo from "../components/logo/Logo";
import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Logo></Logo>
      <div className="flex flex-col md:flex-row min-h-screen justify-between items-center">
        <div className="flex-1 flex items-center justify-center">
          <Outlet></Outlet>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img src={authImage} alt=""  />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
