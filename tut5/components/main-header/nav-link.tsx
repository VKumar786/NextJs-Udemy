//@ts-nocheck

"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

const NavLinks = ({ link, title }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link href={link} className={pathname.startsWith(link) && styles.active}>
        {title}
      </Link>
    </li>
  );
};

export default NavLinks;
