import styles from './tranding.module.css'

export default function Tranding() {
    return (
        <>
            <div className={`${styles["tranding-container"]}`}>
                <div className={`${styles["tranding-top"]}`}>
                </div>
                <div className={`${styles["tranding-bot"]}`}>
                    <div>
                        <h4>Product Category</h4>
                    </div>
                    <div className={`rounded-pill ${styles["tranding-button"]}`}>Shop Now</div>
                </div>
            </div>
        </>
    )
}