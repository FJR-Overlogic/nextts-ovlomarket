import styles from "./footerSection.module.css"

export default function FooterSection(props: any) {
    return (
        <>
            <div className={`${styles.footersection}`}>
                <h6 className={`fw-bold ${styles.footer_header}`}>{props.title}</h6>
                <div className={`${styles.footer_links_section}`}>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_a}</a>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_b}</a>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_c}</a>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_d}</a>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_e}</a>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_g}</a>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_h}</a>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_i}</a>
                    <a href="#!" style={{ transition: "all 0.5s ease" }} className={`${styles.footer_links}`}>{props.links_j}</a>
                </div>
            </div>
        </>
    );
}
