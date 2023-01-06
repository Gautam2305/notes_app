import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export const Navbar = () => {
    return(
        <div className={`${styles.navbar}`}>
            <div>
            <Link className={`${styles.brandHeading}`} to="/home"><span style={{color:"var(--brand-color)"}}>Re</span>Notion</Link>
            </div>
            <div>
            <Link to="/login"><i className={`${styles.userIcon} fa-regular fa-user`} ></i></Link>
            </div>
        </div>
    )
}