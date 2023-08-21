"use client";
import { useEffect, useState } from "react";
import styles from "./product.module.css";
import { ProductTypes } from "@/types/product";

export default function Product() {
  const [products, setProducts] = useState<ProductTypes[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  });

  return (
    <>
      {products.map((product, index) => (
        <div key={product.id} className={`${styles.product}`}>
          <div className={`${styles.product_image}`}>
            <img src={product.image} alt="product" />
          </div>

          <div className={`${styles.product_header}`}>
            <h5 className="fw-bold">{product.title}</h5>
            <h5 className="fw-bold">${product.price}</h5>
            <div className={`${styles.product_desc}`}>
              <p>{product.description}</p>
            </div>
          </div>
          <div className={`btn ${styles.product_button}`}>Add to cart</div>
        </div>
      ))}
    </>
  );
}
