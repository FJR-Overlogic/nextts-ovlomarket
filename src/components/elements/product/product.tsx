"use client";

import { useEffect, useState, useRef } from "react";
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
        const productsWithIsShow = data.map(
          (products: any) => ({
            ...products,
            isShow: false
          }));
        setProducts(productsWithIsShow);
      });
  }, []);

  const handleClick = (productId: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (productId === product.id) {
          return { ...product, isShow: !product.isShow };
        } else {
          return { ...product, isShow: false };
        }
      })
    )
  }

  return (
    <div className={`${styles.product_container}`}>
      {products.map((product, index) => (
        <div key={product.id} className={`${styles.product}`}>
          <div className={`${styles.product_image}`} onClick={() => handleClick(product.id)}>
            <img src={product.image} alt="product" />
            <div aos-data={"fade-up"} className={`${styles.product_desc}`} style={{
              display: product.isShow ? "block" : "none",
              opacity: product.isShow ? 1:0
              }}>
              <p>{product.description}</p>
            </div>
          </div>

          <div className={`${styles.product_header}`}>
            <h5 className={`fw-bold ${styles.title}`}>{product.title}</h5>
            <h5 className={`fw-bold ${styles.price}`}>${product.price}</h5>
          </div>
          <div className={`btn ${styles.product_button}`}>Add to cart</div>
        </div>
      ))}
    </div>
  );
}
