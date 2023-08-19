import styles from "./chooseByShop.module.css";
import Image from "next/image";
import shopBag from "../../../assets/images/shopbag.png";

export default function ChooseByShop() {
  return (
    <section className="my-5" style={{ height: "250px" }}>
      <div className={` mx-auto ${styles.shops_container}`}>
        <h6 className="fw-semibold" style={{ fontSize: "24px" }}>
          Choose By Shops
        </h6>
        <br />

        <div className="row row-cols-4 gap-4">
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
        </div>
      </div>
    </section>
  );
}
