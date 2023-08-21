import styles from "./shopsSection.module.css";
import ShopCard from "./shopCard/shopCard";

export default function ShopsSection() {
  return (
    <section className="my-5" style={{ height: "250px" }}>
      <div className={` mx-auto ${styles.shops_container}`}>
        <h6 className="fw-semibold" style={{ fontSize: "24px" }}>
          Choose By Shops
        </h6>
        <br />

        <div className="row row-cols-4 gap-4">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
      </div>
    </section>
  );
}
