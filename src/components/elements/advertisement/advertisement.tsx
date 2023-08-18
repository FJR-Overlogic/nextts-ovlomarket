"use client";
import Lottie from "lottie-react";
import LottieAdvertisement from "@/assets/lottie/LottieAdvertisement.json";
import styles from "./advertisement.module.css";

export default function Advertisement() {
  return (
    <div className="d-flex justify-content-center my-3">
      <div
        className={`d-flex justify-content-evenly align-items-center rounded ${styles.advertisement}`}
      >
        <Lottie
          className=""
          animationData={LottieAdvertisement}
          style={{ height: "400px" }}
          autoPlay={true}
          loop={true}
        />

        <div
          className={`text-white text-center flex-grow-1 d-flex flex-column justify-content-center ${styles["advertisement_text"]}`}
        >
          <h1 style={{ fontSize: "4rem" }}>
            Over<span style={{ color: "#ff9c00" }}>Logic</span>
            <br />
            market
          </h1>
          <br />
          <h3>
            We Are Not Trusted.
            <br />
            <span style={{ color: "#ff9c00" }}>So What?</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
