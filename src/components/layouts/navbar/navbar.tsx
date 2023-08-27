import Link from "next/link";
import styles from "./navbar.module.css";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 580) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div>
      <nav className={`${styles["nav-box"]} ${scrolled ? styles.scrolled : ""} fixed-top`}>
        <div className={` ${styles["title-navbar"]}  ${scrolled ? styles.scrolled : ""} ${isMenuClicked ? styles.visible : styles.hidden}`}>
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
              <div className={`${styles["li-navbar-text"]}  ${scrolled ? styles.scrolled : ""}`}>Home</div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}  ${scrolled ? styles.scrolled : ""}`}>Shop Online</div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}  ${scrolled ? styles.scrolled : ""}`}>What's New</div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}  ${scrolled ? styles.scrolled : ""}`}>Contact</div>
            </Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="#">
              <div className={`${styles["li-navbar-text"]}  ${scrolled ? styles.scrolled : ""}`}>About Us</div>
            </Link>
          </li>
          <li className={`d-flex ${styles["sign-box"]}`}>
            <Link className={`nav-link ${styles["sign-in-box"]} ${scrolled ? styles.scrolled : ""}`} href="#">
              Sign In
            </Link>
            <Link className={`nav-link ${styles["sign-up-box"]} ms-2 ${scrolled ? styles.scrolled : ""}`} href="#">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
