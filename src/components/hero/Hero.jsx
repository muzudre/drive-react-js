import React from "react";
import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <form>
        <div className={styles.text}>
          <label htmlFor="">Where</label>
          <input type="text" placeholder="Search location" />
        </div>
        <div className={styles.from}>
          <span className={styles.border}></span>
          <label htmlFor="">From</label>
          <input type="date" />
        </div>
        <div className={styles.until}>
          <span className={styles.border}></span>
          <label htmlFor="">Until</label>
          <input type="date" />
        </div>
        <div className={styles.search_btn}>{/* <button></button> */}</div>
      </form>
    </div>
  );
};

export default Hero;
