import React from "react";
import { Navbar } from "../components/Navbar";
import { Sidebar } from "../components/Sidebar";
import styles from "./Home.module.css";
export const Home = () => {
    
    return(
        <div>
        <Navbar/>
        <div style={{display:"flex"}}>
        <Sidebar/>
        <div className={`${styles.sectionBox}`}>
        <section className={`${styles.inputSec}`}>
        <div className={`${styles.inputsBox}`}>
            <label className={`${styles.inputLabel}`}>
                <textarea className={`${styles.titleInput}`} placeholder="Enter Title..." />
            </label>
            <div className={`${styles.selectBox}`}>
            <label className={`${styles.labelSelect}`}>
                <select>
                    <option value="0">Work</option>
                    <option value="1">Home</option>
                    <option value="2">Chores</option>
                    <option value="3">Exercise</option>
                </select>
            </label>
            <label className={`${styles.prioritySelect}`}> 
                <select>
                    <option value="0">High</option>
                    <option value="1">Medium</option>
                    <option value="2">Low</option>
                </select>
            </label>
            </div>
        </div>
        </section>
        <section className={`${styles.noteSec}`}>
        <label className={`${styles.inputLabel}`}> 
                <textarea className={`${styles.noteInput}`} placeholder="Start writing..." />
            </label>
        </section>
        </div>
        </div>
        </div>
    );
}