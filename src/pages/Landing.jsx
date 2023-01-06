import React from "react";
import styles from "./Landing.module.css";
import { Navbar } from "../components/Navbar";
import landingHero from "../utils/landingHero.svg"
import { Link } from "react-router-dom";
export const Landing = () => {
    return(
        <>
        <Navbar/>
        <div className={`${styles.landingPageMain}`}>
            <div><img className={`${styles.heroImg}`} src={landingHero}/></div>
            <div className={`${styles.landingText}`}>
                <h3>ReNotion is a light-weight note-taking app built for you to take notes in a productive way.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>

                <Link to="/login"><button  className={`${styles.loginBtn}`}>Login</button></Link>
            </div>
        </div>
        </>
    )
}