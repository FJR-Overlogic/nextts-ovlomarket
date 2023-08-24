"use client"
import FooterSection from "../footerSection/footerSection";
import styles from "./footer.module.css";
import { useEffect, useState } from "react";
import { FooterType } from "@/types/footer";
export default function Footer() {
  const [category, setCategory] = useState<FooterType[]>([])
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        const upperCaseCategory = data.map((cat: string) => cat.charAt(0).toUpperCase() + cat.slice(1))
        setCategory(upperCaseCategory)
      })
  }, [])
  return (
    <div className={`${styles["footer"]}`} data-aos="fade-up" data-aos-anchor-placement="center-bottom">
      <div className={`container ${styles["footer-container"]}`}>
        <div className={`${styles["footer-section"]}`}>
          <div className={`${styles.footer_brand}`}>
            Over
            <span className={`${styles.footer_span}`}>Logic</span>
          </div>
          <FooterSection
            title={"Contact us"}
            links_a={"Contact us if you need more information about our Company."}
            links_b={"mail@overlogic.com"}
            links_c={"+62 123456789"}
          />
        </div>
        <div className={`${styles["footer-section"]}`}>
          <FooterSection
            title={"Pages"}
            links_a={"Home"}
            links_b={"Shop Online"}
            links_c={"Contact Us"}
            links_d={"Whats New"}
            links_e={"Most Popular"}
            links_f={"Best Selling"}
          />
        </div>
        <div className={`${styles["footer-section"]}`}>
          <FooterSection
            title={"Categories"}
            links_a={`${category[0]}`}
            links_b={`${category[1]}`}
            links_c={`${category[2]}`}
            links_d={`${category[3]}`}
          />
        </div>
        <div className={`${styles["footer-section"]}`}>
          <FooterSection
            title={"News Letter Subscription"}
            links_a={"Get the Latest Products & Best Deals in Your Inbox as First Person"}
          />
          <form className={`${styles.footer_form}`} action="newsletter-form">
            <div className="form-container">
              <input type="email" />
              <label htmlFor="email">Your Email Address</label>
            </div>
            <button className={`btn ${styles.footer_button}`}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
