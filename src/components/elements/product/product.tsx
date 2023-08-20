import styles from "./product.module.css"

export default function Product() {
    return (
        <>
            <div className={`${styles.product}`}>
                <div className={`${styles.product_image}`}>
                    <img src="https://pbs.twimg.com/media/F0GdMsaaYAAjYoO.jpg" alt="product" />
                </div>
                <div className={`${styles.product_header}`}>
                    <h5 className="fw-bold">
                        ProductName
                    </h5>
                    <h5 className="fw-bold">
                        RS.100,000.00
                    </h5>
                    <div className={`${styles.product_desc}`}>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                    </div>
                </div>
                <div className={`btn ${styles.product_button}`}>Add to cart</div>
            </div>
        </>
    )
}
