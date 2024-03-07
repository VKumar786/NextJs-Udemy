import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import styles from "./Layout.module.css";

const RootLayout = () => {
  return (
    <div>
      <MainNavigation />
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
