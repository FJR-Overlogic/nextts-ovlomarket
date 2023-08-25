"use client"
import { useEffect, useState } from 'react'
import styles from './tranding.module.css'

export default function Tranding() {
    const [trandingProduct, setTrandingProduct] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then((res) => res.json())
            .then((data) => {
                setTrandingProduct(data)
            })
    }, [])
    return (
        <div className={`${styles.tranding}`}>
            {trandingProduct.map((tranding: any, index) => {
                return (
                    <div key={index} className={`${styles.tranding_section}`}>
                        <div className={`${styles.tranding_subsection}`}>
                            <div className={`${styles.tranding_headers}`}>
                                <h3 style={{height:"40px"}}>{index==0 && "Tranding Product"}</h3>
                            </div>
                            <div className={`${styles.tranding_grid}`}>
                                <div className={`${styles["tranding-container"]}`}>
                                    <div className={`${styles["tranding-top"]}`}>
                                    </div>
                                    <div className={`${styles["tranding-bot"]}`}>
                                        <div>
                                            <h4>{tranding.charAt(0).toUpperCase() + tranding.slice(1)}</h4>
                                        </div>
                                        <div className={`rounded-pill ${styles["tranding-button"]}`}>Shop Now</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}