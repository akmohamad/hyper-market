import React from 'react';
import styles from "./InstaB.module.css"
import Pic1 from "../assets/3.png"

const InstaB = () => {
    return (
        <div className={styles.container}>
            <button className={styles.noselect}>
                <span className={styles.text}>Instagram</span>
                <span className={styles.icon}>
                    <img src={Pic1} />
                </span>
            </button>
        </div>
    );
};

export default InstaB;