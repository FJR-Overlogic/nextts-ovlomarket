import Link from "next/link";
import styles from "./navbar.module.css";
import { useState } from "react";

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav className={`${styles["nav-box"]} fixed-top`}>
        <div className={`${styles["title-navbar"]} ${isMenuClicked ? styles.visible : styles.hidden}`}>
          Over
          <span
            style={{
              color: "#1fa3fc",
            }}
          >
            Logic
          </span>
        </div>
        <div className={styles["burger-menu"]} onClick={updateMenu}>
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
          <div className={`${styles["burger-bar"]} ${isMenuClicked ? styles.clicked : styles.unclicked}`}></div>
        </div>
        <ul className={`fw-semibold text-center gap-5 ${isMenuClicked ? styles.visible : styles.hidden}`}>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}`}>Home</div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}`}>Shop Online</div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}`}>What's New</div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}`}>Contact</div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}`}>About Us</div>
            </Link>
          </li>
          <li className={`d-flex ${styles["sign-box"]}`}>
            <Link className={`nav-link ${styles["sign-in-box"]}`} href="#">
              Sign In
            </Link>
            <Link className={`nav-link ${styles["sign-up-box"]}  ms-2`} href="#">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
