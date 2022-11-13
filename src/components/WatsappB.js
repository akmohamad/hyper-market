import React from 'react';
import styles from "./WatsappB.module.css"
import Pic3 from "../assets/2.png"

const WatsappB = () => {
    return (
        <div className={styles.container} >
            <button className={styles.noselect}>
                <span className={styles.text}>Watsapp</span>
                <span className={styles.icon}>
                    <img src={Pic3} />
                </span>
            </button>
        </div>
    );
};

export default WatsappB;