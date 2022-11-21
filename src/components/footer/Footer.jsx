import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.logo}>
          <span style={{ color: "#593cfb" }}>D</span>RIVE
        </h2>
        <button>Get Car</button>
      </div>
    </div>
  );
};

export default Footer;
