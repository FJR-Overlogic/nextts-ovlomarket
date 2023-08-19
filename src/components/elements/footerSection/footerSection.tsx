import styles from "./footerSection.module.css"

export default function FooterSection(props) {
    return (
        <>
            <div style={{marginTop:"10px", marginBottom:"10px"}} className={`${styles["footersection"]}`}>
                <h6 style={{ color: "#ff9c00" }} className="fw-bold">{props.title}</h6>
                <div style={{display:"flex", flexDirection:"column"}}>
                    <a href="#!"  style={{fontSize:"12px", cursor:"pointer", textDecoration:"none"}} className={`text white ${styles["footer_links"]}`} data-aos="fade-left">{props.links_a}</a>
                    <a href="#!"  style={{fontSize:"12px", cursor:"pointer", textDecoration:"none"}} className={`text white ${styles["footer_links"]}`} data-aos="fade-left">{props.links_b}</a>
                    <a href="#!"  style={{fontSize:"12px", cursor:"pointer", textDecoration:"none"}} className={`text white ${styles["footer_links"]}`} data-aos="fade-left">{props.links_c}</a>
                    <a href="#!"  style={{fontSize:"12px", cursor:"pointer", textDecoration:"none"}} className={`text white ${styles["footer_links"]}`} data-aos="fade-left">{props.links_d}</a>
                    <a href="#!"  style={{fontSize:"12px", cursor:"pointer", textDecoration:"none"}} className={`text white ${styles["footer_links"]}`} data-aos="fade-left">{props.links_e}</a>
                    <a href="#!"  style={{fontSize:"12px", cursor:"pointer", textDecoration:"none"}} className={`text white ${styles["footer_links"]}`} data-aos="fade-left">{props.links_g}</a>
                    <a href="#!"  style={{fontSize:"12px", cursor:"pointer", textDecoration:"none"}} className={`text white ${styles["footer_links"]}`} data-aos="fade-left">{props.links_h}</a>
                    <a href="#!"  style={{fontSize:"12px", cursor:"pointer", textDecoration:"none"}} className={`text white ${styles["footer_links"]}`} data-aos="fade-left">{props.links_i}</a>
                </div>
            </div>
        </>
    );
}
