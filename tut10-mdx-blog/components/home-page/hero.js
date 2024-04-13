import React from "react";
import styles from "../../styles/hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src={"/admin.jpg"} alt="admin image" width={300} height={300} />
      </div>
      <h1>Hi, I'm Vishal Kumar</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
      </p>
    </section>
  );
};

export default Hero;
