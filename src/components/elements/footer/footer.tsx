import FooterSection from "../footerSection/footerSection";
import styles from "./footer.module.css";

export default function Footer() {
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
            links_a={"Category 1"}
            links_b={"Category 2"}
            links_c={"Category 3"}
            links_d={"Category 4"}
            links_e={"Category 5"}
          />
        </div>
        <div className={`${styles["footer-section"]}`}>
          <FooterSection
            title={"News Letter Subscription"}
            links_a={"Get the Latest Products & Best Deals in Your Inbox as First Person"}
          />
          <form className={`${styles.footer_form}`} action="newsletter-form">
            <div className="form-container">
              <input type="email"/>
              <label htmlFor="email">Your Email Address</label>
            </div>
            <button className={`btn ${styles.footer_button}`}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
