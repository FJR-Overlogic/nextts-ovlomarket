import FooterSection from "../footerSection/footerSection";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={`${styles["footer"]}`}>
      <div className={`container ${styles["footer-container"]}`}>
        <div className={`${styles["footer-section"]}`}>
          <div className="navbar-brand" style={{ fontSize: "25px", color:"#FFFF" }}>Over<span style={{ color: "#ff9c00" }}>Logic</span>
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
            <form  style={{padding:"4px",paddingLeft:"3330ox", backgroundColor:"rgba(0, 0, 0, 0.2)", width:"100%", display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"space-beetween"}} className={`container ${styles["footer-form"]}`} action="newsletter-form">
                <div  className="form-container">
                    <input style={{textIndent:"20px", background:"none", border:"none", outline:"none", color:"#FFF"}} type="text" placeholder="Your Email Address"/>
                </div>
                <button style={{height:"30px", display:"flex", alignItems:"center", backgroundColor:"#ff9c00", color:"#FFF"}} className={`btn btn-warning rounded-pill ${styles["footer-button"]}`}>Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}
