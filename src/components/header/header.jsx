import React from 'react';
import styles from './header.module.css'
import { useWeb3Modal } from '@web3modal/wagmi/react'

const Header = ({stage}) => {

    const { open } = useWeb3Modal()

    return (
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={stage===1?'coral ' + styles.logo:stage===2?'green ' + styles.logo:'purple ' + styles.logo}>BLASTPUNKS</div>
                <div className={styles.contacts}>
                    <a href="#"><img src={`${process.env.ASSET_PREFIX}/icons/socials-1.svg`} alt="" /></a>
                    <a href="#"><img src={`${process.env.ASSET_PREFIX}/icons/socials-2.svg`} alt="" /></a>
                    <a href="#"><img src={`${process.env.ASSET_PREFIX}/icons/socials-3.svg`} alt="" /></a>
                    <a href="#"><img src={`${process.env.ASSET_PREFIX}/icons/socials-4.svg`} alt="" /></a>
                </div>
                <div 
                onClick={() => open()}
                className={stage===1?styles.button_1 +' ' + styles.button:stage===2?styles.button_2 +' ' + styles.button: styles.button_3 +' ' + styles.button}>
                    
                    <p >connect</p>
                </div>
            </div>
        </div>
    );
};

export default Header;