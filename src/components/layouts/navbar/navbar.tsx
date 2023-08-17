import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg p-2 fixed-top ${styles["nav-box"]}`}>
      <div
        className="container"
        style={{
          fontSize: "28px",
        }}
      >
        <div
          className="navbar-brand"
          style={{
            fontSize: "25px",
          }}
        >
          Over
          <span
            style={{
              color: "#ff9c00",
            }}
          >
            Logic
          </span>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{
            marginLeft: "100px",
          }}
        >
          <ul className="navbar-nav gap-5 fw-semibold">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="#">
                <div className={`${styles["li-navbar"]}`}>Home</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <div className={`${styles["li-navbar"]}`}>Shop Online</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <div className={`${styles["li-navbar"]}`}>What's New</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <div className={`${styles["li-navbar"]}`}>Contact</div>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">
                <div className={`${styles["li-navbar"]}`}>About Us</div>
              </Link>
            </li>
            <div className="d-flex ms-4">
              <Link className={`nav-link ${styles["sign-up-box"]}`} href="#">
                Sign Up
              </Link>
              <Link className={`nav-link ${styles["sign-in-box"]} ms-2`} href="#">
                Sign In
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
