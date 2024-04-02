import Link from "next/link";
import React, { ReactNode } from "react";
import style from "@/styles/main-header.module.css";

const HeaderLayout = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Link href={"/"}>NextEvents</Link>
      </div>
      <nav className={style.navigation}>
        <ul>
          <li>
            <Link href={"/events"}>Browse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLayout;
