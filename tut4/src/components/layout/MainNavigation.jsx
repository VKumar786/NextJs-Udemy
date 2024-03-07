import React from "react";
import { Link } from "react-router-dom";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}>New Meetup</Link>
          </li>
          <li>
            <Link to={"/favorites"}>Favorites</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
