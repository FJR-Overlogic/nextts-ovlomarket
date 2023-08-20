import styles from "./product.module.css"

export default function Product() {
    return (
        <>
            <div style={{ borderRadius: "4px", width: "300px", height:"500px" }} className="container">
                <div className="rounded" style={{ paddingBottom: "10px", width: "100%" , height:"60%", overflow:"hidden"}}>
                    <img style={{ maxWidth: "100%", maxHeight:"auto", width:"auto", height:"auto" }} src="https://pbs.twimg.com/media/F0GdMsaaYAAjYoO.jpg" alt="product" />
                </div>
                <div>
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
                <div style={{ color: "#FFF", backgroundColor: "#FF9C00", borderRadius: "20px" }} className="btn">Add to cart</div>
            </div>
        </>
    )
}
