import React, { ReactNode } from "react";
import styles from "@/styles/button.module.css";
import Link from "next/link";

const Button = (props: { href: string; children: ReactNode }) => {
  const { href, children } = props;
  return (
    <Link href={href} className={styles.btn}>
      {children}
    </Link>
  );
};

export default Button;
