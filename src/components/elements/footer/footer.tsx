import FooterSection from "../footerSection/footer-section";
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
            links={[
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",   
                "mail@overlogic.com",
                "+62 123456789"
            ]}
          />
        </div>
        <div className={`${styles["footer-section"]}`}>
          <FooterSection
            title={"Pages"}
            links={[
                "Home",
                "Shop Online",
                "Contact Us",
                "Whats New",
                "Most Popular",
                "Best Selling"
            ]
            }
          />
        </div>
        <div className={`${styles["footer-section"]}`}>
          <FooterSection
            title={"Categories"}
            links={[
              "Category 1",
              "Category 2",
              "Category 3",
              "Category 4",
              "Category 5",
            ]}
          />
        </div>
        <div className={`${styles["footer-section"]}`}>
          <FooterSection
            title={"News Letter Subscription"}
            links={
              "Get the Latest Products & Best Deals in Your Inbox as First Person"
            }
          />
            <form  style={{padding:"4px",paddingLeft:"3330ox", backgroundColor:"rgba(0, 0, 0, 0.2)", width:"100%", display: "flex", flexDirection:"row", alignItems:"center", justifyContent:"center"}} className="rounded-pill" action="newsletter-form">
                <div  className="form-container">
                    <input style={{textIndent:"20px", background:"none", border:"none", outline:"none", color:"#FFF"}} type="text" placeholder="Your Email Address"/>
                </div>
                <button style={{height:"30px", display:"flex", alignItems:"center"}} className="btn btn-warning rounded-pill">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
}
