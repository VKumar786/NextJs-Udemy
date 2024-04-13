import React from "react";
import MainNavigation from "./main-navigation";
import toast, { Toaster } from "react-hot-toast";


const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
      <Toaster />
    </>
  );
};

export default Layout;
