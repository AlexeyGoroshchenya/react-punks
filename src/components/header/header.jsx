import React from 'react';
import styles from './header.module.css'

const Header = ({stage}) => {


    return (
        <div className={styles.body}>
            <div className={stage===1?'coral ' + styles.logo:stage===2?'green ' + styles.logo:'purple ' + styles.logo}>BLASTPUNKS</div>
            <div className={styles.contacts}>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/socials-1.svg`} alt="" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/socials-2.svg`} alt="" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/socials-3.svg`} alt="" /></a>
                <a href="#"><img src={`${process.env.PUBLIC_URL}/icons/socials-4.svg`} alt="" /></a>
            </div>
            <div className={stage===1?styles.button_1 +' ' + styles.button:stage===2?styles.button_2 +' ' + styles.button: styles.button_3 +' ' + styles.button}><a href='#'>connect</a></div>
        </div>
    );
};

export default Header;