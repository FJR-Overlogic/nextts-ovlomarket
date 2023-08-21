import Image from "next/image";
import electronics from "../../../assets/images/categories/electronics.png";
import jewelery from "../../../assets/images/categories/jewelery.png";
import mens_clothing from "../../../assets/images/categories/mens clothing.png";
import womens_clothing from "../../../assets/images/categories/womens clothing.png";

export default function CategorySection() {
  return (
    <section className="my-5" style={{ height: "250px" }}>
      <div className={` mx-auto`} style={{ width: "81%" }}>
        <h6 className="fw-semibold" style={{ fontSize: "24px" }}>
          Choose By Shops
        </h6>
        <br />
        <div className="d-flex gap-5 ">
          <div
            className="bg-warning text-center rounded"
            style={{ width: "168px", height: "232px", padding: "1rem" }}
          >
            <h5 className="text-black fw-semibold">Electronics</h5>
            <Image src={electronics} width={140} height={140} alt="laptop" />
          </div>
          <div
            className="bg-info text-center rounded"
            style={{ width: "168px", height: "232px", padding: "1rem" }}
          >
            <h5 className="text-black fw-semibold">Jewelery</h5>
            <Image src={jewelery} width={140} height={140} alt="jewelery" />
          </div>
          <div
            className="bg-primary text-center rounded"
            style={{ width: "168px", height: "232px", padding: "1rem" }}
          >
            <h5 className="text-black fw-semibold">Mens Clothing</h5>
            <Image
              src={mens_clothing}
              width={140}
              height={140}
              alt="mens clothing"
            />
          </div>
          <div
            className="bg-danger text-center rounded"
            style={{ width: "168px", height: "232px", padding: "1rem" }}
          >
            <h5 className="text-black fw-semibold">Womens Clothing</h5>
            <Image
              src={womens_clothing}
              width={140}
              height={140}
              alt="womens clothing"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
