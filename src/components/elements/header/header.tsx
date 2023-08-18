import Image from "next/image";
import HeaderImage from "@/assets/header.png";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={`${styles["header"]}`}>
      <div className={`${styles["image-container"]}`}>
        <Image src={HeaderImage} className={`${styles["header-img"]}`} alt="header" priority />
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
          <div></div>
        </div>
        <form action="" className={`mb-3 ${styles["search-box"]}`}>
          <input type="text" placeholder="Search Here Or Shop Product" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
