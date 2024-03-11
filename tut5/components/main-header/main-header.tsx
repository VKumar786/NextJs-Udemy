
import React from "react";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";
import styles from "@/components/main-header/main-header.module.css";
import MainHeaderBg from "./main-header-bg";
import NavLinks from "./nav-link";

const HEADER_DATA = [
  { link: "/meals", title: "Browse Meals" },
  { link: "/community", title: "Foodies Community" },
];

const MainHeader = () => {
  return (
    <>
      <MainHeaderBg />
      <header className={styles.header}>
        <Link href={"/"} className={styles.logo}>
          <Image
            src={logoImg.src}
            width={50}
            height={50}
            alt="A plate with food on it"
            priority
          />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            {HEADER_DATA.map((item) => {
              return (
                <NavLinks
                  key={item.link + item.title + Math.random()}
                  {...item}
                />
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
