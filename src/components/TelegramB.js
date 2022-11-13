import React from 'react';
import styles from "./Telegram.module.css"
import Pic2 from "../assets/1.png"

const TelegramB = () => {
    return (
        <div className={styles.container} >
            <button className={styles.noselect}>
                <span className={styles.text}>Telegram</span>
                <span className={styles.icon}>
                    <img src={Pic2} />
                </span>
            </button>
        </div>
    );
};

export default TelegramB;