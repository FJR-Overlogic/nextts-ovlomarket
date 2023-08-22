"use client"
import { useEffect, useState } from 'react'
import styles from './tranding.module.css'

export default function Tranding() {
    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => {
                console.log("Hmm")
            })
    }, [])
    return (
        <div className={`${styles.tranding_section}`}>
            <div className={`${styles.tranding_subsection}`}>
                <div className={`${styles.tranding_headers}`}>
                    <h3>Tranding Products</h3>
                </div>
                <div className={`${styles.tranding_grid}`}>
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
                </div>
            </div>
        </div>
    )
}