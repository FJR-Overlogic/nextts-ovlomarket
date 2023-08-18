"use client"
import { useEffect, useState } from "react";


export default function FooterSection(props) {
    return (
        <>
            <div style={{marginTop:"10px"}}>
                <h6 style={{ color: "#ff9c00" }} className="fw-bold">{props.title}</h6>
                <p>
                    <a href="#!"  style={{fontSize:"10px", cursor:"pointer", textDecoration:"none"}} className="text-white">{props.links}</a>
                </p>
            </div>
        </>
    );
}
