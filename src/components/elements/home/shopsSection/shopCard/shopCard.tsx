import styles from "../shopsSection.module.css";
import Image from "next/image";
import shopBag from "../../../../assets/images/shops/shopbag.png";

export default function ShopCard() {
  return (
    <>
      <div
        className={`mx-2 col d-flex justify-content-evenly align-items-center rounded p-3 ${styles.shop_container}`}
      >
        <div
          className={`d-flex justify-content-center align-items-center rounded-circle ${styles.shop_badge}`}
        >
          <Image src={shopBag} width={30} height={30} alt="shop" />
        </div>
        <div className="flex-grow-1 mx-4">
          <h6 className="fw-semibold" style={{ fontSize: "16px" }}>
            Shop Name
          </h6>
          <h6 className="fw-semibold" style={{ fontSize: "14px" }}>
            24 Products
          </h6>
        </div>
      </div>
    </>
  );
}
