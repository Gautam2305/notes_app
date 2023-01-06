import React from "react";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
export const Sidebar = () => {
    return(
        <aside className={`${styles.sidebar}`}>
            <ul className={`${styles.sideButtonBox}`}>
                <Link className={`${styles.sidebarButtons}`} to="/home">Home</Link>
                <Link className={`${styles.sidebarButtons}`} to="/home">Archive</Link>
                <Link className={`${styles.sidebarButtons}`} to="/home">Trash</Link>
            </ul>
        </aside>
    )
}