import React from "react";
import styles from "./Navbar.module.css";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <img width={"80px"} src={Logo} alt="#" />
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="/">Learn More</a>
          </li>
          <li>
            <a href="/">Log in</a>
          </li>
          <li>
            <a href="/">Sign up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div className={styles.mobile_btn}>
        <AiOutlineMenu size={25} />
      </div>
    </header>
  );
};

export default Navbar;
