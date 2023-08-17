import Image from "next/image";
import HeaderImage from "@/assets/header.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={`${styles["header"]}`}>
      <div className={`${styles["image-container"]}`}>
        <Image src={HeaderImage} alt="header" />
        <div className={` text-start ${styles["title-header"]}`}>
          <div>
            Find The Best Products
            <br /> With
            <span
              style={{
                color: "#ff9c00",
              }}
            >
              {" "}
              Realiability
            </span>
          </div>
          <div>
            <div className={`input-group mb-3 ${styles["input-box"]}`}>
              <input type="text" className={`form-control ${styles["input"]}`} placeholder="Search Here Or Shop Product" aria-label="Search Here Or Shop Product" aria-describedby="button-addon2" />
              <button className={`btn ${styles["button"]}`} type="button" id="button-addon2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
